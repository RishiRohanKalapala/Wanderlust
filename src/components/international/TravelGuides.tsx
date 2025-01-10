import React from 'react';
import { Book, Globe, CreditCard, Umbrella } from 'lucide-react';

const guides = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Visa Requirements",
    description: "Learn about visa requirements and documentation needed for your destination"
  },
  {
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    title: "Currency Exchange",
    description: "Get the best exchange rates and tips for managing money abroad"
  },
  {
    icon: <Umbrella className="w-8 h-8 text-blue-600" />,
    title: "Travel Insurance",
    description: "Protect your journey with comprehensive travel insurance"
  },
  {
    icon: <Book className="w-8 h-8 text-blue-600" />,
    title: "Local Customs",
    description: "Understand local customs and etiquette for a respectful visit"
  }
];

export default function TravelGuides() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Travel Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">{guide.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
            <p className="text-gray-600">{guide.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}