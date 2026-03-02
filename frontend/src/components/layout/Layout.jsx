import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'sonner';

// ScrollToTop component to reset scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};
