'use client';

import Link from 'next/link';

export default function OurProcessPage() {
  const steps = [
    {
      icon: '📋',
      title: 'Application & Screening',
      description: 'Candidates submit applications and we conduct thorough screening to understand skills, experience, and career goals.',
    },
    {
      icon: '💼',
      title: 'Skills Assessment',
      description: 'We evaluate technical skills, language proficiency, and qualifications required for international employment.',
    },
    {
      icon: '🤝',
      title: 'Employer Matching',
      description: 'We match qualified candidates with suitable employers based on job requirements and worker preferences.',
    },
    {
      icon: '📚',
      title: 'Training & Preparation',
      description: 'Successful candidates receive training on workplace culture, safety, and communication for their new roles.',
    },
    {
      icon: '✈️',
      title: 'Visa & Placement',
      description: 'We handle visa documentation and coordinate final placement ensuring a smooth transition abroad.',
    },
    {
      icon: '🌍',
      title: 'Ongoing Support',
      description: 'We provide continuous support and assistance throughout the worker\'s employment journey.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Recruitment Process</h1>
          <p className="text-xl text-blue-100">A transparent, ethical, and professional approach to global recruitment</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900 text-center">How We Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">{step.title}</h3>
                <p className="text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Why Our Process */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Our Process?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold mb-2">Transparent</h4>
                <p className="text-blue-100">Full clarity at every stage of the recruitment process</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="text-xl font-bold mb-2">Safe & Ethical</h4>
                <p className="text-blue-100">Strict compliance with international labor standards</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-2">Zero-Cost</h4>
                <p className="text-blue-100">No hidden fees or charges for candidates</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/employment-categories"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 inline-block"
            >
              Explore Career Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
