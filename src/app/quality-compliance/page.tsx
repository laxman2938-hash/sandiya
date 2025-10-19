'use client';

import Link from 'next/link';

export default function QualityCompliancePage() {
  const compliance = [
    {
      icon: '🏢',
      title: 'Certified Agency',
      description: 'Registered and certified with relevant government authorities for ethical recruitment practices.',
    },
    {
      icon: '📋',
      title: 'ISO Certified',
      description: 'Holding ISO 9001:2015 certification demonstrating our commitment to quality management.',
    },
    {
      icon: '⚖️',
      title: 'Legal Compliance',
      description: 'Full compliance with international labor laws, bilateral agreements, and national employment regulations.',
    },
    {
      icon: '🔍',
      title: 'Regular Audits',
      description: 'Undergo regular third-party audits to ensure compliance with global recruitment standards.',
    },
    {
      icon: '👥',
      title: 'RBA Certified',
      description: 'Certified by Responsible Business Alliance for ethical and sustainable recruitment practices.',
    },
    {
      icon: '📊',
      title: 'Quality Assurance',
      description: 'Continuous monitoring and improvement of our processes to maintain the highest quality standards.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Quality & Compliance</h1>
          <p className="text-xl text-blue-100">Meeting and exceeding international standards for ethical recruitment</p>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900 text-center">Our Commitments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {compliance.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Global Standards */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Global Standards We Follow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">ILO Conventions</h4>
                  <p className="text-blue-100">Full adherence to International Labour Organization conventions and standards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Zero-Cost Policy</h4>
                  <p className="text-blue-100">No recruitment fees charged to workers - fully supported by employers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Bilateral Agreements</h4>
                  <p className="text-blue-100">Operating under bilateral agreements with destination countries</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Transparent Operations</h4>
                  <p className="text-blue-100">Full transparency in recruitment processes and worker information</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Promise */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-12 text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-blue-600">Our Quality Promise</h3>
            <p className="text-lg text-slate-700 mb-6 max-w-3xl mx-auto">
              We pledge to maintain the highest standards of professionalism, ethical conduct, and quality in all aspects of our recruitment services. Every candidate and employer relationship is built on trust, transparency, and mutual respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about-us"
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Learn About Us
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition"
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
