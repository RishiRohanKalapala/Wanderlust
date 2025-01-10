import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin } from 'lucide-react';

export default function BookingHeader() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Top bar with contact info */}
        <div className="bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex space-x-4">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                +91 123 456 7890
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                info@wanderlust.com
              </span>
            </div>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Mumbai, India
            </span>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Compass className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Wanderlust</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <a href="/#destinations" className="text-gray-600 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="/#experiences" className="text-gray-600 hover:text-blue-600 transition-colors">Experiences</a>
              <a href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <Link 
                to="/book"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}