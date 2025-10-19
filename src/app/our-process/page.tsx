'use client';

import { useLocale, useTranslations } from 'next-intl';

export default function OurProcessPage() {
  const t = useTranslations();
  const locale = useLocale();

  const recruitmentSteps = [
    {
      step: 1,
      title: 'Pre Labor Approval',
      description: 'Document review and Ministry of Labour compliance verification to ensure all requirements are met before proceeding.',
      icon: '📋',
      details: ['Document verification', 'Ministry compliance check', 'Initial screening']
    },
    {
      step: 2,
      title: 'Advertisement',
      description: 'Wide-reaching job advertisement through TV, newspapers, social media channels, and local networks to attract qualified candidates.',
      icon: '📢',
      details: ['Multi-channel advertising', 'Job portal listings', 'Social media campaigns']
    },
    {
      step: 3,
      title: 'Candidate Interview',
      description: 'Comprehensive candidate evaluation using token system, presentation review, and professional interviews to assess suitability.',
      icon: '👥',
      details: ['Token system evaluation', 'Candidate presentations', 'Professional interviews']
    },
    {
      step: 4,
      title: 'Communications',
      description: 'Candidate selection notification and formal offer letter signing with clear employment terms and conditions.',
      icon: '✉️',
      details: ['Selection notification', 'Offer letter preparation', 'Contract signing']
    },
    {
      step: 5,
      title: 'Employment Visa',
      description: 'Calling visa arrangement, passport stamping, and visa issuance process completed within 7 working days.',
      icon: '🛂',
      details: ['Calling visa processing', 'Passport stamping', '7-day completion']
    },
    {
      step: 6,
      title: 'Orientation',
      description: 'Mandatory 2-day government-required orientation program covering legal requirements and workplace standards.',
      icon: '🎓',
      details: ['2-day program', 'Government requirements', 'Legal orientation']
    },
    {
      step: 7,
      title: 'Final Labour Approval',
      description: 'Online orientation verification, medical checks, and insurance documentation completion for final approval.',
      icon: '✅',
      details: ['Online verification', 'Medical clearance', 'Insurance processing']
    },
    {
      step: 8,
      title: 'Travel Arrangement',
      description: 'Flight confirmation, PCR test arrangements, travel document preparation, and logistical coordination.',
      icon: '✈️',
      details: ['Flight booking', 'PCR tests', 'Travel documents']
    },
    {
      step: 9,
      title: 'Departure of Candidates',
      description: 'Final pre-departure briefing, airport support, and complete handover to employer ensuring smooth transition.',
      icon: '🌍',
      details: ['Departure briefing', 'Airport support', 'Complete handover']
    }
  ];

  const keyHighlights = [
    {
      icon: '⏱️',
      title: 'Efficient Timeline',
      description: 'Streamlined process ensuring quick placement without compromising quality'
    },
    {
      icon: '🔍',
      title: 'Thorough Screening',
      description: 'Comprehensive evaluation at each stage ensures perfect candidate-employer match'
    },
    {
      icon: '🛡️',
      title: 'Legal Compliance',
      description: 'Full adherence to all immigration and labor regulations'
    },
    {
      icon: '🤝',
      title: 'Full Support',
      description: 'Dedicated assistance at every step from application to deployment'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Recruitment Process</h1>
          <p className="text-xl text-blue-100">
            A transparent, 9-step process ensuring successful placements globally
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-slate-700 mb-8">
            From initial application to successful deployment, our proven process ensures excellent placements
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap text-slate-600">
            <span className="font-semibold">⏱️ Typical Timeline: 4-6 weeks</span>
            <span>•</span>
            <span className="font-semibold">👥 Expert Team Support</span>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">The 9-Step Process</h2>
            <p className="text-xl text-slate-600">Our comprehensive recruitment journey</p>
          </div>

          <div className="space-y-0">
            {recruitmentSteps.map((item, idx) => (
              <div key={idx} className="flex gap-6 mb-0">
                {/* Timeline Line & Circle */}
                <div className="flex flex-col items-center relative">
                  {/* Circle with Step Number */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg flex-shrink-0 z-10 relative">
                    {item.step}
                  </div>
                  {/* Connecting Line */}
                  {idx !== recruitmentSteps.length - 1 && (
                    <div className="w-1 h-40 bg-gradient-to-b from-blue-400 to-blue-100 mt-0"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`flex-1 pb-6 ${idx !== recruitmentSteps.length - 1 ? 'mb-6' : ''}`}>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-2xl p-8 hover:shadow-lg transition mt-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Step {item.step}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4 text-lg">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="text-blue-600">✓</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Our Process Works</h2>
            <p className="text-xl text-slate-600">What makes our recruitment approach successful</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white border border-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{highlight.title}</h3>
                <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Questions about our recruitment process</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does the entire recruitment process take?',
                a: 'Typically 4-6 weeks from application to deployment, depending on visa processing and specific country requirements.'
              },
              {
                q: 'What documents are required for the application?',
                a: 'Candidates need valid passport, educational certificates, experience letters, and medical clearance as per employer requirements.'
              },
              {
                q: 'Is there any fee charged to candidates?',
                a: 'No. Sandiya HR does not charge any recruitment fees to candidates. All costs are borne by employers.'
              },
              {
                q: 'What support is provided after deployment?',
                a: 'We provide 24/7 support to both candidates and employers, including assistance with workplace issues and follow-up services.'
              },
              {
                q: 'Can candidates change jobs after placement?',
                a: 'Yes, candidates have the right to change employment according to local labor laws and contractual agreements.'
              },
              {
                q: 'How are candidates selected?',
                a: 'Through comprehensive evaluation including document review, interviews, skills assessment, and employer preference matching.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-600 text-2xl">❓</span>
                  {item.q}
                </h3>
                <p className="text-slate-700 leading-relaxed ml-10">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
