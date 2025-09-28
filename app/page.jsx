'use client'

import { useState } from 'react'
import { Star, Shield, Award, Zap, Heart, Users, CircleCheck as CheckCircle, Play } from 'lucide-react'

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Amazing results! I've been using iShine IPL for 3 months and my hair growth has reduced by 90%. The device is so easy to use at home.",
      author: "SARAH JOHNSON",
      location: "New York, USA"
    },
    {
      text: "Professional quality at home! As a beauty therapist, I'm impressed by the technology and safety features. Highly recommend to my clients.",
      author: "MARIA GARCIA",
      location: "Madrid, Spain"
    },
    {
      text: "Best investment I've made! No more expensive salon visits. The results are just as good and I can do it on my own schedule.",
      author: "EMMA CHEN",
      location: "Sydney, Australia"
    }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Advanced IPL Technology",
      description: "Professional-grade Intense Pulsed Light technology for effective and safe hair removal at home."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "FDA Approved & CE Certified",
      description: "Clinically tested and certified for safety and effectiveness by international regulatory bodies."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Gentle on All Skin Types",
      description: "5 intensity levels suitable for different skin tones and hair colors with built-in skin sensor."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Suitable for Men & Women",
      description: "Versatile design perfect for both men and women, covering face, body, and sensitive areas."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "500,000 Flash Guarantee",
      description: "Long-lasting lamp with 500,000 flashes - enough for full-body treatments for years."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
      title: "Visible Results in 4 Weeks",
      description: "Clinical studies show up to 92% hair reduction after 12 weeks of regular use."
    }
  ]

  const specifications = [
    { label: "Technology", value: "IPL (Intense Pulsed Light)" },
    { label: "Flash Count", value: "500,000 flashes" },
    { label: "Intensity Levels", value: "5 adjustable levels" },
    { label: "Treatment Window", value: "4.1 cm²" },
    { label: "Skin Sensor", value: "Built-in safety sensor" },
    { label: "Warranty", value: "2 years international" }
  ]

  const certifications = [
    { name: "FDA Approved", logo: "/images/fda-logo.svg" },
    { name: "CE Certified", logo: "/images/ce-logo.svg" },
    { name: "ISO 13485", logo: "/images/iso-logo.svg" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">iShine IPL</div>
            <nav className="hidden md:flex space-x-8">
              <a href="/ipl-hair-removal" className="hover:text-blue-200 transition-colors">IPL Hair Removal</a>
              <a href="/services" className="hover:text-blue-200 transition-colors">Services</a>
              <a href="/work" className="hover:text-blue-200 transition-colors">Work</a>
              <a href="/blog" className="hover:text-blue-200 transition-colors">Blog</a>
              <a href="/learn" className="hover:text-blue-200 transition-colors">Learn</a>
              <a href="/contact" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional IPL Hair Removal at Home
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Experience salon-quality results with our FDA-approved iShine IPL device. 
            Safe, effective, and convenient hair removal for all skin types.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Future of Hair Removal is Here
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our advanced IPL technology delivers professional-grade results in the comfort of your home. 
                With 500,000 flashes and 5 intensity levels, achieve smooth, hair-free skin safely and effectively.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold text-gray-900">{spec.label}</div>
                    <div className="text-gray-600">{spec.value}</div>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More About Technology
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                <img 
                  src="/images/ishine-device.jpg" 
                  alt="iShine IPL Device" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-lg">
                FDA Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose iShine IPL?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets user-friendly design for the ultimate hair removal experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">Clinical studies and real user experiences</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">92% Hair Reduction</h3>
                    <p className="text-gray-600">After 12 weeks of regular use</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visible Results in 4 Weeks</h3>
                    <p className="text-gray-600">Noticeable hair reduction starts early</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safe for All Skin Types</h3>
                    <p className="text-gray-600">Tested on Fitzpatrick skin types I-V</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
                <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                  <Play className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors">
                  <Play className="w-8 h-8 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-blue-100">Join thousands of satisfied customers worldwide</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-2xl mb-8 italic">"{testimonials[activeTestimonial].text}"</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-lg">{testimonials[activeTestimonial].author}</p>
              <p className="text-blue-200">{testimonials[activeTestimonial].location}</p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certified & Trusted</h2>
          <p className="text-xl text-gray-600 mb-12">
            Our commitment to safety and quality is recognized by international standards
          </p>
          
          <div className="flex justify-center items-center space-x-16 opacity-70">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-12 h-12 text-gray-400" />
                </div>
                <p className="font-semibold text-gray-700">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Hair-Free Journey?</h2>
          <p className="text-xl mb-12 text-purple-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience professional IPL hair removal at home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Order Now - $299
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-8 text-purple-200">
            <p>✓ Free worldwide shipping • ✓ 30-day money-back guarantee • ✓ 2-year warranty</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">iShine IPL</h3>
              <p className="text-gray-400 mb-4">
                Professional IPL hair removal technology for home use. Safe, effective, and convenient.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Manual</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">OEM/ODM Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>© 2024 iShine IPL Technology. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}