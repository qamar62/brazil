import Image from 'next/image';
import Link from 'next/link';
import heroBrazil from '../../../public/images/hero-brazil.jpg';

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[90vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroBrazil}
            alt="Beautiful Brazilian landscape"
            placeholder="blur"
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
              Discover Dubai 
              <br className="md:hidden" />
              from Brazil
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
              Experience Dubai: Where Adventure Meets Elegance
              <br className="hidden sm:block" />
              🏜️ Golden dunes, glittering skyscrapers, and unforgettable memories await. 🌟
              <br className="hidden sm:block" />
              🌆 From the thrill of desert safaris to the allure of luxury, Dubai has it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/en/tours/dubai"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all hover:scale-105 hover:shadow-lg inline-block"
              >
                Explore Dubai Tours
              </Link>
              <Link
                href="/en/contact"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all hover:scale-105 hover:shadow-lg inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.title} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{destination.description}</p>
                  <Link href="/en/tours" className="text-primary hover:underline">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Travelers Say</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Brazilian Adventure?</h2>
          <p className="text-xl mb-8">Join us for an unforgettable journey through Brazil's wonders.</p>
          <Link href="/en/contact" className="bg-white text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}

const destinations = [
  {
    title: 'Rio de Janeiro',
    description: 'Experience the vibrant culture and iconic landmarks of Rio',
    image: '/images/rio.jpg',
  },
  {
    title: 'Amazon Rainforest',
    description: 'Explore the world\'s largest rainforest and its incredible biodiversity',
    image: '/images/amazon.jpg',
  },
  {
    title: 'Salvador',
    description: 'Discover the rich history and colorful culture of Bahia\'s capital',
    image: '/images/salvador.jpg',
  },
];

const features = [
  {
    icon: '🌟',
    title: 'Expert Local Guides',
    description: 'Our guides are passionate locals with deep knowledge of Brazilian culture and history.',
  },
  {
    icon: '🎯',
    title: 'Customized Tours',
    description: 'Every tour is tailored to your interests and preferences.',
  },
  {
    icon: '💰',
    title: 'Best Value',
    description: 'Competitive prices without compromising on quality and experience.',
  },
];

const testimonials = [
  {
    text: 'An incredible experience! The tour was perfectly organized and our guide was amazing.',
    name: 'John Smith',
    location: 'United States',
  },
  {
    text: 'Brazil Travel made our honeymoon unforgettable. We\'ll definitely be back!',
    name: 'Maria Garcia',
    location: 'Spain',
  },
  {
    text: 'The attention to detail and local knowledge made all the difference.',
    name: 'James Wilson',
    location: 'Australia',
  },
];
