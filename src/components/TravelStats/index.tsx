import React from 'react';
import { Users, Map, Star, Award } from 'lucide-react';
import StatCard from './StatCard';

const stats = [
  { icon: <Users className="w-8 h-8 text-white" />, value: "50,000+", label: "Happy Travelers" },
  { icon: <Map className="w-8 h-8 text-white" />, value: "100+", label: "Destinations" },
  { icon: <Star className="w-8 h-8 text-white" />, value: "4.9/5", label: "Average Rating" },
  { icon: <Award className="w-8 h-8 text-white" />, value: "15+", label: "Years Experience" }
];

export default function TravelStats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm" />
        
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-24 -mt-24 animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48 animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Journey in Numbers</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}