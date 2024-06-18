import React from "react";
import IndustryCard from "./industry/IndustryCard";
import SectionTitle from "../ui/SectionTitle";
import CustomContainer from "../ui/CustomContainer";
import SinewaveSvg from "../ui/svg/SinewaveSvg";

const Industries = ({ industries }) => {
  return (
    <div className="relative pb-5 lg:pb-10">
      {/* <div className="absolute h-full items-center lg:w-[25vw]">
        <svg
          viewBox="0 0 200 400"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "block",
            margin: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            fill="var(--color-accent)" // Replace with your desired fill color
            d="M0,0 C50,100 150,100 200,200 C150,300 50,300 0,400 L0,0 Z"
          />
        </svg>
      </div> */}
      <SinewaveSvg />
      <SectionTitle>Market Research By Category</SectionTitle>
      <CustomContainer classNames="relative z-1">
        <section className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 place-content-center">
          {industries?.map((industry) => {
            return <IndustryCard key={industry.id} industry={industry} />;
          })}
          {industries?.map((industry) => {
            return <IndustryCard key={industry.id} industry={industry} />;
          })}
        </section>
      </CustomContainer>
    </div>
  );
};

export default Industries;
