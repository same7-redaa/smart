import React from 'react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, PhoneIcon, MailIcon } from './Icons';

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    cta: string;
    href: string;
    hoverColor: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, cta, href, hoverColor }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1`}
    >
        <div className={`p-4 rounded-full text-white bg-[#3B82F6] transition-colors duration-300 ${hoverColor}`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold mt-4 mb-1 text-[#0A1F44]">{title}</h3>
        <p className="text-[#3B82F6] font-semibold">{cta}</p>
    </a>
);

const Contact: React.FC = () => {
    const contactMethods = [
        {
            icon: <WhatsAppIcon className="w-8 h-8"/>,
            title: "واتساب",
            cta: "أرسل رسالة الآن",
            href: "https://wa.me/+966123456789", // Replace with actual number
            hoverColor: "group-hover:bg-[#25D366]",
        },
        {
            icon: <FacebookIcon className="w-8 h-8"/>,
            title: "فيسبوك",
            cta: "تابع صفحتنا",
            href: "https://www.facebook.com/", // Replace with actual URL
            hoverColor: "group-hover:bg-[#1877F2]",
        },
        {
            icon: <InstagramIcon className="w-8 h-8"/>,
            title: "انستغرام",
            cta: "شاهد أعمالنا",
            href: "https://www.instagram.com/", // Replace with actual URL
            hoverColor: "group-hover:bg-[#E4405F]",
        },
        {
            icon: <PhoneIcon className="w-8 h-8"/>,
            title: "اتصال هاتفي",
            cta: "اتصل بنا مباشرة",
            href: "tel:+966123456789", // Replace with actual number
            hoverColor: "group-hover:bg-[#3B82F6]",
        },
        {
            icon: <MailIcon className="w-8 h-8"/>,
            title: "بريد إلكتروني",
            cta: "راسلنا للاستفسارات",
            href: "mailto:info@smartmedia.com", // Replace with actual email
            hoverColor: "group-hover:bg-[#778599]",
        },
    ];

    return (
        <section className="py-20 bg-[#F9FAFB]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
                        تواصل معنا وتابعنا
                    </h2>
                    <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                        نحن هنا لمساعدتك. اختر الطريقة التي تناسبك للتواصل معنا أو متابعة آخر أخبارنا وأعمالنا.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {contactMethods.map((method, index) => (
                        <ContactCard key={index} {...method} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;