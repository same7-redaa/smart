import React, { useState, useEffect } from 'react';
import { FeaturedProject, getAllFeaturedProjects } from '../services/featuredProjectsService';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  serviceLink?: string;
  onNavigate?: (serviceTitle: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, serviceLink, onNavigate }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (serviceLink && onNavigate) {
      e.preventDefault();
      onNavigate(serviceLink);
    }
  };

  return (
    <div 
      className={`group relative overflow-hidden rounded-lg shadow-lg h-80 ${serviceLink ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {description && (
          <p className="text-white text-sm mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

interface PortfolioProps {
  onNavigate?: (serviceTitle: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
    const [projects, setProjects] = useState<FeaturedProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await getAllFeaturedProjects();
                setProjects(data.slice(0, 4)); // عرض أول 4 مشاريع
            } catch (error) {
                console.error('Error loading featured projects:', error);
            } finally {
                setLoading(false);
            }
        };
        loadProjects();
    }, []);
    
    return (
        <section className="bg-[#0A1F44] py-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/95 to-[#0A1F44]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">أحدث مشاريعنا المدهشة</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        نحن نجمع بين الإبداع والتكنولوجيا لإنشاء تجارب رقمية لا تُنسى.
                    </p>
                </div>
                {loading ? (
                    <p className="text-center text-gray-400 py-8">جاري التحميل...</p>
                ) : projects.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">لا توجد مشاريع حالياً</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                imageUrl={project.imageUrl}
                                title={project.title}
                                description={project.description}
                                serviceLink={project.serviceLink}
                                onNavigate={onNavigate}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
