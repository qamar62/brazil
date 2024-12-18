import Image from 'next/image';
import { dubaiToursPt } from '@/data/dubai-tours.pt';

export default function DubaiToursPage() {
  const featuredTour = dubaiToursPt.find(tour => tour.isPopular);
  const regularTours = dubaiToursPt.filter(tour => !tour.isPopular);

  return (
    <main>
      {/* Hero Section with Featured Tour */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={featuredTour?.image || '/images/tours/dubai/desert-safari.jpg'}
            alt="Safari no Deserto de Dubai"
            fill
            quality={100}
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
                Tours em Dubai
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-inter">
                Descubra a magia de Dubai com a Arabian Nights Tours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour Section */}
      {featuredTour && (
        <section className="py-16 bg-dubai-sand/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">
              Experiência em Destaque
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px]">
                  <Image
                    src={featuredTour.image}
                    alt={featuredTour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-montserrat">
                    {featuredTour.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-inter">
                    {featuredTour.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Destaques:</h4>
                    <ul className="space-y-2">
                      {featuredTour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2">✨</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">A partir de</span>
                      <p className="text-2xl font-bold text-dubai-gold">
                        ${featuredTour.price}
                      </p>
                    </div>
                    <button className="bg-dubai-gold hover:bg-dubai-gold/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105">
                      Reservar Agora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">
            Mais Experiências em Dubai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 font-inter">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">A partir de</span>
                      <p className="text-xl font-bold text-dubai-gold">
                        ${tour.price}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">{tour.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
