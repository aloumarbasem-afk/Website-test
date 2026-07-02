import './globals.css';

export const metadata = {
  title: 'Nexus — AI-Powered Analytics',
  description:
    'Turn raw data into real-time intelligence. Nexus is the AI analytics platform for teams who want predictive dashboards, sub-second alerts, and insights without writing SQL.',
  keywords: [
    'analytics',
    'AI analytics',
    'dashboard',
    'data platform',
    'real-time analytics',
    'business intelligence',
  ],
  authors: [{ name: 'Nexus Analytics' }],
  openGraph: {
    title: 'Nexus — AI-Powered Analytics',
    description:
      'Turn raw data into real-time intelligence with predictive dashboards and sub-second alerts.',
    type: 'website',
    siteName: 'Nexus Analytics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus — AI-Powered Analytics',
    description:
      'Turn raw data into real-time intelligence with predictive dashboards and sub-second alerts.',
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%237c3aed'/%3E%3Cstop offset='1' stop-color='%23a78bfa'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='8' fill='%230f0f1e'/%3E%3Cpath d='M9 22V10l14 12V10' fill='none' stroke='url(%23g)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        type: 'image/svg+xml',
      },
    ],
  },
};

export const viewport = {
  themeColor: '#0f0f1e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
