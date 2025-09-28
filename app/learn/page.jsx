import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';

export const metadata = {
    title: 'Learn About IPL Hair Removal - Complete Education Center | iShine',
    description: 'Comprehensive IPL hair removal education center. Learn how IPL works, safety guidelines, treatment protocols, and achieve professional results at home.'
};

const learningModules = [
    {
        id: 'ipl-basics',
        title: 'IPL Basics & Science',
        description: 'Understanding the fundamental science behind IPL technology',
        lessons: 8,
        duration: '45 min',
        level: 'Beginner',
        topics: [
            'What is IPL technology?',
            'How light affects hair follicles',
            'Melanin and light absorption',
            'IPL vs other hair removal methods'
        ]
    },
    {
        id: 'safety-protocols',
        title: 'Safety & Skin Assessment',
        description: 'Essential safety guidelines and skin type evaluation',
        lessons: 6,
        duration: '30 min',
        level: 'Beginner',
        topics: [
            'Skin type classification',
            'Contraindications and warnings',
            'Pre-treatment safety checks',
            'Emergency procedures'
        ]
    },
    {
        id: 'treatment-techniques',
        title: 'Treatment Techniques',
        description: 'Professional treatment protocols and best practices',
        lessons: 10,
        duration: '60 min',
        level: 'Intermediate',
        topics: [
            'Proper device handling',
            'Treatment area preparation',
            'Optimal energy settings',
            'Treatment patterns and overlap'
        ]
    },
    {
        id: 'advanced-protocols',
        title: 'Advanced Treatment Protocols',
        description: 'Advanced techniques for optimal results',
        lessons: 12,
        duration: '75 min',
        level: 'Advanced',
        topics: [
            'Customizing treatments by skin type',
            'Combination therapy approaches',
            'Troubleshooting common issues',
            'Maximizing treatment efficacy'
        ]
    }
];

const quickGuides = [
    {
        title: 'Pre-Treatment Checklist',
        description: 'Essential steps before your IPL session',
        items: [
            'Shave treatment area 24 hours before',
            'Avoid sun exposure for 2 weeks',
            'Clean skin thoroughly',
            'Remove all makeup and lotions',
            'Perform patch test if first time'
        ]
    },
    {
        title: 'During Treatment',
        description: 'What to expect during your IPL session',
        items: [
            'Wear protective eyewear',
            'Start with lowest intensity',
            'Apply gel if recommended',
            'Move device systematically',
            'Monitor skin reaction'
        ]
    },
    {
        title: 'Post-Treatment Care',
        description: 'Caring for your skin after IPL',
        items: [
            'Apply cooling gel or aloe vera',
            'Avoid hot showers for 24 hours',
            'Use SPF 30+ sunscreen daily',
            'Moisturize treated areas',
            'Avoid picking at treated skin'
        ]
    }
];

const faqs = [
    {
        question: 'How does IPL hair removal work?',
        answer: 'IPL uses broad-spectrum light that is absorbed by melanin in hair follicles. The light energy converts to heat, damaging the follicle structure and preventing future hair growth.'
    },
    {
        question: 'Is IPL safe for all skin types?',
        answer: 'IPL is safe for most skin types (Fitzpatrick I-V), but effectiveness varies. Darker skin tones require special consideration and lower energy settings to avoid complications.'
    },
    {
        question: 'How many treatments are needed?',
        answer: 'Most people need 6-8 treatments spaced 4-6 weeks apart for optimal results. Hair grows in cycles, so multiple sessions are needed to target all follicles.'
    },
    {
        question: 'What areas can be treated with IPL?',
        answer: 'IPL can treat most body areas including face, arms, legs, underarms, bikini area, and back. Avoid areas around the eyes and very dark or tattooed skin.'
    },
    {
        question: 'Are there any side effects?',
        answer: 'Common side effects include temporary redness, mild swelling, and slight discomfort. Serious side effects are rare when proper protocols are followed.'
    },
    {
        question: 'How long do results last?',
        answer: 'IPL provides long-lasting hair reduction. Most people experience 80-95% permanent hair reduction after completing a full treatment series.'
    }
];

const resources = [
    {
        type: 'Video Guide',
        title: 'IPL Treatment Demonstration',
        description: 'Step-by-step video showing proper IPL technique',
        duration: '15 min',
        icon: '🎥'
    },
    {
        type: 'PDF Download',
        title: 'Skin Type Assessment Chart',
        description: 'Printable chart for determining skin type',
        duration: '2 pages',
        icon: '📄'
    },
    {
        type: 'Interactive Tool',
        title: 'Treatment Schedule Calculator',
        description: 'Plan your optimal treatment timeline',
        duration: '5 min',
        icon: '🧮'
    },
    {
        type: 'Checklist',
        title: 'Safety Protocol Checklist',
        description: 'Comprehensive safety checklist for treatments',
        duration: '1 page',
        icon: '✅'
    }
];

export default function LearnPage() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        IPL Hair Removal Education Center
                    </h1>
                    <p className="text-xl mb-8 text-teal-100">
                        Master IPL hair removal with our comprehensive learning resources. 
                        From basics to advanced techniques, become an IPL expert.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">36</div>
                            <div className="text-sm">Learning Modules</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">4 Hours</div>
                            <div className="text-sm">Total Content</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">Free</div>
                            <div className="text-sm">All Resources</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="font-bold text-2xl">Expert</div>
                            <div className="text-sm">Level Training</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Modules */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Learning Modules</h2>
                    <p className="text-xl text-gray-600">
                        Structured learning path from beginner to expert level
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {learningModules.map((module) => (
                        <Card key={module.id} className="h-full hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {module.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        {module.description}
                                    </p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                    module.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                    module.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                }`}>
                                    {module.level}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                    <span>📚</span>
                                    <span>{module.lessons} lessons</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>⏱️</span>
                                    <span>{module.duration}</span>
                                </div>
                            </div>
                            
                            <div className="space-y-2 mb-6">
                                <h4 className="font-semibold text-sm text-gray-900">Topics Covered:</h4>
                                <ul className="space-y-1">
                                    {module.topics.map((topic, index) => (
                                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <button className="btn w-full">
                                Start Learning →
                            </button>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Quick Guides */}
            <section className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Quick Reference Guides</h2>
                    <p className="text-xl text-gray-600">
                        Essential checklists and guides for safe, effective treatments
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {quickGuides.map((guide, index) => (
                        <Card key={index} className="h-full">
                            <div className="text-center mb-4">
                                <div className="text-4xl mb-3">
                                    {index === 0 && '📋'}
                                    {index === 1 && '⚡'}
                                    {index === 2 && '🩹'}
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">
                                    {guide.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {guide.description}
                                </p>
                            </div>
                            
                            <ul className="space-y-2">
                                {guide.items.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                        <span className="w-4 h-4 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs mt-0.5">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">
                        Get answers to the most common IPL hair removal questions
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <Card key={index} className="h-full">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">
                                {faq.question}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Resources */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Learning Resources</h2>
                    <p className="text-xl text-gray-600">
                        Additional tools and materials to support your learning
                    </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {resources.map((resource, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="text-4xl mb-3">{resource.icon}</div>
                            <div className="text-xs text-gray-500 mb-1">{resource.type}</div>
                            <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                            <div className="text-xs text-blue-600 font-medium">{resource.duration}</div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Expert Tips */}
            <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Expert Tips for Success</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-4xl mb-3">🎯</div>
                        <h3 className="font-semibold mb-2">Consistency is Key</h3>
                        <p className="text-blue-100 text-sm">
                            Stick to your treatment schedule for optimal results. Hair grows in cycles, so regular sessions are essential.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-3">🔬</div>
                        <h3 className="font-semibold mb-2">Start Conservative</h3>
                        <p className="text-blue-100 text-sm">
                            Begin with lower energy settings and gradually increase as your skin adapts to the treatment.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-3">📱</div>
                        <h3 className="font-semibold mb-2">Track Progress</h3>
                        <p className="text-blue-100 text-sm">
                            Keep a treatment log and take photos to monitor your progress and adjust protocols as needed.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 bg-gray-800 text-white rounded-lg">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Put Your Knowledge to Practice?
                </h2>
                <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                    Now that you understand IPL technology, explore our professional devices and services
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/ipl-hair-removal" className="btn btn-lg bg-teal-600 hover:bg-teal-700">
                        Explore IPL Technology
                    </Link>
                    <Link href="/contact" className="btn btn-lg bg-gray-700 hover:bg-gray-600">
                        Get Expert Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}