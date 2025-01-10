import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

export default function StatCard({ icon, value, label, delay }: StatCardProps) {
  return (
    <div 
      className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 overflow-hidden transform hover:scale-105 transition-transform duration-300"
      style={{ animation: `fadeInUp 0.6s ease-out ${delay}s both` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
      <div className="relative z-10">
        <div className="flex justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
          <div className="bg-white/20 p-3 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="counter text-4xl font-bold mb-2 text-center" data-value={value}>
          {value}
        </div>
        <div className="text-lg text-white/90 text-center">{label}</div>
      </div>
    </div>
  );
}