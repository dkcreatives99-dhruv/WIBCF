import requests
import sys
from datetime import datetime
import json

class NGOWebsiteAPITester:
    def __init__(self, base_url="https://business-culture-hub.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                
                # Try to parse JSON response
                try:
                    json_response = response.json()
                    print(f"   Response: {json.dumps(json_response, indent=2)}")
                    return success, json_response
                except:
                    print(f"   Response (text): {response.text[:200]}...")
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                return False, {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "/",
            200
        )

    def test_health_check(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "/health",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission"""
        timestamp = datetime.now().strftime('%H%M%S')
        contact_data = {
            "full_name": f"Test User {timestamp}",
            "email": f"test{timestamp}@example.com",
            "organization": "Test Organization",
            "country": "United States",
            "message": "This is a test message for the contact form."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "/contact",
            200,  # The endpoint returns 200, not 201
            data=contact_data
        )
        
        if success and response:
            return response.get('id')
        return None

    def test_get_contact_forms(self):
        """Test retrieving contact forms"""
        return self.run_test(
            "Get Contact Forms",
            "GET",
            "/contact",
            200
        )

    def test_membership_inquiry_submission(self):
        """Test membership inquiry submission"""
        timestamp = datetime.now().strftime('%H%M%S')
        membership_data = {
            "full_name": f"Test Member {timestamp}",
            "email": f"member{timestamp}@example.com",
            "organization": "Test Company",
            "country": "United Kingdom",
            "interest_area": "Global Business Forums",
            "message": "I am interested in joining the foundation."
        }
        
        success, response = self.run_test(
            "Membership Inquiry Submission",
            "POST",
            "/membership-inquiry",
            200,  # The endpoint returns 200, not 201
            data=membership_data
        )
        
        if success and response:
            return response.get('id')
        return None

    def test_get_membership_inquiries(self):
        """Test retrieving membership inquiries"""
        return self.run_test(
            "Get Membership Inquiries",
            "GET",
            "/membership-inquiry",
            200
        )

    def test_newsletter_subscription(self):
        """Test newsletter subscription"""
        timestamp = datetime.now().strftime('%H%M%S')
        newsletter_data = {
            "email": f"newsletter{timestamp}@example.com"
        }
        
        success, response = self.run_test(
            "Newsletter Subscription",
            "POST",
            "/newsletter/subscribe",
            200,  # The endpoint returns 200, not 201
            data=newsletter_data
        )
        
        if success and response:
            return response.get('id')
        return None

    def test_invalid_contact_form(self):
        """Test contact form with missing required fields"""
        invalid_data = {
            "full_name": "",
            "email": "invalid-email",
            "message": ""
        }
        
        return self.run_test(
            "Invalid Contact Form (should fail)",
            "POST",
            "/contact",
            422,  # Validation error
            data=invalid_data
        )

    def test_invalid_membership_inquiry(self):
        """Test membership inquiry with invalid email"""
        invalid_data = {
            "full_name": "Test User",
            "email": "invalid-email-format"
        }
        
        return self.run_test(
            "Invalid Membership Inquiry (should fail)",
            "POST",
            "/membership-inquiry",
            422,  # Validation error
            data=invalid_data
        )

    def test_duplicate_newsletter_subscription(self):
        """Test duplicate newsletter subscription"""
        # First subscription
        email = f"duplicate{datetime.now().strftime('%H%M%S')}@example.com"
        newsletter_data = {"email": email}
        
        # First attempt should succeed
        success1, _ = self.run_test(
            "First Newsletter Subscription",
            "POST",
            "/newsletter/subscribe",
            200,
            data=newsletter_data
        )
        
        if success1:
            # Second attempt should fail
            return self.run_test(
                "Duplicate Newsletter Subscription (should fail)",
                "POST",
                "/newsletter/subscribe",
                400,  # Bad request for duplicate email
                data=newsletter_data
            )
        return False

def main():
    print("🚀 Starting WORLD INDIAN BUSINESS & CULTURE FOUNDATION API Tests")
    print("=" * 70)
    
    # Setup
    tester = NGOWebsiteAPITester()
    
    # Run basic endpoint tests
    print("\n📋 BASIC ENDPOINT TESTS")
    print("-" * 40)
    tester.test_api_root()
    tester.test_health_check()
    
    # Run contact form tests
    print("\n📧 CONTACT FORM TESTS")
    print("-" * 40)
    contact_id = tester.test_contact_form_submission()
    tester.test_get_contact_forms()
    tester.test_invalid_contact_form()
    
    # Run membership inquiry tests
    print("\n👥 MEMBERSHIP INQUIRY TESTS")
    print("-" * 40)
    membership_id = tester.test_membership_inquiry_submission()
    tester.test_get_membership_inquiries()
    tester.test_invalid_membership_inquiry()
    
    # Run newsletter tests
    print("\n📰 NEWSLETTER TESTS")
    print("-" * 40)
    newsletter_id = tester.test_newsletter_subscription()
    tester.test_duplicate_newsletter_subscription()
    
    # Print final results
    print("\n" + "=" * 70)
    print(f"📊 FINAL RESULTS: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    success_rate = (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
    print(f"✅ Success Rate: {success_rate:.1f}%")
    
    if success_rate >= 80:
        print("🎉 Backend API testing PASSED - Ready for frontend integration testing!")
        return 0
    else:
        print("❌ Backend API testing FAILED - Multiple issues found")
        return 1

if __name__ == "__main__":
    sys.exit(main())