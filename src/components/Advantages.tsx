'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Ship, Users, Globe2, Zap, Wrench } from 'lucide-react';

const icons = [Zap, Leaf, Ship, Globe2, Zap, Wrench];

export default function Advantages() {
  const { t, language } = useLanguage();

  return (
    <section id="advantages" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#4a9b8f]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
              {t('advantages.title')}
            </h2>
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#4a9b8f]" />
          </div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {t('advantages.subtitle')}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br from-[#4a9b8f] to-[#3a8b7f] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow relative">
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#4a9b8f] transition-colors">
                      {t(`advantages.items.${index}.title`)}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {t(`advantages.items.${index}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pain Points & Value */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5a8f] rounded-2xl p-8 lg:p-12 shadow-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            {t('advantages.painPoints.title')}
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Shipping Pain Points */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <Ship className="h-8 w-8 text-[#a8e6cf] mr-3" />
                <h4 className="text-xl font-bold text-white">
                  {t('advantages.painPoints.shipping.title')}
                </h4>
              </div>
              <ul className="space-y-3">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start text-gray-200 text-sm lg:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a9b8f] mt-2 mr-3 flex-shrink-0" />
                    {t(`advantages.painPoints.shipping.items.${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Crew Welfare */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-[#a8e6cf] mr-3" />
                <h4 className="text-xl font-bold text-white">
                  {t('advantages.painPoints.crew.title')}
                </h4>
              </div>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start text-gray-200 text-sm lg:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a9b8f] mt-2 mr-3 flex-shrink-0" />
                    {t(`advantages.painPoints.crew.items.${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* ESG */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <Globe2 className="h-8 w-8 text-[#a8e6cf] mr-3" />
                <h4 className="text-xl font-bold text-white">
                  {t('advantages.painPoints.esg.title')}
                </h4>
              </div>
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start text-gray-200 text-sm lg:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a9b8f] mt-2 mr-3 flex-shrink-0" />
                    {t(`advantages.painPoints.esg.items.${i}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
