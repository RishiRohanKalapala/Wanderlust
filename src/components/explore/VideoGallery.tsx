import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    title: "Kerala Backwaters",
    duration: "2:30"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1587922546307-776227941871",
    title: "Goa Beaches",
    duration: "3:15"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    title: "Ladakh Adventures",
    duration: "4:00"
  }
];

export default function VideoGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Experience India</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 p-4 rounded-full group-hover:bg-white/50 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="text-gray-600">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}