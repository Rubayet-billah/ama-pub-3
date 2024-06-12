"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./BannerSlide.css";
// import image1 from "@/assets/bannerSlider/image-1.png";
// import image2 from "@/assets/bannerSlider/image-2.png";
// import image3 from "@/assets/bannerSlider/image-3.png";
import { Autoplay, Navigation } from "swiper/modules";
import CustomContainer from "@/components/ui/CustomContainer";
import MRFImage from "@/components/ui/Image";
import { slidesData } from "@/constants/constants";

const BannerSlide = () => {
  return (
    <div>
      {/* <Swiper
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <MRFImage
              src={slide.image}
              alt="Banner Image"
              classNames="w-full"
              bgImage
              loading={index === 0 ? "eager" : "lazy"} // Eager load the first image
              priority={index === 0} // Priority set to true for the first slide
            >
              <div className="bg-white bg-opacity-50">
                <CustomContainer
                  classNames={
                    "flex items-center justify-center lg:justify-start lg:px-40 min-h-96 xl:min-h-[476px]"
                  }
                >
                  <div className="text-center md:text-left">
                    <h1 className="mb-3 mrf-heading text-primary lg:mb-7 min-h">
                      {slide.title}
                    </h1>
                    <h2 className="mb-2 font-normal mrf-secondary-heading">
                      {slide.subTitle}
                      <br />
                    </h2>
                    <h3 className="mrf-secondary-heading">{slide.subTitle2}</h3>
                  </div>
                </CustomContainer>
              </div>
            </MRFImage>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <section></section>
    </div>
  );
};

export default BannerSlide;
