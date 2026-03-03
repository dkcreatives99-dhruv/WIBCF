import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Target, 
  Eye, 
  Heart,
  Users,
  Lightbulb,
  Shield,
  Leaf,
  Handshake,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const coreValues = [
  { icon: Shield, title: 'Integrity', description: 'Upholding the highest ethical standards in all our endeavors.' },
  { icon: Users, title: 'Inclusivity', description: 'Embracing diversity and ensuring equal opportunities for all.' },
  { icon: Heart, title: 'Cultural Respect', description: 'Honoring the rich tapestry of Indian and Asian heritage.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Driving creative solutions for contemporary challenges.' },
  { icon: Leaf, title: 'Sustainability', description: 'Committing to environmentally and socially responsible practices.' },
  { icon: Eye, title: 'Transparency', description: 'Operating with openness and accountability in all activities.' },
  { icon: Handshake, title: 'Pan-Asian Collaboration', description: 'Building bridges across Asian nations for collective progress.' },
];

const missionPoints = [
  'Unite Indian-origin business leaders, entrepreneurs, and professionals across Asian countries',
  'Facilitate cross-border trade partnerships and investment opportunities within Asia',
  'Preserve and promote Indian cultural heritage through Pan-Asian diplomatic exchanges',
  'Conduct research to influence policy decisions for sustainable development in Asia',
  'Nurture emerging leaders through mentorship and educational programs',
  'Align all initiatives with UN Sustainable Development Goals for regional impact'
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section 
        data-testid="about-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Building Bridges Across Asia
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              The World Indian Business & Culture Foundation is a Pan-Asia focused non-profit organization dedicated to fostering collaboration among Indian-origin leaders across Asian countries.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section data-testid="introduction-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="gold-line mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p className="text-justify">
                  The World Indian Business & Culture Foundation serves as a premier Pan-Asian platform connecting the Indian diaspora across the continent. We operate at the intersection of regional commerce, cultural preservation, and sustainable development.
                </p>
                <p className="text-justify">
                  Our foundation brings together accomplished professionals, visionary entrepreneurs, policy experts, and cultural ambassadors who share a common commitment to advancing Indian excellence and strengthening partnerships across Asian economies.
                </p>
                <p className="text-justify">
                  Through strategic initiatives spanning business forums, cultural exchanges, and policy dialogues, we create meaningful opportunities for collaboration that strengthen Pan-Asian cooperation while honoring the rich heritage shared between India and Asian nations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxkaXZlcnNlJTIwZ3JvdXAlMjBpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBtZWV0aW5nJTIwY29uZmVyZW5jZSUyMHJvb218ZW58MHx8fHwxNzcyNDU3Njg4fDA&ixlib=rb-4.1.0&q=85"
                alt="International Business Meeting"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section data-testid="vision-section" className="py-20 md:py-32 bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 md:p-16 border border-[#0A192F]/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-[#C5A059]" />
                </div>
                <div>
                  <p className="font-accent uppercase tracking-widest text-[#C5A059] text-xs">Our Vision</p>
                  <h2 className="text-2xl font-bold text-[#0A192F]">Looking Forward</h2>
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-[#0A192F] font-bold leading-relaxed border-l-4 border-[#C5A059] pl-6">
                "To become the leading Pan-Asian platform uniting Indian business excellence and cultural heritage for sustainable regional impact."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section data-testid="mission-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#0A192F] flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#C5A059]" />
                </div>
                <div>
                  <p className="font-accent uppercase tracking-widest text-[#C5A059] text-xs">Our Mission</p>
                  <h2 className="text-2xl font-bold text-[#0A192F]">What We Strive For</h2>
                </div>
              </div>
              <p className="text-[#475569] leading-relaxed mb-8">
                Our mission is comprehensive and action-oriented, focusing on creating tangible impact across multiple dimensions of Pan-Asian engagement.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                    <span className="text-[#475569]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1733737201456-202d94d4ae80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBkYW5jZSUyMGhhbmQlMjBtdWRyYSUyMGNsb3NlJTIwdXAlMjBlbGVnYW50fGVufDB8fHx8MTc3MjQ1NzcwMHww&ixlib=rb-4.1.0&q=85"
                alt="Indian Classical Dance"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section data-testid="values-section" className="section-padding bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Our Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Values
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The guiding principles that shape every initiative and decision at the Foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                data-testid={`value-${index}`}
                className="bg-white/5 border border-white/10 p-6 hover:border-[#C5A059]/50 transition-colors"
              >
                <value.icon className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section data-testid="why-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-8">
              Why We Exist
            </h2>
            <div className="space-y-6 text-[#475569] leading-relaxed text-left">
              <p className="text-justify">
                The Indian diaspora represents one of the most influential and accomplished communities across Asia, with significant presence in virtually every major Asian economy. From Singapore to the UAE, Malaysia to Japan, Indian professionals and entrepreneurs have made remarkable contributions to regional progress.
              </p>
              <p className="text-justify">
                Yet despite individual successes, there remains immense untapped potential in collective action. The Foundation exists to harness this potential by creating structured platforms for collaboration, knowledge exchange, and mutual support among Indian-origin leaders across Asian countries.
              </p>
              <p className="text-justify">
                We believe that by uniting the diaspora's diverse talents and perspectives within the Asian context, we can amplify impact on critical regional challenges—from sustainable economic development to cultural preservation, from youth empowerment to policy innovation.
              </p>
              <p className="text-justify">
                The Foundation serves as a bridge—connecting established leaders with emerging talent, linking traditional wisdom with modern innovation, and building pathways between the Indian community and Asian institutions working toward shared goals.
              </p>
            </div>
            <div className="mt-12">
              <Link to="/leadership">
                <Button className="btn-diplomatic">
                  Meet Our Leadership
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
