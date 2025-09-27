import Image from 'next/image';
import { Card } from 'components/card';

export const metadata = {
    title: 'About iShine - Professional IPL Hair Removal Device Manufacturer',
    description: 'iShine was founded in 2008, focusing on IPL hair removal device R&D and manufacturing for 15 years, providing one-stop customization services for 50+ global brands. ISO13485 certified, trusted partner.'
};

const milestones = [
    { year: '2008', event: 'iShine founded, focusing on IPL technology R&D' },
    { year: '2012', event: 'Obtained ISO13485 medical device quality management system certification' },
    { year: '2015', event: 'Established 10,000㎡ modern production base' },
    { year: '2018', event: 'Products exported to 30+ countries and regions' },
    { year: '2020', event: 'Annual production capacity exceeded 500,000 units' },
    { year: '2023', event: 'Served 50+ global brand customers cumulatively' }
];

const team = [
    {
        name: 'Michael Zhang',
        position: 'Founder & CEO',
        experience: '20 years of beauty device industry experience',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        name: 'Dr. Li Tech',
        position: 'Technical Director',
        experience: '15 years of IPL technology R&D experience',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        name: 'Sarah Wang',
        position: 'Quality Director',
        experience: '12 years of quality management experience',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        name: 'David Chen',
        position: 'International Business Director',
        experience: '10 years of international trade experience',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
];

const stats = [
    { label: 'Production Base', value: '10,000㎡' },
    { label: 'Professional Team', value: '200+ people' },
    { label: 'Technical Patents', value: '30+ items' },
    { label: 'Countries Served', value: '30+ countries' }
];

const certifications = [
    { name: 'ISO 13485', description: 'Medical Device Quality Management System' },
    { name: 'ISO 9001', description: 'Quality Management System' },
    { name: 'CE Certification', description: 'European Union Safety Certification' },
    { name: 'FDA Registration', description: 'US Food and Drug Administration' },
    { name: 'FCC Certification', description: 'US Federal Communications Commission' },
    { name: 'RoHS Certification', description: 'EU Environmental Protection Directive' }
];

const values = [
    {
        title: 'Innovation Driven',
        description: 'Continuous R&D investment, driving IPL technology innovation'
    },
    {
        title: 'Quality First',
        description: 'Strict quality control, ensuring product safety and reliability'
    },
    {
        title: 'Customer Oriented',
        description: 'Customer needs-oriented, providing attentive service'
    },
    {
        title: 'Continuous Improvement',
        description: 'Constantly optimizing processes, improving service efficiency'
    }
];

export default function AboutPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        About iShine
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        15 years focused on IPL hair removal device manufacturing, providing professional customization services for global brands
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-2 opacity-80">
                                    {index === 0 && '🏭'}
                                    {index === 1 && '👥'}
                                    {index === 2 && '🏆'}
                                    {index === 3 && '🌍'}
                                </div>
                                <div className="font-bold text-2xl">{stat.value}</div>
                                <div className="text-sm opacity-80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Introduction */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Company Introduction</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            iShine was founded in 2008 as a professional IPL hair removal device manufacturer 
                            headquartered in Shenzhen, China. We specialize in IPL (Intense Pulsed Light) 
                            technology research and application, providing global customers with one-stop 
                            solutions from product design, functional development, mass production to 
                            regulatory certification.
                        </p>
                        <p>
                            After 15 years of development, iShine has become a well-known brand in the industry, 
                            with a 10,000 square meter modern production base and annual production capacity 
                            exceeding 500,000 units. Our products are exported to more than 30 countries 
                            and regions, providing professional OEM/ODM services for more than 50 global brands.
                        </p>
                        <p>
                            We always adhere to the business philosophy of "Innovation, Quality, Service", 
                            creating greater value for customers through continuous technological innovation 
                            and strict quality control, jointly promoting the development of the IPL beauty industry.
                        </p>
                    </div>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="iShine Factory"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Development Milestones */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Development Milestones</h2>
                    <p className="text-gray-600">
                        15 years of professional accumulation, witnessing IPL technology development
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
                    <h2 className="text-2xl font-bold mb-4">Core Team</h2>
                    <p className="text-gray-600">
                        Experienced professional team providing quality services
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
                    <h2 className="text-2xl font-bold mb-4">Core Values</h2>
                    <p className="text-gray-600">
                        Core principles guiding our progress
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 text-2xl">
                                    {index === 0 && '💡'}
                                    {index === 1 && '🛡'}
                                    {index === 2 && '👥'}
                                    {index === 3 && '📈'}
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2">{value.title}</h3>
                            <p className="text-sm text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Qualifications & Certifications</h2>
                    <p className="text-gray-600">
                        Authoritative certifications, quality assurance
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
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-300">
                        Looking forward to cooperating with you
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="text-4xl mb-3 text-blue-400">📍</div>
                        <h3 className="font-semibold mb-2">Company Address</h3>
                        <p className="text-gray-300 text-sm">
                            High-tech Industrial Park<br />
                            Nanshan District, Shenzhen, China
                        </p>
                    </div>
                    <div>
                        <div className="text-4xl mb-3 text-blue-400">📞</div>
                        <h3 className="font-semibold mb-2">Contact Phone</h3>
                        <p className="text-gray-300 text-sm">
                            +86 400-123-4567<br />
                            +86 755-8888-9999
                        </p>
                    </div>
                    <div>
                        <div className="text-4xl mb-3 text-blue-400">✉</div>
                        <h3 className="font-semibold mb-2">Email Address</h3>
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