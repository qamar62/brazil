'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HeroData, getHeroData } from '@/services/api';

interface HeroSectionProps {
  isPortuguese?: boolean;
}

export function HeroSection({ isPortuguese = false }: HeroSectionProps) {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    getHeroData().then(setHeroData).catch(console.error);
  }, []);

  // Get heading and text based on language
  const heading = isPortuguese ? heroData?.heading_pt : heroData?.heading_en;
  const text = isPortuguese ? heroData?.text_pt : heroData?.text_en;

  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] w-full">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroData?.image || '/images/hero-brazil.jpg'} // Fallback to static image
          alt={isPortuguese ? "Paisagem brasileira deslumbrante" : "Beautiful Brazilian landscape"}
          priority
          quality={100}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center text-white">
        <div className="max-w-4xl text-center pt-16 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 font-montserrat leading-tight">
            {heading || (isPortuguese ? 'Descubra Dubai do Brasil' : 'Discover Dubai from Brazil')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
            {text || (isPortuguese 
              ? 'Experimente Dubai: Onde a Aventura Encontra a Elegância' 
              : 'Experience Dubai: Where Adventure Meets Elegance')}
          </p>
        </div>
      </div>
    </section>
  );
}
