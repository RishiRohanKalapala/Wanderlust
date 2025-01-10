import React, { useState } from 'react';
import { indianDestinations } from '../data/destinations';
import { Shield, Info, CreditCard } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import TermsModal from '../components/TermsModal';
import BookingHeader from '../components/BookingHeader';

export default function BookingPage() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <BookingHeader />
      
      <div className="relative h-64">
        <img 
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3"
          alt="Luxury travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Book Your Dream Vacation</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Book With Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Secure Booking</h4>
                    <p className="text-sm text-gray-600">Your payment and personal information are protected</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CreditCard className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Flexible Payment</h4>
                    <p className="text-sm text-gray-600">Pay in installments with no extra fees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Our travel experts are here to help you</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowTerms(true)}
              className="w-full text-blue-600 underline text-sm"
            >
              View Terms & Conditions
            </button>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa"
                alt="Luxury accommodation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Premium Experience</h3>
                <p className="text-gray-600 text-sm">
                  Enjoy luxury accommodations, private transfers, and exclusive access to attractions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </div>
  );
}