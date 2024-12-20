import Image from 'next/image';
import { dubaiTours } from '@/data/dubai-tours';
import { dubaiToursPt } from '@/data/dubai-tours.pt';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'pt' }
  ];
}

export default function DubaiToursPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const tours = locale === 'pt' ? dubaiToursPt : dubaiTours;
  const featuredTour = tours[0];

  return (
    <>
      {/* Hero Section with Featured Tour */}
      <section className="relative min-h-[35vh] w-full mt-8">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://via.placeholder.com/1920x1080/31343C/FFFFFF?text=."
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-montserrat dark:text-white">
            {locale === 'pt' ? 'Outros Passeios' : 'Other Tours'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(1).map((tour) => (
              <div
                key={tour.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{tour.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-bold">{tour.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">{tour.duration}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold mb-2 dark:text-white">
                      {locale === 'pt' ? 'Destaques' : 'Highlights'}:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <a
                        href={`https://wa.me/+971123456789?text=Hi, I'm interested in the ${tour.title} tour`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-center text-sm font-medium transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </a>
                      <button
                        className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full text-sm font-medium transition-all"
                      >
                        {locale === 'pt' ? 'Reserve Agora' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
