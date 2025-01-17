import React, { useState } from 'react';
import placeholder from "../../../assets/images/placeholder.jpeg";
import placeholder2 from "../../../assets/images/placeholder_2.jpg";
import { colors } from '../../../services/Colors';

const AngelMonthCarousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://www.sonnyangel.com/renewal/wp-content/uploads/2025/01/Rabbit.png", 
    "https://www.sonnyangel.com/renewal/wp-content/uploads/2024/11/Strawberry.png", 
    "https://www.sonnyangel.com/renewal/wp-content/uploads/2024/09/French_Bull_Dog.png"
  ];

  const handleSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div id="carousel" className="relative w-full px-6">
      {/* Carousel Wrapper */}
      <div className="relative h-96 overflow-hidden rounded-2xl md:rounded-xl md:h-96 bg-white border-2" style={{borderColor: colors.secondary}}>
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${currentSlide === index ? 'active' : 'hidden'}`} >
            <img src={slide} className="absolute block w-1/2 -translate-x-1/2 -translate-y-1/2 top-[38%] left-1/2" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-0 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full`}
            style={{backgroundColor: currentSlide === index ? colors.primary : colors.accent }}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlide(index)}
          />
        ))}
      </div>

      {/* Slider Controls */}
      <button type="button" className="absolute top-0 left-0 z-0 flex items-center justify-center h-full px-12 cursor-pointer" onClick={prevSlide} >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-0 flex items-center justify-center h-full px-12 cursor-pointer" onClick={nextSlide} >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9 5 5 1 1" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default AngelMonthCarousel;
