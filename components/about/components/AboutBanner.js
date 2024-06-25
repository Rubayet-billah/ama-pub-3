/* eslint-disable react/no-unescaped-entities */
import CustomContainer from "@/components/ui/CustomContainer";
import React from "react";

const AboutBanner = () => {
  return (
    <CustomContainer>
      <div className="">
        <section className="text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold text-center uppercase text-secondary lg:text-2xl">
              Who We Are
            </h2>
            <hr className="w-20 mx-auto border border-tertiary" />
          </div>
          <div className="max-w-3xl mx-auto">
            <h1 className="font-normal mrf-sub-heading">
              The <span className="font-bold">company</span> behind the success
            </h1>
            <p>
              MR Forecast stands as a premier Market Research Company, offering
              quantified B2B research that uncovers high-growth emerging
              opportunities impacting over 80% of global corporate revenues. Our
              team of Analysts diligently tracks high-growth studies, providing
              detailed statistical analyses and in-depth insights into market
              trends and dynamics, delivering a comprehensive industry overview.
            </p>
            <p className="mt-5">
              <span className="font-bold">Employing</span> an extensive research
              methodology, we fuse critical insights with industry factors and
              market forces to deliver optimal value to our clients. Drawing
              from reliable primary and secondary data sources, our analysts and
              consultants extract actionable data tailored to meet our clients'
              business objectives.
            </p>
          </div>
        </section>
      </div>
    </CustomContainer>
  );
};

export default AboutBanner;
