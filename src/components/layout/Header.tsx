'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import { usePathname, useRouter } from 'next/navigation';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'BRL'>('USD');
  const pathname = usePathname();
  const router = useRouter();
  const isPortuguese = pathname.startsWith('/pt');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'BRL' : 'USD');
  };

  const toggleLanguage = () => {
    const currentLang = pathname.startsWith('/pt') ? 'pt' : 'en';
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link 
            href={isPortuguese ? '/pt' : '/en'}
            className="flex items-center space-x-2 text-3xl lg:text-4xl font-bold hover:text-primary transition-colors font-montserrat"
          >
            <span className="text-primary">ANT</span>
            <span className="text-secondary"><sub>Brazil</sub></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 font-inter">
            <div className="group relative">
              <button className="flex items-center space-x-2 text-base lg:text-lg font-medium hover:text-primary transition-colors">
                <span>{isPortuguese ? 'Destinos' : 'Destinations'}</span>
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href={isPortuguese ? '/pt/tours/brazil' : '/en/tours/brazil'}
                    className="block px-4 py-3 text-base hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {isPortuguese ? 'Brasil' : 'Brazil'}
                  </Link>
                  <Link
                    href={isPortuguese ? '/pt/tours/dubai' : '/en/tours/dubai'}
                    className="block px-4 py-3 text-base hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                  >
                    <span>Dubai</span>
                    <span className="ml-2 text-dubai-gold">✨</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              href={isPortuguese ? '/pt/about' : '/en/about'}
              className="text-base lg:text-lg font-medium hover:text-primary transition-colors"
            >
              {isPortuguese ? 'Sobre' : 'About'}
            </Link>
            
            <Link 
              href={isPortuguese ? '/pt/contact' : '/en/contact'}
              className="text-base lg:text-lg font-medium hover:text-primary transition-colors"
            >
              {isPortuguese ? 'Contato' : 'Contact'}
            </Link>

            <div className="flex items-center space-x-6">
              <button
                onClick={toggleCurrency}
                className="px-4 py-2 text-base lg:text-lg font-medium bg-secondary/10 hover:bg-secondary/20 rounded-full transition-colors"
              >
                {currency}
              </button>
              
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-base lg:text-lg font-medium bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                {isPortuguese ? 'PT' : 'EN'}
              </button>

              <button
                onClick={toggleTheme}
                className="p-3 text-xl lg:text-2xl rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-6 space-y-6">
            <div className="space-y-3">
              <div className="font-medium text-lg px-2">{isPortuguese ? 'Destinos' : 'Destinations'}</div>
              <Link
                href={isPortuguese ? '/pt/tours/brazil' : '/en/tours/brazil'}
                className="block px-4 py-3 text-base hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                {isPortuguese ? 'Brasil' : 'Brazil'}
              </Link>
              <Link
                href={isPortuguese ? '/pt/tours/dubai' : '/en/tours/dubai'}
                className="block px-4 py-3 text-base hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center"
              >
                <span>Dubai</span>
                <span className="ml-2 text-dubai-gold">✨</span>
              </Link>
            </div>

            <Link
              href={isPortuguese ? '/pt/about' : '/en/about'}
              className="block px-2 py-2 text-base hover:text-primary transition-colors"
            >
              {isPortuguese ? 'Sobre' : 'About'}
            </Link>

            <Link
              href={isPortuguese ? '/pt/contact' : '/en/contact'}
              className="block px-2 py-2 text-base hover:text-primary transition-colors"
            >
              {isPortuguese ? 'Contato' : 'Contact'}
            </Link>

            <div className="flex items-center space-x-4 px-2">
              <button
                onClick={toggleCurrency}
                className="px-4 py-2 text-base bg-secondary/10 hover:bg-secondary/20 rounded-full transition-colors"
              >
                {currency}
              </button>
              
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-base bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                {isPortuguese ? 'PT' : 'EN'}
              </button>

              <button
                onClick={toggleTheme}
                className="p-3 text-xl rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
