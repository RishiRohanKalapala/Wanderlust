import React from 'react';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Wanderlust</span>
            </div>
            <p className="text-gray-400">Discover the beauty of India with us</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="text-gray-400 hover:text-white">Destinations</a></li>
              <li><a href="#experiences" className="text-gray-400 hover:text-white">Experiences</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/book" className="text-gray-400 hover:text-white">Book Now</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/cancellation" className="text-gray-400 hover:text-white">Cancellation Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@wanderlust.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}