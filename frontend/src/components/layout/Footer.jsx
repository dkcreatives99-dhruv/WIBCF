import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Programs', path: '/programs' },
  { name: 'Research', path: '/research' },
  { name: 'Media', path: '/media' },
  { name: 'Contact', path: '/contact' },
];

const legalLinks = [
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Disclaimer', path: '/disclaimer' },
  { name: 'Security Updates', path: '/security' },
  { name: 'Cookies Policy', path: '/cookies' },
];

const focusAreas = [
  'Global Business Forums',
  'Cultural Exchange',
  'Policy & Research',
  'Youth Leadership',
  'SDG Partnerships',
];

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-testid="main-footer" className="footer">
      {/* Main Footer */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* About Foundation */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#C5A059] flex items-center justify-center">
                  <span className="text-[#0A192F] font-bold text-lg font-accent">WIBCF</span>
                </div>
              </div>
              <h3 className="text-white font-accent uppercase tracking-wider text-sm mb-4">
                World Indian Business & Culture Foundation
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Empowering global Indian leadership through business collaboration, 
                cultural diplomacy, and sustainable development partnerships.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  data-testid="social-linkedin"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  data-testid="social-twitter"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  data-testid="social-facebook"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  data-testid="social-instagram"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#C5A059] font-accent uppercase tracking-wider text-sm mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="footer-link hover:pl-2 transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[#C5A059] font-accent uppercase tracking-wider text-sm mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="footer-link hover:pl-2 transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[#C5A059] font-accent uppercase tracking-wider text-sm mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C5A059] mt-1 flex-shrink-0" />
                  <a 
                    href="mailto:info@worldindianfoundation.org"
                    data-testid="footer-email"
                    className="footer-link"
                  >
                    info@worldindianfoundation.org
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#C5A059] mt-1 flex-shrink-0" />
                  <span className="text-white/60 text-sm">
                    www.worldindianfoundation.org
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] mt-1 flex-shrink-0" />
                  <span className="text-white/60 text-sm">
                    Global Office<br />
                    <span className="text-white/40">(To Be Announced)</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 WORLD INDIAN BUSINESS & CULTURE FOUNDATION. All Rights Reserved.
            </p>
            <p className="text-white/30 text-xs">
              Connecting Nations. Strengthening Partnerships. Preserving Heritage.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        data-testid="scroll-to-top-btn"
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
