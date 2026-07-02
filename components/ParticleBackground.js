'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setSize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const width = () => window.innerWidth;
    const height = () => window.innerHeight;

    const mouse = { x: -9999, y: -9999, active: false };

    const particleCount = Math.min(
      70,
      Math.floor((window.innerWidth * window.innerHeight) / 22000)
    );
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }
      reset(initial) {
        this.x = Math.random() * width();
        this.y = Math.random() * height();
        this.radius = Math.random() * 1.8 + 0.6;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.baseAlpha = Math.random() * 0.4 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Cursor repulsion — the field reacts to where you point
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const range = 140;
          if (dist < range && dist > 0) {
            const force = (range - dist) / range;
            this.x += (dx / dist) * force * 2.2;
            this.y += (dy / dist) * force * 2.2;
          }
        }

        if (this.x < 0 || this.x > width()) this.vx *= -1;
        if (this.y < 0 || this.y > height()) this.vy *= -1;
        this.x = Math.max(0, Math.min(width(), this.x));
        this.y = Math.max(0, Math.min(height(), this.y));
      }
      draw() {
        ctx.fillStyle = `rgba(167, 139, 250, ${this.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    let raf;
    const connectDist = 130;

    const render = () => {
      ctx.clearRect(0, 0, width(), height());

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectDist) {
            const alpha = 0.18 * (1 - dist / connectDist);
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Draw a brighter link toward the cursor
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180) {
            const alpha = 0.25 * (1 - dist / 180);
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(render);
    };

    if (prefersReduced) {
      // Draw a single static frame, no animation loop
      particles.forEach((p) => p.draw());
    } else {
      render();
    }

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onResize = () => {
      setSize();
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
