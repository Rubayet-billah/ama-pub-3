"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const CustomSlider = ({
  children,
  slidesToShow = 1,
  autoPlay = true,
  interval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? totalSlides - slidesToShow
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === totalSlides - slidesToShow;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(goToNext, interval);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative flex w-full max-w-full overflow-hidden">
      <div
        className="flex-shrink-0 w-full h-full transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          width: `${100 * (totalSlides / slidesToShow)}%`,
        }}
      >
        <div>Lorem ipsum dolor sit amet.</div>
        {children}
      </div>
      {children}
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
    </div>
  );
};

export default CustomSlider;
