import React from 'react';
import { CheckCircle, Clock, FileText, User, Plane } from 'lucide-react';

const timelineSteps = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Identity Check",
    description: "Ensure your passport is valid for at least 6 months beyond your planned return date",
    duration: "Day 1"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Documentation",
    description: "Gather required documents including photos, bank statements, and travel itinerary",
    duration: "Day 2-3"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Visa Processing",
    description: "Submit application and wait for processing",
    duration: "Day 4-14"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Visa Approval",
    description: "Receive your visa and prepare for travel",
    duration: "Day 15"
  }
];

export default function VisaTimeline() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Visa Application Process</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'left-timeline' : 'right-timeline'
              }`}
            >
              <div className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="animate-fade-in">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-1">{step.description}</p>
                    <span className="text-blue-600 font-medium">{step.duration}</span>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}