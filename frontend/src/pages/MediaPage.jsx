import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Newspaper, 
  Mic2, 
  Image,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function MediaPage() {
  return (
    <div data-testid="media-page">
      {/* Hero Section */}
      <section 
        data-testid="media-hero"
        className="relative py-32 md:py-40 bg-[#0A192F] noise-overlay overflow-hidden"
      >
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-4 animate-fade-in">
              Media
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Media – Coming Soon
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              Stay tuned for news, updates, and media coverage about our Pan-Asian initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section data-testid="coming-soon-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <Newspaper className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
              Official Media Coverage Coming Soon
            </h2>
            <p className="text-[#475569] leading-relaxed text-lg mb-12">
              Official media coverage, news updates, and press releases will be published here soon. 
              As the Foundation launches its Pan-Asian initiatives, we will share our journey, achievements, 
              and impact stories with you.
            </p>

            {/* Placeholder Sections */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#F8F9FA] border border-[#0A192F]/10 p-8 text-center">
                <Newspaper className="w-8 h-8 text-[#C5A059] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#0A192F] mb-2">News</h3>
                <p className="text-sm text-[#475569] mb-4">Latest updates and announcements</p>
                <span className="coming-soon-banner inline-block px-3 py-1 text-xs">
                  Coming Soon
                </span>
              </div>
              
              <div className="bg-[#F8F9FA] border border-[#0A192F]/10 p-8 text-center">
                <Mic2 className="w-8 h-8 text-[#C5A059] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#0A192F] mb-2">Press Releases</h3>
                <p className="text-sm text-[#475569] mb-4">Official statements and announcements</p>
                <span className="coming-soon-banner inline-block px-3 py-1 text-xs">
                  Coming Soon
                </span>
              </div>
              
              <div className="bg-[#F8F9FA] border border-[#0A192F]/10 p-8 text-center">
                <Image className="w-8 h-8 text-[#C5A059] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#0A192F] mb-2">Media Gallery</h3>
                <p className="text-sm text-[#475569] mb-4">Photos and videos from events</p>
                <span className="coming-soon-banner inline-block px-3 py-1 text-xs">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section data-testid="stay-updated" className="py-20 md:py-32 bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="w-12 h-12 text-[#C5A059] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Want to be the first to know about our news and updates? 
              Connect with us or subscribe to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-gold">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/membership">
                <Button className="btn-diplomatic-outline border-white text-white hover:bg-white hover:text-[#0A192F]">
                  Join Our Network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
