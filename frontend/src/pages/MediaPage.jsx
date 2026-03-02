import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Calendar, 
  ArrowRight, 
  ExternalLink,
  Newspaper,
  Mic2,
  Image
} from 'lucide-react';

const news = [
  {
    title: 'Foundation Announces Global Expansion Plans',
    date: 'January 15, 2026',
    excerpt: 'The World Indian Business & Culture Foundation announces plans to establish chapters in 15 new countries by end of 2026.',
    category: 'Announcement'
  },
  {
    title: 'Partnership with International Chamber of Commerce',
    date: 'January 10, 2026',
    excerpt: 'Strategic partnership formed to facilitate cross-border trade and investment among Indian diaspora businesses.',
    category: 'Partnership'
  },
  {
    title: 'Youth Leadership Program Applications Open',
    date: 'January 5, 2026',
    excerpt: 'Applications now open for the inaugural Youth Leadership Development Program targeting emerging global Indian leaders.',
    category: 'Program'
  }
];

const pressReleases = [
  {
    title: 'WIBCF Launches New Research Initiative on Diaspora Economics',
    date: 'January 12, 2026',
    excerpt: 'Foundation announces comprehensive research program to study the economic impact of the global Indian diaspora.'
  },
  {
    title: 'Annual Global Business Summit 2026 Dates Announced',
    date: 'January 8, 2026',
    excerpt: 'Save the date for the flagship event bringing together Indian business leaders from around the world.'
  }
];

const mediaLogos = [
  'Economic Times',
  'Business Standard',
  'The Hindu',
  'Times of India',
  'Forbes India',
  'Bloomberg Quint'
];

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
              News & Updates
            </h1>
            <p className="text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
              Stay informed about our latest initiatives, partnerships, and impact stories.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section data-testid="news-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-2">
                Latest Updates
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
                News
              </h2>
            </div>
            <Newspaper className="w-10 h-10 text-[#C5A059]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <article
                key={item.title}
                data-testid={`news-${index}`}
                className="news-card"
              >
                <div className="h-48 bg-[#0A192F] flex items-center justify-center">
                  <div className="w-16 h-16 border border-[#C5A059]/30 flex items-center justify-center">
                    <Newspaper className="w-8 h-8 text-[#C5A059]" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-accent uppercase tracking-wider text-[#C5A059] text-xs">
                      {item.category}
                    </span>
                    <span className="text-[#94A3B8] text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A192F] mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-[#0A192F] font-accent uppercase tracking-wider text-xs hover:text-[#C5A059] transition-colors flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section data-testid="press-section" className="section-padding bg-[#F8F9FA]">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-2">
                Official Statements
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
                Press Releases
              </h2>
            </div>
            <Mic2 className="w-10 h-10 text-[#C5A059]" />
          </div>

          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <div
                key={release.title}
                data-testid={`press-${index}`}
                className="diplomatic-card bg-white p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#94A3B8] text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A192F] mb-2">
                      {release.title}
                    </h3>
                    <p className="text-[#475569]">
                      {release.excerpt}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-[#0A192F] hover:text-[#C5A059] flex-shrink-0"
                  >
                    Read Full Release
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions Section */}
      <section data-testid="mentions-section" className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-accent uppercase tracking-widest text-[#C5A059] text-sm mb-2">
              Featured In
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">
              Media Mentions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mediaLogos.map((logo, index) => (
              <div
                key={logo}
                data-testid={`media-logo-${index}`}
                className="bg-[#F8F9FA] border border-[#0A192F]/10 p-6 flex items-center justify-center h-24 hover:border-[#C5A059]/50 transition-colors"
              >
                <span className="font-accent uppercase tracking-wider text-sm text-[#0A192F]/60 text-center">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section data-testid="media-kit-cta" className="py-20 md:py-32 bg-[#0A192F] noise-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Image className="w-12 h-12 text-[#C5A059] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Media Kit & Press Resources
            </h2>
            <p className="text-white/70 text-lg mb-10">
              For media inquiries, press resources, and interview requests, please contact our communications team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-gold">
                  Contact Press Office
                </Button>
              </Link>
              <Button 
                disabled
                className="btn-diplomatic-outline border-white/50 text-white/50"
              >
                Download Media Kit (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
