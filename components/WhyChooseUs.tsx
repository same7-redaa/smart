
import React from 'react';
import { TargetIcon, PaletteIcon, FilmIcon, CheckCircleIcon } from './Icons';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4 space-x-reverse">
        <div className="flex-shrink-0 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full p-3">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">نحن شركاؤك في النجاح</h2>
            <p className="text-lg text-gray-700 mb-8">
              نحن لا نقدم خدمات تسويقية فقط، بل نبني علاقات دائمة. فريقنا متخصص في فهم تحدياتك وتحويلها إلى فرص نمو حقيقية.
            </p>
            <div className="space-y-8">
                <BenefitCard 
                    icon={<CheckCircleIcon className="w-6 h-6"/>}
                    title="استراتيجيات مخصصة"
                    description="نصمم خططًا تسويقية فريدة تتناسب مع أهداف عملك وميزانيتك."
                />
                <BenefitCard 
                    icon={<CheckCircleIcon className="w-6 h-6"/>}
                    title="فريق من الخبراء"
                    description="يمتلك فريقنا خبرة واسعة في مختلف مجالات التسويق الرقمي لتحقيق أفضل النتائج."
                />
                <BenefitCard 
                    icon={<CheckCircleIcon className="w-6 h-6"/>}
                    title="نتائج قابلة للقياس"
                    description="نركز على الشفافية وتقديم تقارير دورية توضح أداء حملاتك وعائد الاستثمار."
                />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px]">
                <div className="absolute inset-0 bg-[#F59E0B]/20 rounded-3xl transform rotate-6"></div>
                <img 
                    src="https://picsum.photos/seed/strategy-meeting/600/800"
                    alt="فريق يناقش استراتيجيات التسويق"
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
