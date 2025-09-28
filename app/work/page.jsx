import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';

export const metadata = {
    title: 'Our Work - IPL Hair Removal Success Stories | iShine',
    description: 'Explore our portfolio of successful IPL hair removal projects, client transformations, and manufacturing excellence. See real results from our professional devices.'
};

const portfolioItems = [
    {
        id: 'premium-spa-chain',
        title: 'Premium Spa Chain Partnership',
        category: 'Commercial Partnership',
        client: 'Luxury Wellness Group',
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Supplied 200+ professional IPL devices to luxury spa chain across 15 locations.',
        results: [
            '95% client satisfaction rate',
            '40% increase in spa revenue',
            '300% booking increase for hair removal services'
        ],
        duration: '6 months',
        scope: 'Device supply, training, ongoing support'
    },
    {
        id: 'home-device-launch',
        title: 'Consumer Device Launch',
        category: 'Product Development',
        client: 'Beauty Tech Startup',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Complete product development from concept to market launch for home IPL device.',
        results: [
            '50,000 units sold in first year',
            'FDA approval achieved',
            '4.8/5 customer rating'
        ],
        duration: '12 months',
        scope: 'Design, development, certification, manufacturing'
    },
    {
        id: 'clinical-study',
        title: 'Clinical Efficacy Study',
        category: 'Research & Development',
        client: 'Medical Research Institute',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Comprehensive clinical study proving 92% hair reduction efficacy over 12 weeks.',
        results: [
            '92% average hair reduction',
            '98% participant satisfaction',
            'Published in peer-reviewed journal'
        ],
        duration: '18 months',
        scope: 'Clinical trials, data analysis, publication'
    },
    {
        id: 'international-expansion',
        title: 'European Market Entry',
        category: 'Market Expansion',
        client: 'European Beauty Brand',
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Successful launch of IPL devices across 12 European countries with full compliance.',
        results: [
            'CE certification achieved',
            '25 countries regulatory approval',
            '€2M first-year revenue'
        ],
        duration: '9 months',
        scope: 'Regulatory compliance, market entry, distribution'
    },
    {
        id: 'custom-solution',
        title: 'Custom IPL Solution',
        category: 'Custom Development',
        client: 'Dermatology Clinic Chain',
        image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Tailored IPL system for professional dermatology use with advanced features.',
        results: [
            '99.5% treatment success rate',
            '60% faster treatment times',
            '100% client retention'
        ],
        duration: '8 months',
        scope: 'Custom hardware, software development, training'
    },
    {
        id: 'sustainability-project',
        title: 'Eco-Friendly Manufacturing',
        category: 'Sustainability',
        client: 'Green Beauty Initiative',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Developed sustainable IPL device using recycled materials and eco-friendly packaging.',
        results: [
            '70% reduction in carbon footprint',
            '100% recyclable packaging',
            'Green certification achieved'
        ],
        duration: '10 months',
        scope: 'Sustainable design, eco-materials, green certification'
    }
];

const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Satisfied Clients', value: '200+' },
    { label: 'Countries Served', value: '30+' },
    { label: 'Success Rate', value: '98%' }
];

const services = [
    {
        title: 'Product Development',
        description: 'End-to-end IPL device development from concept to market',
        projects: 45
    },
    {
        title: 'Manufacturing',
        description: 'High-quality manufacturing with strict quality control',
        projects: 120
    },
    {
        title: 'Regulatory Support',
        description: 'FDA, CE, and international certification assistance',
        projects: 80
    },
    {
        title: 'Custom Solutions',
        description: 'Tailored IPL solutions for specific client needs',
        projects: 35
    }
];

export default function WorkPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        Our Work & Success Stories
                    </h1>
                    <p className="text-xl mb-8 text-indigo-100">
                        Discover how we've helped clients achieve success with innovative IPL hair removal solutions. 
                        From startups to global brands, see our impact across the industry.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <div className="font-bold text-3xl mb-1">{stat.value}</div>
                                <div className="text-sm text-indigo-200">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive IPL solutions across multiple domains
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">
                                {index === 0 && '🔬'}
                                {index === 1 && '🏭'}
                                {index === 2 && '📋'}
                                {index === 3 && '⚙️'}
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                            <div className="text-blue-600 font-bold">{service.projects} Projects</div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Portfolio Grid */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-600">
                        Showcasing our most impactful IPL hair removal projects
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <Card key={item.id} className="h-full hover:shadow-xl transition-shadow">
                            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{item.client}</p>
                                </div>
                                
                                <p className="text-gray-700 text-sm">
                                    {item.description}
                                </p>
                                
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-sm text-gray-900">Key Results:</h4>
                                    <ul className="space-y-1">
                                        {item.results.map((result, index) => (
                                            <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                                                <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="flex justify-between text-xs text-gray-500 pt-2 border-t">
                                    <span>Duration: {item.duration}</span>
                                    <span>Scope: {item.scope.split(',')[0]}...</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Work Process</h2>
                    <p className="text-xl text-gray-600">
                        How we deliver exceptional IPL solutions
                    </p>
                </div>
                
                <div className="grid md:grid-cols-5 gap-6">
                    {[
                        { step: 1, title: 'Discovery', desc: 'Understanding your needs and goals' },
                        { step: 2, title: 'Strategy', desc: 'Developing tailored solution approach' },
                        { step: 3, title: 'Development', desc: 'Creating and testing IPL solutions' },
                        { step: 4, title: 'Implementation', desc: 'Deploying and launching products' },
                        { step: 5, title: 'Support', desc: 'Ongoing maintenance and optimization' }
                    ].map((phase, index) => (
                        <div key={phase.step} className="text-center relative">
                            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                                {phase.step}
                            </div>
                            {index < 4 && (
                                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-indigo-200 -z-10"></div>
                            )}
                            <h3 className="font-semibold mb-2">{phase.title}</h3>
                            <p className="text-sm text-gray-600">{phase.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
                    <p className="text-xl text-gray-600">
                        What our clients say about working with us
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "iShine delivered beyond our expectations. Their IPL devices helped us increase our spa revenue by 40% in just 6 months.",
                            author: "Sarah Johnson",
                            position: "Spa Director",
                            company: "Luxury Wellness Group"
                        },
                        {
                            quote: "The custom IPL solution they developed for our clinics has revolutionized our hair removal treatments. Exceptional quality and support.",
                            author: "Dr. Michael Chen",
                            position: "Medical Director",
                            company: "Advanced Dermatology"
                        },
                        {
                            quote: "From concept to market launch, iShine was the perfect partner. Their expertise in IPL technology is unmatched.",
                            author: "Emma Rodriguez",
                            position: "Product Manager",
                            company: "Beauty Tech Innovations"
                        }
                    ].map((testimonial, index) => (
                        <Card key={index} className="text-center">
                            <div className="text-yellow-500 text-2xl mb-3">★★★★★</div>
                            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                            <div>
                                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                <div className="text-sm text-gray-600">{testimonial.position}</div>
                                <div className="text-sm text-gray-500">{testimonial.company}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Success Story?
                </h2>
                <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                    Let's discuss how we can help you achieve your IPL hair removal goals with our proven expertise
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100">
                        Start Your Project
                    </Link>
                    <Link href="/services" className="btn btn-lg border-2 border-white text-white hover:bg-white/10">
                        View Our Services
                    </Link>
                </div>
            </section>
        </div>
    );
}