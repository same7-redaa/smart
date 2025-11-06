
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './Icons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
            {children}
        </a>
    </li>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0A1F44] text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Smart Media</h3>
                        <p className="text-gray-400">
                           نحن وكالة تسويق رقمي متكاملة تساعد الشركات على النمو والازدهار في العالم الرقمي.
                        </p>
                        <div className="flex space-x-4 space-x-reverse pt-2">
                           <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">روابط سريعة</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#">الرئيسية</FooterLink>
                            <FooterLink href="#">خدماتنا</FooterLink>
                            <FooterLink href="#">أعمالنا</FooterLink>
                            <FooterLink href="#">اتصل بنا</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">خدماتنا</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#">التسويق الإلكتروني</FooterLink>
                            <FooterLink href="#">إدارة الحملات الإعلانية</FooterLink>
                            <FooterLink href="#">تصميمات سوشيال ميديا</FooterLink>
                            <FooterLink href="#">إنتاج المحتوى المرئي</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">معلومات الاتصال</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>الرياض، المملكة العربية السعودية</li>
                            <li>info@smartmedia.com</li>
                            <li>+966 12 345 6789</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Smart Media. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
