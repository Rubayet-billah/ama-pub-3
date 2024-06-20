"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

  const slidesPerView = 1;

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
    if (!isDragging) {
      const interval = setInterval(() => {
        goToNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isDragging]);

  useEffect(() => {
    setCurrentTranslate(-currentIndex * 100);
    setPrevTranslate(-currentIndex * 100);
  }, [currentIndex]);

  const touchStart = (index) => (event) => {
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    sliderRef.current.style.transition = "none";
  };

  const touchMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const movement = (currentPosition - startPosition) * 0.15;
    setCurrentTranslate(prevTranslate + movement);
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < testimonials.length - slidesPerView) {
      setCurrentIndex((prev) => prev + 1);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentTranslate(prevTranslate); // Reset to previous position if movement is small
    }

    sliderRef.current.style.transition = "transform 1s ease-out";
    setCurrentTranslate(-currentIndex * 100);
    setPrevTranslate(-currentIndex * 100);
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  return (
    <div className="relative max-w-[90%] mx-auto -translate-y-8 bg-white xl:max-w-7xl lg:-translate-y-16 rounded-3xl">
      <section
        className="flex w-full overflow-hidden "
        ref={sliderRef}
        onMouseDown={touchStart(currentIndex)}
        onMouseMove={touchMove}
        onMouseUp={touchEnd}
        onMouseLeave={() => isDragging && touchEnd()}
        onTouchStart={touchStart(currentIndex)}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full "
            style={{
              transform: `translateX(${currentTranslate}%)`,
              transition: isDragging ? "none" : "transform 1s ease-out",
            }}
          >
            <div className="h-full px-2 lg:flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </div>
        ))}
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
