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
import { toast } from 'sonner';
import { 
  Users, 
  Globe,
  Briefcase,
  Heart,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const countries = [
  'Malaysia', 'Singapore', 'United Arab Emirates', 'India', 
  'Japan', 'Thailand', 'Indonesia', 'South Korea', 'Other'
];

const interestAreas = [
  'Pan-Asia Business Forums',
  'Cultural Exchange Initiatives',
  'Policy & Research Dialogues',
  'Youth Leadership Programs',
  'SDG Impact Partnerships',
  'Investment Connect Platform',
  'General Membership'
];

const benefits = [
  {
    icon: Globe,
    title: 'Pan-Asian Network',
    description: 'Connect with Indian-origin leaders, entrepreneurs, and professionals across Asian countries.'
  },
  {
    icon: Briefcase,
    title: 'Business Opportunities',
    description: 'Exclusive access to cross-border trade partnerships and investment opportunities within Asia.'
  },
  {
    icon: Users,
    title: 'Leadership Events',
    description: 'Invitations to summits, roundtables, and networking events across Asian countries.'
  },
  {
    icon: Heart,
    title: 'Cultural Engagement',
    description: 'Participate in heritage preservation and cultural diplomacy initiatives across Asia.'
  }
];

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    organization: '',
    country: '',
    interest_area: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await axios.post(`${API}/membership-inquiry`, formData);
      toast.success('Thank you for your interest! We will contact you soon with membership details.');
      setFormData({
        full_name: '',
        email: '',
        organization: '',
        country: '',
        interest_area: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="membership-page">
      {/* Hero Section */}
      <section 
        data-testid="membership-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              Join Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Become a Member
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              Join a Pan-Asian network of leaders committed to advancing Indian business excellence and cultural heritage across Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section data-testid="benefits-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Why Join
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Membership Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                data-testid={`benefit-${index}`}
                className="diplomatic-card p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#0A192F] flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section data-testid="inquiry-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 border border-[#0A192F]/10">
              <div className="text-center mb-10">
                <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
                  Register Interest
                </p>
                <h2 className="text-3xl font-bold text-[#0A192F] mb-4">
                  Membership Inquiry
                </h2>
                <p className="text-[#475569]">
                  Complete the form below and our team will reach out with membership details and next steps.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="membership-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="full_name" className="form-label">
                      Full Name *
                    </Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      data-testid="membership-input-fullname"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="form-label">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-testid="membership-input-email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organization" className="form-label">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      data-testid="membership-input-organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Company or institution"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country" className="form-label">
                      Country
                    </Label>
                    <Select 
                      value={formData.country} 
                      onValueChange={(value) => handleSelectChange('country', value)}
                    >
                      <SelectTrigger 
                        className="form-input"
                        data-testid="membership-select-country"
                      >
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="interest_area" className="form-label">
                    Primary Interest Area
                  </Label>
                  <Select 
                    value={formData.interest_area} 
                    onValueChange={(value) => handleSelectChange('interest_area', value)}
                  >
                    <SelectTrigger 
                      className="form-input"
                      data-testid="membership-select-interest"
                    >
                      <SelectValue placeholder="Select area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {interestAreas.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="form-label">
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="membership-input-message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input min-h-[120px]"
                    placeholder="Tell us about yourself and your interest in the Foundation"
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="submit-membership-btn"
                  className="btn-diplomatic w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* What to Expect */}
            <div className="mt-8 bg-white p-8 border border-[#0A192F]/10">
              <h3 className="text-xl font-bold text-[#0A192F] mb-6">
                What Happens Next?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span className="text-[#475569]">
                    Our membership team will review your inquiry within 48 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span className="text-[#475569]">
                    You'll receive detailed information about membership tiers and benefits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span className="text-[#475569]">
                    A dedicated representative will guide you through the onboarding process
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
