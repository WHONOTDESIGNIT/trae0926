import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { 
    Building, 
    MapPin, 
    Calendar, 
    TrendingUp, 
    Award, 
    ArrowRight,
    Star,
    Globe,
    Users,
    Zap
} from 'lucide-react';

export const metadata = {
    title: '成功案例 - iShine IPL脱毛仪制造合作伙伴',
    description: '查看iShine与全球品牌的成功合作案例，了解我们如何帮助客户实现IPL脱毛仪产品的成功上市。'
};

const cases = [
    {
        id: 'beauty-brand-europe',
        title: '欧洲知名美容品牌IPL产品线',
        client: {
            name: 'BeautyTech Europe',
            industry: '美容护理',
            location: '德国',
            size: '中型企业'
        },
        project: {
            type: 'ODM定制开发',
            duration: '6个月',
            quantity: '10,000台/年',
            market: '欧洲市场'
        },
        challenge: '客户需要一款符合欧洲CE标准的高端IPL脱毛仪，要求独特的外观设计和先进的安全功能。',
        solution: [
            '定制化外观设计，融合品牌元素',
            '升级安全检测系统，通过CE认证',
            '优化用户界面，提升使用体验',
            '建立专属生产线，确保品质一致性'
        ],
        results: [
            { metric: '市场份额', value: '+25%', description: '在目标市场的份额提升' },
            { metric: '客户满意度', value: '98%', description: '用户满意度评分' },
            { metric: '销售增长', value: '+150%', description: '年销售额增长' }
        ],
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500',
        testimonial: {
            quote: 'iShine的专业团队帮助我们成功打造了符合欧洲标准的高品质IPL产品，市场反响非常好。',
            author: 'Maria Schmidt',
            position: '产品总监'
        }
    },
    {
        id: 'startup-usa',
        title: '美国初创公司快速上市项目',
        client: {
            name: 'GlowTech Startup',
            industry: '科技美容',
            location: '美国',
            size: '初创企业'
        },
        project: {
            type: 'OEM代工',
            duration: '3个月',
            quantity: '5,000台',
            market: '北美市场'
        },
        challenge: '初创公司资金有限，需要快速上市抢占市场，同时要求产品具有竞争力的价格和可靠的质量。',
        solution: [
            '选择成熟的产品平台，降低开发成本',
            '优化生产工艺，提高成本效益',
            '协助FDA注册，加速上市进程',
            '提供灵活的付款方式，降低资金压力'
        ],
        results: [
            { metric: '上市时间', value: '3个月', description: '从签约到产品上市' },
            { metric: '成本节省', value: '40%', description: '相比自主开发节省成本' },
            { metric: '质量合格率', value: '99.8%', description: '产品质量合格率' }
        ],
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500',
        testimonial: {
            quote: '作为初创公司，iShine给了我们很大的支持，帮助我们快速进入市场并获得成功。',
            author: 'John Davis',
            position: '创始人兼CEO'
        }
    },
    {
        id: 'chain-brand-asia',
        title: '亚洲连锁美容品牌定制项目',
        client: {
            name: 'Asia Beauty Chain',
            industry: '美容连锁',
            location: '日本',
            size: '大型企业'
        },
        project: {
            type: '白标定制',
            duration: '4个月',
            quantity: '20,000台/年',
            market: '亚太市场'
        },
        challenge: '连锁品牌需要统一的产品标准，同时要求在多个国家销售，需要满足不同的认证要求。',
        solution: [
            '标准化产品设计，确保品质一致',
            '多国认证申请，满足各地法规',
            '建立供应链管理系统，保证供货稳定',
            '提供技术培训，支持售后服务'
        ],
        results: [
            { metric: '门店覆盖', value: '200+', description: '覆盖门店数量' },
            { metric: '客户复购率', value: '85%', description: '客户重复购买率' },
            { metric: '品牌认知度', value: '+300%', description: '品牌知名度提升' }
        ],
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500',
        testimonial: {
            quote: 'iShine不仅提供了优质的产品，更重要的是提供了完整的解决方案，让我们的业务快速扩张。',
            author: 'Yuki Tanaka',
            position: '采购总监'
        }
    }
];

const stats = [
    { icon: Building, label: '合作品牌', value: '50+' },
    { icon: Globe, label: '服务国家', value: '30+' },
    { icon: Users, label: '项目成功率', value: '98%' },
    { icon: Zap, label: '平均交付时间', value: '45天' }
];

export default function CasesPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        成功案例
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        与全球品牌携手合作，共创IPL脱毛仪市场成功故事
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <Icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                                    <div className="font-bold text-2xl">{stat.value}</div>
                                    <div className="text-sm opacity-80">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Cases Grid */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">客户成功故事</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        了解我们如何帮助不同类型的客户实现他们的IPL产品目标
                    </p>
                </div>

                <div className="space-y-12">
                    {cases.map((caseStudy, index) => (
                        <Card key={caseStudy.id} className="overflow-hidden">
                            <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                                {/* Image */}
                                <div className={`relative aspect-video md:aspect-square ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                                    <Image
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                
                                {/* Content */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {caseStudy.title}
                                        </h3>
                                        
                                        {/* Client Info */}
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                <span>{caseStudy.client.name}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4" />
                                                <span>{caseStudy.client.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{caseStudy.project.duration}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Project Type */}
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                                            {caseStudy.project.type}
                                        </span>
                                    </div>
                                    
                                    {/* Challenge */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">挑战</h4>
                                        <p className="text-gray-700 text-sm">{caseStudy.challenge}</p>
                                    </div>
                                    
                                    {/* Solution */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">解决方案</h4>
                                        <ul className="space-y-1">
                                            {caseStudy.solution.map((item, idx) => (
                                                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Results */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3">成果</h4>
                                        <div className="grid grid-cols-3 gap-4">
                                            {caseStudy.results.map((result, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="font-bold text-lg text-blue-600">{result.value}</div>
                                                    <div className="text-xs text-gray-600">{result.metric}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Testimonial */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start gap-2 mb-2">
                                            <Star className="h-4 w-4 text-yellow-500 mt-0.5" />
                                            <p className="text-sm italic text-gray-700">"{caseStudy.testimonial.quote}"</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                                            <div className="text-xs text-gray-600">{caseStudy.testimonial.position}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gray-800 text-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                    成为我们的下一个成功案例
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    无论您是初创公司还是知名品牌，我们都有丰富的经验帮助您成功
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg">
                        开始合作
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link href="/services" className="btn btn-lg bg-gray-700 hover:bg-gray-600">
                        了解服务
                    </Link>
                </div>
            </section>
        </div>
    );
}