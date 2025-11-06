import React from 'react';
import { portfolioData } from './PortfolioData';

export const ProjectCard: React.FC<{ imageUrl: string; title: string; }> = ({ imageUrl, title }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg h-80">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-2xl font-bold text-white transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{title}</h3>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    // Show a curated list of projects on the homepage
    const projects = portfolioData.slice(0, 4);
    
    return (
        <section className="bg-[#0A1F44] py-20 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">أحدث مشاريعنا المدهشة</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        نحن نجمع بين الإبداع والتكنولوجيا لإنشاء تجارب رقمية لا تُنسى.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
