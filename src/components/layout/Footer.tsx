'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const isPortuguese = pathname.startsWith('/pt');

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{isPortuguese ? 'Sobre Nós' : 'About Us'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {isPortuguese 
                ? 'Sua porta de entrada para experiências inesquecíveis no Brasil.' 
                : 'Your gateway to unforgettable experiences in Brazil.'}
            </p>
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{isPortuguese ? 'Contato' : 'Contact'}</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">📧 info@braziltravel.com</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">📱 +55 21 9999-9999</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            &copy; 2024 Brazil Travel. {isPortuguese ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
