import { useState } from 'react';

const useCarousel = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentSlide(index);
  
  return { currentSlide, nextSlide, prevSlide, goToSlide };
};

export default useCarousel;