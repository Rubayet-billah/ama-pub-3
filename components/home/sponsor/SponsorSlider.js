"use client";
import React, { useEffect, useState, useRef } from "react";
import SponsordCard from "./SponsordCard";
import image1 from "@/assets/sponsors/image1.png";
import image2 from "@/assets/sponsors/image2.png";
import image3 from "@/assets/sponsors/image3.png";
import image4 from "@/assets/sponsors/image4.png";

const companyLogos = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image1 },
  { id: 6, image: image2 },
  { id: 7, image: image3 },
  { id: 8, image: image4 },
  { id: 9, image: image1 },
  { id: 10, image: image2 },
  { id: 11, image: image3 },
  { id: 12, image: image4 },
];

const SponsorSlider = ({ sponsors = companyLogos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(6);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize(); // Set initial screen width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? sponsors.length - slidesPerView
      : currentIndex - slidesPerView;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= sponsors.length - slidesPerView;
    const newIndex = isLastSlide ? 0 : currentIndex + slidesPerView;
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
    setCurrentTranslate(-currentIndex * (100 / slidesPerView));
    setPrevTranslate(-currentIndex * (100 / slidesPerView));
  }, [currentIndex, slidesPerView]);

  const touchStart = (index) => (event) => {
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    sliderRef.current.style.transition = "none";
  };

  const touchMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const movement = (currentPosition - startPosition) * 0.15; // Adjust the scaling factor
    setCurrentTranslate(prevTranslate + movement);
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < sponsors.length - slidesPerView) {
      setCurrentIndex((prev) => prev + slidesPerView);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - slidesPerView);
    } else {
      setCurrentTranslate(prevTranslate); // Reset to previous position if movement is small
    }

    sliderRef.current.style.transition = "transform 1s ease-out";
    setCurrentTranslate(-currentIndex * (100 / slidesPerView));
    setPrevTranslate(-currentIndex * (100 / slidesPerView));
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  return (
    <div className="">
      <section
        className="relative flex items-center w-full mx-auto overflow-hidden"
        ref={sliderRef}
        onMouseDown={touchStart(currentIndex)}
        onMouseMove={touchMove}
        onMouseUp={touchEnd}
        onMouseLeave={() => isDragging && touchEnd()}
        onTouchStart={touchStart(currentIndex)}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={sponsor.id}
            className="flex-shrink-0 h-full"
            style={{
              transform: `translateX(${currentTranslate}%)`,
              transition: isDragging ? "none" : "transform 1s ease-out",
              width: `${100 / slidesPerView}%`,
            }}
          >
            <div className="p-2">
              <SponsordCard image={sponsor.image} />
            </div>
          </div>
        ))}
        {/* <div className="absolute flex items-center justify-between w-full h-full px-5 xl:px-10">
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
        </div> */}
      </section>
    </div>
  );
};

export default SponsorSlider;
