import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'One-Stop IPL Hair Removal Device Customization Services - iShine Manufacturing',
    description: 'iShine provides comprehensive IPL hair removal device customization services from appearance design, functional prototyping, mass production to regulatory compliance. 15 years of manufacturing experience, trusted partner.'
};

const services = [
    {
        id: 'design',
        title: 'Appearance Design Service',
        description: 'Professional industrial design team creating unique product appearance',
        features: [
            '3D modeling design',
            'Ergonomic optimization',
            'Brand visual integration',
            'Material texture selection',
            'Color scheme customization'
        ],
        timeline: '10-15 working days',
        deliverables: ['Design proposal', '3D renderings', 'Engineering drawings']
    },
    {
        id: 'prototype',
        title: 'Functional Prototype Development',
        description: 'Rapid prototyping to verify product functionality and performance',
        features: [
            'Function verification testing',
            'Performance parameter optimization',
            'Safety performance testing',
            'User experience optimization',
            'Technical feasibility assessment'
        ],
        timeline: '20-30 working days',
        deliverables: ['Functional prototype', 'Test reports', 'Optimization recommendations']
    },
    {
        id: 'manufacturing',
        title: 'Mass Production Service',
        description: 'Scalable production with strict quality control and on-time delivery',
        features: [
            'Automated production lines',
            'Full-process quality monitoring',
            'Flexible capacity configuration',
            'Supply chain management',
            'Packaging customization service'
        ],
        timeline: '30-45 working days',
        deliverables: ['Finished product delivery', 'Quality inspection reports', 'Packaging solutions']
    },
    {
        id: 'compliance',
        title: 'Regulatory Certification Application',
        description: 'Assist in applying for certifications from various countries to ensure compliant market entry',
        features: [
            'CE certification application',
            'FDA registration service',
            'FCC compliance testing',
            'RoHS environmental certification',
            'Various national standards consultation'
        ],
        timeline: '60-90 working days',
        deliverables: ['Certification certificates', 'Test reports', 'Compliance documentation']
    }
];

const processSteps = [
    {
        step: 1,
        title: 'Requirements Communication',
        description: 'In-depth understanding of your product needs and market positioning',
        duration: '1-3 days'
    },
    {
        step: 2,
        title: 'Solution Design',
        description: 'Develop detailed design and technical solutions',
        duration: '5-10 days'
    },
    {
        step: 3,
        title: 'Prototype Production',
        description: 'Create functional prototypes to verify design solutions',
        duration: '15-25 days'
    },
    {
        step: 4,
        title: 'Mass Production',
        description: 'Scalable production with strict quality control',
        duration: '30-45 days'
    },
    {
        step: 5,
        title: 'Certification Application',
        description: 'Assist in applying for certifications and regulatory compliance',
        duration: '60-90 days'
    }
];

const advantages = [
    {
        title: 'Rapid Response',
        description: '24-hour inquiry response, quick project initiation'
    },
    {
        title: 'Quality Assurance',
        description: 'ISO13485 certified, full-process quality traceability'
    },
    {
        title: 'Professional Team',
        description: '15 years of industry experience, professional technical team'
    },
    {
        title: 'Global Service',
        description: 'Support global certifications, assist product export'
    }
];

export default function ServicesPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        One-Stop IPL Hair Removal Device Customization Services
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        From appearance design to mass production, from functional development to regulatory certification, iShine provides complete solutions
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">15+</div>
                            <div>Years Experience</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">500+</div>
                            <div>Successful Projects</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">50+</div>
                            <div>Partner Brands</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                            <div className="font-bold text-lg">30</div>
                            <div>Country Certifications</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Core Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Professional one-stop services connecting your IPL products seamlessly from concept to market
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-600 font-bold text-lg">
                                        {service.id === 'design' && '✏'}
                                        {service.id === 'prototype' && '⚙'}
                                        {service.id === 'manufacturing' && '🏭'}
                                        {service.id === 'compliance' && '📋'}
                                    </span>
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
                                        <span className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <span>Delivery Time:</span>
                                    <span className="font-semibold">{service.timeline}</span>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span>Deliverables:</span>
                                    <span className="ml-2">{service.deliverables.join(', ')}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Process Steps */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Service Process</h2>
                    <p className="text-gray-600">
                        Standardized process ensuring efficient project progression
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
                    <h2 className="text-2xl font-bold mb-4">Why Choose iShine</h2>
                    <p className="text-gray-600">
                        Professional, reliable, and efficient partner
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-600 text-2xl">
                                    {index === 0 && '⚡'}
                                    {index === 1 && '🛡'}
                                    {index === 2 && '👥'}
                                    {index === 3 && '🌍'}
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2">{advantage.title}</h3>
                            <p className="text-sm text-gray-600">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gray-800 text-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                    Ready to Launch Your IPL Product Project?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Contact our professional team to get detailed service solutions and quotations
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg">
                        Get Service Solutions
                    </Link>
                    <Link href="/cases" className="btn btn-lg bg-gray-700 hover:bg-gray-600">
                        View Success Cases
                    </Link>
                </div>
            </section>
        </div>
    );
}