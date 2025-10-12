import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSlide from './HeroSlide';
import useCarousel from '../hooks/useCarousel';
import { HERO_SLIDES } from '../data/mockData';

const HeroSection = () => {
  const { currentSlide, nextSlide, prevSlide } = useCarousel(HERO_SLIDES.length);

  return (
    <section className="relative h-80 overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <HeroSlide 
          key={`hero-${slide.id}`}
          slide={slide} 
          isActive={index === currentSlide} 
        />
      ))}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </section>
  );
};

export default HeroSection;