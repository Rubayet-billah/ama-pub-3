/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import userAvatar from "@/assets/contact/user/user1.png";
import { Star } from "react-feather";

const TestimonialCard = ({ testimonial }) => {
  const { name, occupation, testimonial: testimonialText, image } = testimonial;

  return (
    <div className="flex flex-col h-full gap-4 mx-2 lg:grid lg:grid-cols-2 place-items-center lg:p-12">
      <div className="flex-1 p-4 text-left lg:pl-12">
        <div className="flex gap-2 drop-shadow-lg">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="max-w-md mt-3 text-lg font-semibold text-neutral lg:text-2xl">
          "{testimonialText}"
        </p>
      </div>{" "}
      <div className="pt-1 rounded-full">
        <Image
          className="max-w-sm p-4 rounded-full w-52 lg:w-96"
          src={image || userAvatar}
          width={500}
          height={500}
          alt={`Testimonial image of ${name}`}
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
