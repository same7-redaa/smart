import React, { useState, useEffect } from 'react';
import { getProjectsByService, Project } from '../services/projectService';
import MediaModal from './MediaModal';

interface ServicePortfolioPageProps {
    serviceTitle: string;
    onBack: () => void;
}

const ServicePortfolioPage: React.FC<ServicePortfolioPageProps> = ({ serviceTitle, onBack }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: 'image' | 'youtube'; title: string } | null>(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);
                const data = await getProjectsByService(serviceTitle);
                setProjects(data);
            } catch (error) {
                console.error('Error loading projects:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, [serviceTitle]);

    return (
        <section className="pt-4 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44]">
                        {serviceTitle}
                    </h1>
                    <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                        تصفح بعض المشاريع التي نفخر بتقديمها في مجال {serviceTitle}.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center text-gray-600 py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#F59E0B]"></div>
                        <p className="mt-4">جاري التحميل...</p>
                    </div>
                ) : projects.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                    <div 
                                        className="relative cursor-pointer group"
                                        onClick={() => setSelectedMedia({ url: project.mediaUrl, type: project.mediaType, title: project.title })}
                                    >
                                        {project.mediaType === 'youtube' ? (
                                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                                <img
                                                    src={`https://img.youtube.com/vi/${project.mediaUrl.split('/').pop()}/maxresdefault.jpg`}
                                                    alt={project.title}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.src = `https://img.youtube.com/vi/${project.mediaUrl.split('/').pop()}/hqdefault.jpg`;
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform shadow-2xl">
                                                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <img
                                                    src={project.mediaUrl}
                                                    alt={project.title}
                                                    className="w-full h-64 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                                                        <svg className="w-8 h-8 text-[#0A1F44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{project.title}</h3>
                                        {project.description && (
                                            <p className="text-gray-600 mb-3">{project.description}</p>
                                        )}
                                        {project.category && (
                                            <span className="inline-block bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-full text-sm font-semibold">
                                                {project.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Media Modal */}
                        <MediaModal
                            isOpen={selectedMedia !== null}
                            onClose={() => setSelectedMedia(null)}
                            mediaUrl={selectedMedia?.url || ''}
                            mediaType={selectedMedia?.type || 'image'}
                            title={selectedMedia?.title || ''}
                        />
                    </>
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