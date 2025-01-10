import React from 'react';
import { AnimatedCard } from '../common/AnimatedCard';
import { Plane, Award, Shield, Star } from 'lucide-react';

// ... keep existing airlines array ...

export default function PartnerAirlines() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Plane className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400 animate-float" />
          <h2 className="text-3xl font-bold mb-4">Our Partner Airlines</h2>
          <p className="text-gray-600 dark:text-gray-400">Experience world-class service with our trusted partners</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 stagger-animation">
          {airlines.map((airline, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="p-6">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="h-full object-contain filter dark:brightness-0 dark:invert"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{airline.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{airline.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
            <Award className="w-6 h-6" />
            <span>Award-winning Service</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
            <Shield className="w-6 h-6" />
            <span>Safe and Reliable</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
            <Star className="w-6 h-6" />
            <span>Premium Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}