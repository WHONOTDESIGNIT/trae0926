import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';

export const metadata = {
    title: 'IPL Hair Removal Blog - Tips, Guides & Industry Insights | iShine',
    description: 'Stay updated with the latest IPL hair removal tips, treatment guides, technology insights, and industry news. Expert advice for better results.'
};

const featuredPost = {
    id: 'complete-ipl-guide-2024',
    title: 'The Complete Guide to IPL Hair Removal in 2024',
    excerpt: 'Everything you need to know about IPL hair removal technology, from how it works to achieving the best results at home.',
    image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-15',
    author: 'Dr. Sarah Mitchell',
    category: 'Treatment Guide',
    readTime: '12 min read',
    featured: true
};

const blogPosts = [
    {
        id: 'ipl-vs-laser-comparison',
        title: 'IPL vs Laser Hair Removal: Which is Right for You?',
        excerpt: 'A comprehensive comparison of IPL and laser hair removal technologies, helping you make the best choice for your needs.',
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-10',
        author: 'Emma Johnson',
        category: 'Technology',
        readTime: '8 min read'
    },
    {
        id: 'skin-preparation-tips',
        title: '10 Essential Tips for Preparing Your Skin for IPL Treatment',
        excerpt: 'Maximize your IPL results with proper skin preparation. Learn the do\'s and don\'ts before your treatment.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-08',
        author: 'Lisa Chen',
        category: 'Tips & Tricks',
        readTime: '6 min read'
    },
    {
        id: 'ipl-aftercare-guide',
        title: 'Post-IPL Care: What to Expect and How to Care for Your Skin',
        excerpt: 'Complete aftercare guide to ensure optimal healing and results after your IPL hair removal treatment.',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-05',
        author: 'Dr. Michael Rodriguez',
        category: 'Aftercare',
        readTime: '7 min read'
    },
    {
        id: 'ipl-myths-debunked',
        title: '7 Common IPL Hair Removal Myths Debunked by Experts',
        excerpt: 'Separating fact from fiction about IPL hair removal. Get the truth from industry experts.',
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-03',
        author: 'Dr. Amanda Foster',
        category: 'Education',
        readTime: '9 min read'
    },
    {
        id: 'seasonal-ipl-timing',
        title: 'Best Time of Year for IPL Hair Removal Treatments',
        excerpt: 'Learn why timing matters for IPL treatments and how to plan your hair removal journey around the seasons.',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-28',
        author: 'Jennifer Park',
        category: 'Planning',
        readTime: '5 min read'
    },
    {
        id: 'ipl-technology-advances',
        title: 'Latest Advances in IPL Technology for 2024',
        excerpt: 'Discover the cutting-edge improvements in IPL technology that are making treatments more effective and comfortable.',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-25',
        author: 'Tech Team',
        category: 'Technology',
        readTime: '10 min read'
    }
];

const categories = [
    { name: 'Treatment Guide', count: 15, color: 'blue' },
    { name: 'Technology', count: 12, color: 'green' },
    { name: 'Tips & Tricks', count: 18, color: 'purple' },
    { name: 'Aftercare', count: 8, color: 'orange' },
    { name: 'Education', count: 10, color: 'pink' },
    { name: 'Planning', count: 6, color: 'indigo' }
];

const popularTopics = [
    'IPL vs Laser',
    'Skin Preparation',
    'Treatment Schedule',
    'Side Effects',
    'Best Practices',
    'Device Selection',
    'Results Timeline',
    'Cost Comparison'
];

const getCategoryColor = (category) => {
    const colors = {
        'Treatment Guide': 'bg-blue-100 text-blue-800',
        'Technology': 'bg-green-100 text-green-800',
        'Tips & Tricks': 'bg-purple-100 text-purple-800',
        'Aftercare': 'bg-orange-100 text-orange-800',
        'Education': 'bg-pink-100 text-pink-800',
        'Planning': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
};

export default function BlogPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        IPL Hair Removal Blog
                    </h1>
                    <p className="text-xl mb-8 text-purple-100">
                        Expert insights, treatment guides, and the latest in IPL technology. 
                        Your complete resource for successful hair removal.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">75+</div>
                            <div className="text-sm">Expert Articles</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">10+</div>
                            <div className="text-sm">Expert Authors</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">50K+</div>
                            <div className="text-sm">Monthly Readers</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">Weekly</div>
                            <div className="text-sm">New Content</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
                </div>
                
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="relative aspect-video lg:aspect-square">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded-full">
                                    Featured
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <span className={`inline-block px-3 py-1 text-sm rounded-full mb-3 ${getCategoryColor(featuredPost.category)}`}>
                                    {featuredPost.category}
                                </span>
                                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                    {featuredPost.title}
                                </h3>
                            </div>
                            
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <span>👤</span>
                                    <span>{featuredPost.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>📅</span>
                                    <span>{featuredPost.date}</span>
                                </div>
                                <span>{featuredPost.readTime}</span>
                            </div>
                            
                            <Link href={`/blog/${featuredPost.id}`} className="btn btn-lg inline-flex">
                                Read Full Article →
                            </Link>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Categories */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
                </div>
                
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="text-3xl mb-3">
                                {index === 0 && '📖'}
                                {index === 1 && '⚡'}
                                {index === 2 && '💡'}
                                {index === 3 && '🩹'}
                                {index === 4 && '🎓'}
                                {index === 5 && '📅'}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                            <p className="text-gray-600 text-sm">{category.count} articles</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Recent Posts */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            
                            <div className="space-y-3">
                                <div>
                                    <span className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${getCategoryColor(post.category)}`}>
                                        {post.category}
                                    </span>
                                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
                                        {post.title}
                                    </h3>
                                </div>
                                
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-3">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <span>{post.author}</span>
                                </div>
                                
                                <Link href={`/blog/${post.id}`} className="text-purple-600 text-sm hover:underline inline-flex items-center">
                                    Read More →
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Sidebar Content */}
            <section className="grid lg:grid-cols-3 gap-8">
                {/* Popular Topics */}
                <Card>
                    <h3 className="font-bold text-lg mb-4">Popular Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {popularTopics.map((topic, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-colors">
                                {topic}
                            </span>
                        ))}
                    </div>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                    <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Get the latest IPL tips and insights delivered to your inbox weekly.
                    </p>
                    <div className="space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input w-full"
                        />
                        <button className="btn w-full">
                            Subscribe
                        </button>
                    </div>
                </Card>

                {/* Quick Links */}
                <Card>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <div className="space-y-2">
                        <Link href="/ipl-hair-removal" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                            IPL Technology Guide
                        </Link>
                        <Link href="/services" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                            Our Services
                        </Link>
                        <Link href="/work" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                            Success Stories
                        </Link>
                        <Link href="/contact" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                            Contact Experts
                        </Link>
                    </div>
                </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your IPL Journey?
                </h2>
                <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
                    Have questions about IPL hair removal? Our experts are here to help you achieve the best results.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg bg-white text-pink-600 hover:bg-gray-100">
                        Get Expert Advice
                    </Link>
                    <Link href="/ipl-hair-removal" className="btn btn-lg border-2 border-white text-white hover:bg-white/10">
                        Learn About IPL
                    </Link>
                </div>
            </section>
        </div>
    );
}