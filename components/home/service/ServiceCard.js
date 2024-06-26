import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;

  return (
    <div className="flex flex-col p-4 transition duration-300 bg-white rounded shadow hover:shadow-lg">
      <div className="flex justify-center">
        <Image className="w-10 h-10" src={icon} alt={`${title} icon`} />
      </div>
      <h3 className="mt-4 text-xl font-bold text-center">{title}</h3>
      <p className="flex-1 mt-2 text-sm text-success">{description}</p>
      <div className="flex mt-12">
        <Link className="hover:text-primary" href={`/services`}>
          <button className="flex items-center gap-1 text-tertiary hover:text-primary">
            <span>
              <ArrowRight />
            </span>
            <span>Read more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
