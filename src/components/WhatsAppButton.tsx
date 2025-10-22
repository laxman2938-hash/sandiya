'use client';

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a slight delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '977980122590'; // Real Sandiya HR WhatsApp number (without +, -, or spaces)
  const message = encodeURIComponent(
    'Welcome to Sandiya Human Resources pvt ltd. Thanks for connecting with us.\n\nHow may we help you?'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 group"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-75 group-hover:opacity-50 transition"></div>

        {/* Main Button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 hover:-translate-y-1">
          {/* Official WhatsApp Icon */}
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* WhatsApp bubble with chat symbol */}
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.797 5.864-4.797 10.6 0 1.487.178 2.983.537 4.412l.663 2.622-2.776-.893c1.31 1.049 2.905 1.902 4.712 2.41 1.806.508 3.839.738 5.895.738 5.32 0 9.869-1.217 12.548-3.403 2.679-2.187 4.015-5.239 4.015-9.027 0-2.32-.42-4.441-1.25-6.278-.83-1.837-2.011-3.429-3.505-4.644-1.494-1.215-3.276-2.138-5.327-2.768-2.05-.63-4.34-.945-6.87-.945z"/>
          </svg>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </a>

      {/* Mobile-optimized version */}
      <style jsx>{`
        @media (max-width: 640px) {
          a {
            bottom: 6rem !important;
            right: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
