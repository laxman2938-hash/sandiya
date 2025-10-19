'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OurProcessPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/about-us');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg text-slate-600">Redirecting to About Us...</p>
      </div>
    </div>
  );
}
