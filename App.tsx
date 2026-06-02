import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Cta from './components/Cta';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePortfolioPage from './components/ServicePortfolioPage';
import ProtectedAdminPanel from './components/ProtectedAdminPanel';

// دالة تحويل عناوين الخدمات من slugs إنجليزية إلى النصوص العربية المقابلة في قاعدة البيانات
export const getServiceTitleFromSlug = (slug: string): string | null => {
  switch (slug) {
    case 'digital-marketing':
      return 'التسويق الإلكتروني';
    case 'social-media':
      return 'تصميمات سوشيال ميديا';
    case 'video-production':
      return 'تصوير ومونتاج';
    case 'voice-over':
      return 'تعليق صوتي';
    default:
      return null;
  }
};

// دالة تحويل أسماء الخدمات العربية إلى slugs إنجليزية احترافية للروابط
export const getSlugFromServiceTitle = (title: string): string => {
  switch (title) {
    case 'التسويق الإلكتروني':
      return 'digital-marketing';
    case 'تصميمات سوشيال ميديا':
      return 'social-media';
    case 'تصوير ومونتاج':
      return 'video-production';
    case 'تعليق صوتي':
      return 'voice-over';
    default:
      return '';
  }
};

// مكون الصفحة الرئيسية
const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services onNavigate={(title) => navigate(`/portfolio/${getSlugFromServiceTitle(title)}`)} />
      <Cta />
      <Process />
      <Contact />
    </>
  );
};

// مكون وسيط لمعرض الأعمال يقوم بقراءة الـ slug وتحميل الصفحة المناسبة
const PortfolioWrapper: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const serviceTitle = getServiceTitleFromSlug(serviceSlug || '');

  if (!serviceTitle) {
    return <Navigate to="/" replace />;
  }

  return (
    <ServicePortfolioPage 
      serviceTitle={serviceTitle} 
      onBack={() => navigate('/')} 
    />
  );
};

// مكون التحكم في الهيكل العام والتصميم
const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAdmin = location.pathname === '/admin';
  const isHome = location.pathname === '/';

  return (
    <div 
      className="text-[#0A1F44]" 
      style={isHome ? { background: 'linear-gradient(135deg, #0A1F44 0%, #1e3a6f 50%, #2d4a7c 100%)' } : { background: '#f9fafb' }}
    >
      {!isAdmin && <Header onNavigateHome={() => navigate('/')} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ProtectedAdminPanel onBack={() => navigate('/')} />} />
          <Route path="/portfolio/:serviceSlug" element={<PortfolioWrapper />} />
          {/* تحويل أي رابط خاطئ إلى الصفحة الرئيسية */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  // الاعتماد على basename ديناميكي مستند إلى مسار بناء Vite
  const basename = import.meta.env.BASE_URL;

  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
};

export default App;