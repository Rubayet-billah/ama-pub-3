"use client";
import React, { useEffect, useState, useRef } from "react";
import CustomContainer from "@/components/ui/CustomContainer";
import MRFImage from "@/components/ui/Image";
import { slidesData } from "@/constants/constants";
import { ArrowLeft, ArrowRight } from "react-feather";

const BannerSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slidesData.length - 1;
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

    if (movedBy < -50 && currentIndex < slidesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }

    if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
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
    <div>
      <section
        className="relative flex w-full max-w-full overflow-hidden"
        ref={sliderRef}
        onMouseDown={touchStart(currentIndex)}
        onMouseMove={touchMove}
        onMouseUp={touchEnd}
        onMouseLeave={() => isDragging && touchEnd()}
        onTouchStart={touchStart(currentIndex)}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full h-full"
            style={{
              transform: `translateX(${currentTranslate}%)`,
              transition: isDragging ? "none" : "transform 1s ease-out",
            }}
          >
            <CustomContainer>
              <div className="items-center gap-8 space-y-5 lg:flex lg:gap-12 lg:space-y-0">
                <div className="flex-1 py-6 text-center text-white lg:py-0">
                  <h1 className="mb-3 mrf-heading lg:mb-7 min-h">
                    {slide.title}
                  </h1>
                  <h2 className="mb-2 font-normal mrf-secondary-heading">
                    {slide.subTitle}
                    <br />
                  </h2>
                  <h3 className="mrf-secondary-heading">{slide.subTitle2}</h3>
                </div>
                <div className="relative flex-1 h-[250px] xl:h-[350px]">
                  <div className="absolute top-0 left-0 w-64 overflow-hidden border-4 rounded border-tertiary h-36 xl:w-96 xl:h-52">
                    <MRFImage
                      src={slide.image}
                      alt="Banner Image"
                      classNames="w-full rounded h-full"
                    />
                  </div>
                  <div className="absolute bottom-0 w-64 overflow-hidden border-4 rounded border-tertiary h-36 left-1/4 xl:w-96 xl:h-52">
                    <MRFImage
                      src={slide.image}
                      alt="Banner Image"
                      classNames="w-full rounded h-full"
                    />
                  </div>
                </div>
              </div>
            </CustomContainer>
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

export default BannerSlide;
