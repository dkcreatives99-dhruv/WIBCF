from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="World Indian Business & Culture Foundation API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# Contact Form Model
class ContactFormCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    organization: Optional[str] = Field(None, max_length=200)
    country: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)


class ContactFormResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    full_name: str
    email: str
    organization: Optional[str]
    country: Optional[str]
    message: str
    created_at: str
    status: str


# Membership Inquiry Model
class MembershipInquiryCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    organization: Optional[str] = Field(None, max_length=200)
    country: Optional[str] = Field(None, max_length=100)
    interest_area: Optional[str] = Field(None, max_length=500)
    message: Optional[str] = Field(None, max_length=2000)


class MembershipInquiryResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    full_name: str
    email: str
    organization: Optional[str]
    country: Optional[str]
    interest_area: Optional[str]
    message: Optional[str]
    created_at: str
    status: str


# Newsletter Subscription Model
class NewsletterSubscribeCreate(BaseModel):
    email: EmailStr


class NewsletterSubscribeResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    email: str
    subscribed_at: str
    status: str


# API Routes
@api_router.get("/")
async def root():
    return {"message": "World Indian Business & Culture Foundation API"}


@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormCreate):
    """Submit a contact form inquiry"""
    try:
        contact_id = str(uuid.uuid4())
        created_at = datetime.now(timezone.utc).isoformat()
        
        doc = {
            "id": contact_id,
            "full_name": form_data.full_name,
            "email": form_data.email,
            "organization": form_data.organization,
            "country": form_data.country,
            "message": form_data.message,
            "created_at": created_at,
            "status": "pending"
        }
        
        await db.contact_forms.insert_one(doc)
        
        return ContactFormResponse(
            id=contact_id,
            full_name=form_data.full_name,
            email=form_data.email,
            organization=form_data.organization,
            country=form_data.country,
            message=form_data.message,
            created_at=created_at,
            status="pending"
        )
    except Exception as e:
        logging.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")


@api_router.get("/contact", response_model=List[ContactFormResponse])
async def get_contact_forms():
    """Get all contact form submissions"""
    contacts = await db.contact_forms.find({}, {"_id": 0}).to_list(1000)
    return contacts


# Membership Inquiry Endpoints
@api_router.post("/membership-inquiry", response_model=MembershipInquiryResponse)
async def submit_membership_inquiry(form_data: MembershipInquiryCreate):
    """Submit a membership inquiry"""
    try:
        inquiry_id = str(uuid.uuid4())
        created_at = datetime.now(timezone.utc).isoformat()
        
        doc = {
            "id": inquiry_id,
            "full_name": form_data.full_name,
            "email": form_data.email,
            "organization": form_data.organization,
            "country": form_data.country,
            "interest_area": form_data.interest_area,
            "message": form_data.message,
            "created_at": created_at,
            "status": "pending"
        }
        
        await db.membership_inquiries.insert_one(doc)
        
        return MembershipInquiryResponse(
            id=inquiry_id,
            full_name=form_data.full_name,
            email=form_data.email,
            organization=form_data.organization,
            country=form_data.country,
            interest_area=form_data.interest_area,
            message=form_data.message,
            created_at=created_at,
            status="pending"
        )
    except Exception as e:
        logging.error(f"Error submitting membership inquiry: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit membership inquiry")


@api_router.get("/membership-inquiry", response_model=List[MembershipInquiryResponse])
async def get_membership_inquiries():
    """Get all membership inquiries"""
    inquiries = await db.membership_inquiries.find({}, {"_id": 0}).to_list(1000)
    return inquiries


# Newsletter Subscription Endpoints
@api_router.post("/newsletter/subscribe", response_model=NewsletterSubscribeResponse)
async def subscribe_newsletter(form_data: NewsletterSubscribeCreate):
    """Subscribe to newsletter"""
    try:
        # Check if email already exists
        existing = await db.newsletter_subscribers.find_one({"email": form_data.email})
        if existing:
            raise HTTPException(status_code=400, detail="Email already subscribed")
        
        subscription_id = str(uuid.uuid4())
        subscribed_at = datetime.now(timezone.utc).isoformat()
        
        doc = {
            "id": subscription_id,
            "email": form_data.email,
            "subscribed_at": subscribed_at,
            "status": "active"
        }
        
        await db.newsletter_subscribers.insert_one(doc)
        
        return NewsletterSubscribeResponse(
            id=subscription_id,
            email=form_data.email,
            subscribed_at=subscribed_at,
            status="active"
        )
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error subscribing to newsletter: {e}")
        raise HTTPException(status_code=500, detail="Failed to subscribe to newsletter")


# Status check endpoints (existing)
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
