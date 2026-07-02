'use client';

import { useEffect, useState } from 'react';

// A soft radial glow that follows the cursor across the whole page.
export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.2 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEnabled(false);
      return;
    }
    let raf;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-300"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at ${pos.x * 100}% ${
          pos.y * 100
        }%, rgba(124,58,237,0.12), transparent 60%)`,
      }}
    />
  );
}
