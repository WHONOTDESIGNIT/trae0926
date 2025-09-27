import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';

export const metadata = {
    title: 'Success Cases - iShine IPL Hair Removal Device Manufacturing Partners',
    description: 'View iShine\'s successful cooperation cases with global brands, learn how we help clients achieve successful IPL hair removal device market launches.'
};

const cases = [
    {
        id: 'beauty-brand-europe',
        title: 'European Premium Beauty Brand IPL Product Line',
        client: {
            name: 'BeautyTech Europe',
            industry: 'Beauty Care',
            location: 'Germany',
            size: 'Medium Enterprise'
        },
        project: {
            type: 'ODM Custom Development',
            duration: '6 months',
            quantity: '10,000 units/year',
            market: 'European Market'
        },
        challenge: 'Client needed a high-end IPL hair removal device compliant with European CE standards, requiring unique appearance design and advanced safety features.',
        solution: [
            'Customized appearance design integrating brand elements',
            'Upgraded safety detection system passing CE certification',
            'Optimized user interface enhancing user experience',
            'Established dedicated production line ensuring quality consistency'
        ],
        results: [
            { metric: 'Market Share', value: '+25%', description: 'Market share increase in target market' },
            { metric: 'Customer Satisfaction', value: '98%', description: 'User satisfaction rating' },
            { metric: 'Sales Growth', value: '+150%', description: 'Annual sales growth' }
        ],
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500',
        testimonial: {
            quote: 'iShine\'s professional team helped us successfully create high-quality IPL products compliant with European standards, with excellent market response.',
            author: 'Maria Schmidt',
            position: 'Product Director'
        }
    },
    {
        id: 'startup-usa',
        title: 'US Startup Rapid Market Entry Project',
        client: {
            name: 'GlowTech Startup',
            industry: 'Beauty Technology',
            location: 'United States',
            size: 'Startup'
        },
        project: {
            type: 'OEM Manufacturing',
            duration: '3 months',
            quantity: '5,000 units',
            market: 'North American Market'
        },
        challenge: 'Startup with limited funding needed rapid market entry to capture market share, requiring competitive pricing and reliable quality.',
        solution: [
            'Selected mature product platform reducing development costs',
            'Optimized production processes improving cost efficiency',
            'Assisted FDA registration accelerating market entry',
            'Provided flexible payment terms reducing financial pressure'
        ],
        results: [
            { metric: 'Time to Market', value: '3 months', description: 'From contract to product launch' },
            { metric: 'Cost Savings', value: '40%', description: 'Savings compared to independent development' },
            { metric: 'Quality Pass Rate', value: '99.8%', description: 'Product quality pass rate' }
        ],
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500',
        testimonial: {
            quote: 'As a startup, iShine provided tremendous support, helping us quickly enter the market and achieve success.',
            author: 'John Davis',
            position: 'Founder & CEO'
        }
    },
    {
        id: 'chain-brand-asia',
        title: 'Asian Beauty Chain Brand Customization Project',
        client: {
            name: 'Asia Beauty Chain',
            industry: 'Beauty Chain',
            location: 'Japan',
            size: 'Large Enterprise'
        },
        project: {
            type: 'White Label Customization',
            duration: '4 months',
            quantity: '20,000 units/year',
            market: 'Asia-Pacific Market'
        },
        challenge: 'Chain brand needed unified product standards while requiring sales in multiple countries, needing to meet different certification requirements.',
        solution: [
            'Standardized product design ensuring quality consistency',
            'Multi-country certification applications meeting local regulations',
            'Established supply chain management system ensuring stable supply',
            'Provided technical training supporting after-sales service'
        ],
        results: [
            { metric: 'Store Coverage', value: '200+', description: 'Number of stores covered' },
            { metric: 'Customer Retention', value: '85%', description: 'Customer repeat purchase rate' },
            { metric: 'Brand Recognition', value: '+300%', description: 'Brand awareness increase' }
        ],
        image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500',
        testimonial: {
            quote: 'iShine not only provided quality products but more importantly provided complete solutions, enabling our business rapid expansion.',
            author: 'Yuki Tanaka',
            position: 'Procurement Director'
        }
    }
];

const stats = [
    { label: 'Partner Brands', value: '50+' },
    { label: 'Countries Served', value: '30+' },
    { label: 'Project Success Rate', value: '98%' },
    { label: 'Average Delivery Time', value: '45 days' }
];

export default function CasesPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        Success Cases
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        Partnering with global brands to create successful IPL hair removal device market stories
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-2 opacity-80">
                                    {index === 0 && '🏢'}
                                    {index === 1 && '🌍'}
                                    {index === 2 && '👥'}
                                    {index === 3 && '⚡'}
                                </div>
                                <div className="font-bold text-2xl">{stat.value}</div>
                                <div className="text-sm opacity-80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cases Grid */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Customer Success Stories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Learn how we help different types of clients achieve their IPL product goals
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
                                                <span>🏢</span>
                                                <span>{caseStudy.client.name}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span>📍</span>
                                                <span>{caseStudy.client.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span>📅</span>
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
                                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                                        <p className="text-gray-700 text-sm">{caseStudy.challenge}</p>
                                    </div>
                                    
                                    {/* Solution */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
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
                                        <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
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
                                            <span className="text-yellow-500 mt-0.5">★</span>
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
                    Become Our Next Success Story
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Whether you're a startup or an established brand, we have the experience to help you succeed
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg">
                        Start Partnership →
                    </Link>
                    <Link href="/services" className="btn btn-lg bg-gray-700 hover:bg-gray-600">
                        Learn About Services
                    </Link>
                </div>
            </section>
        </div>
    );
}