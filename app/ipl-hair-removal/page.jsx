import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'components/card';
import { Zap, Shield, Heart, Users, Award, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'IPL Hair Removal Technology - Professional At-Home Solutions | iShine',
    description: 'Discover advanced IPL hair removal technology. Safe, effective, and FDA-approved devices for professional results at home. Learn about IPL technology, benefits, and how it works.'
};

const iplBenefits = [
    {
        icon: <Zap className="w-8 h-8 text-blue-500" />,
        title: "Advanced IPL Technology",
        description: "Intense Pulsed Light technology targets hair follicles with precision, providing long-lasting hair reduction results."
    },
    {
        icon: <Shield className="w-8 h-8 text-green-500" />,
        title: "FDA Approved Safety",
        description: "Clinically tested and FDA approved for safe home use with built-in skin tone sensors and safety features."
    },
    {
        icon: <Heart className="w-8 h-8 text-pink-500" />,
        title: "Gentle & Comfortable",
        description: "Designed for comfort with cooling technology and adjustable intensity levels for all skin types."
    },
    {
        icon: <Users className="w-8 h-8 text-purple-500" />,
        title: "Suitable for Everyone",
        description: "Perfect for both men and women, effective on face, body, and sensitive areas with professional results."
    }
];

const howItWorks = [
    {
        step: 1,
        title: "Light Absorption",
        description: "IPL light is absorbed by melanin in hair follicles, converting to heat energy."
    },
    {
        step: 2,
        title: "Follicle Heating",
        description: "Heat damages the hair follicle structure, preventing future hair growth."
    },
    {
        step: 3,
        title: "Hair Reduction",
        description: "Treated hairs fall out naturally, and new growth is significantly reduced."
    },
    {
        step: 4,
        title: "Long-term Results",
        description: "Regular treatments lead to permanent hair reduction and smooth skin."
    }
];

const treatmentAreas = [
    { area: "Face", description: "Upper lip, chin, cheeks, and jawline" },
    { area: "Arms", description: "Full arms, underarms, and hands" },
    { area: "Legs", description: "Full legs, thighs, and feet" },
    { area: "Body", description: "Chest, back, and abdomen" },
    { area: "Bikini", description: "Bikini line and intimate areas" },
    { area: "Other", description: "Any unwanted hair areas" }
];

const beforeAfter = [
    {
        timeframe: "Week 1-2",
        result: "Initial hair shedding begins",
        percentage: "10-15%"
    },
    {
        timeframe: "Week 4-6",
        result: "Noticeable hair reduction",
        percentage: "30-40%"
    },
    {
        timeframe: "Week 8-10",
        result: "Significant improvement",
        percentage: "60-70%"
    },
    {
        timeframe: "Week 12+",
        result: "Maximum results achieved",
        percentage: "85-92%"
    }
];

export default function IPLHairRemovalPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        IPL Hair Removal Technology
                    </h1>
                    <p className="text-xl mb-8 text-blue-100">
                        Experience the power of Intense Pulsed Light technology for permanent hair reduction. 
                        Safe, effective, and clinically proven results at home.
                    </p>
                    <div className="flex justify-center gap-4 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                            <div className="font-bold text-2xl">92%</div>
                            <div className="text-sm">Hair Reduction</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                            <div className="font-bold text-2xl">4 Weeks</div>
                            <div className="text-sm">Visible Results</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                            <div className="font-bold text-2xl">500K</div>
                            <div className="text-sm">Flash Guarantee</div>
                        </div>
                    </div>
                    <Link href="/contact" className="btn btn-lg bg-white text-blue-600 hover:bg-blue-50">
                        Get Started Today
                    </Link>
                </div>
            </section>

            {/* What is IPL */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">What is IPL Hair Removal?</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            IPL (Intense Pulsed Light) is an advanced hair removal technology that uses broad-spectrum light 
                            to target and destroy hair follicles. Unlike traditional methods, IPL provides long-lasting 
                            results by addressing the root cause of hair growth.
                        </p>
                        <p>
                            The technology works by emitting pulses of light that are absorbed by the melanin in hair follicles. 
                            This light energy converts to heat, damaging the follicle structure and preventing future hair growth.
                        </p>
                        <p>
                            With regular treatments, IPL can achieve up to 92% permanent hair reduction, making it one of the 
                            most effective at-home hair removal solutions available today.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                        <Image 
                            src="https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="IPL Hair Removal Technology" 
                            width={500}
                            height={400}
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose IPL Hair Removal?</h2>
                    <p className="text-xl text-gray-600">
                        Advanced technology meets convenience for superior hair removal results
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {iplBenefits.map((benefit, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <div className="flex justify-center mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">How IPL Technology Works</h2>
                    <p className="text-xl text-gray-600">
                        Understanding the science behind permanent hair reduction
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {howItWorks.map((step, index) => (
                        <div key={step.step} className="text-center relative">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                {step.step}
                            </div>
                            {index < howItWorks.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
                            )}
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Treatment Areas */}
            <section className="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Treatment Areas</h2>
                    <p className="text-xl text-gray-600">
                        Effective hair removal for all body areas
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {treatmentAreas.map((area, index) => (
                        <Card key={index} className="text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">
                                {index === 0 && '👤'}
                                {index === 1 && '💪'}
                                {index === 2 && '🦵'}
                                {index === 3 && '👕'}
                                {index === 4 && '👙'}
                                {index === 5 && '✨'}
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{area.area}</h3>
                            <p className="text-gray-600 text-sm">{area.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Results Timeline */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Expected Results Timeline</h2>
                    <p className="text-xl text-gray-600">
                        Track your progress with our proven treatment schedule
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {beforeAfter.map((result, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                            <div className="text-3xl font-bold text-blue-600 mb-2">{result.percentage}</div>
                            <h3 className="font-semibold mb-2">{result.timeframe}</h3>
                            <p className="text-gray-600 text-sm">{result.result}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Experience IPL Hair Removal?
                </h2>
                <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                    Join thousands who have achieved smooth, hair-free skin with our advanced IPL technology
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/contact" className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100">
                        Start Your Journey
                    </Link>
                    <Link href="/learn" className="btn btn-lg border-2 border-white text-white hover:bg-white/10">
                        Learn More
                    </Link>
                </div>
            </section>
        </div>
    );
}