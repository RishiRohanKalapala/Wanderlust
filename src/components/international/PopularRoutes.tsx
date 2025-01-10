import React from 'react';
import { Plane } from 'lucide-react';

const routes = [
  {
    from: "Delhi",
    to: "London",
    price: "₹45,000",
    duration: "8h 30m",
    airlines: ["British Airways", "Air India"]
  },
  {
    from: "Mumbai",
    to: "Dubai",
    price: "₹25,000",
    duration: "3h 30m",
    airlines: ["Emirates", "Air India"]
  },
  {
    from: "Bangalore",
    to: "Singapore",
    price: "₹30,000",
    duration: "4h 30m",
    airlines: ["Singapore Airlines", "IndiGo"]
  }
];

export default function PopularRoutes() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Popular Routes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold">{route.from}</div>
              <Plane className="w-5 h-5 text-blue-600 transform rotate-90" />
              <div className="text-lg font-semibold">{route.to}</div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Starting from</span>
                <span className="font-semibold text-blue-600">{route.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Flight duration</span>
                <span>{route.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Airlines</span>
                <span>{route.airlines.join(', ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}