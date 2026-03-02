import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
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
  { name: 'Security', path: '/security' },
  { name: 'Cookies', path: '/cookies' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-[#0A192F]/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="logo-link"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-[#0A192F] flex items-center justify-center">
              <span className="text-[#C5A059] font-bold text-lg font-accent">WIBCF</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-accent uppercase tracking-wider text-[#0A192F]/70">World Indian Business</p>
              <p className="text-xs font-accent uppercase tracking-wider text-[#0A192F]/70">& Culture Foundation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`nav-link ${isActive(link.path) ? 'active text-[#0A192F]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/membership">
              <Button
                data-testid="become-member-btn"
                className="btn-diplomatic"
              >
                Become a Member
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                data-testid="mobile-menu-btn"
                className="text-[#0A192F]"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b border-[#0A192F]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0A192F] flex items-center justify-center">
                      <span className="text-[#C5A059] font-bold text-sm font-accent">WIBCF</span>
                    </div>
                    <div>
                      <p className="text-xs font-accent uppercase tracking-wider text-[#0A192F]/70">World Indian Business</p>
                      <p className="text-xs font-accent uppercase tracking-wider text-[#0A192F]/70">& Culture Foundation</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 p-6" data-testid="mobile-nav">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 font-accent uppercase tracking-wider text-sm ${
                            isActive(link.path)
                              ? 'text-[#C5A059]'
                              : 'text-[#0A192F]/80 hover:text-[#0A192F]'
                          } transition-colors`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Legal Links */}
                  <div className="mt-8 pt-6 border-t border-[#0A192F]/10">
                    <p className="text-xs font-accent uppercase tracking-wider text-[#0A192F]/50 mb-4">Legal</p>
                    <ul className="space-y-3">
                      {legalLinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-[#0A192F]/60 hover:text-[#0A192F] transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-[#0A192F]/10">
                  <Link to="/membership" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      data-testid="mobile-member-btn"
                      className="btn-diplomatic w-full"
                    >
                      Become a Member
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
