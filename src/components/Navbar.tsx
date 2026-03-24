'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'brand', href: '#brand' },
    { key: 'advantages', href: '#advantages' },
    { key: 'products', href: '#products' },
    { key: 'deployment', href: '#deployment' },
    { key: 'contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/unigreen-logo.png"
              alt="UniGreen"
              className="h-14 lg:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`relative px-3 py-2 text-base lg:text-lg font-medium transition-colors group ${
                  scrolled ? 'text-gray-700 hover:text-[#1e3a5f]' : 'text-white hover:text-[#a8e6cf]'
                }`}
              >
                {t(`nav.${item.key}`)}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  scrolled ? 'bg-gradient-to-r from-[#4a9b8f] to-[#1e3a5f]' : 'bg-white'
                }`} />
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${
                scrolled 
                  ? 'bg-gradient-to-r from-[#1e3a5f] to-[#2a5a8f] text-white hover:from-[#2a5a8f] hover:to-[#1e3a5f]'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'zh' ? 'EN' : '中文'}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#1e3a5f] hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#1e3a5f] hover:bg-gradient-to-r hover:from-[#e8f5f3] hover:to-white transition-all duration-200"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
