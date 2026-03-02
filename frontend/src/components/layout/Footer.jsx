import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

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

export const Footer = () => {

  return (
    <footer data-testid="main-footer" className="footer">
      {/* Main Footer */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* About Foundation */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_business-culture-hub/artifacts/h0qbez6z_WIBCF%20Logo.jpeg"
                  alt="WIBCF Logo"
                  className="h-16 w-auto object-contain bg-white p-2 rounded"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                WORLD INDIAN BUSINESS & CULTURE FOUNDATION (WIBCF) is a Pan-Asia focused non-profit organization promoting business excellence, cultural diplomacy, and sustainable partnerships across Asian countries.
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
                    href="mailto:info@wibcf.org"
                    data-testid="footer-email"
                    className="footer-link"
                  >
                    info@wibcf.org
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#C5A059] mt-1 flex-shrink-0" />
                  <span className="text-white/60 text-sm">
                    www.wibcf.org
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] mt-1 flex-shrink-0" />
                  <span className="text-white/60 text-sm">
                    Malaysia (Headquarters)<br />
                    <span className="text-white/40">Pan-Asia Operations</span>
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
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-white/30 text-xs">
                Strengthening Partnerships Across Asia
              </p>
              <span className="hidden md:inline text-white/20">|</span>
              <p className="text-white/40 text-xs">
                Designed & Managed by{' '}
                <a 
                  href="https://dkkineticdigital.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:text-[#C5A059]/80 transition-colors font-medium"
                  data-testid="dk-kinetic-link"
                >
                  DK KINETIC DIGITAL
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};
