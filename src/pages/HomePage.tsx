import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import ExperienceSection from '../components/ExperienceSection';
import AboutSection from '../components/AboutSection';
import TravelStats from '../components/TravelStats';
import FeaturedPackages from '../components/FeaturedPackages';
import PartnersSection from '../components/PartnersSection';
import ReviewsSection from '../components/ReviewsSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TravelStats />
      <Destinations />
      <FeaturedPackages />
      <ExperienceSection />
      <AboutSection />
      <PartnersSection />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}