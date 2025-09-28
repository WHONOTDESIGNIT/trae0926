'use client'

import { useState } from 'react'
import { Star, Shield, Award, Zap, Heart, Users, CircleCheck as CheckCircle, Play } from 'lucide-react'

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const [activeFeature, setActiveFeature] = useState(0)

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

  const featureTestimonials = [
    {
      image: "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Advanced IPL Technology",
      testimonial: "The technology is incredible! I can feel the precision and quality in every flash. It's like having a professional treatment at home.",
      author: "Jennifer M.",
      location: "California, USA",
      rating: 5
    },
    {
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "FDA Approved & CE Certified",
      testimonial: "Safety was my biggest concern, but knowing it's FDA approved gave me complete confidence. No side effects, just amazing results!",
      author: "Dr. Sarah Chen",
      location: "New York, USA",
      rating: 5
    },
    {
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Gentle on All Skin Types",
      testimonial: "I have sensitive skin and was worried, but the 5 intensity levels let me find the perfect setting. So gentle yet effective!",
      author: "Maria Rodriguez",
      location: "Madrid, Spain",
      rating: 5
    },
    {
      image: "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Suitable for Men & Women",
      testimonial: "My husband and I both use it! Works perfectly on his chest hair and my legs. One device for the whole family.",
      author: "Lisa & Tom Johnson",
      location: "London, UK",
      rating: 5
    },
    {
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "500,000 Flash Guarantee",
      testimonial: "Been using it for over a year and still going strong! The flash count is incredible - definitely worth the investment.",
      author: "Michael Zhang",
      location: "Toronto, Canada",
      rating: 5
    },
    {
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Visible Results in 4 Weeks",
      testimonial: "I couldn't believe how fast it worked! After just 4 weeks, I could see a huge difference. Now at 12 weeks, 90% hair reduction!",
      author: "Emma Thompson",
      location: "Sydney, Australia",
      rating: 5
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
      <header className="sticky top-0 z-50" style={{backgroundColor: '#FFFFFF', color: '#263237'}}>
        <div className="container mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold ml-8" style={{color: '#0544d0'}}>iShine IPL</div>
            <nav className="hidden md:flex space-x-10">
              <a href="/ipl-hair-removal" className="flex items-center hover:opacity-80 transition-colors no-underline text-2xl" style={{color: '#263237', textDecoration: 'none'}}>IPL Hair Removal</a>
              <a href="/services" className="flex items-center hover:opacity-80 transition-colors no-underline text-2xl" style={{color: '#263237', textDecoration: 'none'}}>Solutions</a>
              <a href="/work" className="flex items-center hover:opacity-80 transition-colors no-underline text-2xl" style={{color: '#263237', textDecoration: 'none'}}>Work</a>
              <a href="/about" className="flex items-center hover:opacity-80 transition-colors no-underline text-2xl" style={{color: '#263237', textDecoration: 'none'}}>About</a>
              <a href="/blog" className="flex items-center hover:opacity-80 transition-colors no-underline text-2xl" style={{color: '#263237', textDecoration: 'none'}}>Blog</a>
              <a href="/learn" className="flex items-center hover:opacity-80 transition-colors no-underline text-2xl" style={{color: '#263237', textDecoration: 'none'}}>Resources</a>
              <a href="/contact" className="px-12 py-4 rounded-full text-lg font-semibold transition-colors no-underline" style={{backgroundColor: '#0544d0', color: '#FFFFFF', textDecoration: 'none'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0439b8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0544d0'}>
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#0544d0', color: '#FFFFFF'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional IPL Hair Removal at Home
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{color: '#FFFFFF'}}>
            Experience salon-quality results with our FDA-approved iShine IPL device. 
            Safe, effective, and convenient hair removal for all skin types.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featureTestimonials.slice(0, 3).map((feature, index) => (
              <div key={index} className="rounded-2xl p-8 border" style={{backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)'}}>
                <div className="flex justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p style={{color: '#FFFFFF'}}>{feature.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: '#263237'}}>
                The Future of Hair Removal is Here
              </h2>
              <p className="text-lg mb-8" style={{color: '#455962'}}>
                Our advanced IPL technology delivers professional-grade results in the comfort of your home. 
                With 500,000 flashes and 5 intensity levels, achieve smooth, hair-free skin safely and effectively.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 pl-4" style={{borderColor: '#0544d0'}}>
                    <div className="font-semibold" style={{color: '#263237'}}>{spec.label}</div>
                    <div style={{color: '#455962'}}>{spec.value}</div>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 rounded-full text-lg font-semibold transition-colors" style={{backgroundColor: '#0544d0', color: '#FFFFFF'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0439b8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0544d0'}>
                Learn More About Technology
              </button>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl p-8" style={{backgroundColor: '#F1F3F6'}}>
                <img 
                  src="/images/ishine-device.jpg" 
                  alt="iShine IPL Device" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 px-6 py-3 rounded-full font-bold shadow-lg" style={{backgroundColor: '#377DFF', color: '#FFFFFF'}}>
                FDA Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#263237'}}>Why Work with iShine?</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#455962'}}>
              We're not ones to sing our own praises so we'll leave that to our clients! Here are some nice things they have to say about us…
            </p>
          </div>
          
          {/* Elegant Carousel */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Main Carousel Container - 1800px width, 750px height */}
              <div className="relative mx-auto overflow-hidden rounded-3xl shadow-2xl" style={{width: '1800px', height: '750px', maxWidth: '100%'}}>
                
                {/* Curved SVG Divider */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1800 750" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: 'rgba(5,68,208,0.1)'}} />
                      <stop offset="100%" style={{stopColor: 'rgba(255,255,255,0.1)'}} />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 720 0 Q 770 375 720 750 L 1800 750 L 1800 0 Z" 
                    fill="rgba(255,255,255,0.95)" 
                    stroke="rgba(5,68,208,0.2)" 
                    strokeWidth="2"
                  />
                </svg>
                
                {/* Left Side - Image (4/10 area) */}
                <div className="absolute left-0 top-0 h-full" style={{width: '40%'}}>
                  <img 
                    src={featureTestimonials[activeFeature].image}
                    alt={featureTestimonials[activeFeature].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right Side - Content (6/10 area) */}
                <div className="absolute right-0 top-0 h-full flex flex-col justify-center px-16 z-20" style={{width: '60%'}}>
                  {/* Customer Logo - positioned at vertical center line */}
                  <div className="mb-8 flex justify-center">
                    <div className="w-32 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#F1F3F6'}}>
                      <span className="text-2xl font-bold" style={{color: '#0544d0'}}>
                        {featureTestimonials[activeFeature].author.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Customer Review */}
                  <div className="mb-8">
                    <blockquote className="text-2xl leading-relaxed mb-6" style={{color: '#263237'}}>
                      "{featureTestimonials[activeFeature].testimonial}"
                    </blockquote>
                  </div>
                  
                  {/* Customer Full Name */}
                  <div className="border-l-4 pl-6" style={{borderColor: '#0544d0'}}>
                    <p className="text-xl font-bold mb-2" style={{color: '#263237'}}>
                      {featureTestimonials[activeFeature].author}
                    </p>
                    <p className="text-lg" style={{color: '#455962'}}>
                      {featureTestimonials[activeFeature].location}
                    </p>
                    <p className="text-sm mt-1 font-semibold" style={{color: '#0544d0'}}>
                      {featureTestimonials[activeFeature].title}
                    </p>
                  </div>
                </div>
                
                {/* Left Navigation Button */}
                <button
                  onClick={() => setActiveFeature(activeFeature === 0 ? featureTestimonials.length - 1 : activeFeature - 1)}
                  className="absolute top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full shadow-lg transition-all hover:scale-110 z-30"
                  style={{left: '0px', backgroundColor: '#0544d0'}}
                >
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Right Navigation Button */}
                <button
                  onClick={() => setActiveFeature(activeFeature === featureTestimonials.length - 1 ? 0 : activeFeature + 1)}
                  className="absolute top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full shadow-lg transition-all hover:scale-110 z-30"
                  style={{right: '0px', backgroundColor: '#0544d0'}}
                >
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Progress Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                  {featureTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeFeature ? 'scale-125' : 'hover:scale-110'
                      }`}
                      style={{backgroundColor: index === activeFeature ? '#0544d0' : 'rgba(255,255,255,0.6)'}}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#263237'}}>Proven Results</h2>
            <p className="text-xl" style={{color: '#455962'}}>Clinical studies and real user experiences</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full p-3" style={{backgroundColor: '#F1F3F6'}}>
                    <CheckCircle className="w-6 h-6" style={{color: '#0544d0'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{color: '#263237'}}>92% Hair Reduction</h3>
                    <p style={{color: '#455962'}}>After 12 weeks of regular use</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="rounded-full p-3" style={{backgroundColor: '#F1F3F6'}}>
                    <CheckCircle className="w-6 h-6" style={{color: '#377DFF'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{color: '#263237'}}>Visible Results in 4 Weeks</h3>
                    <p style={{color: '#455962'}}>Noticeable hair reduction starts early</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="rounded-full p-3" style={{backgroundColor: '#F1F3F6'}}>
                    <CheckCircle className="w-6 h-6" style={{color: '#377DFF'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{color: '#263237'}}>Safe for All Skin Types</h3>
                    <p style={{color: '#455962'}}>Tested on Fitzpatrick skin types I-V</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl p-8" style={{backgroundColor: '#F1F3F6'}}>
                <div className="aspect-video rounded-2xl flex items-center justify-center" style={{backgroundColor: '#FFFFFF'}}>
                  <Play className="w-16 h-16" style={{color: '#455962'}} />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="rounded-full p-4 shadow-lg transition-colors" style={{backgroundColor: 'rgba(255,255,255,0.9)'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#FFFFFF'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.9)'}>
                  <Play className="w-8 h-8" style={{color: '#0544d0'}} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20" style={{backgroundColor: '#0544d0', color: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl" style={{color: '#FFFFFF'}}>Join thousands of satisfied customers worldwide</p>
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
              <p style={{color: '#FFFFFF'}}>{testimonials[activeTestimonial].location}</p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? '' : ''
                  }`}
                  style={{backgroundColor: index === activeTestimonial ? '#FFFFFF' : 'rgba(255,255,255,0.3)'}}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#263237'}}>Certified & Trusted</h2>
          <p className="text-xl mb-12" style={{color: '#455962'}}>
            Our commitment to safety and quality is recognized by international standards
          </p>
          
          <div className="flex justify-center items-center space-x-16 opacity-70">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#F1F3F6'}}>
                  <Shield className="w-12 h-12" style={{color: '#455962'}} />
                </div>
                <p className="font-semibold" style={{color: '#455962'}}>{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: '#0544d0', color: '#FFFFFF'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Hair-Free Journey?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{color: '#FFFFFF'}}>
            Join thousands of satisfied customers and experience professional IPL hair removal at home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full text-lg font-semibold transition-colors" style={{backgroundColor: '#FFFFFF', color: '#0544d0'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#F1F3F6'} onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}>
              Order Now - $299
            </button>
            <button className="border-2 px-8 py-4 rounded-full text-lg font-semibold transition-colors" style={{borderColor: '#FFFFFF', color: '#FFFFFF'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              Learn More
            </button>
          </div>
          
          <div className="mt-8" style={{color: '#FFFFFF'}}>
            <p>✓ Free worldwide shipping • ✓ 30-day money-back guarantee • ✓ 2-year warranty</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{backgroundColor: '#263237', color: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">iShine IPL</h3>
              <p className="mb-4" style={{color: '#FFFFFF'}}>
                Professional IPL hair removal technology for home use. Safe, effective, and convenient.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2" style={{color: '#FFFFFF'}}>
                <li><a href="#" className="hover:opacity-80 transition-colors">Features</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">Technology</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">Specifications</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">User Manual</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2" style={{color: '#FFFFFF'}}>
                <li><a href="#" className="hover:opacity-80 transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2" style={{color: '#FFFFFF'}}>
                <li><a href="#" className="hover:opacity-80 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">OEM/ODM Services</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:opacity-80 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center" style={{borderColor: '#455962'}}>
            <div className="mb-4 md:mb-0" style={{color: '#FFFFFF'}}>
              <p>© 2024 iShine IPL Technology. All rights reserved.</p>
            </div>
            <div className="flex space-x-6" style={{color: '#FFFFFF'}}>
              <a href="#" className="hover:opacity-80 transition-colors">Privacy</a>
              <a href="#" className="hover:opacity-80 transition-colors">Terms</a>
              <a href="#" className="hover:opacity-80 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}