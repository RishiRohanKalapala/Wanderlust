import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const destinations = [
  {
    title: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "The city of love and lights",
    bestTime: "April to October"
  },
  {
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    description: "A blend of tradition and modernity",
    bestTime: "March to May"
  },
  {
    title: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    description: "Luxury and architectural marvels",
    bestTime: "November to March"
  },
  {
    title: "New York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    description: "The city that never sleeps",
    bestTime: "April to June"
  }
];

export default function InternationalDestinations() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Popular International Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{destination.title}</h3>
                <p className="text-sm opacity-90">{destination.description}</p>
                <div className="flex items-center mt-2 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Best Time: {destination.bestTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}