'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function HeroBanner() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2137]/90 via-[#1e3a5f]/80 to-[#2d5a7b]/75 animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Main Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-[#a8e6cf] font-light mb-8">
              {t('hero.subtitle')}
            </p>
            <a
              href="#brand"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#4a9b8f] to-[#3a8b7f] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t('hero.learnMore')}
            </a>
          </div>

          {/* Right - Brand Story */}
          <div id="brand" className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-6 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-[#4a9b8f] to-[#1e3a5f] rounded-full mr-3" />
              {t('hero.story.title')}
            </h2>
            <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed">
              <p>{t('hero.story.p1')}</p>
              <p>{t('hero.story.p2')}</p>
              <p>{t('hero.story.p3')}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xl lg:text-2xl font-bold text-[#4a9b8f] text-center">
                {t('hero.story.ending')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#advantages" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
