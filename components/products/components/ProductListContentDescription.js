/* eslint-disable react/no-unescaped-entities */
import React from "react";
import allCategoryThumbnail from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";
import Link from "next/link";
import MRFImage from "@/components/ui/Image";

const ProductListContentDescription = ({ isAllReports, currentCategory }) => {
  return (
    <>
      <div>
        <p>
          {isAllReports
            ? "Stay informed with our comprehensive research reports covering a wide range of topics and industries. Our reports provide valuable insights and analysis to help you navigate today's dynamic business landscape."
            : currentCategory?.summary}
        </p>
      </div>
      {/* <MRFImage
        src={
          isAllReports
            ? allCategoryThumbnail
            : currentCategory?.parent?.banner ||
              currentCategory?.banner ||
              allCategoryThumbnail
        }
        alt="All  Category Thumbnail"
        classNames="w-full"
        quality={75}
        loading="eager"
        priority
        bgImage
      >
        <div className="flex flex-col items-center gap-5 p-5 text-white bg-opacity-50 bg-primary md:p-12">
          <h3 className="text-xl text-center lg:text-2xl">
            Explore Our Comprehensive Research Methodologies Across Various
            Industries
          </h3>
          <Link
            href={"/request-industry-insights"}
            className="flex items-center justify-center gap-1 px-4 py-2 font-semibold duration-100 rounded bg-secondary text-primary hover:shadow"
          >
            Speak to an Expert
          </Link>
        </div>
      </MRFImage> */}
    </>
  );
};

export default ProductListContentDescription;
