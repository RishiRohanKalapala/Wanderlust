import React from 'react';
import BookingHeader from '../components/BookingHeader';
import DestinationCarousel from '../components/explore/DestinationCarousel';
import VideoGallery from '../components/explore/VideoGallery';
import ExploreDestinations from '../components/explore/ExploreDestinations';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BookingHeader />
      <DestinationCarousel />
      <ExploreDestinations />
      <VideoGallery />
    </div>
  );
}