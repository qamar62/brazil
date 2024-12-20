import Image from 'next/image';

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://via.placeholder.com/1920x1080/31343C/FFFFFF?text=About+Us"
            alt="About Us"
            priority
            quality={100}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        </div>
        <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center font-montserrat">
            {locale === 'pt' ? 'Sobre Nós' : 'About Us'}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-4 font-montserrat">Our Legacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Since 2000, we have been at the forefront of travel and destination management industry, 
                  crafting unforgettable experiences for travelers from around the world. With over two 
                  decades of expertise, we've established ourselves as a trusted name in Dubai tourism.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Desert Safari</h3>
                  <p className="text-gray-600">
                    Experience the magic of Arabian desert with our signature desert safaris, 
                    combining adventure, culture, and luxury in one unforgettable journey.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">City Tours</h3>
                  <p className="text-gray-600">
                    Discover Dubai's iconic landmarks and hidden gems with our expertly 
                    guided city tours, showcasing both modern marvels and cultural heritage.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Hotel Bookings</h3>
                  <p className="text-gray-600">
                    From luxury resorts to boutique hotels, we offer carefully curated 
                    accommodation options to suit every preference and budget.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">Transfers</h3>
                  <p className="text-gray-600">
                    Enjoy seamless transportation services with our professional drivers 
                    and luxury vehicles, ensuring comfort and punctuality.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6 font-montserrat">Why Choose Us</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">Over 20 years of experience in Dubai tourism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">Personalized service and attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">Multilingual team of experienced guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-600">24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
