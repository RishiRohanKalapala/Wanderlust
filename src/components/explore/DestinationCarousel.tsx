import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    title: "Taj Mahal, Agra",
    description: "One of the Seven Wonders of the World"
  },
  {
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073",
    title: "Hawa Mahal, Jaipur",
    description: "The Palace of Winds"
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    title: "Varanasi Ghats",
    description: "The Spiritual Capital of India"
  }
];

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === carouselItems.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(current => 
        current === 0 ? carouselItems.length - 1 : current - 1
      );
    } else {
      setCurrentIndex(current => 
        current === carouselItems.length - 1 ? 0 : current + 1
      );
    }
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-4">{item.title}</h2>
              <p className="text-xl">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => navigate('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={() => navigate('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}