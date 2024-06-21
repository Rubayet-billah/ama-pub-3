import React from "react";
import Image from "next/image";
import image1 from "@/assets/newses/image1.png";
import { ArrowRight, Clock } from "react-feather";
import moment from "moment";
import Link from "next/link";
import reportThumbnail from "@/assets/report/newReportThumbnail.jpeg";
import Button from "@/components/ui/Button";

const NewsCard = ({ report }) => {
  return (
    <div className="flex flex-col mx-auto bg-white border rounded-lg shadow-lg max-w-96 ">
      <div className="relative">
        <Image
          src={image1}
          className="w-full h-40 rounded-t-lg"
          alt="report thumbnail"
        />
        <span className="absolute px-2 py-0 text-xs font-semibold text-white rounded -bottom-2 left-12 bg-tertiary">
          New
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5 space-y-5 text-success">
        <h1 className="font-semibold lg:text-lg xl:text-xl text-primary">
          <Link className="hover:text-info" href={`/reports/${report?.slug}`}>
            {" "}
            {report?.title}
          </Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut eius
          assumenda. Quasi possimus quaerat excepturi libero, similique commodi
          facere.
        </p>
        <div className="flex items-center mt-1 text-sm gap-x-3">
          <span>
            {new Date(report?.publishedAt || report?.createdAt).toDateString(
              "month",
              "year"
            )}
          </span>
          <hr className="w-0 h-6 border-2 border-secondary" />
          <span>Base Year: {new Date().getFullYear() - 1}</span>
          <hr className="w-0 h-6 border-2 border-secondary" />
          <span>No Of Pages: {report?.noOfPages || 80}</span>
        </div>
      </div>
      <div className="p-5 pt-12 mt-auto">
        <Link className="hover:text-primary" href={`/reports/${report?.slug}`}>
          <button className="flex items-center gap-1 text-tertiary hover:text-primary">
            <span>
              <ArrowRight />
            </span>
            <span>More information</span>
          </button>
        </Link>
      </div>
      {/* <div className="flex gap-2 mt-4">
        <Clock className="mt-[2px] text-secondary" size={18} />
        <p className="text-neutral">
          {moment(report?.createdAt).format("MMMM DD, YYYY")}{" "}
        </p>
      </div> */}
    </div>
  );
};

export default NewsCard;
