'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import Advantages from '@/components/Advantages';
import Products from '@/components/Products';
import Deployment from '@/components/Deployment';
import GlobalNetwork from '@/components/GlobalNetwork';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroBanner />
          <Advantages />
          <Products />
          <Deployment />
          <GlobalNetwork />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
