import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  ArrowRight, 
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Globe,
  Clock
} from 'lucide-react';

const secretaryGeneralExperience = [
  'Business Advisor for Government Economy Project "PESAN" under Prime Minister\'s Department of Malaysia',
  'Founder & Secretary General, World Indian Business & Culture Foundation (2022 – Present)',
  'President, Pertubuhan Harapan Rakyat Malaysia (2016 – Present)',
  'Secretary General, Koperasi Warisan Bersatu Berhad (2023 – Present)',
  'Vice President, Taekwondo Negeri Selangor (2010 – Present)',
  'Community Mediator, JPNIN (2010 – Present)'
];

const secretaryGeneralSkills = [
  'Business Marketing Strategy',
  'Strategic Planning',
  'Business Networking',
  'Complex Problem Solving',
  'Strong Decision Making'
];

const secretaryGeneralClients = [
  'Garuda Bay (M) Sdn Bhd',
  'Mokshana Bereavement Services (M) Sdn Bhd',
  'R&R United Ventures (M) Sdn Bhd',
  'VGR IT Solutions',
  'Achievers Vision Academy',
  'Divine Herbal World'
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
              Visionary Leadership for Pan-Asian Impact
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200 text-justify">
              Meet the distinguished individuals who guide our mission to unite Indian excellence across Asian countries.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman & Founder Section */}
      <section data-testid="chairman-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Chairman & Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Our Chairman
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="diplomatic-card overflow-hidden">
              <div className="bg-[#0A192F] p-12 text-center">
                <div className="w-40 h-40 mx-auto bg-[#C5A059]/20 border-2 border-[#C5A059] rounded-full flex items-center justify-center mb-8">
                  <span className="text-5xl font-bold text-[#C5A059]">DG</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Dato Gandesan Letchumanan
                </h3>
                <p className="font-accent uppercase tracking-wider text-[#C5A059] text-sm mb-6">
                  Chairman & Founder
                </p>
                <div className="gold-line mx-auto" />
              </div>
              <div className="p-8 bg-[#F8F9FA] text-center">
                <div className="flex items-center justify-center gap-2 text-[#0A192F]/60">
                  <Clock className="w-4 h-4" />
                  <span className="font-accent uppercase tracking-wider text-xs">
                    Detailed Profile Coming Soon
                  </span>
                </div>
                <p className="text-[#475569] mt-4 text-justify max-w-xl mx-auto">
                  As Chairman and Founder of the World Indian Business & Culture Foundation, Dato Gandesan Letchumanan provides strategic vision and leadership for the organisation's Pan-Asian initiatives. His comprehensive profile will be published shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secretary General & Founder Section */}
      <section data-testid="secretary-general-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Secretary General & Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Our Secretary General
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Secretary General Image & Quick Info */}
              <div className="lg:col-span-1">
                <div className="diplomatic-card overflow-hidden">
                  <div className="aspect-[3/4] bg-[#0A192F] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto bg-[#C5A059]/20 border-2 border-[#C5A059] rounded-full flex items-center justify-center mb-6">
                        <span className="text-4xl font-bold text-[#C5A059]">RR</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Mr. Ravi Raman
                      </h3>
                      <p className="font-accent uppercase tracking-wider text-[#C5A059] text-sm">
                        Secretary General & Founder
                      </p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-5 h-5 text-[#C5A059]" />
                      <span className="text-sm text-[#475569]">PINGAT JASA KEBAKTIAN (P.J.K)</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="w-5 h-5 text-[#C5A059]" />
                      <span className="text-sm text-[#475569]">MBA, Preston University, USA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-[#C5A059]" />
                      <span className="text-sm text-[#475569]">30+ Years Business Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secretary General Details */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0A192F] mb-4">Professional Biography</h3>
                  <p className="text-[#475569] leading-relaxed mb-4 text-justify">
                    An executive with extensive professional experiences and significant executive leadership accomplishments in local community development and business. Mr. Ravi Raman has more than 30 years of experience as a Business Consultant.
                  </p>
                  <p className="text-[#475569] leading-relaxed text-justify">
                    He has worked as the Business Advisor for the Government Economy Project 'PESAN' under the Prime Minister's Department of Malaysia, demonstrating his commitment to national economic development and policy-level engagement.
                  </p>
                </div>

                <div>
                  <h4 className="font-accent uppercase tracking-wider text-[#C5A059] text-sm mb-4">
                    Key Leadership Roles
                  </h4>
                  <ul className="space-y-3">
                    {secretaryGeneralExperience.map((exp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#C5A059] mt-2 flex-shrink-0" />
                        <span className="text-[#475569] text-sm">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 border border-[#0A192F]/10">
                    <h4 className="font-accent uppercase tracking-wider text-[#C5A059] text-xs mb-4">
                      Core Expertise
                    </h4>
                    <ul className="space-y-2">
                      {secretaryGeneralSkills.map((skill, index) => (
                        <li key={index} className="text-sm text-[#475569]">• {skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 border border-[#0A192F]/10">
                    <h4 className="font-accent uppercase tracking-wider text-[#C5A059] text-xs mb-4">
                      Advisory Portfolio
                    </h4>
                    <ul className="space-y-2">
                      {secretaryGeneralClients.slice(0, 5).map((client, index) => (
                        <li key={index} className="text-sm text-[#475569]">• {client}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section - Coming Soon */}
      <section data-testid="advisory-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-10 h-10 text-[#C5A059]" />
            </div>
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Strategic Guidance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
              Advisory Board – Updating Soon
            </h2>
            <p className="text-[#475569] leading-relaxed text-justify max-w-2xl mx-auto">
              Our distinguished advisory board representing various Asian countries will be announced shortly. 
              The board will comprise accomplished leaders from business, academia, policy, and cultural sectors 
              across the Asian region.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-[#0A192F]/60">
              <Clock className="w-4 h-4" />
              <span className="font-accent uppercase tracking-wider text-xs">Announcements Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Country Coordinators Section - Coming Soon */}
      <section data-testid="coordinators-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-10 h-10 text-[#C5A059]" />
            </div>
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Regional Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
              Country Coordinators – Coming Soon
            </h2>
            <p className="text-[#475569] leading-relaxed text-justify max-w-2xl mx-auto">
              We are currently appointing country coordinators across Asian nations. These representatives 
              will serve as local ambassadors for the Foundation, facilitating regional activities and 
              building partnerships within their respective countries.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {['Malaysia', 'Singapore', 'UAE', 'India', 'Japan', 'Thailand', 'Indonesia', 'South Korea'].map((country) => (
                <div key={country} className="bg-white border border-[#0A192F]/10 p-4 text-center">
                  <span className="text-sm text-[#475569]">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Ambassadors Section - Coming Soon */}
      <section data-testid="ambassadors-section" className="section-padding bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Distinguished Representatives
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Global Ambassadors – Updating Soon
            </h2>
            <p className="text-white/70 leading-relaxed text-justify max-w-2xl mx-auto">
              Official ambassador announcements will be made soon. Our ambassadors will represent the Foundation 
              in diplomatic, cultural, and business forums, promoting Pan-Asian collaboration and Indian excellence 
              on regional and international platforms.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-white/50">
              <Clock className="w-4 h-4" />
              <span className="font-accent uppercase tracking-wider text-xs">Announcements Coming Soon</span>
            </div>
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
            <p className="text-[#475569] mb-8 text-justify max-w-2xl mx-auto">
              We're looking for distinguished individuals who share our vision of Pan-Asian excellence and collaboration.
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
