import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '../ui/sonner';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};
