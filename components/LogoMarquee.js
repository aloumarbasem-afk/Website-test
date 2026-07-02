'use client';

const logos = [
  'Northwind',
  'Acme Corp',
  'Quantica',
  'Lumen Labs',
  'Vertex',
  'Helios',
  'Cobalt',
  'Meridian',
];

export default function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <section className="relative z-10 py-10">
      <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-6">
        Trusted by data teams at
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-16 w-max animate-marquee">
          {row.map((name, i) => (
            <span
              key={i}
              className="text-xl font-semibold text-gray-400/70 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
