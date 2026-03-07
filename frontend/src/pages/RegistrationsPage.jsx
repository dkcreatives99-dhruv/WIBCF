import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { toast } from 'sonner';
import { 
  Users, 
  GraduationCap,
  Building2,
  Briefcase,
  Heart,
  Baby,
  Send,
  Loader2,
  X,
  Phone
} from 'lucide-react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const countries = [
  'Malaysia', 'Singapore', 'United Arab Emirates', 'India', 
  'Japan', 'Thailand', 'Indonesia', 'South Korea', 'Other'
];

const registrationCategories = [
  {
    id: 'child',
    icon: Baby,
    title: 'Children Cultural Programs',
    description: 'Register children for cultural learning programs including traditional arts, music, dance, and heritage activities.',
    color: 'bg-[#E91E63]'
  },
  {
    id: 'youth',
    icon: GraduationCap,
    title: 'Youth Membership',
    description: 'Youth members (18-40 years) participate in leadership programs, cultural initiatives, and community development projects.',
    color: 'bg-[#2196F3]'
  },
  {
    id: 'adult',
    icon: Users,
    title: 'Adult & Senior Membership',
    description: 'Adults and senior citizens can join to participate in community initiatives, cultural programs, and social development activities.',
    color: 'bg-[#4CAF50]'
  },
  {
    id: 'institution',
    icon: Building2,
    title: 'Institutional Partnerships',
    description: 'Educational institutions, NGOs, companies, and religious organizations can collaborate with the foundation.',
    color: 'bg-[#FF9800]'
  },
  {
    id: 'business',
    icon: Briefcase,
    title: 'Business Training & Motivation',
    description: 'Business guidance, entrepreneurship motivation, and mentorship for professionals and entrepreneurs.',
    color: 'bg-[#9C27B0]'
  },
  {
    id: 'volunteer',
    icon: Heart,
    title: 'Volunteer Team Registration',
    description: 'Volunteers support the foundation in cultural programs, community initiatives, and emergency assistance activities.',
    color: 'bg-[#F44336]'
  }
];

const ageGroups = ['3 – 5 Years', '6 – 12 Years', '13 – 18 Years'];
const culturalInterests = ['Indian', 'Malay', 'Chinese', 'Other'];
const institutionTypes = [
  'Primary School', 'Secondary School', 'College', 'University',
  'NGO', 'Corporate Organization', 'Temple', 'Church', 'Cultural Institution', 'Other'
];
const businessStages = ['Startup', 'Growing', 'Established'];
const volunteerAreas = ['Cultural Event Support', 'Community Programs', 'Business Events', 'Emergency Support', 'All Areas'];
const availabilityOptions = ['Weekdays', 'Weekends', 'Both', 'Flexible'];

export default function RegistrationsPage() {
  const [activeForm, setActiveForm] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form states for each registration type
  const [childForm, setChildForm] = useState({
    child_name: '', age_group: '', parent_name: '', parent_phone: '',
    email: '', country: '', cultural_interest: '', previous_experience: '', message: ''
  });
  
  const [youthForm, setYouthForm] = useState({
    full_name: '', age: '', email: '', phone: '', country: '', area_of_interest: '', purpose: ''
  });
  
  const [adultForm, setAdultForm] = useState({
    full_name: '', email: '', phone: '', address: '', country: '',
    passport_id: '', purpose: '', areas_of_interest: ''
  });
  
  const [institutionForm, setInstitutionForm] = useState({
    organization_name: '', institution_type: '', contact_person: '',
    email: '', phone: '', country: '', website: '', purpose: ''
  });
  
  const [businessForm, setBusinessForm] = useState({
    full_name: '', email: '', phone: '', country: '',
    business_profession: '', business_stage: '', guidance_area: '', message: ''
  });
  
  const [volunteerForm, setVolunteerForm] = useState({
    full_name: '', age: '', email: '', phone: '', country: '',
    skills: '', areas_of_interest: '', availability: '', previous_experience: ''
  });

  const resetForms = () => {
    setChildForm({ child_name: '', age_group: '', parent_name: '', parent_phone: '', email: '', country: '', cultural_interest: '', previous_experience: '', message: '' });
    setYouthForm({ full_name: '', age: '', email: '', phone: '', country: '', area_of_interest: '', purpose: '' });
    setAdultForm({ full_name: '', email: '', phone: '', address: '', country: '', passport_id: '', purpose: '', areas_of_interest: '' });
    setInstitutionForm({ organization_name: '', institution_type: '', contact_person: '', email: '', phone: '', country: '', website: '', purpose: '' });
    setBusinessForm({ full_name: '', email: '', phone: '', country: '', business_profession: '', business_stage: '', guidance_area: '', message: '' });
    setVolunteerForm({ full_name: '', age: '', email: '', phone: '', country: '', skills: '', areas_of_interest: '', availability: '', previous_experience: '' });
  };

  const handleSubmit = async (type, formData) => {
    setIsSubmitting(true);
    try {
      const endpoints = {
        child: '/registrations/child',
        youth: '/registrations/youth',
        adult: '/registrations/adult',
        institution: '/registrations/institution',
        business: '/registrations/business-training',
        volunteer: '/registrations/volunteer'
      };
      
      const payload = type === 'youth' || type === 'volunteer' 
        ? { ...formData, age: parseInt(formData.age) }
        : formData;
      
      await axios.post(`${API}${endpoints[type]}`, payload);
      toast.success('Registration submitted successfully! We will contact you soon.');
      resetForms();
      setActiveForm(null);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderChildForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit('child', childForm); }} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Child Full Name *</Label>
          <Input value={childForm.child_name} onChange={(e) => setChildForm({...childForm, child_name: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Age Group *</Label>
          <Select value={childForm.age_group} onValueChange={(v) => setChildForm({...childForm, age_group: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select age group" /></SelectTrigger>
            <SelectContent>
              {ageGroups.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Parent/Guardian Name *</Label>
          <Input value={childForm.parent_name} onChange={(e) => setChildForm({...childForm, parent_name: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Parent Contact Number *</Label>
          <Input value={childForm.parent_phone} onChange={(e) => setChildForm({...childForm, parent_phone: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Email Address *</Label>
          <Input type="email" value={childForm.email} onChange={(e) => setChildForm({...childForm, email: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Country *</Label>
          <Select value={childForm.country} onValueChange={(v) => setChildForm({...childForm, country: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select country" /></SelectTrigger>
            <SelectContent>
              {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="form-label">Cultural Interest *</Label>
        <Select value={childForm.cultural_interest} onValueChange={(v) => setChildForm({...childForm, cultural_interest: v})}>
          <SelectTrigger className="form-input"><SelectValue placeholder="Select interest" /></SelectTrigger>
          <SelectContent>
            {culturalInterests.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="form-label">Previous Experience (Optional)</Label>
        <Input value={childForm.previous_experience} onChange={(e) => setChildForm({...childForm, previous_experience: e.target.value})} className="form-input" />
      </div>
      <div>
        <Label className="form-label">Message (Optional)</Label>
        <Textarea value={childForm.message} onChange={(e) => setChildForm({...childForm, message: e.target.value})} className="form-input" rows={3} />
      </div>
      <Button type="submit" className="btn-diplomatic w-full" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Submitting...</> : <><Send className="mr-2 w-4 h-4" />Register Child</>}
      </Button>
    </form>
  );

  const renderYouthForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit('youth', youthForm); }} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Full Name *</Label>
          <Input value={youthForm.full_name} onChange={(e) => setYouthForm({...youthForm, full_name: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Age (18-40) *</Label>
          <Input type="number" min="18" max="40" value={youthForm.age} onChange={(e) => setYouthForm({...youthForm, age: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Email *</Label>
          <Input type="email" value={youthForm.email} onChange={(e) => setYouthForm({...youthForm, email: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Phone Number *</Label>
          <Input value={youthForm.phone} onChange={(e) => setYouthForm({...youthForm, phone: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div>
        <Label className="form-label">Country *</Label>
        <Select value={youthForm.country} onValueChange={(v) => setYouthForm({...youthForm, country: v})}>
          <SelectTrigger className="form-input"><SelectValue placeholder="Select country" /></SelectTrigger>
          <SelectContent>
            {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="form-label">Area of Interest *</Label>
        <Input value={youthForm.area_of_interest} onChange={(e) => setYouthForm({...youthForm, area_of_interest: e.target.value})} className="form-input" placeholder="e.g., Leadership, Cultural Programs, Business" required />
      </div>
      <div>
        <Label className="form-label">Purpose of Joining *</Label>
        <Textarea value={youthForm.purpose} onChange={(e) => setYouthForm({...youthForm, purpose: e.target.value})} className="form-input" rows={3} required />
      </div>
      <Button type="submit" className="btn-diplomatic w-full" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Submitting...</> : <><Send className="mr-2 w-4 h-4" />Register as Youth Member</>}
      </Button>
    </form>
  );

  const renderAdultForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit('adult', adultForm); }} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Full Name *</Label>
          <Input value={adultForm.full_name} onChange={(e) => setAdultForm({...adultForm, full_name: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Email *</Label>
          <Input type="email" value={adultForm.email} onChange={(e) => setAdultForm({...adultForm, email: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Phone Number *</Label>
          <Input value={adultForm.phone} onChange={(e) => setAdultForm({...adultForm, phone: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Country *</Label>
          <Select value={adultForm.country} onValueChange={(v) => setAdultForm({...adultForm, country: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select country" /></SelectTrigger>
            <SelectContent>
              {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="form-label">Address *</Label>
        <Textarea value={adultForm.address} onChange={(e) => setAdultForm({...adultForm, address: e.target.value})} className="form-input" rows={2} required />
      </div>
      <div>
        <Label className="form-label">Passport/ID Number (Optional)</Label>
        <Input value={adultForm.passport_id} onChange={(e) => setAdultForm({...adultForm, passport_id: e.target.value})} className="form-input" />
      </div>
      <div>
        <Label className="form-label">Areas of Interest *</Label>
        <Input value={adultForm.areas_of_interest} onChange={(e) => setAdultForm({...adultForm, areas_of_interest: e.target.value})} className="form-input" placeholder="e.g., Community Programs, Cultural Events" required />
      </div>
      <div>
        <Label className="form-label">Purpose of Membership *</Label>
        <Textarea value={adultForm.purpose} onChange={(e) => setAdultForm({...adultForm, purpose: e.target.value})} className="form-input" rows={3} required />
      </div>
      <Button type="submit" className="btn-diplomatic w-full" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Submitting...</> : <><Send className="mr-2 w-4 h-4" />Register as Member</>}
      </Button>
    </form>
  );

  const renderInstitutionForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit('institution', institutionForm); }} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Organization Name *</Label>
          <Input value={institutionForm.organization_name} onChange={(e) => setInstitutionForm({...institutionForm, organization_name: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Type of Institution *</Label>
          <Select value={institutionForm.institution_type} onValueChange={(v) => setInstitutionForm({...institutionForm, institution_type: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select type" /></SelectTrigger>
            <SelectContent>
              {institutionTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Contact Person Name *</Label>
          <Input value={institutionForm.contact_person} onChange={(e) => setInstitutionForm({...institutionForm, contact_person: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Email Address *</Label>
          <Input type="email" value={institutionForm.email} onChange={(e) => setInstitutionForm({...institutionForm, email: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Phone Number *</Label>
          <Input value={institutionForm.phone} onChange={(e) => setInstitutionForm({...institutionForm, phone: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Country *</Label>
          <Select value={institutionForm.country} onValueChange={(v) => setInstitutionForm({...institutionForm, country: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select country" /></SelectTrigger>
            <SelectContent>
              {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="form-label">Website (Optional)</Label>
        <Input value={institutionForm.website} onChange={(e) => setInstitutionForm({...institutionForm, website: e.target.value})} className="form-input" placeholder="https://" />
      </div>
      <div>
        <Label className="form-label">Purpose of Collaboration *</Label>
        <Textarea value={institutionForm.purpose} onChange={(e) => setInstitutionForm({...institutionForm, purpose: e.target.value})} className="form-input" rows={3} required />
      </div>
      <Button type="submit" className="btn-diplomatic w-full" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Submitting...</> : <><Send className="mr-2 w-4 h-4" />Register Organization</>}
      </Button>
    </form>
  );

  const renderBusinessForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit('business', businessForm); }} className="space-y-4">
      <div className="bg-[#C5A059]/10 border border-[#C5A059]/30 p-4 mb-4">
        <p className="text-sm text-[#0A192F]"><strong>Program Schedule:</strong> Monday – Friday, Morning Business Breakfast Sessions</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Full Name *</Label>
          <Input value={businessForm.full_name} onChange={(e) => setBusinessForm({...businessForm, full_name: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Email *</Label>
          <Input type="email" value={businessForm.email} onChange={(e) => setBusinessForm({...businessForm, email: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Phone Number *</Label>
          <Input value={businessForm.phone} onChange={(e) => setBusinessForm({...businessForm, phone: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Country *</Label>
          <Select value={businessForm.country} onValueChange={(v) => setBusinessForm({...businessForm, country: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select country" /></SelectTrigger>
            <SelectContent>
              {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Business/Profession *</Label>
          <Input value={businessForm.business_profession} onChange={(e) => setBusinessForm({...businessForm, business_profession: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Business Stage *</Label>
          <Select value={businessForm.business_stage} onValueChange={(v) => setBusinessForm({...businessForm, business_stage: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select stage" /></SelectTrigger>
            <SelectContent>
              {businessStages.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="form-label">Area Where Guidance is Needed *</Label>
        <Textarea value={businessForm.guidance_area} onChange={(e) => setBusinessForm({...businessForm, guidance_area: e.target.value})} className="form-input" rows={3} required />
      </div>
      <div>
        <Label className="form-label">Message (Optional)</Label>
        <Textarea value={businessForm.message} onChange={(e) => setBusinessForm({...businessForm, message: e.target.value})} className="form-input" rows={2} />
      </div>
      <Button type="submit" className="btn-diplomatic w-full" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Submitting...</> : <><Send className="mr-2 w-4 h-4" />Register for Business Program</>}
      </Button>
    </form>
  );

  const renderVolunteerForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit('volunteer', volunteerForm); }} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Full Name *</Label>
          <Input value={volunteerForm.full_name} onChange={(e) => setVolunteerForm({...volunteerForm, full_name: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Age *</Label>
          <Input type="number" min="16" max="100" value={volunteerForm.age} onChange={(e) => setVolunteerForm({...volunteerForm, age: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Email *</Label>
          <Input type="email" value={volunteerForm.email} onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})} className="form-input" required />
        </div>
        <div>
          <Label className="form-label">Phone Number *</Label>
          <Input value={volunteerForm.phone} onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})} className="form-input" required />
        </div>
      </div>
      <div>
        <Label className="form-label">Country *</Label>
        <Select value={volunteerForm.country} onValueChange={(v) => setVolunteerForm({...volunteerForm, country: v})}>
          <SelectTrigger className="form-input"><SelectValue placeholder="Select country" /></SelectTrigger>
          <SelectContent>
            {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="form-label">Skills *</Label>
        <Textarea value={volunteerForm.skills} onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})} className="form-input" rows={2} placeholder="e.g., Event Management, Communication, Technical Skills" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="form-label">Areas of Interest *</Label>
          <Select value={volunteerForm.areas_of_interest} onValueChange={(v) => setVolunteerForm({...volunteerForm, areas_of_interest: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select area" /></SelectTrigger>
            <SelectContent>
              {volunteerAreas.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="form-label">Availability *</Label>
          <Select value={volunteerForm.availability} onValueChange={(v) => setVolunteerForm({...volunteerForm, availability: v})}>
            <SelectTrigger className="form-input"><SelectValue placeholder="Select availability" /></SelectTrigger>
            <SelectContent>
              {availabilityOptions.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="form-label">Previous Volunteer Experience (Optional)</Label>
        <Textarea value={volunteerForm.previous_experience} onChange={(e) => setVolunteerForm({...volunteerForm, previous_experience: e.target.value})} className="form-input" rows={2} />
      </div>
      <Button type="submit" className="btn-diplomatic w-full" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Submitting...</> : <><Send className="mr-2 w-4 h-4" />Join as Volunteer</>}
      </Button>
    </form>
  );

  const getFormContent = () => {
    switch(activeForm) {
      case 'child': return renderChildForm();
      case 'youth': return renderYouthForm();
      case 'adult': return renderAdultForm();
      case 'institution': return renderInstitutionForm();
      case 'business': return renderBusinessForm();
      case 'volunteer': return renderVolunteerForm();
      default: return null;
    }
  };

  const getFormTitle = () => {
    const category = registrationCategories.find(c => c.id === activeForm);
    return category ? category.title : '';
  };

  return (
    <div data-testid="registrations-page">
      {/* Hero Section */}
      <section 
        data-testid="registrations-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              Registrations
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Join the World Indian Business & Culture Foundation
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200 text-justify">
              Register to participate in cultural programs, business initiatives, community activities, and volunteer programs across Asian countries.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white border-b border-[#0A192F]/10">
        <div className="container-wide">
          <p className="text-[#475569] leading-relaxed text-justify max-w-4xl mx-auto text-center">
            The foundation welcomes individuals, youth, institutions, and volunteers to join our mission of promoting business collaboration, cultural exchange, and community development across Asia.
          </p>
          {/* WhatsApp Contact */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-[#25D366]" />
            <span className="text-[#475569]">For inquiries, WhatsApp:</span>
            <a 
              href="https://wa.me/60123772866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#25D366] font-semibold hover:underline"
            >
              +60 12-377 2866
            </a>
          </div>
        </div>
      </section>

      {/* Registration Cards */}
      <section data-testid="registration-cards" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Choose Your Category
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Registration Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrationCategories.map((category, index) => (
              <div
                key={category.id}
                data-testid={`registration-card-${category.id}`}
                className="diplomatic-card bg-white p-8 flex flex-col"
              >
                <div className={`w-14 h-14 ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">
                  {category.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-6 flex-1 text-justify">
                  {category.description}
                </p>
                <Button 
                  onClick={() => setActiveForm(category.id)}
                  className="btn-diplomatic w-full"
                  data-testid={`register-btn-${category.id}`}
                >
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Dialog */}
      <Dialog open={!!activeForm} onOpenChange={(open) => !open && setActiveForm(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#0A192F] pr-8">
              {getFormTitle()}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {getFormContent()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
