import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'UniGreen - Marine Hydroponics Technology | 海洋水培科技',
    template: '%s | UniGreen',
  },
  description: 'UniGreen Marine Hydroponics - Smart sailing, freshness all the way! Reliable onboard fresh vegetable self-sufficiency solutions for ocean vessels. 为远洋船舶打造可靠的船载新鲜蔬菜自给自足解决方案。',
  keywords: [
    'UniGreen',
    'Marine Hydroponics',
    'Shipboard Planting',
    'Ocean Farming',
    'Hydroponic Technology',
    'Vertical Farming',
    'Smart Agriculture',
    'Green Shipping',
    'Fresh Vegetables at Sea',
    'Container Farming',
    'Controlled Environment Agriculture',
    'Sustainable Shipping',
    '海洋水培',
    '船载种植',
    '远洋蔬菜',
    '水培技术',
    '植物工厂',
    '智能种植',
    '绿色航运',
  ],
  authors: [{ name: 'UniGreen Team', url: 'https://unigreen.sg' }],
  creator: 'UniGreen',
  publisher: 'UniGreen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unigreen.sg'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
    },
  },
  icons: {
    icon: [
      { url: '/unigreen-logo.png', sizes: 'any' },
    ],
    apple: '/unigreen-logo.png',
  },
  openGraph: {
    title: 'UniGreen - Marine Hydroponics Technology',
    description: 'Smart sailing, freshness all the way! Reliable onboard fresh vegetable solutions for ocean vessels.',
    url: 'https://unigreen.sg',
    siteName: 'UniGreen',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UniGreen Marine Hydroponics - Fresh Vegetables at Sea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UniGreen - Marine Hydroponics Technology',
    description: 'Smart sailing, freshness all the way! Reliable onboard fresh vegetable solutions for ocean vessels.',
    images: ['/og-image.png'],
    creator: '@unigreen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="en" href="https://unigreen.sg" />
        <link rel="alternate" hrefLang="zh" href="https://unigreen.sg/?lang=zh" />
        <link rel="alternate" hrefLang="x-default" href="https://unigreen.sg" />
        <meta name="theme-color" content="#4a9b8f" />
      </head>
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
