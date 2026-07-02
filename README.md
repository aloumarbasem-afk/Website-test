# Nexus Analytics - AI-Powered Analytics Dashboard

A stunning, modern landing page for an AI-powered analytics platform built with Next.js, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Animated Particle Background** - Dynamic, interactive particle system with connections
- **Hero Section** - Animated headline with floating dashboard mockup
- **Feature Cards** - 3D card effects with hover animations
- **Pricing Table** - Interactive pricing plans with highlight effects
- **Smooth Animations** - Framer Motion animations throughout
- **Responsive Design** - Mobile-first approach with full responsiveness
- **Modern UI** - Gradient effects, frosted glass morphism, smooth transitions
- **Performance Optimized** - Built with Next.js for optimal performance

## 🚀 Tech Stack

- **Next.js 16** - React framework for production
- **React 19** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS 4** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nexus-analytics/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── components/
│   ├── ParticleBackground.js  # Canvas particle system
│   ├── HeroSection.js         # Hero with animated dashboard
│   ├── FeaturesSection.js     # 6-card feature grid
│   └── PricingSection.js      # Interactive pricing table
├── public/                  # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── jsconfig.json
├── vercel.json
└── README.md
```

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Purple (#7c3aed)
- **Secondary**: Light Purple (#a78bfa)
- **Background**: Dark (#0f0f1e, #1a1a2e)
- **Glass Effect**: Frosted glass morphism with blur

### Animation Features
- Particle system with physics
- Smooth scroll animations
- Hover effects on cards
- Floating elements
- Gradient reveals
- Button interactions

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## 📝 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  dark: '#0f0f1e',
  darker: '#0a0a14',
  accent: '#7c3aed',
  'accent-light': '#a78bfa',
}
```

### Content
- **Hero**: Edit `components/HeroSection.js`
- **Features**: Edit `components/FeaturesSection.js` (modify the `features` array)
- **Pricing**: Edit `components/PricingSection.js` (modify the `plans` array)

### Animations
Adjust animation speeds and effects in component files by modifying Framer Motion configurations.

## 📄 License

MIT License - feel free to use this project for commercial purposes.

## 🙏 Credits

Inspired by modern SaaS landing pages and built with inspiration from the UI/UX prompts repository.

---

**Built with ❤️ by Claude Code**
