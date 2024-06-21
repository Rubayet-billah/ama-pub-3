import React from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";
import CustomContainer from "../ui/CustomContainer";
import SinewaveSvg from "../ui/svg/SinewaveSvg";

const Newses = ({ recentReports }) => {
  return (
    <div className="relative">
      <SinewaveSvg flip />
      <SectionTitle>Trending Reports</SectionTitle>

      <CustomContainer classNames="mb-5 lg:mb-12 relative z-1">
        <section className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {recentReports.map((report) => (
            <NewsCard key={report.id} report={report} />
          ))}
        </section>
      </CustomContainer>
    </div>
  );
};

export default Newses;
