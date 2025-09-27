import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';

export const metadata = {
    title: 'News & Updates - iShine IPL Technology & Industry Insights',
    description: 'Stay updated with iShine latest news, IPL technology developments, industry insights and product updates. Professional IPL hair removal device manufacturer news platform.'
};

const featuredNews = {
    id: 'ipl-technology-breakthrough-2024',
    title: 'iShine Launches Next-Generation IPL Technology, 40% Efficiency Improvement',
    excerpt: 'After two years of R&D, iShine successfully launched next-generation IPL intense pulsed light technology, improving hair removal efficiency by 40% while maintaining safety, bringing stronger market competitiveness to partners.',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-15',
    author: 'Technical Department',
    category: 'Technology Innovation',
    readTime: '5 min read'
};

const newsCategories = [
    { name: 'Company News', count: 12, color: 'blue' },
    { name: 'Technology Innovation', count: 8, color: 'green' },
    { name: 'Industry Insights', count: 15, color: 'purple' },
    { name: 'Product Releases', count: 6, color: 'orange' }
];

const newsList = [
    {
        id: 'ces-2024-exhibition',
        title: 'iShine Showcases Latest IPL Beauty Technology at CES 2024',
        excerpt: 'At CES 2024 in Las Vegas, iShine displayed multiple innovative IPL products, attracting attention from numerous international buyers.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-10',
        author: 'Marketing Department',
        category: 'Company News',
        readTime: '3 min read'
    },
    {
        id: 'fda-approval-new-product',
        title: 'New Product Receives FDA Approval, Officially Enters US Market',
        excerpt: 'iShine\'s latest IPL home hair removal device passed FDA strict review and obtained market access qualification, marking an important breakthrough in the US market.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-05',
        author: 'Regulatory Department',
        category: 'Product Releases',
        readTime: '4 min read'
    },
    {
        id: 'ipl-market-trends-2024',
        title: '2024 IPL Beauty Device Market Trend Analysis',
        excerpt: 'According to latest market research data, the global IPL beauty device market is expected to grow 25% in 2024, with particularly strong demand for home devices.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-28',
        author: 'Market Research Department',
        category: 'Industry Insights',
        readTime: '6 min read'
    },
    {
        id: 'smart-ipl-technology',
        title: 'Smart IPL Technology: AI Algorithms Optimize Treatment Effects',
        excerpt: 'iShine R&D team successfully integrated AI algorithms into IPL devices, achieving intelligent skin tone recognition and personalized treatment parameter adjustment.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-20',
        author: 'R&D Center',
        category: 'Technology Innovation',
        readTime: '7 min read'
    },
    {
        id: 'sustainability-initiative',
        title: 'iShine Launches Sustainability Initiative, Promoting Green Manufacturing',
        excerpt: 'Company announces comprehensive sustainability plan including use of eco-friendly materials, optimized production processes, and reduced carbon emissions.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-15',
        author: 'Sustainability Department',
        category: 'Company News',
        readTime: '5 min read'
    },
    {
        id: 'european-partnership',
        title: 'Strategic Partnership with Leading European Beauty Brand',
        excerpt: 'iShine signs long-term cooperation agreement with leading European beauty brand, providing customized IPL product solutions.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-10',
        author: 'Business Department',
        category: 'Company News',
        readTime: '4 min read'
    }
];

const getCategoryColor = (category) => {
    const colors = {
        'Company News': 'bg-blue-100 text-blue-800',
        'Technology Innovation': 'bg-green-100 text-green-800',
        'Industry Insights': 'bg-purple-100 text-purple-800',
        'Product Releases': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
};

export default function NewsPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        News & Updates
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        Stay updated with iShine latest developments and IPL industry trends
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {newsCategories.map((category, index) => (
                            <div key={index} className="bg-white/10 rounded-lg p-3">
                                <div className="font-bold text-lg">{category.count}</div>
                                <div className="text-sm">{category.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured News */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">Featured News</h2>
                </div>
                
                <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative aspect-video md:aspect-square">
                            <Image
                                src={featuredNews.image}
                                alt={featuredNews.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <span className={`inline-block px-3 py-1 text-sm rounded-full mb-3 ${getCategoryColor(featuredNews.category)}`}>
                                    {featuredNews.category}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {featuredNews.title}
                                </h3>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed">
                                {featuredNews.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <span>📅</span>
                                    <span>{featuredNews.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>👤</span>
                                    <span>{featuredNews.author}</span>
                                </div>
                                <span>{featuredNews.readTime}</span>
                            </div>
                            
                            <Link href={`/news/${featuredNews.id}`} className="btn inline-flex">
                                Read Full Article →
                            </Link>
                        </div>
                    </div>
                </Card>
            </section>

            {/* News Categories */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">News Categories</h2>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {newsCategories.map((category, index) => {
                        const icons = ['📈', '⚡', '🌍', '🏆'];
                        const icon = icons[index];
                        return (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="text-4xl mb-4">{icon}</div>
                                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{category.count} articles</p>
                                <Link href={`/news/category/${category.name}`} className="text-blue-600 text-sm hover:underline">
                                    View More →
                                </Link>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* News List */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">Latest News</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsList.map((news) => (
                        <Card key={news.id} className="h-full hover:shadow-lg transition-shadow">
                            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            
                            <div className="space-y-3">
                                <div>
                                    <span className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${getCategoryColor(news.category)}`}>
                                        {news.category}
                                    </span>
                                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                                        {news.title}
                                    </h3>
                                </div>
                                
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {news.excerpt}
                                </p>
                                
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-3">
                                        <span>{news.date}</span>
                                        <span>{news.readTime}</span>
                                    </div>
                                    <span>{news.author}</span>
                                </div>
                                
                                <Link href={`/news/${news.id}`} className="text-blue-600 text-sm hover:underline inline-flex items-center">
                                    Read More →
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Get the latest iShine updates, technology innovations and industry insights delivered to your inbox
                </p>
                <div className="max-w-md mx-auto flex gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                    />
                    <button className="btn bg-blue-600 hover:bg-blue-700">
                        Subscribe
                    </button>
                </div>
            </section>
        </div>
    );
}