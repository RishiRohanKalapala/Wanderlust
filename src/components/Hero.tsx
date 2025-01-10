import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const waterfallSlides = [
  {
    url: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    location: "Nohkalikai Falls, Meghalaya",
    description: "India's tallest plunge waterfall"
  },
  {
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    location: "Athirappilly Falls, Kerala",
    description: "The Niagara of India"
  },
  {
    url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    location: "Dudhsagar Falls, Goa",
    description: "The majestic Sea of Milk"
  }
];

export default function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % waterfallSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {waterfallSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${slide.url}")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50">
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-semibold mb-1">{slide.location}</h3>
                <p className="text-lg text-white/90">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover India's Natural Wonders
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
          Experience the majestic waterfalls and create unforgettable memories
        </p>
        <button 
          onClick={() => navigate('/explore')}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors animate-fade-in-delay-2"
        >
          Start Your Journey
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>

      <div className="absolute bottom-8 right-8 flex space-x-2">
        {waterfallSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}