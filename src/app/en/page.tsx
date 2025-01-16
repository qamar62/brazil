import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroData, getHeroData } from '@/services/api';
import { HeroSection } from '@/components/HeroSection';
import EventTimeline from '../components/EventTimeline';
import ExpandableGallery from '../components/ExpandableGallery';

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection isPortuguese={false} />
      
      {/* Event Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <EventTimeline />
      </section>

      {/* Expandable Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <ExpandableGallery />
      </section>

      {/* Featured Destinations */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
  {
    icon: '⚡',
    title: '4 Tours in 1 Event',
    description: '4 attractions in one Tour',
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
