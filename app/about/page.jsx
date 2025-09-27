import Image from 'next/image';
import { Card } from 'components/card';
import { 
    Factory, 
    Users, 
    Award, 
    Globe, 
    Lightbulb, 
    Shield, 
    TrendingUp,
    MapPin,
    Phone,
    Mail
} from 'lucide-react';

export const metadata = {
    title: '关于iShine - 专业IPL脱毛仪制造商',
    description: 'iShine成立于2008年，专注IPL脱毛仪研发制造15年，为全球50+品牌提供一站式定制服务。ISO13485认证，值得信赖。'
};

const milestones = [
    { year: '2008', event: 'iShine成立，专注IPL技术研发' },
    { year: '2012', event: '获得ISO13485医疗器械质量管理体系认证' },
    { year: '2015', event: '建立10000㎡现代化生产基地' },
    { year: '2018', event: '产品出口至30+国家和地区' },
    { year: '2020', event: '年产能突破50万台' },
    { year: '2023', event: '累计服务全球50+品牌客户' }
];

const team = [
    {
        name: '张明华',
        position: '创始人兼CEO',
        experience: '20年美容设备行业经验',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        name: '李技术',
        position: '技术总监',
        experience: '15年IPL技术研发经验',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        name: '王品质',
        position: '质量总监',
        experience: '12年质量管理经验',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        name: '陈国际',
        position: '国际业务总监',
        experience: '10年国际贸易经验',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
];

const stats = [
    { icon: Factory, label: '生产基地', value: '10,000㎡' },
    { icon: Users, label: '专业团队', value: '200+人' },
    { icon: Award, label: '技术专利', value: '30+项' },
    { icon: Globe, label: '服务国家', value: '30+个' }
];

const certifications = [
    { name: 'ISO 13485', description: '医疗器械质量管理体系' },
    { name: 'ISO 9001', description: '质量管理体系' },
    { name: 'CE认证', description: '欧盟安全认证' },
    { name: 'FDA注册', description: '美国食品药品监督管理局' },
    { name: 'FCC认证', description: '美国联邦通信委员会' },
    { name: 'RoHS认证', description: '欧盟环保指令' }
];

const values = [
    {
        icon: Lightbulb,
        title: '创新驱动',
        description: '持续投入研发，推动IPL技术创新'
    },
    {
        icon: Shield,
        title: '品质至上',
        description: '严格质量控制，确保产品安全可靠'
    },
    {
        icon: Users,
        title: '客户为本',
        description: '以客户需求为导向，提供贴心服务'
    },
    {
        icon: TrendingUp,
        title: '持续改进',
        description: '不断优化流程，提升服务效率'
    }
];

export default function AboutPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        关于iShine
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        15年专注IPL脱毛仪制造，为全球品牌提供专业定制服务
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

            {/* Company Introduction */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">公司简介</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            iShine成立于2008年，是一家专业的IPL家用脱毛仪制造商，总部位于中国深圳。
                            我们专注于IPL（强脉冲光）技术的研发和应用，为全球客户提供从产品设计、
                            功能开发、批量生产到法规认证的一站式解决方案。
                        </p>
                        <p>
                            经过15年的发展，iShine已成为行业内的知名品牌，拥有10000平方米的现代化
                            生产基地，年产能超过50万台。我们的产品远销30多个国家和地区，
                            为全球50多个品牌提供专业的OEM/ODM服务。
                        </p>
                        <p>
                            我们始终坚持"创新、品质、服务"的经营理念，通过持续的技术创新和
                            严格的质量控制，为客户创造更大的价值，共同推动IPL美容行业的发展。
                        </p>
                    </div>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="iShine工厂"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Development Milestones */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">发展历程</h2>
                    <p className="text-gray-600">
                        15年专业积累，见证IPL技术发展历程
                    </p>
                </div>
                
                <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <div className="w-20 text-right">
                                <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                            </div>
                            <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <div className="flex-1">
                                <p className="text-gray-700">{milestone.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Team */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">核心团队</h2>
                    <p className="text-gray-600">
                        经验丰富的专业团队，为您提供优质服务
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <Card key={index} className="text-center">
                            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-blue-600 text-sm mb-2">{member.position}</p>
                            <p className="text-gray-600 text-xs">{member.experience}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Core Values */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">核心价值观</h2>
                    <p className="text-gray-600">
                        指导我们前进的核心理念
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="font-semibold mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-600">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Certifications */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">资质认证</h2>
                    <p className="text-gray-600">
                        权威认证，品质保证
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                            <p className="text-sm text-gray-600">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Info */}
            <section className="bg-gray-800 text-white rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">联系我们</h2>
                    <p className="text-gray-300">
                        期待与您的合作
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                        <h3 className="font-semibold mb-2">公司地址</h3>
                        <p className="text-gray-300 text-sm">
                            中国深圳市南山区科技园<br />
                            高新技术产业园区
                        </p>
                    </div>
                    <div>
                        <Phone className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                        <h3 className="font-semibold mb-2">联系电话</h3>
                        <p className="text-gray-300 text-sm">
                            +86 400-123-4567<br />
                            +86 755-8888-9999
                        </p>
                    </div>
                    <div>
                        <Mail className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                        <h3 className="font-semibold mb-2">邮箱地址</h3>
                        <p className="text-gray-300 text-sm">
                            sales@ishine-tech.com<br />
                            info@ishine-tech.com
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}