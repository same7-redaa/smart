
import React from 'react';

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
    <div className="absolute -top-6 bg-[#3B82F6] text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#F9FAFB]">
      {number}
    </div>
    <h3 className="mt-8 text-xl font-bold text-[#0A1F44] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
            منهجية عملنا الاحترافية
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            نتبع عملية منظمة لضمان تقديم أعلى مستويات الجودة وتحقيق أفضل النتائج في كل مشروع.
          </p>
        </div>
        <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
                <ProcessStep 
                    number="01"
                    title="البحث والتحليل"
                    description="نقوم بتحليل السوق والمنافسين وفهم جمهورك المستهدف لوضع أساس قوي للاستراتيجية."
                />
                <ProcessStep 
                    number="02"
                    title="التخطيط والاستراتيجية"
                    description="نصمم استراتيجية تسويقية مخصصة تتضمن الأهداف، الرسائل الرئيسية، والقنوات المناسبة."
                />
                <ProcessStep 
                    number="03"
                    title="التنفيذ والإطلاق"
                    description="نطلق الحملات الإعلانية، وننشئ المحتوى، وندير حساباتك على وسائل التواصل الاجتماعي."
                />
                <ProcessStep 
                    number="04"
                    title="القياس والتحسين"
                    description="نراقب أداء الحملات باستمرار ونقدم تقارير دورية، مع إجراء تحسينات لتعظيم النتائج."
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
