import React from 'react';
import { portfolioData } from './PortfolioData';
import { ProjectCard } from './Portfolio';

interface ServicePortfolioPageProps {
    serviceTitle: string;
    onBack: () => void; // onBack is kept for potential future use, though not visibly used now
}

const ServicePortfolioPage: React.FC<ServicePortfolioPageProps> = ({ serviceTitle, onBack }) => {
    const projects = portfolioData.filter(p => p.category === serviceTitle);

    return (
        <section className="py-20 bg-[#F9FAFB] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 pt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44]">
                        {serviceTitle}
                    </h1>
                    <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                        تصفح بعض المشاريع التي نفخر بتقديمها في مجال {serviceTitle}.
                    </p>
                </div>
                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 p-12 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-[#0A1F44]">لا توجد أعمال لعرضها حاليًا</h3>
                        <p className="mt-2">نحن نعمل بجد على إضافة المزيد من المشاريع المذهلة في هذا القسم. يرجى التحقق مرة أخرى قريبًا!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicePortfolioPage;