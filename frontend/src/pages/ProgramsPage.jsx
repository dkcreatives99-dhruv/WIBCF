import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Building2, 
  Landmark, 
  BookOpen, 
  GraduationCap, 
  Handshake,
  ArrowRight,
  Clock
} from 'lucide-react';

const programs = [
  {
    icon: Building2,
    title: 'Global Business Summit',
    description: 'Annual flagship event bringing together Indian business leaders, investors, and entrepreneurs from around the world for networking, deal-making, and strategic partnerships.',
    features: [
      'CEO Roundtables',
      'Investment Pitch Sessions',
      'B2B Matchmaking',
      'Policy Dialogues'
    ]
  },
  {
    icon: Landmark,
    title: 'Cultural Heritage Forums',
    description: 'Celebrating and preserving Indian cultural traditions through exhibitions, performances, and educational workshops that connect heritage with contemporary audiences.',
    features: [
      'Art Exhibitions',
      'Classical Performances',
      'Heritage Workshops',
      'Cultural Exchange Programs'
    ]
  },
  {
    icon: BookOpen,
    title: 'Policy Roundtables',
    description: 'Exclusive gatherings of policymakers, academics, and industry experts discussing critical issues affecting the global Indian community and bilateral relations.',
    features: [
      'Trade Policy Discussions',
      'Immigration Reform Debates',
      'Economic Development Forums',
      'Think Tank Collaborations'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Youth Leadership Programs',
    description: 'Nurturing the next generation of global Indian leaders through mentorship, skill development, and international exposure opportunities.',
    features: [
      'Mentorship Matching',
      'Leadership Bootcamps',
      'International Internships',
      'Scholarship Programs'
    ]
  },
  {
    icon: Handshake,
    title: 'Investment Connect Platform',
    description: 'Digital and in-person platform connecting Indian startups and SMEs with global investors, facilitating cross-border investment and market expansion.',
    features: [
      'Investor Database',
      'Virtual Pitch Events',
      'Due Diligence Support',
      'Market Entry Assistance'
    ]
  }
];

export default function ProgramsPage() {
  return (
    <div data-testid="programs-page">
      {/* Hero Section */}
      <section 
        data-testid="programs-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              Programs
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Our Programs
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              High-impact initiatives designed to strengthen global Indian collaboration and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section data-testid="coming-soon-section" className="py-6 bg-[#C5A059]/10 border-y border-[#C5A059]/30">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-4">
            <Clock className="w-5 h-5 text-[#C5A059]" />
            <p className="font-accent uppercase tracking-widest text-[#0A192F] text-sm">
              Official Program Launch Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section data-testid="programs-intro" className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-8" />
            <p className="text-[#475569] leading-relaxed text-lg">
              The Foundation is currently designing high-impact global programs aligned with business collaboration, 
              cultural diplomacy, and SDG outcomes. Our comprehensive program portfolio will launch soon, 
              offering unique opportunities for engagement and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section data-testid="programs-grid" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Upcoming Initiatives
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Program Portfolio
            </h2>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                data-testid={`program-${index}`}
                className="diplomatic-card bg-white p-8 md:p-10"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#0A192F] flex items-center justify-center flex-shrink-0">
                        <program.icon className="w-7 h-7 text-[#C5A059]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0A192F] mb-2">
                          {program.title}
                        </h3>
                        <span className="coming-soon-banner inline-block px-3 py-1 text-xs">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    <p className="text-[#475569] leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <div className="bg-[#F8F9FA] p-6 border border-[#0A192F]/10">
                    <p className="font-accent uppercase tracking-wider text-[#C5A059] text-xs mb-4">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#475569] text-sm">
                          <div className="w-1.5 h-1.5 bg-[#C5A059]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="programs-cta" className="py-20 md:py-32 bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated on Program Launches
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Be the first to know when our programs go live. Join our network to receive updates on launch dates, registration opportunities, and exclusive early-bird benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button className="btn-gold">
                  Register Interest
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-diplomatic-outline border-white text-white hover:bg-white hover:text-[#0A192F]">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
