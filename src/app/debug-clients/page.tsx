'use client';

import { useEffect, useState } from 'react';

export default function ClientsDebugPage() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    const test = async () => {
      try {
        console.log('Starting fetch...');
        const response = await fetch('/api/clients');
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          setStatus(`Error: ${response.status}`);
          return;
        }
        
        const data = await response.json();
        console.log('Data:', data);
        setStatus(`Success! Got ${Array.isArray(data) ? data.length : 0} clients`);
      } catch (err: any) {
        console.error('Error:', err);
        setStatus(`Error: ${err.message}`);
      }
    };
    
    test();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Clients API Debug</h1>
      <p>Status: <strong>{status}</strong></p>
      <p>Check browser console for detailed logs</p>
    </div>
  );
}
