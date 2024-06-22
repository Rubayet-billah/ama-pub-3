"use client";
import React, { useEffect, useState, useRef } from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";
import CustomContainer from "../ui/CustomContainer";
import SinewaveSvg from "../ui/svg/SinewaveSvg";
import { ArrowLeft, ArrowRight } from "react-feather";
import Button from "../ui/Button";
import Link from "next/link";

const Newses = ({ recentReports }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
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
      ? recentReports.length - slidesPerView
      : currentIndex - slidesPerView;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= recentReports.length - slidesPerView;
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
    setCurrentTranslate(-currentIndex * (100 / 1));
    setPrevTranslate(-currentIndex * (100 / 1));
  }, [currentIndex, slidesPerView]);

  const touchStart = (index) => (event) => {
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    sliderRef.current.style.transition = "none";
  };

  const touchMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const movement = (currentPosition - startPosition) * 0.3; // Adjust the scaling factor
    setCurrentTranslate(prevTranslate + movement);
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < recentReports.length - slidesPerView) {
      setCurrentIndex((prev) => prev + slidesPerView);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex((prev) =>
        prev - slidesPerView < 0 ? 0 : prev - slidesPerView
      );
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
    <div className="relative">
      <SinewaveSvg flip />
      <SectionTitle>Trending Reports</SectionTitle>
      <CustomContainer classNames="mb-5 lg:mb-12">
        <section
          className="relative flex w-full mb-5 overflow-hidden lg:mb-12 z-1"
          ref={sliderRef}
          onMouseDown={touchStart(currentIndex)}
          onMouseMove={touchMove}
          onMouseUp={touchEnd}
          onMouseLeave={() => isDragging && touchEnd()}
          onTouchStart={touchStart(currentIndex)}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          {recentReports.map((report, index) => (
            <div
              key={report.id}
              className="flex-shrink-0 p-2"
              style={{
                transform: `translateX(${currentTranslate}%)`,
                transition: isDragging ? "none" : "transform 1s ease-out",
                width: `${100 / slidesPerView}%`,
              }}
            >
              <div className="h-full p-2">
                <NewsCard report={report} />
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
      </CustomContainer>
      <div className="grid place-items-center">
        <Link href="/industries">
          <Button type="secondary">Go to report archive</Button>
        </Link>
      </div>
    </div>
  );
};

export default Newses;
