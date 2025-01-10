import React, { useState } from 'react';
import { Plane, Calendar, Users } from 'lucide-react';

export default function FlightSearch() {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search flights:', searchData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <div className="relative">
            <Plane className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              required
              className="pl-10 w-full p-3 border rounded-lg"
              placeholder="Departure City"
              value={searchData.from}
              onChange={e => setSearchData({...searchData, from: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <div className="relative">
            <Plane className="absolute left-3 top-3 w-5 h-5 text-gray-400 transform rotate-90" />
            <input
              type="text"
              required
              className="pl-10 w-full p-3 border rounded-lg"
              placeholder="Arrival City"
              value={searchData.to}
              onChange={e => setSearchData({...searchData, to: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Depart</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              required
              className="pl-10 w-full p-3 border rounded-lg"
              value={searchData.departDate}
              onChange={e => setSearchData({...searchData, departDate: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              className="pl-10 w-full p-3 border rounded-lg"
              value={searchData.returnDate}
              onChange={e => setSearchData({...searchData, returnDate: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              className="pl-10 w-full p-3 border rounded-lg"
              value={searchData.passengers}
              onChange={e => setSearchData({...searchData, passengers: e.target.value})}
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search Flights
      </button>
    </form>
  );
}