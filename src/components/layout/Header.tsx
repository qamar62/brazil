'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { SiteSettings, getSiteSettings } from '@/services/api';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const { resolvedTheme, setTheme } = useTheme();

  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
    // Fetch site settings
    getSiteSettings().then(setSettings).catch(console.error);
  }, []);

  function getIsPortuguese(path: string | null): boolean {
    return path?.startsWith('/pt') ?? false;
  }

  const isPortuguese = getIsPortuguese(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSwitch = () => {
    const newLocale = isPortuguese ? 'en' : 'pt';
    const newPath = pathname?.replace(isPortuguese ? '/pt' : '/en', `/${newLocale}`);
    router.push(newPath ?? '/');
  };

  const navLinks = [
    { href: '/', label: isPortuguese ? 'Início' : 'Home' },
    { href: '/about', label: isPortuguese ? 'Sobre' : 'About' },
  ];

  const tourLinks = [
    { href: '/tours/dubai', label: isPortuguese ? 'Dubai' : 'Dubai' },
    { href: '/tours/brazil', label: isPortuguese ? 'Brasil' : 'Brazil' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={isPortuguese ? '/pt' : '/en'} className="flex items-center space-x-2">
            {settings?.logo && (
              <Image 
                src={settings.logo} 
                alt={settings.site_name} 
                width={170} 
                height={50} 
                className="h-10 w-auto" 
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`${isPortuguese ? '/pt' : '/en'}${link.href}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Tours Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsToursDropdownOpen(!isToursDropdownOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {isPortuguese ? 'Passeios' : 'Tours'}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {tourLinks.map((tour) => (
                  <Link
                    key={tour.href}
                    href={`${isPortuguese ? '/pt' : '/en'}${tour.href}`}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {tour.label}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={handleLanguageSwitch}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5 mr-1" />
              {isPortuguese ? 'EN' : 'PT'}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              ))}
            </button>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {settings?.facebook_url && (
                <a href={settings.facebook_url} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  {/* Add Facebook Icon */}
                </a>
              )}
              {settings?.instagram_url && (
                <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  {/* Add Instagram Icon */}
                </a>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              ))}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`${isPortuguese ? '/pt' : '/en'}${link.href}`}
                className="block text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Tours Menu */}
            <div className="space-y-2">
              <div className="font-medium text-gray-700 dark:text-gray-300">
                {isPortuguese ? 'Passeios' : 'Tours'}
              </div>
              {tourLinks.map((tour) => (
                <Link
                  key={tour.href}
                  href={`${isPortuguese ? '/pt' : '/en'}${tour.href}`}
                  className="block pl-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {tour.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => {
                handleLanguageSwitch();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5 mr-1" />
              {isPortuguese ? 'EN' : 'PT'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
