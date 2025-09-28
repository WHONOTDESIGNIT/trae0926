'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ChevronRight } from 'lucide-react';

// 导航菜单项配置
const navItems = [
    { linkText: 'IPL Hair Removal', href: '/ipl-hair-removal' },
    { linkText: 'Products', href: '/products' },
    { linkText: 'Solutions', href: '/services' },
    { linkText: 'Cases', href: '/cases' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Resources', href: '/learn' },
    { linkText: 'Contact', href: '/contact' }
];

// 面包屑路径映射
const breadcrumbMap: Record<string, string> = {
    '/': 'Home',
    '/ipl-hair-removal': 'IPL Hair Removal',
    '/products': 'Products',
    '/services': 'Solutions',
    '/cases': 'Cases',
    '/about': 'About Us',
    '/learn': 'Resources',
    '/contact': 'Contact Us',
    '/news': 'News'
};

interface HeaderProps {
    transparent?: boolean;
    sticky?: boolean;
}

export function Header({ transparent = false, sticky = true }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    // 监听滚动事件实现粘性导航
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        if (sticky) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [sticky]);

    // 生成面包屑导航
    const generateBreadcrumbs = () => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const breadcrumbs = [{ name: 'Home', href: '/' }];
        
        let currentPath = '';
        pathSegments.forEach(segment => {
            currentPath += `/${segment}`;
            const name = breadcrumbMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
            breadcrumbs.push({ name, href: currentPath });
        });
        
        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();
    const showBreadcrumbs = pathname !== '/' && breadcrumbs.length > 1;

    return (
        <>
            {/* 主导航栏 */}
            <header 
                className={`${
                    sticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
                } transition-all duration-300 ${
                    transparent && !isScrolled 
                        ? 'bg-transparent' 
                        : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
                }`}
            >
                <nav className="container mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/ISHINE LOGO.webp"
                                alt="iShine IPL - Professional Hair Removal Technology"
                                width={120}
                                height={40}
                                className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
                                priority
                            />
                        </Link>

                        {/* 桌面端导航菜单 */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                                        pathname === item.href 
                                            ? 'text-primary-500' 
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {item.linkText}
                                </Link>
                            ))}
                        </div>

                        {/* 右侧操作区 */}
                        <div className="flex items-center space-x-4">
                            {/* 搜索按钮 */}
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* CTA按钮 */}
                            <Link
                                href="/contact"
                                className="hidden sm:inline-flex items-center px-6 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                                Get Quote
                            </Link>

                            {/* 移动端菜单按钮 */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <Menu className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* 搜索栏 */}
                {isSearchOpen && (
                    <div className="border-t border-gray-100 bg-white px-4 py-4">
                        <div className="container mx-auto">
                            <div className="relative max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products, solutions..."
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* 移动端菜单 */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
                isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
            }`}>
                {/* 背景遮罩 */}
                <div 
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`} 
                    onClick={() => setIsMenuOpen(false)} 
                />
                
                {/* 菜单面板 */}
                <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    {/* 菜单头部 */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                        <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/ISHINE LOGO.webp"
                                alt="iShine IPL - Professional Hair Removal Technology"
                                width={100}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                    
                    {/* 搜索栏 */}
                    <div className="p-4 border-b border-gray-100">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    
                    {/* 导航菜单 */}
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="p-4 space-y-1">
                            {navItems.map((item, index) => (
                                <li key={index} className={`transform transition-all duration-300 delay-${index * 50} ${
                                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                                            pathname === item.href
                                                ? 'bg-primary-50 text-primary-600 shadow-sm'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                                        }`}
                                    >
                                        <span className="font-medium">{item.linkText}</span>
                                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                                            pathname === item.href ? 'text-primary-600' : 'text-gray-400 group-hover:translate-x-1'
                                        }`} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        {/* CTA按钮区域 */}
                        <div className="p-4 border-t border-gray-100 bg-gray-50">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center w-full px-4 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 active:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Get Quote</span>
                                <ChevronRight className="w-4 h-4 ml-2" />
                            </Link>
                            
                            {/* 联系信息 */}
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500 text-center">
                                    Need help? Contact us
                                </p>
                                <p className="text-sm font-medium text-gray-700 text-center mt-1">
                                    +1 (555) 123-4567
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* 面包屑导航 */}
            {showBreadcrumbs && (
                <div className={`bg-gray-50 border-b border-gray-200 ${sticky ? 'mt-16 lg:mt-20' : ''}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-6 py-2 sm:py-3">
                        <nav className="flex items-center overflow-x-auto scrollbar-hide">
                            <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm whitespace-nowrap min-w-0">
                                {breadcrumbs.map((crumb, index) => (
                                    <div key={crumb.href} className="flex items-center shrink-0">
                                        {index > 0 && (
                                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mx-1 sm:mx-2 shrink-0" />
                                        )}
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className="text-gray-900 font-medium truncate max-w-[120px] sm:max-w-none">
                                                {crumb.name}
                                            </span>
                                        ) : (
                                            <Link
                                                href={crumb.href}
                                                className="text-gray-600 hover:text-primary-500 transition-colors truncate max-w-[80px] sm:max-w-none"
                                            >
                                                {crumb.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
