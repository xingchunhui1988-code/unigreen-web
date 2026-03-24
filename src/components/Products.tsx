'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Settings, Smartphone, Leaf } from 'lucide-react';

export default function Products() {
  const { t, language } = useLanguage();

  return (
    <section id="products" className="py-24 lg:py-32 bg-[#e8f5f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#1e3a5f]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
              {t('products.title')}
            </h2>
            <div className="hidden sm:block h-px w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#1e3a5f]" />
          </div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-center">
            {language === 'zh' 
              ? '专为远洋船舶打造的智能水培解决方案' 
              : 'Smart hydroponic solutions designed for ocean vessels'}
          </p>
        </div>

        {/* Hero Product Showcase - 机器图片 */}
        <div className="mb-16 lg:mb-24">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-white/50 rounded-full blur-3xl" />
            
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Machine Image Side */}
                <div className="lg:w-1/2 relative bg-gradient-to-br from-[#f0f9f8] to-[#e8f5f3] p-8 lg:p-12 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(74,155,143,0.2),transparent_50%)]" />
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#4a9b8f]/20 to-[#1e3a5f]/20 rounded-3xl blur-2xl" />
                    <img
                      src="/machine.png"
                      alt="UniGreen Machine"
                      className="relative w-full max-w-md drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Product Info Side */}
                <div className="lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#1e3a5f] text-white text-xs font-semibold rounded-full">UG Max</span>
                    <span className="text-gray-400 text-sm">{language === 'zh' ? '旗舰款' : 'Flagship'}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1e3a5f] mb-4">
                    {language === 'zh' ? '智能水培系统' : 'Smart Hydroponic System'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {language === 'zh' 
                      ? '专为远洋船舶设计，让您在茫茫大海上也能享受新鲜蔬果。模块化设计、智能控制、高效产出。' 
                      : 'Designed for ocean vessels, enjoy fresh produce even at sea. Modular design, intelligent control, efficient output.'}
                  </p>
                  
                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group bg-gradient-to-br from-[#f8fafa] to-white rounded-2xl p-5 border border-gray-100 hover:border-[#4a9b8f] hover:shadow-lg transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-[#4a9b8f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <span className="text-xl">🌱</span>
                      </div>
                      <div className="text-xl font-bold text-[#1e3a5f]">36</div>
                      <div className="text-sm text-gray-500">{language === 'zh' ? '个种植孔' : 'Plant Sites'}</div>
                    </div>
                    <div className="group bg-gradient-to-br from-[#f8fafa] to-white rounded-2xl p-5 border border-gray-100 hover:border-[#4a9b8f] hover:shadow-lg transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-[#4a9b8f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <span className="text-xl">⚡</span>
                      </div>
                      <div className="text-xl font-bold text-[#1e3a5f]">{language === 'zh' ? '智能' : 'Smart'}</div>
                      <div className="text-sm text-gray-500">{language === 'zh' ? 'APP控制' : 'App Control'}</div>
                    </div>
                    <div className="group bg-gradient-to-br from-[#f8fafa] to-white rounded-2xl p-5 border border-gray-100 hover:border-[#4a9b8f] hover:shadow-lg transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-[#4a9b8f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <span className="text-xl">💧</span>
                      </div>
                      <div className="text-xl font-bold text-[#1e3a5f]">90%</div>
                      <div className="text-sm text-gray-500">{language === 'zh' ? '节水效率' : 'Water Saved'}</div>
                    </div>
                    <div className="group bg-gradient-to-br from-[#f8fafa] to-white rounded-2xl p-5 border border-gray-100 hover:border-[#4a9b8f] hover:shadow-lg transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-[#4a9b8f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <span className="text-xl">🚢</span>
                      </div>
                      <div className="text-xl font-bold text-[#1e3a5f]">{language === 'zh' ? '船用级' : 'Marine'}</div>
                      <div className="text-sm text-gray-500">{language === 'zh' ? '品质认证' : 'Certified'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Control & Plant Varieties - 双栏布局 */}
        <div className="mb-16 lg:mb-24">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left - APP智能控制 */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full group hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="p-6 lg:p-8 text-center flex-grow flex flex-col justify-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4a9b8f] to-[#3a8b7f] flex items-center justify-center shadow-lg">
                      <Smartphone className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a5f] mb-4">
                    {language === 'zh' ? '智能APP操控' : 'Smart App Control'}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {language === 'zh' 
                      ? '新手也能轻松种！灯光、水泵独立智能控制，支持定时启停、节能模式，零基础也能实现专业种植。' 
                      : 'Even beginners can grow! Independent control of lights & water pumps, scheduled on/off, energy-saving modes.'}
                  </p>
                </div>
                <div className="p-4 pt-0 bg-gray-50">
                  <img
                    src="/smart-control.png"
                    alt="Smart Control"
                    className="w-full h-auto rounded-2xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right - 丰富品类选择 */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full group hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="p-6 lg:p-8 text-center flex-grow flex flex-col justify-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2a5a8f] flex items-center justify-center shadow-lg">
                      <Leaf className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a5f] mb-4">
                    {language === 'zh' ? '丰富品类选择' : "It's Your Choice!"}
                  </h3>
                  
                  {/* Category Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-2">
                    <span className="px-4 py-2 bg-[#4a9b8f]/10 text-[#4a9b8f] rounded-full text-sm font-medium">
                      🥬 {language === 'zh' ? '叶菜类 15+' : 'Leafy Greens 15+'}
                    </span>
                    <span className="px-4 py-2 bg-[#e74c3c]/10 text-[#e74c3c] rounded-full text-sm font-medium">
                      🍅 {language === 'zh' ? '果菜类 6+' : 'Fruit Veg 6+'}
                    </span>
                    <span className="px-4 py-2 bg-[#9b59b6]/10 text-[#9b59b6] rounded-full text-sm font-medium">
                      🍓 {language === 'zh' ? '浆果类 3+' : 'Berries 3+'}
                    </span>
                  </div>
                  
                  {language === 'zh' && (
                    <div className="text-gray-500 text-sm leading-relaxed">
                      <p><strong className="text-gray-700">叶菜：</strong>红叶生菜、奶油生菜、菠菜、小白菜、芥蓝、芹菜、樱桃萝卜...</p>
                      <p className="mt-1"><strong className="text-gray-700">果菜：</strong>圣女果、番茄、彩椒、迷你黄瓜...</p>
                    </div>
                  )}
                </div>
                <div className="p-4 pt-0 bg-gray-50">
                  <img
                    src="/plant-varieties.png"
                    alt="Plant Varieties"
                    className="w-full h-auto rounded-2xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pick and Eat Fresh - 图片展示 */}
        <div className="mb-16 lg:mb-24">
          {/* Top Section - Left Image + Right Text */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
            <div className="flex flex-col lg:flex-row">
              {/* Left - Person Image */}
              <div className="lg:w-1/2 relative">
                <div className="h-full min-h-[400px] lg:min-h-[500px]">
                  <img 
                    src="/fresh-hero.png" 
                    alt="Fresh harvest" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Text Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#f8fafa] to-white">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1e3a5f] mb-4">
                  {language === 'zh' ? '现采现食，鲜启海上味蕾' : 'Pick and Eat Fresh - Activate Your Taste Buds'}
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  {language === 'zh' ? '每台 UniGreen 水培设备年度可产出：' : 'Each UniGreen device delivers:'}
                </p>
                
                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#4a9b8f] to-[#3a8b7f] flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">100+</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-[#1e3a5f]">
                        {language === 'zh' 
                          ? <>公斤现采新鲜果蔬</>
                          : <><span className="font-bold">kg</span> of hyper-fresh produce annually</>
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a5a8f] flex items-center justify-center">
                      <span className="text-white text-xl font-bold">20-25</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-[#1e3a5f]">
                        {language === 'zh' 
                          ? <>名船员持续供应每周新鲜绿色蔬菜</>
                          : <><span className="font-bold">crew members</span> sustained with weekly fresh greens</>
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#e8f5f3] to-white border-2 border-[#4a9b8f] flex items-center justify-center">
                      <span className="text-[#4a9b8f] text-2xl font-bold">$10K</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-[#1e3a5f]">
                        {language === 'zh' 
                          ? <>每年可替代传统采购与物流成本</>
                          : <><span className="font-bold">savings</span> in traditional procurement & logistics costs</>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Auto Scrolling Images */}
          <div className="overflow-hidden rounded-2xl">
            <div className="flex animate-scroll gap-4 py-4">
              {/* First set of images - 移除了fresh-5 */}
              {[1, 2, 3, 4, 10, 6, 7, 8, 9].map((num, index) => {
                let ext = 'jpg';
                if ([6, 7, 8, 9].includes(num)) ext = 'png';
                return (
                  <div key={`first-${index}`} className="flex-shrink-0 w-48 h-48 overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={`/fresh-${num}.${ext}`} 
                      alt={`Fresh harvest ${num}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                );
              })}
              {/* Duplicate for seamless loop */}
              {[1, 2, 3, 4, 10, 6, 7, 8, 9].map((num, index) => {
                let ext = 'jpg';
                if ([6, 7, 8, 9].includes(num)) ext = 'png';
                return (
                  <div key={`second-${index}`} className="flex-shrink-0 w-48 h-48 overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={`/fresh-${num}.${ext}`} 
                      alt={`Fresh harvest ${num}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technical Specifications - 技术规格（最后） */}
        <div>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="h-7 w-7 text-[#4a9b8f]" />
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                {language === 'zh' ? 'UG Max系列技术规格' : 'Technical Specifications'}
              </h3>
            </div>
            <p className="text-gray-500">
              {language === 'zh' ? '专业参数，品质保证' : 'Professional specifications, quality assured'}
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            {/* 主要参数 - 核心数据高亮展示 */}
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a5a8f] p-8 lg:p-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="text-[#a8e6cf] text-sm mb-2">{language === 'zh' ? '种植孔数' : 'Plant Sites'}</div>
                  <div className="text-white text-3xl lg:text-4xl font-bold">128</div>
                  <div className="text-white/60 text-xs mt-1">{language === 'zh' ? '32×4组' : '32×4 groups'}</div>
                </div>
                <div className="text-center">
                  <div className="text-[#a8e6cf] text-sm mb-2">{language === 'zh' ? '种植面积' : 'Planting Area'}</div>
                  <div className="text-white text-3xl lg:text-4xl font-bold">1.8</div>
                  <div className="text-white/60 text-xs mt-1">m²</div>
                </div>
                <div className="text-center">
                  <div className="text-[#a8e6cf] text-sm mb-2">{language === 'zh' ? '额定功率' : 'Power'}</div>
                  <div className="text-white text-3xl lg:text-4xl font-bold">280</div>
                  <div className="text-white/60 text-xs mt-1">W</div>
                </div>
                <div className="text-center">
                  <div className="text-[#a8e6cf] text-sm mb-2">{language === 'zh' ? '水箱容量' : 'Water Tank'}</div>
                  <div className="text-white text-3xl lg:text-4xl font-bold">60</div>
                  <div className="text-white/60 text-xs mt-1">L</div>
                </div>
              </div>
            </div>

            {/* 详细参数 - 分类展示 */}
            <div className="p-8 lg:p-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 尺寸规格 */}
                <div>
                  <h4 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#4a9b8f]/10 flex items-center justify-center text-lg">📐</span>
                    {language === 'zh' ? '尺寸规格' : 'Dimensions'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '设备尺寸' : 'Device Size'}</span>
                      <span className="text-[#1e3a5f] font-medium">740×740×1820mm</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '包装尺寸' : 'Package Size'}</span>
                      <span className="text-[#1e3a5f] font-medium">780×780×2000mm</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '种植深度' : 'Depth'}</span>
                      <span className="text-[#1e3a5f] font-medium">370mm</span>
                    </div>
                  </div>
                </div>

                {/* 电气参数 */}
                <div>
                  <h4 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#4a9b8f]/10 flex items-center justify-center text-lg">⚡</span>
                    {language === 'zh' ? '电气参数' : 'Electrical'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '输入电压' : 'Input Voltage'}</span>
                      <span className="text-[#1e3a5f] font-medium">100-230V</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '额定功率' : 'Rated Power'}</span>
                      <span className="text-[#1e3a5f] font-medium">280W</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '水泵数量' : 'Water Pumps'}</span>
                      <span className="text-[#1e3a5f] font-medium">2个</span>
                    </div>
                  </div>
                </div>

                {/* 材质与外观 */}
                <div>
                  <h4 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#4a9b8f]/10 flex items-center justify-center text-lg">🎨</span>
                    {language === 'zh' ? '材质外观' : 'Material & Color'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '主体材质' : 'Material'}</span>
                      <span className="text-[#1e3a5f] font-medium text-right text-sm">{language === 'zh' ? '聚氯乙烯+聚丙烯+铝合金+复合板材' : 'PVC+PP+Aluminum+Alloy+MCC Board'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '可选颜色' : 'Colors'}</span>
                      <div className="flex gap-2">
                        <span className="w-5 h-5 rounded-full bg-gray-800 border-2 border-gray-200" title={language === 'zh' ? '黑色' : 'Black'} />
                        <span className="w-5 h-5 rounded-full bg-blue-600 border-2 border-gray-200" title={language === 'zh' ? '蓝色' : 'Blue'} />
                        <span className="w-5 h-5 rounded-full bg-green-600 border-2 border-gray-200" title={language === 'zh' ? '绿色' : 'Green'} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{language === 'zh' ? '水箱规格' : 'Water Tank'}</span>
                      <span className="text-[#1e3a5f] font-medium">1×60L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
