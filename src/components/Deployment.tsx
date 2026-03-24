'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Ship, Wrench, Building2, CreditCard, RefreshCw } from 'lucide-react';

export default function Deployment() {
  const { t } = useLanguage();

  return (
    <section id="deployment" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#4a9b8f]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
              {t('deployment.title')}
            </h2>
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#4a9b8f]" />
          </div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {t('deployment.subtitle')}
          </p>
        </div>

        {/* Deployment Schemes */}
        <div className="space-y-8">
          {/* Scheme 1: Active Vessel */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4a9b8f] to-[#3a8b7f] flex items-center justify-center shadow-lg mr-4">
                  <Ship className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">
                    {t('deployment.schemes.0.title')}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* CAPEX Model */}
                <div className="bg-gradient-to-br from-[#e8f5f3] to-white rounded-xl p-6 border border-[#4a9b8f]/20 hover:border-[#4a9b8f] transition-colors">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-[#4a9b8f] mr-3" />
                    <h4 className="text-lg font-bold text-[#1e3a5f]">
                      {t('deployment.schemes.0.items.0.title')}
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    {t('deployment.schemes.0.items.0.desc')}
                  </p>
                </div>

                {/* OPEX Model */}
                <div className="bg-gradient-to-br from-[#e8f5f3] to-white rounded-xl p-6 border border-[#4a9b8f]/20 hover:border-[#4a9b8f] transition-colors">
                  <div className="flex items-center mb-4">
                    <RefreshCw className="h-6 w-6 text-[#4a9b8f] mr-3" />
                    <h4 className="text-lg font-bold text-[#1e3a5f]">
                      {t('deployment.schemes.0.items.1.title')}
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    {t('deployment.schemes.0.items.1.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scheme 2: Dry Dock */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2a5a8f] to-[#1e3a5f] flex items-center justify-center shadow-lg mr-6 flex-shrink-0">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                    {t('deployment.schemes.1.title')}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {t('deployment.schemes.1.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scheme 3: New Build */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a5a8f] flex items-center justify-center shadow-lg mr-6 flex-shrink-0">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                    {t('deployment.schemes.2.title')}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {t('deployment.schemes.2.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
