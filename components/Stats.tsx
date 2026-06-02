import React from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-5xl md:text-7xl font-extrabold text-[#3B82F6]">{value}+</p>
    <p className="text-xl text-gray-300 mt-2">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="bg-[#0A1F44] text-white relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 overflow-hidden" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block" preserveAspectRatio="none">
          <path d="M1440,20 C1200,20 1200,80 960,80 C720,80 720,20 480,20 C240,20 240,80 0,80 L0,0 L1440,0 Z" fill="#F9FAFB"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">ننمي أعمالك بنجاح</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            الأرقام تتحدث عن نفسها. نحن نفخر بالإنجازات التي حققناها مع شركائنا.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem value="150" label="مشروع ناجح" />
          <StatItem value="95" label="عميل سعيد" />
          <StatItem value="500" label="حملة إعلانية" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block" preserveAspectRatio="none">
          <path d="M1440,80 C1200,80 1200,20 960,20 C720,20 720,80 480,80 C240,80 240,20 0,20 L0,120 L1440,120 Z" fill="#0A1F44"></path>
        </svg>
      </div>
    </section>
  );
};

export default Stats;