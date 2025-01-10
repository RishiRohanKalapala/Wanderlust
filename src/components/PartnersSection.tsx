import React from 'react';

const partners = [
  {
    name: "Ministry of Tourism",
    logo: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?fit=crop&w=200&h=100",
    description: "Government of India"
  },
  {
    name: "Incredible India",
    logo: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?fit=crop&w=200&h=100",
    description: "Official Tourism Campaign"
  },
  {
    name: "IRCTC Tourism",
    logo: "https://images.unsplash.com/photo-1477587458883-47145ed94245?fit=crop&w=200&h=100",
    description: "Indian Railway Catering and Tourism"
  },
  {
    name: "State Tourism Boards",
    logo: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?fit=crop&w=200&h=100",
    description: "Various State Tourism Departments"
  }
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">Trusted by India's leading tourism organizations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-center text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}