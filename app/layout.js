import './globals.css';

export const metadata = {
  title: 'Nexus Analytics',
  description: 'AI-Powered Analytics Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  );
}
