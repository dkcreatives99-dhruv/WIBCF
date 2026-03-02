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
  Mail, 
  MapPin, 
  Globe,
  Send,
  Loader2
} from 'lucide-react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const countries = [
  'Malaysia', 'Singapore', 'United Arab Emirates', 'India', 
  'Japan', 'Thailand', 'Indonesia', 'South Korea', 'Other'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    organization: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value) => {
    setFormData(prev => ({ ...prev, country: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        full_name: '',
        email: '',
        organization: '',
        country: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section 
        data-testid="contact-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              Have questions about the Foundation? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-testid="contact-form-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
                Reach Out
              </p>
              <h2 className="text-3xl font-bold text-[#0A192F] mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0A192F] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="font-accent uppercase tracking-wider text-[#0A192F] text-xs mb-1">
                      Email
                    </p>
                    <a 
                      href="mailto:info@wibcf.org"
                      data-testid="contact-email"
                      className="text-[#475569] hover:text-[#C5A059] transition-colors"
                    >
                      info@wibcf.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0A192F] flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="font-accent uppercase tracking-wider text-[#0A192F] text-xs mb-1">
                      Website
                    </p>
                    <p className="text-[#475569]">
                      www.wibcf.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0A192F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="font-accent uppercase tracking-wider text-[#0A192F] text-xs mb-1">
                      Headquarters
                    </p>
                    <p className="text-[#475569]">
                      Malaysia<br />
                      <span className="text-[#94A3B8]">Pan-Asia Operations</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 map-placeholder flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[#C5A059] mx-auto mb-3" />
                  <p className="text-white/60 font-accent uppercase tracking-wider text-xs">
                    Pan-Asia Headquarters
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    Malaysia
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#F8F9FA] p-8 md:p-12 border border-[#0A192F]/10">
                <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
                  Send a Message
                </p>
                <h2 className="text-2xl font-bold text-[#0A192F] mb-8">
                  Contact Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="full_name" className="form-label">
                        Full Name *
                      </Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        data-testid="input-fullname"
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
                        data-testid="input-email"
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
                        data-testid="input-organization"
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
                        onValueChange={handleCountryChange}
                      >
                        <SelectTrigger 
                          className="form-input"
                          data-testid="select-country"
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
                    <Label htmlFor="message" className="form-label">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      data-testid="input-message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input min-h-[150px]"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    data-testid="submit-contact-btn"
                    className="btn-diplomatic w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
