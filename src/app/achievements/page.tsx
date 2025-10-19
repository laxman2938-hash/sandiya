'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Achievement } from '@/types';
import { getMultilingualText } from '@/lib/utils';
import Link from 'next/link';

export default function AchievementsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const response: any = await api.getAchievements();
        setAchievements(Array.isArray(response) ? response : response.data?.results || response.data || []);
      } catch (err) {
        setError(t('common.error'));
        console.error('Error fetching achievements:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, [t]);

  if (loading) return (
    <div className="text-center py-20 md:py-40 text-xl md:text-2xl text-slate-600">
      <div className="animate-pulse">Loading amazing achievements...</div>
    </div>
  );
  if (error) return (
    <div className="text-center py-20 md:py-40 text-red-600 text-xl md:text-2xl">
      {error}
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-12 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <span className="inline-block bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 text-xs md:text-sm font-semibold text-blue-100">
              🏆 Our Legacy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4 leading-tight animate-fade-in-up">Achievements</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto px-2">
              Celebrating our milestones and success stories across two decades
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid - Image Only */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-blue-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">Timeline of Success</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">Our Achievements</h2>
            <p className="text-base md:text-xl text-slate-600 px-2">Milestones that define our commitment to excellence</p>
          </div>

          {achievements.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {achievements.map((achievement, idx) => (
                <button
                  key={achievement.id}
                  onClick={() => {}}
                  className="group relative overflow-hidden rounded-lg md:rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition transform hover:scale-105"
                  style={{ animation: `slideInUp 0.5s ease-out ${idx * 0.05}s forwards`, opacity: 0 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300">
                    {achievement.image ? (
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-125 transition duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                        <div className="text-6xl">🏆</div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-20">
              <div className="text-4xl md:text-6xl mb-4">🏆</div>
              <p className="text-base md:text-xl text-slate-600">No achievements available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
