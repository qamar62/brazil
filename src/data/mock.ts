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
    id: 'rio-highlights',
    title: 'Rio Highlights Tour',
    description: 'Visit Christ the Redeemer, Sugarloaf Mountain, and Copacabana Beach',
    image: 'https://via.placeholder.com/800x600?text=Rio+Highlights',
    price: {
      USD: 149,
      BRL: 745
    },
    duration: '8 hours',
    location: 'Rio de Janeiro',
    rating: 4.8,
    highlights: [
      'Christ the Redeemer statue',
      'Sugarloaf Mountain cable car',
      'Copacabana Beach visit',
      'Local guide',
      'Hotel pickup and drop-off'
    ]
  },
  {
    id: 'amazon-expedition',
    title: 'Amazon Expedition',
    description: '3-day adventure in the heart of the Amazon rainforest',
    image: 'https://via.placeholder.com/800x600?text=Amazon+Expedition',
    price: {
      USD: 599,
      BRL: 2995
    },
    duration: '3 days',
    location: 'Manaus, Amazon',
    rating: 4.9,
    highlights: [
      'Jungle trekking',
      'Wildlife spotting',
      'Indigenous community visit',
      'Canopy walkway',
      'River cruise'
    ]
  },
  {
    id: 'noronha-paradise',
    title: 'Noronha Paradise',
    description: 'Explore the stunning beaches and marine life of Fernando de Noronha',
    image: 'https://via.placeholder.com/800x600?text=Noronha+Paradise',
    price: {
      USD: 399,
      BRL: 1995
    },
    duration: '2 days',
    location: 'Fernando de Noronha',
    rating: 4.9,
    highlights: [
      'Snorkeling with sea turtles',
      'Boat tour around the island',
      'Beach hopping',
      'Sunset at Forte dos Remédios',
      'Environmental preservation talk'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    image: 'https://via.placeholder.com/150',
    text: 'Amazing experience in Rio! The tour guide was knowledgeable and friendly.',
    rating: 5,
    tourName: 'Rio Highlights Tour'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    image: 'https://via.placeholder.com/150',
    text: 'The Amazon expedition exceeded all my expectations. Unforgettable!',
    rating: 5,
    tourName: 'Amazon Expedition'
  },
  {
    id: '3',
    name: 'David Wilson',
    image: 'https://via.placeholder.com/150',
    text: 'Fernando de Noronha is paradise on Earth. Perfect organization!',
    rating: 5,
    tourName: 'Noronha Paradise'
  }
];
