import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Linkedin, ArrowRight } from 'lucide-react';

const founders = [
  {
    name: 'Dr. Rajesh Kumar Sharma',
    designation: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1659355894406-977b8c4503d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAyfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Dr. Sharma brings over three decades of experience in international business development and diplomatic relations. A visionary leader who has been instrumental in fostering India-global partnerships, he previously served as an advisor to multiple multinational corporations and government bodies. His expertise spans strategic management, cross-cultural negotiations, and sustainable development initiatives.'
  },
  {
    name: 'Mrs. Priya Venkataraman',
    designation: 'Co-Founder & Vice Chair',
    image: 'https://images.unsplash.com/photo-1678263998418-8fd3afcb3d89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHdvbWFuJTIwc2FyZWUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAxfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Mrs. Venkataraman is a distinguished cultural ambassador and business strategist with extensive experience in arts administration and heritage preservation. She has led numerous international cultural exchange programs and serves on the boards of several prestigious cultural institutions. Her work bridges traditional Indian arts with contemporary global platforms.'
  }
];

const advisoryBoard = [
  {
    name: 'Mr. Vikram Mehta',
    designation: 'Economic Policy Advisor',
    image: 'https://images.unsplash.com/photo-1659355894406-977b8c4503d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAyfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Former economist at the World Bank with expertise in emerging markets and trade policy.'
  },
  {
    name: 'Dr. Ananya Reddy',
    designation: 'Cultural Heritage Specialist',
    image: 'https://images.unsplash.com/photo-1770627000564-3feb36aecbcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHdvbWFuJTIwc2FyZWUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAxfDA&ixlib=rb-4.1.0&q=85',
    bio: 'UNESCO consultant specializing in intangible cultural heritage and diaspora studies.'
  },
  {
    name: 'Mr. Sanjay Patel',
    designation: 'Technology & Innovation Lead',
    image: 'https://images.unsplash.com/photo-1659355894406-977b8c4503d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAyfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Serial entrepreneur and venture capitalist focused on sustainable technology solutions.'
  },
  {
    name: 'Ms. Deepika Nair',
    designation: 'Sustainability Director',
    image: 'https://images.unsplash.com/photo-1678263998418-8fd3afcb3d89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHdvbWFuJTIwc2FyZWUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAxfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Climate policy expert with experience at UNDP and leading environmental NGOs.'
  }
];

const countryCoordinators = [
  { country: 'United States', name: 'Mr. Arun Krishnamurthy' },
  { country: 'United Kingdom', name: 'Mrs. Lakshmi Iyer' },
  { country: 'United Arab Emirates', name: 'Mr. Rashid Khan' },
  { country: 'Singapore', name: 'Dr. Wei Chen Nair' },
  { country: 'Australia', name: 'Ms. Sarah Gupta' },
  { country: 'Canada', name: 'Mr. Harinder Singh' },
  { country: 'Germany', name: 'Dr. Hans Verma' },
  { country: 'South Africa', name: 'Mrs. Priya Desai' }
];

const globalAmbassadors = [
  {
    name: 'Ambassador Rajan Pillai (Retd.)',
    focus: 'Diplomatic Relations',
    image: 'https://images.unsplash.com/photo-1659355894406-977b8c4503d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAyfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Former Ambassador with 35 years in the Indian Foreign Service.'
  },
  {
    name: 'Padma Shri Kavitha Murthy',
    focus: 'Arts & Culture',
    image: 'https://images.unsplash.com/photo-1678263998418-8fd3afcb3d89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHdvbWFuJTIwc2FyZWUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAxfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Renowned classical dancer and cultural icon promoting Indian heritage globally.'
  },
  {
    name: 'Dr. Mohan Rao',
    focus: 'Academic & Research',
    image: 'https://images.unsplash.com/photo-1659355894406-977b8c4503d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzcyNDU3NzAyfDA&ixlib=rb-4.1.0&q=85',
    bio: 'Eminent scholar and author specializing in diaspora economics.'
  }
];

export default function LeadershipPage() {
  return (
    <div data-testid="leadership-page">
      {/* Hero Section */}
      <section 
        data-testid="leadership-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              Leadership
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Visionary Leaders, Global Impact
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              Meet the distinguished individuals who guide our mission to unite global Indian excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section data-testid="founders-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Founding Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Our Founders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                data-testid={`founder-${index}`}
                className="diplomatic-card overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A192F] mb-2">
                    {founder.name}
                  </h3>
                  <p className="font-accent uppercase tracking-wider text-[#C5A059] text-sm mb-4">
                    {founder.designation}
                  </p>
                  <p className="text-[#475569] leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#0A192F] hover:text-[#C5A059] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-accent uppercase tracking-wider text-xs">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section data-testid="advisory-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Strategic Guidance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Advisory Board
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((member, index) => (
              <div
                key={member.name}
                data-testid={`advisor-${index}`}
                className="diplomatic-card bg-white p-6"
              >
                <div className="w-full aspect-square overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0A192F] mb-1">
                  {member.name}
                </h3>
                <p className="font-accent uppercase tracking-wider text-[#C5A059] text-xs mb-3">
                  {member.designation}
                </p>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Coordinators Section */}
      <section data-testid="coordinators-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Regional Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Country Coordinators
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {countryCoordinators.map((coordinator, index) => (
              <div
                key={coordinator.country}
                data-testid={`coordinator-${index}`}
                className="bg-[#F8F9FA] border border-[#0A192F]/10 p-6 hover:border-[#C5A059]/50 transition-colors"
              >
                <p className="font-accent uppercase tracking-wider text-[#C5A059] text-xs mb-2">
                  {coordinator.country}
                </p>
                <p className="text-[#0A192F] font-semibold">
                  {coordinator.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Ambassadors Section */}
      <section data-testid="ambassadors-section" className="section-padding bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Distinguished Representatives
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Global Ambassadors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {globalAmbassadors.map((ambassador, index) => (
              <div
                key={ambassador.name}
                data-testid={`ambassador-${index}`}
                className="bg-white/5 border border-white/10 overflow-hidden"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="font-accent uppercase tracking-wider text-[#C5A059] text-xs mb-2">
                    {ambassador.focus}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {ambassador.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {ambassador.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="leadership-cta" className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
              Join Our Leadership Network
            </h2>
            <p className="text-[#475569] mb-8">
              We're always looking for distinguished individuals who share our vision of global Indian excellence.
            </p>
            <Link to="/contact">
              <Button className="btn-diplomatic">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
