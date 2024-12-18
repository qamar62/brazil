import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/tours?location=${destination.location}`}>
      <div className="group relative overflow-hidden rounded-2xl">
        <div className="aspect-w-16 aspect-h-9 relative h-64 w-full">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
          <p className="text-sm text-gray-200">{destination.description}</p>
          <p className="mt-2 text-sm font-medium text-gray-300">{destination.location}</p>
        </div>
      </div>
    </Link>
  );
}
