"use client";
import Image from "next/image";
import React, { useState } from "react";

const IndustryCard = ({ industry }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { name, description, icon } = industry;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-2 px-2 py-5 duration-300 hover:bg-white min-h-60"
    >
      <div>
        <div
          className={`w-0 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible h-8" : "invisible h-0"
          } duration-300`}
        ></div>
        <div className="relative z-10 w-20">
          <Image className={`w-full`} src={icon} alt={name} />
        </div>
        <div
          className={`w-0 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible h-8" : "invisible h-0"
          } duration-300`}
        ></div>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default IndustryCard;
