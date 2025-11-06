import React from 'react';
import { MegaphoneIcon, TargetIcon, PaletteIcon, FilmIcon, MicrophoneIcon } from './Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  onNavigate: (title: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onNavigate }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
    <div className="mx-auto inline-block bg-[#3B82F6] text-white p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-[#0A1F44] text-center">{title}</h3>
    <div className="text-gray-600 text-right flex-grow">{description}</div>
    <div className="mt-auto pt-6 text-center">
        <button 
            onClick={() => onNavigate(title)}
            className="inline-block bg-white border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
        >
            معرض الأعمال
        </button>
    </div>
  </div>
);

interface ServicesProps {
    onNavigate: (title: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <TargetIcon className="w-8 h-8" />,
      title: "إنشاء الخطط التسويقية",
      description: (
          <ul className="space-y-2 list-disc list-inside">
              <li>تحليل شامل للسوق والمنافسين</li>
              <li>تحديد الجمهور المستهدف بدقة</li>
              <li>وضع أهداف تسويقية ذكية (SMART)</li>
              <li>تحديد الميزانية وتوزيعها على القنوات</li>
              <li>إعداد خطة محتوى متكاملة وجدول زمني</li>
          </ul>
      )
    },
    {
      icon: <MegaphoneIcon className="w-8 h-8" />,
      title: "التسويق الإلكتروني",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>إدارة الحملات الإعلانية الممولة</li>
          <li>إنشاء الخطط التسويقية والتحليل السوقي</li>
          <li>إدارة حسابات السوشيال ميديا</li>
          <li>إنتاج فيديوهات إعلانية ومحتوى بصري</li>
          <li>تحليل الأداء والتقارير التسويقية</li>
        </ul>
      )
    },
    {
      icon: <PaletteIcon className="w-8 h-8" />,
      title: "تصميمات سوشيال ميديا",
      description: (
          <ul className="space-y-2 list-disc list-inside">
              <li>تصميم منشورات متوافقة مع هوية علامتك</li>
              <li>إنشاء قوالب جذابة للقصص والتفاعلات</li>
              <li>تصميم أغلفة احترافية لحساباتك</li>
              <li>ابتكار إعلانات بصرية تحقق أعلى تفاعل</li>
              <li>تصميم صور رمزية وأيقونات مخصصة</li>
          </ul>
      )
    },
    {
      icon: <FilmIcon className="w-8 h-8" />,
      title: "تصوير ومونتاج",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>تصوير منتجات احترافي يبرز جمالها</li>
          <li>إنتاج فيديوهات إعلانية مبتكرة وجذابة</li>
          <li>تغطية الفعاليات والمؤتمرات بجودة عالية</li>
          <li>مونتاج احترافي يضيف لمسة فنية لمرئياتك</li>
          <li>فيديوهات موشن جرافيك توضيحية</li>
        </ul>
      )
    },
    {
      icon: <MicrophoneIcon className="w-8 h-8" />,
      title: "تعليق صوتي",
      description: (
          <ul className="space-y-2 list-disc list-inside">
              <li>تسجيل إعلانات تجارية بأصوات احترافية</li>
              <li>تعليق صوتي للفيديوهات الترويجية</li>
              <li>خدمات الرد الآلي IVR للشركات</li>
              <li>تسجيل الكتب الصوتية والبودكاست</li>
              <li>مجموعة واسعة من المعلقين واللهجات</li>
          </ul>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
            نحن نقدم حلول التسويق الرقمي
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            من الاستراتيجية إلى التنفيذ، نقدم مجموعة شاملة من الخدمات لمساعدتك على تحقيق أهدافك الرقمية.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;