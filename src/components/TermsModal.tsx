import React from 'react';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function TermsModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Terms & Conditions</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4 text-gray-600">
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">1. Booking and Payment</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>A minimum 25% deposit is required to confirm your booking</li>
                <li>Full payment must be made 30 days prior to departure</li>
                <li>All payments are non-refundable unless specified otherwise</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">2. Cancellation Policy</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>30+ days before departure: 75% refund</li>
                <li>15-29 days before departure: 50% refund</li>
                <li>0-14 days before departure: No refund</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">3. Travel Insurance</h3>
              <p>
                We strongly recommend purchasing comprehensive travel insurance to cover 
                cancellations, medical emergencies, and lost baggage.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">4. Passport and Visas</h3>
              <p>
                Travelers are responsible for ensuring they have valid passports and necessary 
                visas for their journey. Passports must be valid for at least 6 months beyond 
                the return date.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">5. Health and Safety</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Travelers must inform us of any medical conditions or dietary requirements</li>
                <li>We reserve the right to modify itineraries for safety reasons</li>
                <li>Compliance with local health and safety guidelines is mandatory</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}