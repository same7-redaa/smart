
import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="bg-[#3B82F6] text-white relative">
      <div className="absolute inset-0 bg-black/10"></div>
       <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">كن على اتصال دائم!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          هل أنت مستعد للارتقاء بعملك إلى المستوى التالي؟ تواصل مع خبرائنا اليوم لمناقشة رؤيتك.
        </p>
        <a
          href="#"
          className="inline-block bg-[#F59E0B] hover:bg-amber-500 text-[#0A1F44] font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg text-lg"
        >
          تواصل معنا اليوم
        </a>
      </div>
    </section>
  );
};

export default Cta;
