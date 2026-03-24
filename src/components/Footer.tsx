'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { HeadphonesIcon, GraduationCapIcon, SettingsIcon, Mail } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  const services = [
    { 
      icon: HeadphonesIcon, 
      text: language === 'zh' ? '7×24小时全天候客户支持' : '24/7 Customer Support' 
    },
    { 
      icon: GraduationCapIcon, 
      text: language === 'zh' ? '专业种植技术培训' : 'Professional Planting Training' 
    },
    { 
      icon: SettingsIcon, 
      text: language === 'zh' ? '全流程运维服务' : 'Full-process O&M Service' 
    },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0a1628]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4a9b8f] to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 服务保障标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {language === 'zh' ? '全方位客户服务保障' : 'Comprehensive Customer Service Guarantee'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a9b8f] to-[#a8e6cf] mx-auto rounded-full" />
        </div>

        {/* 服务项目卡片 */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#4a9b8f]/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4a9b8f] to-[#3a8b7f] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base">
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 分隔线 */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20" />
          <div className="px-6">
            <div className="w-2 h-2 rounded-full bg-[#4a9b8f]" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* 感谢与口号 */}
        <div className="text-center mb-8">
          <p className="text-lg text-[#a8e6cf] mb-4">
            {language === 'zh' ? '感谢关注！' : 'Thank You for Your Interest!'}
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            UniGreen
          </p>
          <p className="text-xl sm:text-2xl text-[#a8e6cf] mt-2">
            {language === 'zh' ? '——让远洋之上绿意盎然！' : '— More Green At Sea!'}
          </p>
        </div>

        {/* 官方邮箱和二维码 */}
        <div className="flex flex-col items-center gap-8">
          <a 
            href="mailto:info@unigreen.sg"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 hover:border-[#4a9b8f]/50 transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-[#4a9b8f]" />
            <span className="text-white font-medium">info@unigreen.sg</span>
          </a>

          {/* WhatsApp二维码 */}
          <div className="flex flex-col items-center">
            <p className="text-white font-semibold text-lg mb-3">WhatsApp</p>
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <img 
                src="/qrcode.png" 
                alt="WhatsApp QR Code" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
