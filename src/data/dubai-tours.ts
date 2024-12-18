export interface DubaiTour {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  highlights: string[];
  isPopular?: boolean;
}

export const dubaiTours: DubaiTour[] = [
  {
    id: 'evening-desert-safari',
    title: 'Evening Desert Safari by Arabian Nights Tours',
    description: 'Experience the magic of the Dubai desert with dune bashing, camel riding, BBQ dinner, and traditional entertainment.',
    image: '/images/tours/dubai/desert-safari.jpg',
    price: 75,
    duration: '6 hours',
    highlights: [
      'Thrilling dune bashing adventure',
      'Sunset photography in the desert',
      'Camel riding experience',
      'BBQ dinner under the stars',
      'Traditional belly dance show',
      'Henna painting and Arabic costumes'
    ],
    isPopular: true
  },
  {
    id: 'burj-khalifa',
    title: 'Burj Khalifa At The Top',
    description: 'Visit the world\'s tallest building and enjoy breathtaking views from the observation deck.',
    image: '/images/tours/dubai/burj-khalifa.jpg',
    price: 90,
    duration: '2-3 hours',
    highlights: [
      'Skip-the-line admission',
      'Level 124 & 125 observation decks',
      'Interactive displays and exhibits',
      'Spectacular city views'
    ]
  },
  {
    id: 'city-tour',
    title: 'Dubai City Tour',
    description: 'Discover the highlights of both modern and traditional Dubai in one comprehensive tour.',
    image: '/images/tours/dubai/city-tour.jpg',
    price: 65,
    duration: '4 hours',
    highlights: [
      'Visit Dubai Museum',
      'Gold and Spice Souks',
      'Dubai Creek boat ride',
      'Photo stops at Burj Al Arab',
      'Dubai Mall and fountains view'
    ]
  },
  {
    id: 'aquaventure',
    title: 'Aquaventure Waterpark',
    description: 'Enjoy a day of thrilling water rides and attractions at Atlantis The Palm\'s waterpark.',
    image: '/images/tours/dubai/aquaventure.jpg',
    price: 110,
    duration: 'Full day',
    highlights: [
      'Access to all water rides',
      'Lost Chambers Aquarium visit',
      'Private beach access',
      'Marine animal encounters'
    ]
  },
  {
    id: 'dhow-cruise',
    title: 'Dubai Marina Dhow Cruise',
    description: 'Enjoy a romantic dinner cruise along Dubai Marina with stunning views of the city lights.',
    image: '/images/tours/dubai/dhow-cruise.jpg',
    price: 85,
    duration: '2 hours',
    highlights: [
      'International buffet dinner',
      'Live entertainment',
      'Marina skyline views',
      'Air-conditioned lower deck'
    ]
  }
];
