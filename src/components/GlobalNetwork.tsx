'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function GlobalNetwork() {
  const { language } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#4a9b8f]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
              {language === 'zh' ? 'UniGreen 全球服务网络' : 'UniGreen Service Network'}
            </h2>
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#4a9b8f]" />
          </div>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            {language === 'zh' 
              ? '覆盖全球主要港口，为您的船舶提供及时的技术支持与服务' 
              : 'Covering major ports worldwide, providing timely technical support and services for your vessels'}
          </p>
        </div>

        {/* Global Network Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-white">
          <img 
            src="/global-network.png" 
            alt="UniGreen Global Service Network"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
