'use client';

import Link from 'next/link';

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl text-blue-100">Leading foreign recruitment agency committed to ethical practices</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Company Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Leading Foreign Recruitment Agency</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Sandiya Human Resources Pvt. Ltd. has built a strong reputation and a remarkable presence in the recruitment industry. In addition to recruitment, we also provide translation services in many countries to help Nepali workers communicate effectively with their employers.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We follow a zero-cost recruitment policy, ensuring candidates can join the global workforce without financial barriers. Our mission is to connect the right people with the right opportunities, enabling individuals to reach their full potential while delivering outstanding results for the organizations they serve.
            </p>
          </div>

          {/* Mission Statements Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                At Sandiya Human Resources Pvt. Ltd., our mission is to create opportunities that empower individuals to achieve their career goals while supporting organizations with the right talent. We are dedicated to providing fair, ethical, and zero-cost recruitment services that remove barriers for candidates and ensure a transparent, responsible hiring process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Our Commitment</h3>
              <p className="text-slate-700 leading-relaxed">
                We strive to uphold the highest standards of integrity, accountability, and professionalism in everything we do. By fostering ethical recruitment practices and promoting the well-being of workers, we aim to deliver long-term value to candidates, employers, and the global communities we serve.
              </p>
            </div>
          </div>

          {/* Key Values */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-blue-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-bold mb-3 text-blue-600">Ethical Practice</h4>
                <p className="text-slate-600">We maintain the highest standards of integrity and transparency in all our recruitment processes.</p>
              </div>

              <div className="bg-white border border-blue-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-xl font-bold mb-3 text-blue-600">Global Impact</h4>
                <p className="text-slate-600">We connect talent across borders, creating opportunities for individuals and organizations worldwide.</p>
              </div>

              <div className="bg-white border border-blue-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-xl font-bold mb-3 text-blue-600">Professional Excellence</h4>
                <p className="text-slate-600">Our team brings extensive experience and dedication to every recruitment challenge we face.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
            <p className="text-blue-100 mb-8 text-lg">Explore opportunities with Sandiya HR today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/employment-categories"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                View Opportunities
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

