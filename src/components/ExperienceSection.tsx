import React from 'react';
import { Camera, Utensils, Users, Mountain } from 'lucide-react';

const experiences = [
  {
    icon: <Camera className="w-12 h-12 text-blue-600" />,
    title: "Photography Tours",
    description: "Capture the beauty of India through your lens with expert photographers"
  },
  {
    icon: <Utensils className="w-12 h-12 text-blue-600" />,
    title: "Culinary Journeys",
    description: "Discover authentic Indian cuisine through cooking classes and food tours"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Cultural Immersion",
    description: "Live with local families and experience traditional Indian lifestyle"
  },
  {
    icon: <Mountain className="w-12 h-12 text-blue-600" />,
    title: "Adventure Sports",
    description: "From trekking to rafting, experience thrilling adventures"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unique Experiences</h2>
          <p className="text-xl text-gray-600">Create memories that last a lifetime</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{experience.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}