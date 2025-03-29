'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error fetching:', err));
  }, []);

  return (
    <main>
      <h1>Frontend</h1>
      <p>Message from backend: {message || 'Loading...'}</p>
    </main>
  );
}
