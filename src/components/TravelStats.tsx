import React from 'react';
import { Users, Map, Star, Award } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8" />, value: "50,000+", label: "Happy Travelers" },
  { icon: <Map className="w-8 h-8" />, value: "100+", label: "Destinations" },
  { icon: <Star className="w-8 h-8" />, value: "4.9/5", label: "Average Rating" },
  { icon: <Award className="w-8 h-8" />, value: "15+", label: "Years Experience" }
];

export default function TravelStats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}