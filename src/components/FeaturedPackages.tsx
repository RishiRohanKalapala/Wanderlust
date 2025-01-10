import React from 'react';
import { Calendar, Clock, IndianRupee, ArrowRight } from 'lucide-react';

const packages = [
  {
    title: "Golden Triangle Special",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    duration: "6 Days",
    price: 35000,
    season: "Oct - Mar",
    tag: "Best Seller"
  },
  {
    title: "Kerala Wellness Retreat",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    duration: "5 Days",
    price: 40000,
    season: "Sep - Apr",
    tag: "New"
  },
  {
    title: "Himalayan Adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    duration: "7 Days",
    price: 45000,
    season: "Jun - Sep",
    tag: "Trending"
  }
];

export default function FeaturedPackages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Packages</h2>
          <p className="text-xl text-gray-600">Handpicked experiences for unforgettable journeys</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative">
                <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {pkg.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{pkg.season}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IndianRupee className="w-5 h-5 mr-2" />
                    <span>From ₹{pkg.price.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}