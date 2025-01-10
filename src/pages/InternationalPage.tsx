import React from 'react';
import { Plane, Hotel, MapPin, Calendar, Globe2, Compass } from 'lucide-react';
import BookingHeader from '../components/BookingHeader';
import InternationalDestinations from '../components/international/InternationalDestinations';
import FlightSearch from '../components/international/FlightSearch';
import PopularRoutes from '../components/international/PopularRoutes';
import TravelGuides from '../components/international/TravelGuides';
import VisaTimeline from '../components/international/VisaTimeline';
import PartnerAirlines from '../components/international/PartnerAirlines';
import Footer from '../components/Footer';

export default function InternationalPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BookingHeader />
      
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover"
             style={{
               backgroundImage: 'url("https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3")',
               transform: 'translateZ(0)'
             }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <div className="flex justify-center mb-6">
                <Globe2 className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-5xl font-bold mb-4 animate-slide-left">
                Your Journey Begins Here
              </h1>
              <p className="text-xl mb-8 animate-slide-right max-w-2xl mx-auto">
                Explore extraordinary destinations across the globe with our curated international travel experiences
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Compass className="w-5 h-5 mr-2" />
                  <span>200+ Destinations</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Plane className="w-5 h-5 mr-2" />
                  <span>Premium Airlines</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Hotel className="w-5 h-5 mr-2" />
                  <span>Luxury Stays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <FlightSearch />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <InternationalDestinations />
        <div className="my-20">
          <VisaTimeline />
        </div>
        <div className="my-20">
          <PartnerAirlines />
        </div>
        <div className="my-20">
          <PopularRoutes />
        </div>
        <div className="my-20">
          <TravelGuides />
        </div>
      </div>

      <Footer />
    </div>
  );
}