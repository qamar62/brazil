import { Destination, Tour, Testimonial } from '@/types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Rio de Janeiro',
    description: 'Experience the vibrant culture and iconic landmarks of Rio',
    image: '/images/destinations/rio.jpg',
    location: 'Rio de Janeiro State'
  },
  {
    id: '2',
    name: 'Amazon Rainforest',
    description: 'Discover the world\'s largest rainforest and its incredible biodiversity',
    image: '/images/destinations/amazon.jpg',
    location: 'Amazonas State'
  },
  {
    id: '3',
    name: 'Fernando de Noronha',
    description: 'Paradise islands with pristine beaches and crystal-clear waters',
    image: '/images/destinations/noronha.jpg',
    location: 'Pernambuco State'
  }
];

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Rio Highlights Tour',
    description: 'Visit Christ the Redeemer, Sugarloaf Mountain, and Copacabana Beach',
    image: '/images/tours/rio-tour.jpg',
    price: {
      USD: 149,
      BRL: 745
    },
    duration: '8 hours',
    location: 'Rio de Janeiro',
    rating: 4.8,
    featured: true
  },
  {
    id: '2',
    title: 'Amazon Expedition',
    description: '3-day adventure in the heart of the Amazon rainforest',
    image: '/images/tours/amazon-tour.jpg',
    price: {
      USD: 599,
      BRL: 2995
    },
    duration: '3 days',
    location: 'Manaus',
    rating: 4.9,
    featured: true
  },
  {
    id: '3',
    title: 'Beach Paradise Tour',
    description: 'Explore the most beautiful beaches of Fernando de Noronha',
    image: '/images/tours/noronha-tour.jpg',
    price: {
      USD: 299,
      BRL: 1495
    },
    duration: '6 hours',
    location: 'Fernando de Noronha',
    rating: 5.0,
    featured: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    image: '/images/testimonials/person1.jpg',
    text: 'An unforgettable experience in Rio! The tour guide was knowledgeable and friendly.',
    rating: 5,
    tourName: 'Rio Highlights Tour'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    image: '/images/testimonials/person2.jpg',
    text: 'The Amazon expedition exceeded all my expectations. A must-do for nature lovers!',
    rating: 5,
    tourName: 'Amazon Expedition'
  },
  {
    id: '3',
    name: 'David Chen',
    image: '/images/testimonials/person3.jpg',
    text: 'Fernando de Noronha is paradise on Earth. This tour showed us all the best spots.',
    rating: 5,
    tourName: 'Beach Paradise Tour'
  }
];
