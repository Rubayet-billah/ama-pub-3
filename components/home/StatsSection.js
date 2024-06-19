import React from "react";
import bgImage from "@/assets/stats/bg-image.png";
import Stats from "./stat/Stats";
import { CheckCircle } from "react-feather";
import CustomContainer from "../ui/CustomContainer";
import MRFImage from "../ui/Image";
import SectionTitle from "../ui/SectionTitle";
import SinewaveSvg from "../ui/svg/SinewaveSvg";

const StatsSection = () => {
  return (
    <div className="relative">
      <SinewaveSvg />
      <SectionTitle>Global coverage written by analysts</SectionTitle>
      <div className="py-12">
        <CustomContainer>
          <div>
            <Stats />
          </div>
        </CustomContainer>
      </div>
      <section className="relative p-5 text-center lg:p-8 z-1 bg-secondary bg-opacity-10">
        <CustomContainer>
          <h2 className="mb-5 font-bold mrf-h4">
            Trusted by 7,000+ companies around the world
          </h2>
          <p className="mrf-small">
            Independent, accurate and written by experienced analysts. Our
            industry analysis, company database and economic insights support
            businesses of all sizes, across all markets.
          </p>
        </CustomContainer>
      </section>
    </div>
  );
};

export default StatsSection;
