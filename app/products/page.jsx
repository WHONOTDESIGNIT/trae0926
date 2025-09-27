import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';

export const metadata = {
    title: 'IPL Hair Removal Device Series - iShine Professional Manufacturing',
    description: 'iShine offers complete IPL hair removal device series from entry-level to professional grade, meeting different market demands. FDA certified, CE standard, quality guaranteed.'
};

const products = [
    {
        id: 'classic-series',
        name: 'iShine Classic Series',
        model: 'IS-C100',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Entry-level IPL hair removal device, suitable for daily home use with high cost-effectiveness',
        features: [
            '515-1200nm broad spectrum',
            '5-level energy adjustment',
            '300,000 flashes',
            '3.1cm² treatment window'
        ],
        applications: ['Home Use', 'Entry Level'],
        targetMarket: 'Mass Consumer Market'
    },
    {
        id: 'pro-series',
        name: 'iShine Pro Series',
        model: 'IS-P200',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Professional-grade IPL device with higher power and faster results',
        features: [
            '590nm precise wavelength',
            '8-level smart adjustment',
            '500,000 flashes',
            '4.2cm² large treatment window'
        ],
        applications: ['Professional', 'Premium'],
        targetMarket: 'High-end Consumer Market'
    },
    {
        id: 'mini-series',
        name: 'iShine Mini Series',
        model: 'IS-M50',
        image: 'https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=500',
        description: 'Compact and portable, perfect for travel, space-saving design',
        features: [
            'Compact design',
            '3-level energy selection',
            '200,000 flashes',
            '2.5cm² precision window'
        ],
        applications: ['Portable', 'Travel'],
        targetMarket: 'Young Consumer Group'
    }
];

const specifications = [
    { label: 'Wavelength Range', value: '515-1200nm' },
    { label: 'Energy Density', value: '1-5 J/cm²' },
    { label: 'Safety Level', value: 'IEC 60825-1' },
    { label: 'Certification', value: 'CE/FDA/FCC' }
];

export default function ProductsPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        iShine IPL Hair Removal Device Series
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        Professional manufacturing, precision quality, providing complete IPL hair removal solutions for global brands
                    </p>
                    <div className="flex justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">✓</span>
                            <span>FDA Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">★</span>
                            <span>CE Standard</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">◉</span>
                            <span>Global Service</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Product Series</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From entry-level to professional grade, meeting different market positioning and user needs
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
                                Model: {product.model}
                            </p>
                            
                            <p className="text-gray-700 text-sm mb-4">
                                {product.description}
                            </p>
                            
                            <div className="space-y-2 mb-4">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                        <span className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
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
                                Target Market: {product.targetMarket}
                            </p>
                            
                            <Link href="/contact" className="btn w-full">
                                Get Detailed Information →
                            </Link>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
                    <p className="text-gray-600">
                        International standard technical parameters ensuring product safety and effectiveness
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
                    Ready to Start Your IPL Product Customization Project?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Contact our professional team to get detailed product specifications and customization solutions
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg">
                        Contact Now
                    </Link>
                    <Link href="/services" className="btn btn-lg bg-gray-700 hover:bg-gray-600">
                        Learn About Services
                    </Link>
                </div>
            </section>
        </div>
    );
}