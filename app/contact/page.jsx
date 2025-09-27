import { Card } from 'components/card';

export const metadata = {
    title: 'Contact Us - iShine IPL Hair Removal Device Manufacturer',
    description: 'Contact iShine for IPL hair removal device customization services. We provide appearance design, functional development, mass production, and regulatory certification one-stop solutions.'
};

const contactInfo = [
    {
        title: 'Company Address',
        content: 'High-tech Industrial Park, Nanshan District, Shenzhen, China',
        description: 'Welcome to visit our production facility by appointment'
    },
    {
        title: 'Contact Phone',
        content: '+86 400-123-4567',
        description: 'Professional customer service 9:00-18:00 weekdays'
    },
    {
        title: 'Email Address',
        content: 'sales@ishine-tech.com',
        description: 'Professional reply within 24 hours'
    },
    {
        title: 'Business Hours',
        content: 'Monday to Friday 9:00-18:00',
        description: 'Emergency contact service available on holidays'
    }
];

const serviceTypes = [
    {
        title: 'Product Customization Inquiry',
        description: 'Appearance design, functional development, technical solutions',
        action: 'product-inquiry'
    },
    {
        title: 'Regulatory Certification Consultation',
        description: 'CE, FDA, FCC and other country certification applications',
        action: 'certification-inquiry'
    },
    {
        title: 'Partnership Application',
        description: 'Agent and distributor partnership opportunities',
        action: 'partnership-inquiry'
    },
    {
        title: 'Technical Support',
        description: 'Product technical issues and after-sales service',
        action: 'technical-support'
    }
];

const officeHours = [
    { day: 'Monday to Friday', time: '9:00 - 18:00', status: 'Regular business hours' },
    { day: 'Saturday', time: '9:00 - 12:00', status: 'Half-day business hours' },
    { day: 'Sunday & Holidays', time: 'Emergency contact', status: 'Emergency matters only' }
];

export default function ContactPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        Professional IPL hair removal device customization services, let us create value for your brand
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="text-2xl mb-2">💬</div>
                            <div className="font-semibold">24-Hour Response</div>
                            <div className="opacity-80">Quick reply to your inquiries</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="text-2xl mb-2">👥</div>
                            <div className="font-semibold">Professional Team</div>
                            <div className="opacity-80">15 years of industry experience</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="text-2xl mb-2">🌍</div>
                            <div className="font-semibold">Global Service</div>
                            <div className="opacity-80">Support for 30+ country certifications</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Multiple contact methods, choose the most suitable communication method for you
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-teal-600 text-2xl">
                                    {index === 0 && '📍'}
                                    {index === 1 && '📞'}
                                    {index === 2 && '✉'}
                                    {index === 3 && '🕒'}
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                            <p className="text-gray-800 font-medium mb-2">{info.content}</p>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Service Types */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Service Consultation</h2>
                    <p className="text-gray-600">
                        Choose the service type you need, we will provide professional advice
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceTypes.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                            <div className="text-4xl text-blue-600 mb-4">
                                {index === 0 && '🏢'}
                                {index === 1 && '🌍'}
                                {index === 2 && '👥'}
                                {index === 3 && '🎧'}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                            <button className="text-blue-600 text-sm font-medium hover:underline">
                                Contact Now →
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Send Message</h2>
                    <p className="text-gray-600 mb-8">
                        Fill out the form below, our professional team will contact you within 24 hours
                    </p>
                    
                    <Card>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="input w-full"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="input w-full"
                                        placeholder="Enter company name"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="input w-full"
                                        placeholder="Enter email address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="input w-full"
                                        placeholder="Enter contact phone"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Inquiry Type
                                </label>
                                <select className="input w-full">
                                    <option value="">Select inquiry type</option>
                                    <option value="product">Product Customization Inquiry</option>
                                    <option value="certification">Regulatory Certification Consultation</option>
                                    <option value="partnership">Partnership Application</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Detailed Requirements *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="input w-full resize-none"
                                    placeholder="Please describe your requirements in detail, including product type, quantity, time requirements, etc..."
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn w-full">
                                Send Message →
                            </button>
                        </form>
                    </Card>
                </div>

                <div className="space-y-8">
                    {/* Office Hours */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
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
                        <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                        <Card>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <span className="text-blue-600 text-xl">📞</span>
                                    <div>
                                        <div className="font-medium text-gray-900">Sales Hotline</div>
                                        <div className="text-sm text-blue-600">+86 400-123-4567</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                    <span className="text-green-600 text-xl">💬</span>
                                    <div>
                                        <div className="font-medium text-gray-900">Online Customer Service</div>
                                        <div className="text-sm text-green-600">WeChat: ishine-service</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                    <span className="text-purple-600 text-xl">✉</span>
                                    <div>
                                        <div className="font-medium text-gray-900">Email Inquiry</div>
                                        <div className="text-sm text-purple-600">sales@ishine-tech.com</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                        <Card>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="font-medium text-gray-900 mb-1">What is the minimum order quantity?</div>
                                    <div className="text-gray-600">MOQ varies from 500-2000 units depending on product type.</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900 mb-1">What is the delivery time?</div>
                                    <div className="text-gray-600">OEM products 15-30 days, ODM custom products 45-90 days.</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900 mb-1">Which certifications do you support?</div>
                                    <div className="text-gray-600">CE, FDA, FCC, RoHS and 30+ other country certifications.</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}