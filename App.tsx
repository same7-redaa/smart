import React, { useState, useEffect } from 'react';
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
import ProtectedAdminPanel from './components/ProtectedAdminPanel';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<{ page: 'home' | 'portfolio' | 'admin'; serviceTitle: string | null }>({
    page: 'home',
    serviceTitle: null,
  });

  // التحقق من hash في URL عند التحميل الأولي
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#admin') {
      setActiveView({ page: 'admin', serviceTitle: null });
    } else if (hash.startsWith('#portfolio/')) {
      const serviceTitle = decodeURIComponent(hash.replace('#portfolio/', ''));
      setActiveView({ page: 'portfolio', serviceTitle });
    }
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setActiveView(event.state);
      } else {
        const hash = window.location.hash;
        if (hash === '#admin') {
          setActiveView({ page: 'admin', serviceTitle: null });
        } else if (hash.startsWith('#portfolio/')) {
          const serviceTitle = decodeURIComponent(hash.replace('#portfolio/', ''));
          setActiveView({ page: 'portfolio', serviceTitle });
        } else {
          setActiveView({ page: 'home', serviceTitle: null });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToServicePortfolio = (serviceTitle: string) => {
    const newState = { page: 'portfolio' as const, serviceTitle };
    setActiveView(newState);
    window.history.pushState(newState, '', `#portfolio/${encodeURIComponent(serviceTitle)}`);
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    const newState = { page: 'home' as const, serviceTitle: null };
    setActiveView(newState);
    window.history.pushState(newState, '', '#');
  };

  const navigateToAdmin = () => {
    const newState = { page: 'admin' as const, serviceTitle: null };
    setActiveView(newState);
    window.history.pushState(newState, '', '#admin');
    window.scrollTo(0, 0);
  };

  // للوصول للوحة التحكم: اكتب في الـ console: window.openAdmin()
  useEffect(() => {
    (window as any).openAdmin = navigateToAdmin;
  }, []);

  return (
    <div className="text-[#0A1F44]" style={activeView.page === 'home' ? { background: 'linear-gradient(135deg, #0A1F44 0%, #1e3a6f 50%, #2d4a7c 100%)' } : { background: '#f9fafb' }}>
      {activeView.page !== 'admin' && <Header onNavigateHome={navigateHome} />}
      <main>
        {activeView.page === 'home' ? (
          <>
            <Hero />
            <WhyChooseUs />
            <Services onNavigate={navigateToServicePortfolio} />
            <Cta />
            <Process />
            <Stats />
            <Portfolio onNavigate={navigateToServicePortfolio} />
            <Contact />
          </>
        ) : activeView.page === 'admin' ? (
          <ProtectedAdminPanel onBack={navigateHome} />
        ) : (
          <ServicePortfolioPage 
            serviceTitle={activeView.serviceTitle!} 
            onBack={navigateHome} 
          />
        )}
      </main>
      {activeView.page !== 'admin' && <Footer />}
    </div>
  );
};

export default App;