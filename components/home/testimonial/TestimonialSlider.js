"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? testimonials.length - slidesPerView
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - slidesPerView;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Set initial screen width on client-side

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative py-5 lg:mb-24">
      <section className="flex w-full max-w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            width: `${100 * (testimonials.length / slidesPerView)}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 px-2"
              style={{
                width: `${100 / slidesPerView}%`,
                boxSizing: "border-box",
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        <div className="absolute flex items-center justify-between w-full h-full px-5 xl:px-10">
          <button
            className="p-2 text-white bg-opacity-50 rounded-full bg-primary hover:bg-opacity-75"
            onClick={goToPrevious}
          >
            <ArrowLeft />
          </button>
          <button
            className="p-2 text-white bg-opacity-50 rounded-full bg-primary hover:bg-opacity-75"
            onClick={goToNext}
          >
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
