import React, { useState } from 'react';
import { X, Calendar, Users, Plane, Hotel, Car } from 'lucide-react';
import { Destination } from '../data/destinations';

interface Props {
  destination: Destination;
  onClose: () => void;
}

export default function BookingModal({ destination, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    dates: '',
    guests: '',
    transport: '',
    accommodation: '',
    activities: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the booking submission
    alert('Booking submitted successfully! Our team will contact you shortly.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{destination.title}</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Highlights</h3>
              <ul className="list-disc list-inside space-y-2">
                {destination.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Travel Dates</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      required
                      className="pl-10 w-full p-3 border rounded-lg"
                      onChange={e => setBookingData({...bookingData, dates: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      min="1"
                      required
                      className="pl-10 w-full p-3 border rounded-lg"
                      onChange={e => setBookingData({...bookingData, guests: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Select Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center p-4 border rounded-lg hover:bg-blue-50"
                    onClick={() => setBookingData({...bookingData, transport: 'flight'})}
                  >
                    <Plane className="w-5 h-5 mr-2" />
                    Flight Booking
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center p-4 border rounded-lg hover:bg-blue-50"
                    onClick={() => setBookingData({...bookingData, accommodation: 'hotel'})}
                  >
                    <Hotel className="w-5 h-5 mr-2" />
                    Hotel Stay
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center p-4 border rounded-lg hover:bg-blue-50"
                    onClick={() => setBookingData({...bookingData, transport: 'car'})}
                  >
                    <Car className="w-5 h-5 mr-2" />
                    Local Transport
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}