'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiteSettings, getSiteSettings } from '@/services/api';

export function Footer() {
  const pathname = usePathname();
  const isPortuguese = pathname?.startsWith('/pt') ?? false;
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    getSiteSettings().then(setSettings).catch(console.error);
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{isPortuguese ? 'Sobre Nós' : 'About Us'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {settings?.footer_text || (isPortuguese 
                ? 'Sua porta de entrada para experiências inesquecíveis no Brasil.' 
                : 'Your gateway to unforgettable experiences in Brazil.')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{isPortuguese ? 'Contato' : 'Contact'}</h3>
            <ul className="space-y-2">
              {settings?.contact_email && (
                <li>
                  <a 
                    href={`mailto:${settings.contact_email}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    {settings.contact_email}
                  </a>
                </li>
              )}
              {settings?.phone_number && (
                <li>
                  <a 
                    href={`tel:${settings.phone_number}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    {settings.phone_number}
                  </a>
                </li>
              )}
              {settings?.address && (
                <li className="text-sm text-gray-600 dark:text-gray-300">
                  {settings.address}
                </li>
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{isPortuguese ? 'Links Rápidos' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={isPortuguese ? '/pt/tours' : '/en/tours'}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  {isPortuguese ? 'Passeios' : 'Tours'}
                </Link>
              </li>
              <li>
                <Link 
                  href={isPortuguese ? '/pt/contact' : '/en/contact'}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  {isPortuguese ? 'Contato' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{isPortuguese ? 'Destinos Populares' : 'Popular Destinations'}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-300">Rio de Janeiro</li>
              <li className="text-sm text-gray-600 dark:text-gray-300">São Paulo</li>
              <li className="text-sm text-gray-600 dark:text-gray-300">Salvador</li>
              <li className="text-sm text-gray-600 dark:text-gray-300">Manaus</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{isPortuguese ? 'Redes Sociais' : 'Social Media'}</h3>
            <div className="flex space-x-4">
              {settings?.facebook_url && (
                <a 
                  href={settings.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Facebook
                </a>
              )}
              {settings?.instagram_url && (
                <a 
                  href={settings.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Instagram
                </a>
              )}
              {settings?.twitter_url && (
                <a 
                  href={settings.twitter_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            {settings?.copyright_text || ` ${new Date().getFullYear()} Brazil Travel. ${isPortuguese ? 'Todos os direitos reservados.' : 'All rights reserved.'}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
