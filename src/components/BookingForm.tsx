import React, { useState } from 'react';
import { indianDestinations } from '../data/destinations';

interface BookingForm {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  guests: number;
  requirements: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingForm>({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    guests: 1,
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request submitted successfully! We will contact you shortly.');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.fullName}
              onChange={e => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Destination
            </label>
            <select
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.destination}
              onChange={e => setFormData({...formData, destination: e.target.value})}
            >
              <option value="">Choose a destination</option>
              {indianDestinations.map(dest => (
                <option key={dest.id} value={dest.title}>
                  {dest.title}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Travel Dates
            </label>
            <input
              type="date"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.travelDates}
              onChange={e => setFormData({...formData, travelDates: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.guests}
              onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requirements
          </label>
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={formData.requirements}
            onChange={e => setFormData({...formData, requirements: e.target.value})}
            placeholder="Any special requirements or preferences..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Booking Request
        </button>
      </form>
    </div>
  );
}