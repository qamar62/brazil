import Link from 'next/link';
import Image from 'next/image';
import { TourCard } from '@/components/cards/TourCard';
import { HeroSection } from '@/components/HeroSection';
import { tours } from '@/data/tours';

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection isPortuguese={true} />
      {/* Featured Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tours em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.slice(0, 3).map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                currency="BRL" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Destinos Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={destination.image || `https://via.placeholder.com/600x400?text=${destination.title}`}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-sm">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Por Que Nos Escolher</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">O Que Nossos Viajantes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar Sua Aventura Brasileira?</h2>
          <p className="text-xl mb-8">Junte-se a nós para uma jornada inesquecível pelas maravilhas do Brasil.</p>
          <Link href="/pt/contact" className="bg-white text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
            Entre em Contato
          </Link>
        </div>
      </section>
    </main>
  );
}

const destinations = [
  {
    title: 'Rio de Janeiro',
    description: 'Experimente a cultura vibrante e os pontos turísticos icônicos do Rio',
    image: 'https://via.placeholder.com/600x400?text=Rio'
  },
  {
    title: 'Salvador',
    description: 'Descubra a rica história e as praias deslumbrantes da Bahia',
    image: 'https://via.placeholder.com/600x400?text=Salvador'
  },
  {
    title: 'Foz do Iguaçu',
    description: 'Maravilhe-se com as impressionantes Cataratas do Iguaçu',
    image: 'https://via.placeholder.com/600x400?text=Foz'
  }
];

const features = [
  {
    icon: '🌟',
    title: 'Guias Locais Especializados',
    description: 'Nossos guias são locais apaixonados com profundo conhecimento da cultura e história brasileira.',
  },
  {
    icon: '🎯',
    title: 'Passeios Personalizados',
    description: 'Cada passeio é adaptado aos seus interesses e preferências.',
  },
  {
    icon: '💰',
    title: 'Melhor Custo-Benefício',
    description: 'Preços competitivos sem comprometer a qualidade e a experiência.',
  },
];

const testimonials = [
  {
    text: 'Uma experiência incrível! O passeio foi perfeitamente organizado e nosso guia foi incrível.',
    name: 'João Silva',
    location: 'São Paulo',
  },
  {
    text: 'Brazil Travel tornou nossa lua de mel inesquecível. Certamente voltaremos!',
    name: 'Maria Santos',
    location: 'Rio de Janeiro',
  },
  {
    text: 'A atenção aos detalhes e o conhecimento local fizeram toda a diferença.',
    name: 'Pedro Oliveira',
    location: 'Curitiba',
  },
];
