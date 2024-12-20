import Image from 'next/image';
import Link from 'next/link';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { TourCard } from '@/components/cards/TourCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { destinations, tours, testimonials } from '@/data/mock';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'pt' }
  ];
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-gray-200">
        <Image
          src="/images/hero-brazil.jpg"
          alt={locale === 'pt' ? 'Bela paisagem brasileira' : 'Beautiful Brazilian landscape'}
          priority
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20">
          <div className="container mx-auto h-full px-4 flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
                {locale === 'pt' ? 'Descubra o Brasil e Dubai' : 'Discover Dubai and Brazil'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-inter max-w-2xl mx-auto">
                {locale === 'pt'
                  ? 'Experimente a magia do maior país da América do Sul. Das praias intocadas às cidades vibrantes, sua aventura começa aqui.'
                  : 'Experience the magic of South America\'s largest country. From pristine beaches to vibrant cities, your adventure starts here.'}
              </p>
              <Link
                href="/tours"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                {locale === 'pt' ? 'Explorar Tours' : 'Explore Tours'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
            {locale === 'pt' ? 'Destinos em Destaque' : 'Featured Destinations'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
            {locale === 'pt' ? 'Tours Populares' : 'Popular Tours'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                currency={locale === 'pt' ? 'BRL' : 'USD'} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
            {locale === 'pt' ? 'O que nossos clientes dizem' : 'What Our Clients Say'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">
            {locale === 'pt' ? 'Pronto para começar sua aventura brasileira?' : 'Ready to Start Your Brazilian Adventure?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
            {locale === 'pt'
              ? 'Entre em contato conosco hoje e permita que ajudemos a planejar a viagem perfeita para o Brasil.'
              : 'Contact us today and let us help you plan the perfect trip to Brazil'}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            {locale === 'pt' ? 'Contate-nos' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </main>
  );
}
