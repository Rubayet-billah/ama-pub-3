import React from "react";
import SectionTitle from "../ui/SectionTitle";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import TestimonialSlider from "./testimonial/TestimonialSlider";

const Testimonials = ({ testimonials }) => {
  return (
    <div id="testimonial">
      {/* <SectionTitle>Testimonials</SectionTitle> */}
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
