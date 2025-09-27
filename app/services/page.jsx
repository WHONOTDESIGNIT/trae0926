import Link from 'next/link';
import { Card } from 'components/card';
import { 
    Factory, 
    Lightbulb, 
    Palette, 
    Cog, 
    FileText, 
    Globe, 
    ArrowRight,
    CheckCircle,
    Clock,
    Shield,
    Users
} from 'lucide-react';

export const metadata = {
    title: '一站式IPL脱毛仪定制服务 - iShine制造',
    description: 'iShine提供从外观设计、功能样机、批量生产到各国法规申请的一站式IPL脱毛仪定制服务。15年制造经验，值得信赖。'
};

const services = [
    {
        id: 'design',
        title: '外观设计服务',
        icon: Palette,
        description: '专业工业设计团队，打造独特的产品外观',
        features: [
            '3D建模设计',
            '人机工程学优化',
            '品牌视觉融合',
            '材质纹理选择',
            '色彩方案定制'
        ],
        timeline: '10-15个工作日',
        deliverables: ['设计方案', '3D渲染图', '工程图纸']
    },
    {
        id: 'prototype',
        title: '功能样机开发',
        icon: Cog,
        description: '快速原型制作，验证产品功能和性能',
        features: [
            '功能验证测试',
            '性能参数调优',
            '安全性能测试',
            '用户体验优化',
            '技术可行性评估'
        ],
        timeline: '20-30个工作日',
        deliverables: ['功能样机', '测试报告', '优化建议']
    },
    {
        id: 'manufacturing',
        title: '批量生产服务',
        icon: Factory,
        description: '规模化生产，严格质量控制，按时交付',
        features: [
            '自动化生产线',
            '全程质量监控',
            '柔性产能配置',
            '供应链管理',
            '包装定制服务'
        ],
        timeline: '30-45个工作日',
        deliverables: ['成品交付', '质检报告', '包装方案']
    },
    {
        id: 'compliance',
        title: '法规认证申请',
        icon: FileText,
        description: '协助申请各国认证，确保产品合规上市',
        features: [
            'CE认证申请',
            'FDA注册服务',
            'FCC合规测试',
            'RoHS环保认证',
            '各国标准咨询'
        ],
        timeline: '60-90个工作日',
        deliverables: ['认证证书', '测试报告', '合规文档']
    }
];

const processSteps = [
    {
        step: 1,
        title: '需求沟通',
        description: '深入了解您的产品需求和市场定位',
        duration: '1-3天'
    },
    {
        step: 2,
        title: '方案设计',
        description: '制定详细的设计和技术方案',
        duration: '5-10天'
    },
    {
        step: 3,
        title: '样机制作',
        description: '制作功能样机，验证设计方案',
        duration: '15-25天'
    },
    {
        step: 4,
        title: '批量生产',
        description: '规模化生产，严格质量控制',
        duration: '30-45天'
    },
    {
        step: 5,
        title: '认证申请',
        description: '协助申请各国认证和法规合规',
        duration: '60-90天'
    }
];

const advantages = [
    {
        icon: Clock,
        title: '快速响应',
        description: '24小时内响应询盘，快速启动项目'
    },
    {
        icon: Shield,
        title: '品质保证',
        description: 'ISO13485认证，全程质量追溯'
    },
    {
        icon: Users,
        title: '专业团队',
        description: '15年行业经验，专业技术团队'
    },
    {
        icon: Globe,
        title: '全球服务',
        description: '支持全球认证，协助产品出海'
    }
];

export default function ServicesPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        一站式IPL脱毛仪定制服务
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        从外观设计到批量生产，从功能开发到法规认证，iShine为您提供完整解决方案
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">15+</div>
                            <div>年制造经验</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">500+</div>
                            <div>成功项目</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">50+</div>
                            <div>合作品牌</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">30</div>
                            <div>国家认证</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">核心服务</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        专业的一站式服务，让您的IPL产品从概念到市场无缝对接
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {service.title}
                                    </h3>
                                </div>
                                
                                <p className="text-gray-700 mb-4">
                                    {service.description}
                                </p>
                                
                                <div className="space-y-2 mb-4">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>交付周期：</span>
                                        <span className="font-semibold">{service.timeline}</span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <span>交付物：</span>
                                        <span className="ml-2">{service.deliverables.join('、')}</span>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Process Steps */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">服务流程</h2>
                    <p className="text-gray-600">
                        标准化流程，确保项目高效推进
                    </p>
                </div>
                
                <div className="grid md:grid-cols-5 gap-6">
                    {processSteps.map((step, index) => (
                        <div key={step.step} className="text-center relative">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                {step.step}
                            </div>
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
                            )}
                            <h3 className="font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                            <span className="text-xs text-blue-600 font-medium">{step.duration}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Advantages */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">选择iShine的优势</h2>
                    <p className="text-gray-600">
                        专业、可靠、高效的合作伙伴
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => {
                        const Icon = advantage.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                                <p className="text-sm text-gray-600">{advantage.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gray-800 text-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                    准备启动您的IPL产品项目？
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    联系我们的专业团队，获取详细的服务方案和报价
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg">
                        获取服务方案
                    </Link>
                    <Link href="/cases" className="btn btn-lg bg-gray-700 hover:bg-gray-600">
                        查看成功案例
                    </Link>
                </div>
            </section>
        </div>
    );
}