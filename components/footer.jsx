import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    products: [
        { name: 'IPL Classic Series', href: '/products#classic' },
        { name: 'IPL Pro Series', href: '/products#pro' },
        { name: 'IPL Mini Series', href: '/products#mini' },
        { name: 'Custom Solutions', href: '/services' }
    ],
    services: [
        { name: 'Product Design', href: '/services#design' },
        { name: 'Prototype Development', href: '/services#prototype' },
        { name: 'Mass Production', href: '/services#manufacturing' },
        { name: 'Certification Support', href: '/services#compliance' }
    ],
    company: [
        { name: 'About iShine', href: '/about' },
        { name: 'Success Cases', href: '/cases' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Contact Us', href: '/contact' }
    ],
    support: [
        { name: 'Technical Support', href: '/contact#technical' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Quality Assurance', href: '/quality' },
        { name: 'Warranty Policy', href: '/warranty' }
    ]
};

const certifications = [
    { name: 'ISO 13485', icon: '🏆' },
    { name: 'CE', icon: '🇪🇺' },
    { name: 'FDA', icon: '🇺🇸' },
    { name: 'FCC', icon: '📡' }
];

const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'WeChat', href: '#', icon: '💬' }
];

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Image 
                                src="/netlify-logo.svg" 
                                alt="iShine Logo" 
                                width={120} 
                                height={40}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">iShine Technology</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Professional IPL hair removal device manufacturer with 15+ years experience. 
                                Providing one-stop OEM/ODM solutions for global brands.
                            </p>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <span>📍</span>
                                <span>Shenzhen, China</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📞</span>
                                <span>+86 400-123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>✉</span>
                                <span>sales@ishine-tech.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Products</h4>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-300 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Services</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-300 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-300 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-300 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="text-center mb-6">
                        <h4 className="font-semibold text-lg mb-4">Certifications & Standards</h4>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                    <span className="text-lg">{cert.icon}</span>
                                    <span className="text-gray-300">{cert.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-6">
                            <span className="text-sm text-gray-300">Follow Us:</span>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                        title={social.name}
                                    >
                                        <span className="text-xl">{social.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        <div className="text-sm text-gray-300">
                            <span>Business Hours: Mon-Fri 9:00-18:00 (GMT+8)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-950 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-6">
                            <span>© 2024 iShine Technology Co., Ltd. All rights reserved.</span>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}