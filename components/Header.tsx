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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="flex items-center justify-between">
          <div>
            <button onClick={onNavigateHome} aria-label="Go to homepage">
              <img 
                src="https://i.postimg.cc/mrHLSfx7/final-01.png" 
                alt="Smart Media Logo" 
                className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}
              />
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
                className="text-[#0A1F44] font-semibold hover:text-[#3B82F6] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0A1F44] focus:outline-none" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden pt-4 pb-2 mt-2 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (link === "الرئيسية") onNavigateHome();
                  }}
                  className="text-[#0A1F44] font-medium hover:bg-[#3B82F6] hover:text-white transition-colors duration-300 py-2 px-4 text-center rounded-md"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;