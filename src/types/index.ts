export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  price: {
    USD: number;
    BRL: number;
  };
  duration: string;
  location: string;
  rating: number;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  rating: number;
  tourName: string;
}
