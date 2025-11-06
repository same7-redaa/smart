import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#0A1F44] text-white pt-20 pb-10 relative overflow-hidden md:mx-4 md:my-4 rounded-2xl">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3B82F6]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F59E0B]/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-right mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
              Smart Media
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              نقدم استراتيجيات تسويق مبتكرة ومصممة خصيصًا لعلامتك التجارية، مما يضمن وصولك إلى جمهورك المستهدف وتحقيق أهدافك بكفاءة.
            </p>
            <a
              href="#"
              className="inline-block bg-[#3B82F6] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              اكتشف المزيد
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                <div 
                    className="absolute inset-0 bg-[#F59E0B] rounded-full transform -translate-x-4 -translate-y-4"
                    style={{ clipPath: 'ellipse(60% 70% at 30% 40%)' }}
                ></div>
                <img
                src="https://picsum.photos/seed/marketing-team/800/800"
                alt="فريق عمل يتعاون"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
                style={{ clipPath: 'ellipse(70% 60% at 60% 50%)' }}
                />
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