import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { Calendar, User, ArrowRight, TrendingUp, Zap, Globe, Award } from 'lucide-react';

export const metadata = {
    title: '新闻资讯 - iShine IPL技术与行业动态',
    description: '了解iShine最新动态、IPL技术发展趋势、行业资讯和产品更新。专业的IPL脱毛仪制造商资讯平台。'
};

const featuredNews = {
    id: 'ipl-technology-breakthrough-2024',
    title: 'iShine发布新一代IPL技术，脱毛效率提升40%',
    excerpt: '经过两年的研发，iShine成功推出新一代IPL强脉冲光技术，在保证安全性的前提下，脱毛效率较上一代产品提升40%，为合作伙伴带来更强的市场竞争力。',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-15',
    author: '技术部',
    category: '技术创新',
    readTime: '5分钟'
};

const newsCategories = [
    { name: '公司动态', count: 12, color: 'blue' },
    { name: '技术创新', count: 8, color: 'green' },
    { name: '行业资讯', count: 15, color: 'purple' },
    { name: '产品发布', count: 6, color: 'orange' }
];

const newsList = [
    {
        id: 'ces-2024-exhibition',
        title: 'iShine亮相CES 2024，展示最新IPL美容科技',
        excerpt: '在拉斯维加斯举办的CES 2024展会上，iShine展示了多款创新IPL产品，吸引了众多国际买家关注。',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-10',
        author: '市场部',
        category: '公司动态',
        readTime: '3分钟'
    },
    {
        id: 'fda-approval-new-product',
        title: '新产品获得FDA认证，正式进入美国市场',
        excerpt: 'iShine最新研发的IPL家用脱毛仪通过FDA严格审核，获得市场准入资格，标志着公司在美国市场的重要突破。',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2024-01-05',
        author: '法规部',
        category: '产品发布',
        readTime: '4分钟'
    },
    {
        id: 'ipl-market-trends-2024',
        title: '2024年IPL美容设备市场趋势分析',
        excerpt: '根据最新市场调研数据，全球IPL美容设备市场预计将在2024年增长25%，家用设备需求尤为强劲。',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-28',
        author: '市场研究部',
        category: '行业资讯',
        readTime: '6分钟'
    },
    {
        id: 'smart-ipl-technology',
        title: '智能IPL技术：AI算法优化治疗效果',
        excerpt: 'iShine研发团队成功将AI算法集成到IPL设备中，实现智能肤色识别和个性化治疗参数调节。',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-20',
        author: '研发中心',
        category: '技术创新',
        readTime: '7分钟'
    },
    {
        id: 'sustainability-initiative',
        title: 'iShine启动可持续发展计划，推进绿色制造',
        excerpt: '公司宣布启动全面的可持续发展计划，包括使用环保材料、优化生产流程、减少碳排放等措施。',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-15',
        author: '可持续发展部',
        category: '公司动态',
        readTime: '5分钟'
    },
    {
        id: 'european-partnership',
        title: '与欧洲知名美容品牌达成战略合作',
        excerpt: 'iShine与欧洲领先的美容品牌签署长期合作协议，将为其提供定制化IPL产品解决方案。',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: '2023-12-10',
        author: '商务部',
        category: '公司动态',
        readTime: '4分钟'
    }
];

const getCategoryColor = (category) => {
    const colors = {
        '公司动态': 'bg-blue-100 text-blue-800',
        '技术创新': 'bg-green-100 text-green-800',
        '行业资讯': 'bg-purple-100 text-purple-800',
        '产品发布': 'bg-orange-100 text-orange-800'
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
                        新闻资讯
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        了解iShine最新动态与IPL行业发展趋势
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
                    <h2 className="text-2xl font-bold mb-4">头条新闻</h2>
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
                                    <Calendar className="h-4 w-4" />
                                    <span>{featuredNews.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    <span>{featuredNews.author}</span>
                                </div>
                                <span>{featuredNews.readTime}阅读</span>
                            </div>
                            
                            <Link href={`/news/${featuredNews.id}`} className="btn inline-flex">
                                阅读全文
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </Card>
            </section>

            {/* News Categories */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">新闻分类</h2>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {newsCategories.map((category, index) => {
                        const icons = [TrendingUp, Zap, Globe, Award];
                        const Icon = icons[index];
                        return (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                                <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{category.count} 篇文章</p>
                                <Link href={`/news/category/${category.name}`} className="text-blue-600 text-sm hover:underline">
                                    查看更多 →
                                </Link>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* News List */}
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">最新资讯</h2>
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
                                    阅读更多
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">订阅我们的资讯</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    第一时间获取iShine最新动态、技术创新和行业资讯
                </p>
                <div className="max-w-md mx-auto flex gap-3">
                    <input
                        type="email"
                        placeholder="请输入您的邮箱地址"
                        className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                    />
                    <button className="btn bg-blue-600 hover:bg-blue-700">
                        订阅
                    </button>
                </div>
            </section>
        </div>
    );
}