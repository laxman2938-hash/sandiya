'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Testimonial } from '@/types';
import type { Metadata } from 'next';

// This would normally be in a separate metadata file, but for dynamic pages we export it here
// Note: This is a client component, so metadata won't be used. Use generateMetadata in parent layout instead.

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const sliderImages = [
    {
      title: 'Connecting Global Talent',
      subtitle: 'Empower your career journey with ethical recruitment practices',
      color: 'from-slate-900 via-blue-900 to-blue-800',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      title: 'Zero-Cost Recruitment',
      subtitle: 'Fair opportunities for all, without financial barriers',
      color: 'from-blue-900 via-indigo-900 to-purple-800',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      title: 'Your Dream Job Awaits',
      subtitle: 'Trusted by thousands of professionals worldwide',
      color: 'from-indigo-900 via-purple-900 to-blue-800',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch testimonials from database
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setTestimonialsLoading(true);
        const response: any = await api.getTestimonials();
        const data = Array.isArray(response) ? response : response.data?.results || response.data || [];
        setTestimonials(data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setTestimonials([]);
      } finally {
        setTestimonialsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const stats = [
    { number: '10K+', label: 'Successful Placements', icon: '✅' },
    { number: '20+', label: 'Years Experience', icon: '⭐' },
    { number: '500+', label: 'Partner Companies', icon: '🏢' },
    { number: '50+', label: 'Countries', icon: '🌍' },
  ];

  const features = [
    {
      icon: '🔒',
      title: 'Zero Cost Policy',
      description: 'Fair recruitment without financial burden on candidates',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📋',
      title: 'Responsible Recruitment Policy',
      description: 'We promote responsible recruitment policies that support well-being and growth',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '💬',
      title: 'Third-party Helpline & Email Support',
      description: 'Continuous assistance and quick resolutions for ethical concerns',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Slider Section - Ultra Modern with Image */}
      <section className="relative min-h-screen overflow-hidden">
        {sliderImages.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`relative bg-gradient-to-br ${slide.color} h-full flex flex-col md:flex-row items-center overflow-hidden`}>
              {/* Animated Background Orbs */}
              <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
              <div className="absolute -bottom-8 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animation: 'float 8s ease-in-out infinite 2s' }}></div>

              {/* Left Side - Text Content (Full Width Mobile, 50% Desktop) */}
              <div className="relative z-10 w-full md:w-1/2 px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24 text-center md:text-left flex flex-col justify-center h-screen md:h-auto">
                <span className="inline-block bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 text-xs md:text-sm font-semibold text-white w-max mx-auto md:mx-0">
                  ✨ {idx === 0 ? 'Welcome to Sandiya HR' : idx === 1 ? 'Our Commitment' : 'Join Our Community'}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
                  <Link
                    href="/gallery"
                    className="bg-white text-blue-900 px-6 md:px-10 py-3 md:py-4 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105 hover:shadow-2xl text-sm md:text-base"
                  >
                    View Our Work
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition text-sm md:text-base"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Right Side - Image Section (Hidden Mobile, 50% Desktop) */}
              <div className="hidden md:flex w-1/2 items-center justify-center py-20 lg:py-24 px-4 md:px-8 relative z-10 h-screen md:h-auto">
                <div className="relative w-full max-w-md h-96 md:h-full md:max-h-96 lg:max-h-[500px]">
                  {/* Image Container with Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-0 blur-2xl -z-10"></div>
                  <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-white/20 backdrop-blur-xl shadow-2xl transform hover:scale-105 transition duration-500">
                    {/* Hero Image - Different for Each Slide */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    {/* Icon with Animation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black/40 backdrop-blur-sm">
                      <div className="text-7xl transform hover:scale-125 transition animate-bounce">
                        {idx === 0 ? '🌍' : idx === 1 ? '💰' : '🎯'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-6 md:w-8 h-3 md:h-3' : 'bg-white/50 hover:bg-white/75 w-3 h-3'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slider Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
          className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-4 rounded-full transition text-xl md:text-2xl"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
          className="absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-4 rounded-full transition text-xl md:text-2xl"
          aria-label="Next slide"
        >
          →
        </button>
      </section>

      {/* Stats Section - Separate Below Hero */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition group p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 backdrop-blur-sm">
                <div className="text-2xl md:text-4xl mb-2 transform group-hover:scale-125 transition">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">{stat.number}</div>
                <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Premium Design */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Image Section */}
            <div className="relative group animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative h-96 md:h-full md:min-h-96 rounded-3xl overflow-hidden border-2 border-blue-100 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop"
                  alt="Our Story"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right - Content Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 leading-tight">
                Nepal's Leading Ethical Recruitment Partner
              </h2>
              <p className="text-base md:text-lg text-slate-700 mb-4 md:mb-6 leading-relaxed">
                Sandiya Human Resources Pvt. Ltd. is a trusted recruitment agency committed to connecting the right talent with the right opportunities across the globe. We follow a zero-cost recruitment policy to ensure candidates can seamlessly step into the global workforce without financial burden.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Our mission is to empower individuals to reach their full potential while delivering exceptional value and results to the organizations they serve. With over 20 years of experience, we've successfully placed 10,000+ professionals worldwide.
              </p>
              
              {/* Stats in Story Section */}
              <div className="grid grid-cols-3 gap-4 mb-8 md:mb-10">
                {[
                  { number: '20+', label: 'Years' },
                  { number: '10K+', label: 'Placements' },
                  { number: '50+', label: 'Countries' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition group/stat">
                    <p className="text-2xl md:text-3xl font-bold text-blue-600 group-hover/stat:text-blue-700">{stat.number}</p>
                    <p className="text-xs md:text-sm text-slate-600 group-hover/stat:text-slate-700">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition transform hover:scale-105 hover:-translate-y-0.5"
              >
                <span>Read Our Full Story</span>
                <span className="transform group-hover:translate-x-2 transition">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Advanced Grid */}
      <section className="py-12 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">Our Advantages</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
              Why Choose Sandiya HR?
            </h2>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
              We're committed to ethical recruitment practices and candidate success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative h-full"
                style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl group-hover:opacity-0 transition duration-300"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300`}></div>
                
                <div className="relative p-6 md:p-8 rounded-2xl border border-slate-200 group-hover:border-transparent transition h-full flex flex-col">
                  <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-125 transition">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-white transition">{feature.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 group-hover:text-white/90 transition flex-grow">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style with 3 Cards */}
      <section className="py-12 md:py-24 px-4 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
              What Our Clients Say
            </h2>
            <p className="text-base md:text-xl text-slate-600 px-2">Real stories from successful placements</p>
          </div>

          {testimonialsLoading ? (
            <div className="text-center py-12">
              <div className="text-slate-600">Loading testimonials...</div>
            </div>
          ) : testimonials.length > 0 ? (
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div className="flex gap-6 md:gap-8 transition-transform duration-500" 
                  style={{ transform: `translateX(-${testimonialIndex * (100 / 3)}%)` }}>
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={testimonial.id}
                      className="flex-shrink-0 w-full md:w-1/3 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:-translate-y-2 border-t-4 border-blue-500 group"
                    >
                      <div className="flex items-center mb-4 md:mb-6">
                        {testimonial.photo ? (
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover mr-3 md:mr-4 transform group-hover:scale-125 transition"
                          />
                        ) : (
                          <div className="text-4xl md:text-5xl mr-3 md:mr-4 transform group-hover:scale-125 transition">👤</div>
                        )}
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-xs md:text-sm text-slate-600">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm md:text-base mb-4 md:mb-6">
                        Testimonial from {testimonial.name} - {testimonial.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => setTestimonialIndex(Math.max(0, testimonialIndex - 1))}
                disabled={testimonialIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 md:-ml-12 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-3 md:p-4 rounded-full transition transform hover:scale-110 font-bold text-xl"
                aria-label="Previous testimonials"
              >
                ‹
              </button>
              
              <button
                onClick={() => setTestimonialIndex(Math.min(testimonials.length - 3, testimonialIndex + 1))}
                disabled={testimonialIndex >= testimonials.length - 3}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 md:-mr-12 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-3 md:p-4 rounded-full transition transform hover:scale-110 font-bold text-xl"
                aria-label="Next testimonials"
              >
                ›
              </button>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.length > 3 && Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`rounded-full transition-all ${
                      idx === Math.floor(testimonialIndex / 3) ? 'bg-blue-600 w-3 h-3' : 'bg-slate-300 w-2 h-2'
                    }`}
                    aria-label={`Go to testimonial group ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No testimonials available at this moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Working Hours Section - Premium Design */}
      <section className="py-12 md:py-24 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <span className="inline-block text-blue-300 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">Our Availability</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Working Hours
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-8 md:mb-10 leading-relaxed">
                Our dedicated team is here to assist you with recruitment services, inquiries, and support during our working hours. We're committed to providing prompt, professional, and ethical guidance throughout your recruitment journey.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition group">
                  <p className="text-sm md:text-base font-semibold text-blue-300 mb-2 uppercase tracking-wide">Sunday to Friday</p>
                  <p className="text-2xl md:text-4xl font-bold text-white">10:00 AM - 06:00 PM</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition group">
                  <p className="text-sm md:text-base font-semibold text-blue-300 mb-2 uppercase tracking-wide">Saturday</p>
                  <p className="text-2xl md:text-4xl font-bold text-white">Closed</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block mt-8 md:mt-10 px-8 md:px-10 py-3 md:py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition transform hover:scale-105 hover:shadow-2xl"
              >
                Contact Us Now
              </Link>
            </div>

            {/* Right - Contact Cards */}
            <div className="grid grid-cols-1 gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition transform hover:scale-105 hover:-translate-y-2 group">
                <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-125 transition">📞</div>
                <p className="text-sm text-blue-300 uppercase font-semibold mb-2">Call Us</p>
                <p className="text-lg md:text-2xl font-bold text-white mb-2">+977 014374161</p>
                <p className="text-sm text-blue-100">Available during working hours</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition transform hover:scale-105 hover:-translate-y-2 group">
                <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-125 transition">✉️</div>
                <p className="text-sm text-blue-300 uppercase font-semibold mb-2">Email Us</p>
                <p className="text-lg md:text-2xl font-bold text-white mb-2 break-all">sandiyahr17@gmail.com</p>
                <p className="text-sm text-blue-100">We'll respond within 24 hours</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition transform hover:scale-105 hover:-translate-y-2 group">
                <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-125 transition">📍</div>
                <p className="text-sm text-blue-300 uppercase font-semibold mb-2">Visit Us</p>
                <p className="text-lg md:text-2xl font-bold text-white mb-2">Dhumbarahi, Kathmandu</p>
                <p className="text-sm text-blue-100">Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
