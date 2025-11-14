import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ["الرئيسية", "خدماتنا", "أعمالنا", "اتصل بنا"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 shadow-md rounded-b-3xl border-b border-blue-300 overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #0A1F44 0%, #1e3a6f 100%)'
    }}>
      <div className="container mx-auto px-6 py-2 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <button onClick={onNavigateHome} aria-label="Go to homepage" className="transition-all duration-300 hover:opacity-90">
              <div className="bg-white rounded-xl p-2 shadow-lg">
                <img 
                  src="./logo.png" 
                  alt="Smart Media Logo" 
                  className="h-8"
                />
              </div>
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (link === "الرئيسية") onNavigateHome();
                  // In a full app, other links would scroll or navigate.
                }}
                className="text-white font-semibold hover:text-[#F59E0B] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#0A1F44] shadow-lg">
          <nav className="flex flex-col">
            {navLinks.map((link, index) => (
              <a 
                key={link} 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (link === "الرئيسية") onNavigateHome();
                }}
                className={`text-white font-semibold hover:bg-white/10 transition-colors duration-200 py-4 px-6 text-right ${
                  index !== navLinks.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;