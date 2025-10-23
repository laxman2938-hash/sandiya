'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    teamMembers: 0,
    clients: 0,
    gallery: 0,
    achievements: 0,
    demandLetters: 0,
    legalDocuments: 0,
    contactMessages: 0,
  });

  useEffect(() => {
    // Fetch stats from APIs
    const fetchStats = async () => {
      try {
        const [team, clients, gallery, achievements, demands, legal, messages] = await Promise.all([
          fetch('/api/team-members').then(r => r.json()),
          fetch('/api/clients').then(r => r.json()),
          fetch('/api/gallery').then(r => r.json()),
          fetch('/api/achievements').then(r => r.json()),
          fetch('/api/demand-letters').then(r => r.json()),
          fetch('/api/legal-documents').then(r => r.json()),
          fetch('/api/contact').then(r => r.json()),
        ]);

        setStats({
          teamMembers: team.data?.length || 0,
          clients: clients.data?.length || 0,
          gallery: gallery.data?.length || 0,
          achievements: achievements.data?.length || 0,
          demandLetters: demands.data?.length || 0,
          legalDocuments: legal.data?.length || 0,
          contactMessages: messages.data?.length || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { label: 'Team Members', count: stats.teamMembers, icon: '👥', href: '/admin/team-members', color: 'from-blue-500 to-blue-600' },
    { label: 'Clients', count: stats.clients, icon: '🏢', href: '/admin/clients', color: 'from-indigo-500 to-indigo-600' },
    { label: 'Gallery Images', count: stats.gallery, icon: '🖼️', href: '/admin/gallery', color: 'from-pink-500 to-pink-600' },
    { label: 'Achievements', count: stats.achievements, icon: '🏆', href: '/admin/achievements', color: 'from-yellow-500 to-yellow-600' },
    { label: 'Demand Letters', count: stats.demandLetters, icon: '📋', href: '/admin/demand-letters', color: 'from-green-500 to-green-600' },
    { label: 'Legal Documents', count: stats.legalDocuments, icon: '📄', href: '/admin/legal-documents', color: 'from-teal-500 to-teal-600' },
    { label: 'Contact Messages', count: stats.contactMessages, icon: '✉️', href: '/admin/contact-messages', color: 'from-red-500 to-red-600' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome to Sandiya HR Admin Panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group"
          >
            <div className={`bg-gradient-to-br ${card.color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">{card.icon}</span>
                <span className="text-3xl font-bold">{card.count}</span>
              </div>
              <h3 className="text-lg font-semibold">{card.label}</h3>
              <p className="text-sm text-white/80 mt-1">Click to manage →</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/team-members"
            className="flex items-center gap-3 p-4 border-2 border-blue-100 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition"
          >
            <span className="text-2xl">➕</span>
            <span className="font-semibold text-slate-700">Add Team Member</span>
          </Link>
          <Link
            href="/admin/clients"
            className="flex items-center gap-3 p-4 border-2 border-indigo-100 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition"
          >
            <span className="text-2xl">➕</span>
            <span className="font-semibold text-slate-700">Add Client</span>
          </Link>
          <Link
            href="/admin/contact-messages"
            className="flex items-center gap-3 p-4 border-2 border-red-100 rounded-lg hover:border-red-300 hover:bg-red-50 transition"
          >
            <span className="text-2xl">📬</span>
            <span className="font-semibold text-slate-700">View Messages</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
