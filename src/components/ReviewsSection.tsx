import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "An incredible experience exploring Rajasthan's heritage. The tour was well-organized and our guide was extremely knowledgeable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100"
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    comment: "The Kerala backwaters tour was magical. Everything from accommodation to food was perfect. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100"
  },
  {
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 5,
    comment: "Varanasi spiritual tour was a life-changing experience. The attention to detail and cultural insights were exceptional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100"
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real experiences from real travelers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}