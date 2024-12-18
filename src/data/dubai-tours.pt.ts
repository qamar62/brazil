import { DubaiTour } from './dubai-tours';

export const dubaiToursPt: DubaiTour[] = [
  {
    id: 'evening-desert-safari',
    title: 'Safari no Deserto com Arabian Nights Tours',
    description: 'Experimente a magia do deserto de Dubai com passeio nas dunas, passeio de camelo, jantar BBQ e entretenimento tradicional.',
    image: '/images/tours/dubai/desert-safari.jpg',
    price: 75,
    duration: '6 horas',
    highlights: [
      'Emocionante aventura nas dunas',
      'Fotografia do pôr do sol no deserto',
      'Experiência de passeio de camelo',
      'Jantar BBQ sob as estrelas',
      'Show tradicional de dança do ventre',
      'Pintura de henna e trajes árabes'
    ],
    isPopular: true
  },
  {
    id: 'burj-khalifa',
    title: 'Burj Khalifa At The Top',
    description: 'Visite o edifício mais alto do mundo e desfrute de vistas deslumbrantes do deck de observação.',
    image: '/images/tours/dubai/burj-khalifa.jpg',
    price: 90,
    duration: '2-3 horas',
    highlights: [
      'Entrada sem fila',
      'Decks de observação níveis 124 e 125',
      'Displays interativos e exposições',
      'Vistas espetaculares da cidade'
    ]
  },
  {
    id: 'city-tour',
    title: 'Tour pela Cidade de Dubai',
    description: 'Descubra os destaques da Dubai moderna e tradicional em um tour completo.',
    image: '/images/tours/dubai/city-tour.jpg',
    price: 65,
    duration: '4 horas',
    highlights: [
      'Visita ao Museu de Dubai',
      'Souks de Ouro e Especiarias',
      'Passeio de barco pelo Dubai Creek',
      'Paradas para fotos no Burj Al Arab',
      'Vista do Dubai Mall e das fontes'
    ]
  },
  {
    id: 'aquaventure',
    title: 'Parque Aquático Aquaventure',
    description: 'Aproveite um dia de emocionantes atrações aquáticas no parque aquático do Atlantis The Palm.',
    image: '/images/tours/dubai/aquaventure.jpg',
    price: 110,
    duration: 'Dia inteiro',
    highlights: [
      'Acesso a todas as atrações aquáticas',
      'Visita ao Aquário Lost Chambers',
      'Acesso à praia privativa',
      'Encontros com animais marinhos'
    ]
  },
  {
    id: 'dhow-cruise',
    title: 'Cruzeiro Dhow na Marina de Dubai',
    description: 'Desfrute de um jantar romântico a bordo navegando pela Marina de Dubai com vistas deslumbrantes das luzes da cidade.',
    image: '/images/tours/dubai/dhow-cruise.jpg',
    price: 85,
    duration: '2 horas',
    highlights: [
      'Jantar buffet internacional',
      'Entretenimento ao vivo',
      'Vistas do horizonte da Marina',
      'Deck inferior com ar condicionado'
    ]
  }
];
