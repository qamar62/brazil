import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Tour } from '@/types';

interface TourCardProps {
  tour: Tour;
  currency: 'USD' | 'BRL';
}

export function TourCard({ tour, currency }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.id}`}>
      <div className="group rounded-2xl bg-white shadow-md transition-transform hover:-translate-y-1 dark:bg-gray-800">
        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={tour.image || 'https://placehold.co/600x400'}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{tour.title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm">{tour.rating}</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{tour.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-primary">
                {currency === 'USD' ? '$' : 'R$'}
                {tour.price[currency].toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">{tour.duration}</p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {tour.location}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
