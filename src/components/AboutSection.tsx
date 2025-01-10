import React from 'react';
import { Shield, Heart, Clock } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Your trusted partner in exploring India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
            <p className="text-gray-600">24/7 support and verified accommodations for your safety</p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
            <p className="text-gray-600">Customized itineraries tailored to your preferences</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Value</h3>
            <p className="text-gray-600">Competitive prices and exclusive deals for our customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}