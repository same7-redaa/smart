import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Cta from './components/Cta';
import Process from './components/Process';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePortfolioPage from './components/ServicePortfolioPage';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<{ page: 'home' | 'portfolio'; serviceTitle: string | null }>({
    page: 'home',
    serviceTitle: null,
  });

  const navigateToServicePortfolio = (serviceTitle: string) => {
    setActiveView({ page: 'portfolio', serviceTitle });
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setActiveView({ page: 'home', serviceTitle: null });
  };

  return (
    <div className="bg-[#F9FAFB] text-[#0A1F44]">
      <Header onNavigateHome={navigateHome} />
      <main>
        {activeView.page === 'home' ? (
          <>
            <Hero />
            <WhyChooseUs />
            <Services onNavigate={navigateToServicePortfolio} />
            <Cta />
            <Process />
            <Stats />
            <Portfolio />
            <Contact />
          </>
        ) : (
          <ServicePortfolioPage 
            serviceTitle={activeView.serviceTitle!} 
            onBack={navigateHome} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;