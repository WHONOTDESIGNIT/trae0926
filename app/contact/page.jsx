import { Card } from 'components/card';
import { 
    MapPin, 
    Phone, 
    Mail, 
    Clock, 
    MessageSquare, 
    Send,
    Building,
    Globe,
    Users,
    Headphones
} from 'lucide-react';

export const metadata = {
    title: '联系我们 - iShine IPL脱毛仪制造商',
    description: '联系iShine获取IPL脱毛仪定制服务。提供外观设计、功能开发、批量生产、法规认证一站式解决方案。'
};

const contactInfo = [
    {
        icon: MapPin,
        title: '公司地址',
        content: '中国深圳市南山区科技园高新技术产业园区',
        description: '欢迎预约参观我们的生产基地'
    },
    {
        icon: Phone,
        title: '联系电话',
        content: '+86 400-123-4567',
        description: '工作日 9:00-18:00 专业客服'
    },
    {
        icon: Mail,
        title: '邮箱地址',
        content: 'sales@ishine-tech.com',
        description: '24小时内专业回复'
    },
    {
        icon: Clock,
        title: '工作时间',
        content: '周一至周五 9:00-18:00',
        description: '节假日提供紧急联系服务'
    }
];

const serviceTypes = [
    {
        icon: Building,
        title: '产品定制咨询',
        description: '外观设计、功能开发、技术方案',
        action: 'product-inquiry'
    },
    {
        icon: Globe,
        title: '法规认证咨询',
        description: 'CE、FDA、FCC等各国认证申请',
        action: 'certification-inquiry'
    },
    {
        icon: Users,
        title: '合作伙伴申请',
        description: '代理商、经销商合作机会',
        action: 'partnership-inquiry'
    },
    {
        icon: Headphones,
        title: '技术支持',
        description: '产品技术问题、售后服务',
        action: 'technical-support'
    }
];

const officeHours = [
    { day: '周一至周五', time: '9:00 - 18:00', status: '正常工作时间' },
    { day: '周六', time: '9:00 - 12:00', status: '半天工作时间' },
    { day: '周日及节假日', time: '紧急联系', status: '仅处理紧急事务' }
];

export default function ContactPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        联系我们
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        专业的IPL脱毛仪定制服务，让我们为您的品牌创造价值
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="bg-white/10 rounded-lg p-4">
                            <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                            <div className="font-semibold">24小时响应</div>
                            <div className="opacity-80">快速回复您的咨询</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                            <Users className="h-8 w-8 mx-auto mb-2" />
                            <div className="font-semibold">专业团队</div>
                            <div className="opacity-80">15年行业经验</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                            <Globe className="h-8 w-8 mx-auto mb-2" />
                            <div className="font-semibold">全球服务</div>
                            <div className="opacity-80">支持30+国家认证</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">联系方式</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        多种联系方式，选择最适合您的沟通方式
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="h-8 w-8 text-teal-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                                <p className="text-gray-800 font-medium mb-2">{info.content}</p>
                                <p className="text-gray-600 text-sm">{info.description}</p>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Service Types */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">服务咨询</h2>
                    <p className="text-gray-600">
                        选择您需要的服务类型，我们将为您提供专业建议
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceTypes.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                <button className="text-blue-600 text-sm font-medium hover:underline">
                                    立即咨询 →
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Contact Form */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-6">发送消息</h2>
                    <p className="text-gray-600 mb-8">
                        填写下方表单，我们的专业团队将在24小时内与您联系
                    </p>
                    
                    <Card>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        姓名 *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="input w-full"
                                        placeholder="请输入您的姓名"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        公司名称 *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="input w-full"
                                        placeholder="请输入公司名称"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        邮箱地址 *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="input w-full"
                                        placeholder="请输入邮箱地址"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        联系电话
                                    </label>
                                    <input
                                        type="tel"
                                        className="input w-full"
                                        placeholder="请输入联系电话"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    咨询类型
                                </label>
                                <select className="input w-full">
                                    <option value="">请选择咨询类型</option>
                                    <option value="product">产品定制咨询</option>
                                    <option value="certification">法规认证咨询</option>
                                    <option value="partnership">合作伙伴申请</option>
                                    <option value="technical">技术支持</option>
                                    <option value="other">其他咨询</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    详细需求 *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="input w-full resize-none"
                                    placeholder="请详细描述您的需求，包括产品类型、数量、时间要求等..."
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn w-full">
                                <Send className="mr-2 h-4 w-4" />
                                发送消息
                            </button>
                        </form>
                    </Card>
                </div>

                <div className="space-y-8">
                    {/* Office Hours */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">工作时间</h3>
                        <Card>
                            <div className="space-y-4">
                                {officeHours.map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                        <div>
                                            <div className="font-medium text-gray-900">{schedule.day}</div>
                                            <div className="text-sm text-gray-600">{schedule.status}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-medium text-gray-900">{schedule.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Quick Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">快速联系</h3>
                        <Card>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <div className="font-medium text-gray-900">销售热线</div>
                                        <div className="text-sm text-blue-600">+86 400-123-4567</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                    <MessageSquare className="h-5 w-5 text-green-600" />
                                    <div>
                                        <div className="font-medium text-gray-900">在线客服</div>
                                        <div className="text-sm text-green-600">微信: ishine-service</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                    <Mail className="h-5 w-5 text-purple-600" />
                                    <div>
                                        <div className="font-medium text-gray-900">邮件咨询</div>
                                        <div className="text-sm text-purple-600">sales@ishine-tech.com</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">常见问题</h3>
                        <Card>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="font-medium text-gray-900 mb-1">最小起订量是多少？</div>
                                    <div className="text-gray-600">根据产品类型不同，MOQ从500-2000台不等。</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900 mb-1">交付周期多长？</div>
                                    <div className="text-gray-600">OEM产品15-30天，ODM定制产品45-90天。</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900 mb-1">支持哪些认证？</div>
                                    <div className="text-gray-600">CE、FDA、FCC、RoHS等30多个国家认证。</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}