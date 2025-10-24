import { Routes, Route, useLocation } from 'react-router';
import {
  Header,
  Hero,
  Footer,
  MobileNav,
  Features,
  ScrollToTop,
} from './components';
import { useState, useEffect } from 'react';
import Privacy from './pages/Privacy';
import Account from './pages/Account';
import Terms from './pages/Terms';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // scroll to section if navigation requested it
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      const element = document.getElementById(id);
      if (element) {
        // small delay so Hero/Features are mounted
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 w-full">
      <ScrollToTop />
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="flex-1">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
              </>
            }
          />

          {/* Privacy & Terms pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/account" element={<Account />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
