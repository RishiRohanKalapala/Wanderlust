import React, { useState } from 'react';
import { indianDestinations } from '../data/destinations';
import DestinationCard from './DestinationCard';
import BookingModal from './BookingModal';
import type { Destination } from '../data/destinations';

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover India</h2>
          <p className="text-xl text-gray-600">Explore the diverse beauty and rich culture of India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indianDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onSelect={setSelectedDestination}
            />
          ))}
        </div>
      </div>

      {selectedDestination && (
        <BookingModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </section>
  );
}