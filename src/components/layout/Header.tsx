'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname() || '';
  const router = useRouter();
  const isPortuguese = pathname.startsWith('/pt');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newPath = isPortuguese ? pathname.replace('/pt', '/en') : pathname.replace('/en', '/pt');
    router.push(newPath || (isPortuguese ? '/en' : '/pt'));
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isPortuguese ? '/pt' : '/'} className="text-2xl font-bold text-primary">
            Brazil Travel
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={isPortuguese ? '/pt/tours/dubai' : '/en/tours/dubai'}
              className="text-gray-700 hover:text-primary"
            >
              {isPortuguese ? 'Dubai' : 'Dubai'}
            </Link>
            <Link
              href={isPortuguese ? '/pt/about' : '/en/about'}
              className="text-gray-700 hover:text-primary"
            >
              {isPortuguese ? 'Sobre' : 'About'}
            </Link>
            <Link
              href={isPortuguese ? '/pt/contact' : '/en/contact'}
              className="text-gray-700 hover:text-primary"
            >
              {isPortuguese ? 'Contato' : 'Contact'}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <Globe className="w-5 h-5 mr-1" />
              {isPortuguese ? 'EN' : 'PT'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href={isPortuguese ? '/pt/tours/dubai' : '/en/tours/dubai'}
                className="text-gray-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isPortuguese ? 'Dubai' : 'Dubai'}
              </Link>
              <Link
                href={isPortuguese ? '/pt/about' : '/en/about'}
                className="text-gray-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isPortuguese ? 'Sobre' : 'About'}
              </Link>
              <Link
                href={isPortuguese ? '/pt/contact' : '/en/contact'}
                className="text-gray-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isPortuguese ? 'Contato' : 'Contact'}
              </Link>
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-primary"
              >
                <Globe className="w-5 h-5 mr-1" />
                {isPortuguese ? 'EN' : 'PT'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
