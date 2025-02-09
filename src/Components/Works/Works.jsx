import React, { useState } from 'react';
import { Container } from "@mui/material";
import Slide from "../../assets/SlideItem.png";
import 'boxicons';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Slide, Slide, Slide, Slide, Slide];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const getSlidePosition = (index) => {
    const offset = (index - currentSlide + slides.length) % slides.length;
    
    if (offset === 0) return 'center';
    if (offset === 1) return 'next1';
    if (offset === 2) return 'next2';
    if (offset === slides.length - 1) return 'prev1';
    if (offset === slides.length - 2) return 'prev2';
    return 'hidden';
  };

  return (
    <Container maxWidth="lg" className="perspective-1000">
      <section id="works" className="my-4 md:my-6 lg:my-10 py-4 md:py-6 lg:py-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center text-headColor font-bold tracking-tighter">
          Our Works
        </h1>
        <p className="text-base sm:text-lg text-gray-400 text-center">
          We increase revenue and ensure sustainable long-term growth <br />for your business through powerful apps and websites.
        </p>
      </section>
      
      <div className="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          
          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                position === 'center' ? 'z-30' : 
                position === 'next1' ? 'z-20' :
                position === 'prev1' ? 'z-20' : 
                position === 'next2' ? 'z-10' :
                position === 'prev2' ? 'z-10' : 'z-0'
              }`}
              style={{
                transform: 
                  position === 'center' ? 'translateX(0) scale(1.50)' :
                  position === 'next1' ? 'translateX(60%) scale(0.85)' :
                  position === 'next2' ? 'translateX(120%) scale(0.7)' :
                  position === 'prev1' ? 'translateX(-60%) scale(0.85)' :
                  position === 'prev2' ? 'translateX(-120%) scale(0.7)' : 'scale(0)',
                width: '40%',
                filter: position !== 'center' ? 'brightness(0.7)' : 'none'
              }}
            >
              <div className="relative w-full h-full  overflow-hidden transform transition-all duration-500 shadow-xl">
                <img
                  src={slide}
                  className="w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
                {position !== 'center' && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="p-2 text-white hover:text-gray-300 transition-colors"
        >
          <box-icon name='left-arrow-alt' color="currentColor"></box-icon>
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide % slides.length ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 text-white hover:text-gray-300 transition-colors"
        >
          <box-icon name='right-arrow-alt' color="currentColor"></box-icon>
        </button>
    
      </div>
    </Container>
  );
};

export default Works;