export interface Project {
    id: number;
    imageUrl: string;
    title: string;
    category: string;
}

export const portfolioData: Project[] = [
    // التسويق الإلكتروني
    { id: 1, imageUrl: 'https://picsum.photos/seed/ecom-campaign/600/800', title: 'حملة إعلانية لمتجر إلكتروني', category: 'التسويق الإلكتروني' },
    { id: 2, imageUrl: 'https://picsum.photos/seed/seo-project/600/800', title: 'تحسين محركات البحث لموقع طبي', category: 'التسويق الإلكتروني' },
    { id: 3, imageUrl: 'https://picsum.photos/seed/google-ads/600/800', title: 'إدارة حملات جوجل لشركة عقارية', category: 'التسويق الإلكتروني' },
    
    // تصوير ومونتاج
    { id: 4, imageUrl: 'https://picsum.photos/seed/promo-video/600/800', title: 'إنتاج فيديو ترويجي لمنتج جديد', category: 'تصوير ومونتاج' },
    { id: 5, imageUrl: 'https://picsum.photos/seed/event-coverage/600/800', title: 'تغطية فعاليات ومؤتمر تقني', category: 'تصوير ومونتاج' },
    { id: 10, imageUrl: 'https://picsum.photos/seed/restaurant-promo/600/800', title: 'فيديو إعلاني لسلسلة مطاعم', category: 'تصوير ومونتاج' },


    // تصميمات سوشيال ميديا
    { id: 6, imageUrl: 'https://picsum.photos/seed/branding-project/600/800', title: 'تصميم هوية بصرية لعلامة تجارية', category: 'تصميمات سوشيال ميديا' },
    { id: 7, imageUrl: 'https://picsum.photos/seed/social-campaign/600/800', title: 'تصاميم حملة إطلاق منتج تجميلي', category: 'تصميمات سوشيال ميديا' },

    // تعليق صوتي
    { id: 8, imageUrl: 'https://picsum.photos/seed/voice-over-ad/600/800', title: 'تعليق صوتي لإعلان تلفزيوني', category: 'تعليق صوتي' },

    // إنشاء الخطط التسويقية
    { id: 9, imageUrl: 'https://picsum.photos/seed/startup-strategy/600/800', title: 'استراتيجية تسويق لشركة ناشئة', category: 'إنشاء الخطط التسويقية' },
];
