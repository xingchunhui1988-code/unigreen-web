'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('unigreen-lang') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('unigreen-lang', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    // @ts-ignore
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        // @ts-ignore
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translation content
const translations = {
  zh: {
    nav: {
      home: '首页',
      brand: '品牌故事',
      advantages: '核心优势',
      products: '产品介绍',
      deployment: '灵活部署',
      contact: '联系我们',
    },
    hero: {
      title: 'UniGreen 海洋水培科技',
      subtitle: '智航远洋，鲜伴全程！',
      story: {
        title: '品牌故事',
        p1: 'UniGreen 团队深耕航运行业，始终致力于攻克远洋新鲜蔬菜供应难题，竭力保障船舶即便在长期航行中，也能稳定获取安全、新鲜的果蔬产品。',
        p2: '依托深厚的农业专业技术积淀与丰富的海事行业实操经验，UniGreen 团队深谙船舶环境的各类限制、空间资源的稀缺性、船舶运营的专业要求以及远洋航海的生活需求。',
        p3: '团队将成熟的室内物联网水培技术与模块化智能种植方案深度融合，把陆地上已验证成功的小型植物工厂系统适配改造为海洋适用版本，为远洋船舶打造出可靠的船载新鲜蔬菜自给自足解决方案。',
        ending: 'UniGreen，让远洋之上绿意盎然！',
      },
      learnMore: '了解更多',
    },
    advantages: {
      title: '核心优势',
      subtitle: '关注每一次远洋航行，用心守护海上生活',
      items: [
        {
          title: '一键智培，操作零负担',
          desc: '搭载智能栽培技术，船员无需增加额外工作，轻松实现果蔬种植全流程操作。',
        },
        {
          title: '高产高效，空间利用率拉满',
          desc: '单位种植面积产量大幅提升，高效实现收获产量最大化。',
        },
        {
          title: '船舶专属设计，适配海洋环境',
          desc: '针对海洋环境量身打造，从根源杜绝渗漏、溢液风险。',
        },
        {
          title: '性能稳定可靠，海况自适应',
          desc: '可适应各类海洋航行工况，保障果蔬持续稳定收获。',
        },
        {
          title: '供应链全程可控，缩短种植周期',
          desc: '提供种苗/种子直供服务，有效缩短船载种植周期。',
        },
        {
          title: '模块化设计，易维易升级',
          desc: '设备采用模块化架构，日常维护更便捷，且支持灵活的升级扩容。',
        },
      ],
      painPoints: {
        title: '航运行业痛点与价值',
        shipping: {
          title: '航运行业物资供应的核心痛点',
          items: [
            '港口采购受限，仅能在少数便利港口完成物资采买',
            '冷链物流成本居高不下',
            '各港口物资供应质量参差不齐，无统一标准',
            '船舶储放空间有限，果蔬腐损率高',
            '船岸之间的沟通协作成本持续增加',
          ],
        },
        crew: {
          title: '船员福利升级价值',
          items: [
            '显著提升船员海上生活品质',
            '让船员随时便捷获取新鲜绿色果蔬',
            '增强船员的团队归属感与集体凝聚力',
            '有效降低船舶的人员招聘与培训成本',
          ],
        },
        esg: {
          title: 'ESG合规与可持续发展',
          items: [
            '船载就地种植，大幅降低对冷链运输的依赖',
            '减少物资采购频次，降低包装材料的使用与损耗',
            '精准节水灌溉，大幅减少淡水消耗',
            '降低全流程碳排放，践行绿色航运理念',
          ],
        },
      },
    },
    products: {
      title: '产品介绍',
      models: {
        title: '产品型号',
        subtitle: '三大产品系列，满足不同船舶需求',
      },
      specs: {
        packageDimensions: '包装尺寸：780×780×2000mm',
        deviceDimensions: '设备尺寸：740×740×1820mm',
        voltage: '电压：100-230V',
        power: '功率：280W',
        plantHoles: '种植孔：32×4个',
        depth: '深度：370mm',
        plantingArea: '种植面积：1.8m²',
        material: '主体材质：聚氯乙烯+聚丙烯+铝合金+复合板材',
        waterTank: '水箱：1个60L',
        waterPump: '水泵：2个',
        colors: '颜色：黑色/蓝色/绿色',
      },
      features: {
        title: '核心功能',
        smart: {
          title: '智能APP一键操控，新手也能轻松种',
          desc: '灯光、水泵独立智能控制，支持定时启停、节能模式等个性化设置，零基础也能实现专业种植。',
        },
        varieties: {
          title: '丰富品类选择，满足多元味蕾需求',
          leaf: '叶菜类（15+品种）：红叶生菜、绿叶生菜、奶油生菜、罗马生菜、苦苣、菠菜、小白菜、上海青、芥蓝、中国芹菜、樱桃萝卜、水菠菜、苋菜、夏白菜等',
          fruit: '果菜类（6+品种）：圣女果、番茄、彩椒、甜椒、迷你黄瓜等',
          berry: '浆果类及其他（3+品种）：蓝莓、草莓等',
        },
        output: {
          title: '现采现食，鲜启海上味蕾',
          items: [
            '每台UniGreen水培设备年度可产出：',
            '超100公斤现采新鲜果蔬',
            '为20-25名船员持续供应每周新鲜绿色蔬菜',
            '每年可替代传统采购与物流成本约10000美元',
          ],
        },
      },
    },
    deployment: {
      title: '灵活部署',
      subtitle: '多种合作模式，助力远洋绿色发展',
      schemes: [
        {
          title: '方案一：现役船舶适配',
          items: [
            {
              title: '资本性支出模式',
              desc: '全款采购整套系统，附赠年度专属运维服务包',
            },
            {
              title: '运营性支出模式',
              desc: '灵活租赁合作，月付租金即含全套运维服务包',
            },
          ],
        },
        {
          title: '方案二：进坞检修船舶适配',
          desc: '趁船舶常规检修期，同步安装专属水培种植系统',
        },
        {
          title: '方案三：新船建造项目适配',
          desc: '从船舶设计蓝图阶段，即规划并预留水培系统专属空间，完成前置配套安装',
        },
      ],
    },
    network: {
      title: 'UniGreen 全球服务网络',
      locations: [
        { city: '上海', country: '中国' },
        { city: '新加坡', country: '新加坡' },
        { city: '悉尼', country: '澳大利亚' },
        { city: '鹿特丹', country: '荷兰' },
        { city: '休斯顿', country: '美国' },
        { city: '釜山', country: '韩国' },
        { city: '巴拿马', country: '巴拿马' },
        { city: '横滨', country: '日本' },
      ],
    },
    footer: {
      brand: '爱培生物 CheerBio',
      brandDesc: '专注室内物联网水培种植，打造多品种小面积个性化植物工厂',
      service: {
        title: '全方位客户服务保障',
        item1: '7×24小时全天候客户支持',
        item2: '专业种植技术培训',
        item3: '全流程运维服务',
        thanks: '感谢关注！',
        slogan: 'UniGreen ——让远洋之上绿意盎然！',
      },
      contact: {
        title: '联系方式',
        hotline: '全球热线：400-878-9909',
        email: '官方邮箱：info@unigreen.sg',
        website: '官方网站：www.unigreen.sg',
      },
      wechat: '微信公众号',
      copyright: '©爱培生物科技（南通）有限公司 所有权利保留',
    },
  },
  en: {
    nav: {
      home: 'Home',
      brand: 'Our Story',
      advantages: 'Why UniGreen',
      products: 'Products',
      deployment: 'Deployment',
      contact: 'Contact',
    },
    hero: {
      title: 'UniGreen Marine Hydroponics',
      subtitle: 'Smart Sailing, Freshness All the Way!',
      story: {
        title: 'Our Story',
        p1: 'The UG team has focused on the shipping industry and dedicated itself to solving the difficulty of supplying fresh vegetables at sea, striving to ensure a stable supply of safe and fresh production even during long voyages.',
        p2: 'Backed by a strong agricultural expertise and profound maritime industry experience, UG team fully understands the constraints of shipboard environments, limited space, operational requirements, and life at sea.',
        p3: 'By applying mature indoor IoT hydroponic technology and modular intelligent planting solutions, the team has adapted successful land-based small-scale plant factory systems for marine applications, providing reliable onboard fresh vegetable self-sufficiency solutions for the seagoing ships.',
        ending: 'UniGreen, More Green At Sea!',
      },
      learnMore: 'Learn More',
    },
    advantages: {
      title: 'Why UniGreen?',
      subtitle: 'UniGreen, More Green At Sea!',
      items: [
        {
          title: 'One-click cultivation',
          desc: 'Technology with no extra workload for crew, ensuring effortless operation',
        },
        {
          title: 'Higher yield and greater productivity',
          desc: 'Per unit area, maximizing harvest output efficiently',
        },
        {
          title: 'Designed for ships',
          desc: 'Adapted to marine environment with no risk of leakage or spillage',
        },
        {
          title: 'Stable and Reliable performance',
          desc: 'Ensuring consistent harvesting under various sea conditions',
        },
        {
          title: 'Reliable supply chain',
          desc: 'With direct seedling/seed supply, reducing on-board growing period',
        },
        {
          title: 'Modular design',
          desc: 'For easier maintenance and scalable upgrades',
        },
      ],
      painPoints: {
        title: 'UniGreen: Your Voyage Matters, We Care!',
        shipping: {
          title: 'Provision Supply Chain Challenges',
          items: [
            'Procurement restrictions, holding on for convenient ports',
            'High cold-chain logistics costs',
            'Inconsistent supply quality across ports',
            'Limited onboard storage and high spoilage rate',
            'Increased communication costs between ship and shore',
          ],
        },
        crew: {
          title: 'Seafarer Welfare',
          items: [
            'Enhance crew well-being',
            'Ensure easier access to fresh greens',
            'Strengthen crew sense of belonging',
            'Reduce recruitment & training costs',
          ],
        },
        esg: {
          title: 'ESG Compliance & Sustainability',
          items: [
            'Onboard cultivation, reduce reliance on cold chain transportation',
            'Less procurement and loss packaging materials',
            'Reduce freshwater usage',
            'Lower CO₂ emissions',
          ],
        },
      },
    },
    products: {
      title: 'Technical Specifications of UG Max Series',
      models: {
        title: 'Product Models',
        subtitle: 'Three product series to meet different vessel needs',
      },
      specs: {
        packageDimensions: 'Package Dimensions: 780×780×2000mm',
        deviceDimensions: 'Device Dimensions: 740×740×1820mm',
        voltage: 'Voltage: 100-230V',
        power: 'Power: 280W',
        plantHoles: 'Plant Holes: 32×4 PCS',
        depth: 'Depth: 370mm',
        plantingArea: 'Planting Area: 1.8m²',
        material: 'Material: PVC+PP+Aluminum+Alloy+MCC Board',
        waterTank: 'Water Tank: 1 PC 60L',
        waterPump: 'Water Pump: 2 PCS',
        colors: 'Colors: Black/Blue/Green',
      },
      features: {
        title: 'Core Features',
        smart: {
          title: 'APP One-Touch Control, Even Beginners Can Grow Vegetables',
          desc: 'Independent control of lights & water pumps, supports scheduled on/off, energy-saving etc.',
        },
        varieties: {
          title: "It's Your Choice!",
          leaf: 'Leafy Greens (15+ Varieties): Green Lollo Rossa Lettuce, Red Lollo Rossa Lettuce, Butterhead Lettuce, Romaine Lettuce, Curly Endive, Spinach, Bok Choy, Shanghai Green, Seeding Chinese Cabbage, Kale, Chinese Celery, Cherry Radish, Water Spinach, Amaranth, Summer Pak Choi',
          fruit: 'Fruit Vegetables (6+ Varieties): Dwarf Tomato, Cherry Tomato, Tomato, Chili Pepper, Bell Pepper, Mini Cucumber',
          berry: 'Berries (3+ Varieties): Blueberry, Strawberry',
        },
        output: {
          title: 'Pick and Eat Fresh - Activate Your Taste Buds',
          items: [
            'Each UniGreen device delivers:',
            '100+ kg of hyper-fresh annually',
            'Sustains 20-25 crew members with weekly greens',
            'Replaces $10K in traditional procurement & logistics costs',
          ],
        },
      },
    },
    deployment: {
      title: 'UniGreen Flexible Deployment Plans',
      subtitle: 'Multiple cooperation models for green ocean development',
      schemes: [
        {
          title: '1. For Vessels in Operation',
          items: [
            {
              title: 'CAPEX Model',
              desc: 'Full system purchase with an annual support service package.',
            },
            {
              title: 'OPEX Model',
              desc: 'Flexible leasing with a monthly fee inclusive of full support service package.',
            },
          ],
        },
        {
          title: '2. For Vessels Entering Dry-dock',
          desc: 'Retrofitting: Install a dedicated hydroponics system during scheduled maintenance.',
        },
        {
          title: '3. For New Building Projects',
          desc: 'Integrated Planning: Designate and pre-equip space for a hydroponics system from the blueprint stage.',
        },
      ],
    },
    network: {
      title: 'UniGreen Global Service Network',
      locations: [
        { city: 'Shanghai', country: 'China' },
        { city: 'Singapore', country: 'Singapore' },
        { city: 'Sydney', country: 'Australia' },
        { city: 'Rotterdam', country: 'Netherlands' },
        { city: 'Houston', country: 'USA' },
        { city: 'Busan', country: 'South Korea' },
        { city: 'Panama', country: 'Panama' },
        { city: 'Yokohama', country: 'Japan' },
      ],
    },
    footer: {
      brand: 'CheerBio',
      brandDesc: 'Specialized in indoor IoT hydroponic cultivation, creating personalized plant factories with multiple varieties in small spaces',
      service: {
        title: 'Comprehensive Customer Service Guarantee',
        item1: '24/7 Customer Support',
        item2: 'Professional Planting Training',
        item3: 'Full-process O&M Service',
        thanks: 'Thank You for Your Interest!',
        slogan: 'UniGreen — More Green At Sea!',
      },
      contact: {
        title: 'Contact',
        hotline: 'Global Hotline: 400-878-9909',
        email: 'Email: info@unigreen.sg',
        website: 'Website: www.unigreen.sg',
      },
      wechat: 'WeChat Official Account',
      copyright: '© CheerBio Biotechnology (Nantong) Co., Ltd. All Rights Reserved',
    },
  },
};
