import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    title: "Kerala Backwaters",
    location: "Kerala",
    duration: "5 Days",
    season: "Sep - Mar"
  },
  {
    image: "https://images.unsplash.com/photo-1587922546307-776227941871",
    title: "Goa Beaches",
    location: "Goa",
    duration: "4 Days",
    season: "Nov - Feb"
  },
  {
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    title: "Ladakh Adventure",
    location: "Ladakh",
    duration: "7 Days",
    season: "Jun - Sep"
  },
  {
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    title: "Royal Rajasthan",
    location: "Rajasthan",
    duration: "6 Days",
    season: "Oct - Mar"
  }
];

export default function ExploreDestinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Link to="/book" key={index} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{destination.season}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}