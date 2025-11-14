import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-10 overflow-hidden -mt-20" style={{
      background: 'linear-gradient(135deg, #0A1F44 0%, #1e3a6f 50%, #2d4a7c 100%)'
    }}>
      {/* Gradient Overlays - ألوان اللوجو */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full filter blur-3xl" style={{
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(249, 115, 22, 0.1) 50%, rgba(251, 191, 36, 0.08) 100%)'
      }}></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full filter blur-3xl" style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(251, 191, 36, 0.08) 100%)'
      }}></div>
      
      {/* رموز تسويق إلكتروني خفيفة جدًا */}
      <div className="absolute inset-0 opacity-5">
        {/* أيقونة رسم بياني - Analytics */}
        <div className="absolute top-20 left-10">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300">
            <path d="M3 3v18h18"/>
            <path d="M18 17V9"/>
            <path d="M13 17V5"/>
            <path d="M8 17v-3"/>
          </svg>
        </div>
        
        {/* أيقونة ميجافون - Marketing */}
        <div className="absolute top-32 right-16 rotate-12">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
            <path d="M3 11v3a1 1 0 0 0 1 1h1.5a1 1 0 0 0 .8-.4l2.2-2.9a1 1 0 0 1 .8-.4h9.4a1 1 0 0 1 .9 1.5l-1.4 3a1 1 0 0 1-.9.6H13"/>
            <path d="M13 15v4a1 1 0 0 1-1 1H9"/>
          </svg>
        </div>
        
        {/* أيقونة هاشتاج - Social Media */}
        <div className="absolute bottom-32 left-1/4">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-orange-400">
            <line x1="4" y1="9" x2="20" y2="9"/>
            <line x1="4" y1="15" x2="20" y2="15"/>
            <line x1="10" y1="3" x2="8" y2="21"/>
            <line x1="16" y1="3" x2="14" y2="21"/>
          </svg>
        </div>
        
        {/* أيقونة مثل/قلب - Engagement */}
        <div className="absolute top-1/3 right-1/3 -rotate-12">
          <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-300">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        
        {/* أيقونة هدف - Target Audience */}
        <div className="absolute bottom-24 right-12">
          <svg width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        </div>
        
        {/* أيقونة سهم للأعلى - Growth */}
        <div className="absolute top-1/2 left-16 rotate-45">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-pink-400">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative text-white">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-right mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
              Smart Media
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#F59E0B] mb-4">
              نصنع تأثير حقيقي لعلامتك التجارية
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              نقدّم حلول تسويقية متكاملة تساعدك في بناء هوية قوية، جذب عملاء مستهدفين، وزيادة مبيعاتك من خلال تصميمات احترافية، محتوى مؤثر، وإعلانات ممولة محسوبة النتائج.
            </p>
            <a
              href="#"
              className="inline-block bg-[#F59E0B] hover:bg-[#EF8C00] text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              احجز استشارة مجانية
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Central Device - Smartphone */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-40 h-72 md:w-48 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-4 border-gray-700 overflow-hidden">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                  <div className="mt-8 p-4 space-y-3">
                    <div className="h-3 bg-gradient-to-r from-pink-500 to-orange-400 rounded w-3/4"></div>
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-300 rounded w-1/2"></div>
                    <div className="h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg"></div>
                    <div className="flex gap-2">
                      <div className="h-12 w-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg"></div>
                      <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                      <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Card - Top Left */}
              <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/95 rounded-2xl shadow-xl p-3 md:p-4 backdrop-blur-sm z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="M18 17V9"/>
                  <path d="M13 17V5"/>
                  <path d="M8 17v-3"/>
                </svg>
              </div>

              {/* Camera/Content Card - Top Right */}
              <div className="absolute top-4 right-0 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl shadow-xl p-3 md:p-4 z-20 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>

              {/* Social Media Notification - Bottom Left */}
              <div className="absolute bottom-8 left-4 w-28 h-16 md:w-36 md:h-20 bg-white/95 rounded-xl shadow-xl p-2 md:p-3 backdrop-blur-sm z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Brand Logo Card - Bottom Right */}
              <div className="absolute bottom-0 right-4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-3 z-20 transform rotate-6 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                <svg className="w-full h-full text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>

              {/* Timeline Indicator - Left Side */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 hidden md:flex flex-col gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-lg animate-pulse"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block" preserveAspectRatio="none">
          <path d="M1440,80 C1200,80 1200,20 960,20 C720,20 720,80 480,80 C240,80 240,20 0,20 L0,120 L1440,120 Z" fill="#F9FAFB"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;