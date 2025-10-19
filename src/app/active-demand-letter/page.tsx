'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { DemandLetter } from '@/types';

export default function ActiveDemandLetterPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [demands, setDemands] = useState<DemandLetter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDemandLetters = async () => {
      try {
        setLoading(true);
        const response: any = await api.getDemandLetters();
        const data = Array.isArray(response) ? response : response.data?.results || response.data || [];
        setDemands(data);
      } catch (err) {
        setError('Error fetching demand letters');
        console.error('Error fetching demand letters:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDemandLetters();
  }, []);

  if (loading) return <div className="text-center py-40 text-2xl">Loading...</div>;
  if (error) return <div className="text-center py-40 text-2xl text-red-600">{error}</div>;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Active Demand Letters</h1>
          <p className="text-xl text-blue-100">
            Current job opportunities from our partner employers worldwide
          </p>
        </div>
      </section>

      {/* Demand Letters Grid - Image Only */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {demands.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demands.map((demand) => (
                <button
                  key={demand.id}
                  onClick={() => {}}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
                >
                  <div className="relative bg-slate-200 h-96 overflow-hidden">
                    {demand.image ? (
                      <img
                        src={demand.image}
                        alt={demand.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                        <div className="text-6xl">📄</div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-xl text-slate-600">No demand letters available at this moment.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
