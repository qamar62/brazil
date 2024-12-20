import { Tour } from '@/types';

export const tours: Tour[] = [
  {
    id: 'desert-safari',
    title: 'Evening Desert Safari',
    description: 'Experience the magic of the Arabian desert with dune bashing, camel riding, and BBQ dinner',
    image: 'https://via.placeholder.com/800x600?text=Desert+Safari',
    price: {
      USD: 75,
      BRL: 375
    },
    duration: '6 hours',
    rating: 4.8,
    location: 'Dubai Desert',
    highlights: [
      'Dune bashing in 4x4',
      'Camel riding',
      'BBQ dinner',
      'Belly dance show',
      'Henna painting'
    ]
  },
  {
    id: 'burj-khalifa',
    title: 'Burj Khalifa At The Top',
    description: 'Visit the world\'s tallest building and enjoy breathtaking views of Dubai',
    image: 'https://via.placeholder.com/800x600?text=Burj+Khalifa',
    price: {
      USD: 40,
      BRL: 200
    },
    duration: '1.5 hours',
    rating: 4.9,
    location: 'Downtown Dubai',
    highlights: [
      'Skip the line entry',
      'Level 124 & 125 access',
      'Interactive displays',
      'Observation decks',
      'Souvenir photo'
    ]
  },
  {
    id: 'dubai-marina',
    title: 'Dubai Marina Cruise',
    description: 'Luxury dinner cruise through Dubai Marina with stunning views',
    image: 'https://via.placeholder.com/800x600?text=Dubai+Marina',
    price: {
      USD: 60,
      BRL: 300
    },
    duration: '2 hours',
    rating: 4.7,
    location: 'Dubai Marina',
    highlights: [
      'International buffet',
      'Live entertainment',
      'Air-conditioned cabin',
      'Upper deck views',
      'Hotel transfers'
    ]
  }
];
