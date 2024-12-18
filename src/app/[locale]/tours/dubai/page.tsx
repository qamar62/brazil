import Image from 'next/image';
import { dubaiTours } from '@/data/dubai-tours';
import { dubaiToursPt } from '@/data/dubai-tours.pt';

export default function DubaiToursPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const tours = locale === 'pt' ? dubaiToursPt : dubaiTours;
  const featuredTour = tours[0]; // Evening Desert Safari is the featured tour

  return (
    <main className="flex-1">
      {/* Hero Section with Featured Tour */}
      <section className="relative min-h-[35vh] w-full mt-8">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://via.placeholder.com/1920x1080/31343C/FFFFFF?text=Desert+Safari"
            alt={featuredTour.title}
            priority
            quality={100}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        </div>
        <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-2xl text-white text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-montserrat">
              {featuredTour.title}
            </h1>
            <p className="text-xl mb-6">{featuredTour.description}</p>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="bg-primary px-4 py-2 rounded-full">
                {featuredTour.price}
              </span>
              <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                {featuredTour.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-montserrat">
            {locale === 'pt' ? 'Outros Passeios' : 'Other Tours'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(1).map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://via.placeholder.com/800x600/31343C/FFFFFF?text=${tour.id.replace(/-/g, '+')}`}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">{tour.price}</span>
                    <span className="text-gray-500">{tour.duration}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold mb-2">
                      {locale === 'pt' ? 'Destaques' : 'Highlights'}:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
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
