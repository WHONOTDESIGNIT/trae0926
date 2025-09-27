import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { Zap, Shield, Award, Globe, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'IPL家用脱毛仪产品系列 - iShine专业制造',
    description: 'iShine提供全系列IPL家用脱毛仪产品，从入门级到专业级，满足不同市场需求。FDA认证，CE标准，品质保证。'
};

const products = [
    {
        id: 'classic-series',
        name: 'iShine Classic 经典系列',
        model: 'IS-C100',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: '入门级IPL脱毛仪，适合家庭日常使用，性价比高',
        features: [
            '515-1200nm宽光谱',
            '5档能量调节',
            '30万次闪光',
            '3.1cm²治疗窗口'
        ],
        applications: ['家用', '入门级'],
        targetMarket: '大众消费市场'
    },
    {
        id: 'pro-series',
        name: 'iShine Pro 专业系列',
        model: 'IS-P200',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: '专业级IPL设备，更强功率，更快效果',
        features: [
            '590nm精准波长',
            '8档智能调节',
            '50万次闪光',
            '4.2cm²大治疗窗口'
        ],
        applications: ['专业', '高端'],
        targetMarket: '高端消费市场'
    },
    {
        id: 'mini-series',
        name: 'iShine Mini 便携系列',
        model: 'IS-M50',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: '小巧便携，旅行必备，不占空间',
        features: [
            '紧凑设计',
            '3档能量选择',
            '20万次闪光',
            '2.5cm²精准窗口'
        ],
        applications: ['便携', '旅行'],
        targetMarket: '年轻消费群体'
    }
];

const specifications = [
    { label: '波长范围', value: '515-1200nm' },
    { label: '能量密度', value: '1-5 J/cm²' },
    { label: '安全等级', value: 'IEC 60825-1' },
    { label: '认证标准', value: 'CE/FDA/FCC' }
];

export default function ProductsPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        iShine IPL家用脱毛仪产品系列
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        专业制造，精工品质，为全球品牌提供完整的IPL脱毛仪解决方案
                    </p>
                    <div className="flex justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            <span>FDA认证</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            <span>CE标准</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            <span>全球服务</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">产品系列</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        从入门级到专业级，满足不同市场定位和用户需求
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="h-full hover:shadow-lg transition-shadow">
                            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                {product.name}
                            </h3>
                            
                            <p className="text-sm text-gray-600 mb-2">
                                型号：{product.model}
                            </p>
                            
                            <p className="text-gray-700 text-sm mb-4">
                                {product.description}
                            </p>
                            
                            <div className="space-y-2 mb-4">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.applications.map((app, index) => (
                                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                        {app}
                                    </span>
                                ))}
                            </div>
                            
                            <p className="text-xs text-gray-500 mb-4">
                                目标市场：{product.targetMarket}
                            </p>
                            
                            <Link href="/contact" className="btn w-full">
                                获取详细资料
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">技术规格</h2>
                    <p className="text-gray-600">
                        符合国际标准的技术参数，确保产品安全性和有效性
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specifications.map((spec, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="font-semibold text-gray-900 mb-2">{spec.label}</h3>
                                <p className="text-blue-600 font-bold">{spec.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gray-800 text-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                    准备开始您的IPL产品定制项目？
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    联系我们的专业团队，获取详细的产品规格书和定制方案
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg">
                        立即咨询
                    </Link>
                    <Link href="/services" className="btn btn-lg bg-gray-700 hover:bg-gray-600">
                        了解服务
                    </Link>
                </div>
            </section>
        </div>
    );
}