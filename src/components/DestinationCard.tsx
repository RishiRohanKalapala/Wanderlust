import React from 'react';
import { MapPin, Calendar, Clock, IndianRupee } from 'lucide-react';
import { Destination } from '../data/destinations';

interface Props {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}

export default function DestinationCard({ destination, onSelect }: Props) {
  return (
    <div 
      onClick={() => onSelect(destination)}
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative h-96">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
        <p className="text-sm opacity-90 mb-4">{destination.description}</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{destination.bestTimeToVisit}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{destination.duration}</span>
          </div>
          <div className="flex items-center">
            <IndianRupee className="w-4 h-4 mr-2" />
            <span className="text-sm">From ₹{destination.startingPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}