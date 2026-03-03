import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Globe, 
  Building2,
  Landmark,
  GraduationCap,
  Leaf,
  ArrowRight,
  BookOpen
} from 'lucide-react';

const focusAreas = [
  {
    icon: Building2,
    title: 'Pan-Asia Business Forums',
    description: 'Facilitating cross-border trade dialogues and investment partnerships between Indian-origin business leaders and Asian economies.',
    color: 'bg-[#0A192F]'
  },
  {
    icon: Landmark,
    title: 'Cultural Exchange Initiatives',
    description: 'Preserving and promoting Indian cultural heritage through arts, traditions, and diplomatic exchanges across Asian countries.',
    color: 'bg-[#C5A059]'
  },
  {
    icon: BookOpen,
    title: 'Policy & Research Dialogues',
    description: 'Conducting evidence-based research to influence policy decisions and economic development strategies in the Asian region.',
    color: 'bg-[#0A192F]'
  },
  {
    icon: GraduationCap,
    title: 'Youth Leadership Development',
    description: 'Nurturing the next generation of Pan-Asian leaders through mentorship and educational programs.',
    color: 'bg-[#C5A059]'
  },
  {
    icon: Leaf,
    title: 'SDG Impact Partnerships',
    description: 'Aligning our initiatives with UN Sustainable Development Goals for lasting impact across Asian nations.',
    color: 'bg-[#0A192F]'
  }
];

const stats = [
  { value: '15+', label: 'Asian Countries', sublabel: 'Focus Region' },
  { value: '1000+', label: 'Members', sublabel: 'Target' },
  { value: '100+', label: 'Partner Organizations', sublabel: 'Target' },
  { value: '17', label: 'SDG Alignments', sublabel: 'United Nations' }
];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section 
        data-testid="hero-section"
        className="hero-section relative"
      >
        <div 
          className="hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1766961980283-3a5922285b0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxkaXBsb21hdGljJTIwaGFuZHNoYWtlJTIwaW50ZXJuYXRpb25hbCUyMGZsYWdzJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzI0NTc2OTl8MA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="hero-content max-w-4xl mx-auto animate-fade-in-up">
          <div className="gold-line mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Business & Cultural Collaboration Across Asia
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Connecting Indian Leadership with Asian Economies for Sustainable Growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button 
                data-testid="explore-vision-btn"
                className="btn-gold"
              >
                Explore Our Vision
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/membership">
              <Button 
                data-testid="join-movement-btn"
                className="btn-diplomatic-outline border-white text-white hover:bg-white hover:text-[#0A192F]"
              >
                Join The Movement
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section data-testid="about-preview-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
                About The Foundation
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
                Uniting Indian Excellence Across Asia
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p className="text-justify">
                  The World Indian Business & Culture Foundation stands at the intersection of Pan-Asian commerce and cultural preservation. We bring together Indian-origin leaders, entrepreneurs, and institutions from across Asian countries.
                </p>
                <p className="text-justify">
                  Our mission transcends geographical boundaries, creating a powerful network that fosters economic collaboration between India and Asian economies while honoring the rich tapestry of shared heritage.
                </p>
                <p className="text-justify">
                  Through strategic partnerships, policy dialogues, and cultural initiatives, we're building bridges that strengthen Pan-Asian cooperation and sustainable development.
                </p>
              </div>
              <Link to="/about">
                <Button 
                  data-testid="learn-more-btn"
                  className="btn-diplomatic mt-8"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1752917889576-46419c28de00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJlJTIwdHJhZGl0aW9uJTIwYXJ0JTIwZGlzdGluY3QlMjBlbGVnYW50fGVufDB8fHx8MTc3MjQ1NzY4OXww&ixlib=rb-4.1.0&q=85"
                alt="Indian Cultural Heritage"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0A192F] p-6 max-w-xs hidden md:block">
                <p className="text-[#C5A059] font-accent uppercase tracking-wider text-xs mb-2">Our Vision</p>
                <p className="text-white text-sm leading-relaxed">
                  To become the leading Pan-Asian platform uniting Indian business excellence and cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section data-testid="mission-section" className="py-20 md:py-32 bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gold-line mx-auto mb-8" />
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Our Mission
            </p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-relaxed mb-8">
              "To foster strategic collaboration between Indian-origin leaders and Asian countries in business, culture, policy dialogue, and sustainable development."
            </blockquote>
            <div className="gold-line mx-auto" />
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section data-testid="focus-areas-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">
              Our Focus Areas
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              Strategic initiatives designed to strengthen Pan-Asian collaboration and sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                data-testid={`focus-area-${index}`}
                className={`focus-card p-8 ${index === 0 ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`focus-card-icon mb-6 ${area.color === 'bg-[#C5A059]' ? 'bg-[#C5A059]/10 border-[#C5A059]/30 text-[#C5A059]' : 'bg-[#0A192F]/10 border-[#0A192F]/30 text-[#0A192F]'}`}>
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section data-testid="stats-section" className="py-16 bg-white border-y border-[#0A192F]/10">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                data-testid={`stat-${index}`}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-2">
                  {stat.value}
                </p>
                <p className="font-accent uppercase tracking-wider text-sm text-[#0A192F]">
                  {stat.label}
                </p>
                <p className="text-xs text-[#C5A059] mt-1">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section data-testid="global-presence-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
                Our Reach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
                Pan-Asia Presence
              </h2>
              <p className="text-[#475569] leading-relaxed mb-6">
                The Foundation is establishing chapters across major Asian economies where Indian diaspora communities thrive. Our network spans the continent, connecting leaders, entrepreneurs, and cultural ambassadors.
              </p>
              <div className="bg-white p-6 border border-[#0A192F]/10">
                <p className="font-accent uppercase tracking-wider text-xs text-[#C5A059] mb-2">
                  Asian Regional Focus
                </p>
                <p className="text-[#0A192F] font-semibold">
                  Expanding Across Asia
                </p>
                <p className="text-sm text-[#475569] mt-2">
                  Malaysia • Singapore • UAE • India • Japan • South Korea • Thailand • Indonesia • and more
                </p>
              </div>
            </div>
            <div className="map-placeholder h-[400px] flex items-center justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxnbG9iYWwlMjB3b3JsZCUyMG1hcCUyMGNvbm5lY3Rpb24lMjBuZXR3b3JrJTIwYWJzdHJhY3QlMjBibHVlJTIwZ29sZHxlbnwwfHx8fDE3NzI0NTc2OTF8MA&ixlib=rb-4.1.0&q=85"
                alt="Pan-Asia Network"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-[#C5A059] mx-auto mb-4" />
                  <p className="text-white font-accent uppercase tracking-wider">
                    Pan-Asia Network Expanding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-20 md:py-32 bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Movement
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Join a Pan-Asian network of leaders, entrepreneurs, and change-makers committed to advancing Indian business excellence and cultural heritage across Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button 
                  data-testid="partner-btn"
                  className="btn-gold"
                >
                  Partner With Us
                </Button>
              </Link>
              <Link to="/membership">
                <Button 
                  data-testid="become-member-cta-btn"
                  className="btn-diplomatic-outline border-white text-white hover:bg-white hover:text-[#0A192F]"
                >
                  Become a Member
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
