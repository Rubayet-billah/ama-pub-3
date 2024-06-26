import React from "react";
import image1 from "@/assets/banner/image1.png";
import MRFImage from "../ui/Image";
import CustomContainer from "../ui/CustomContainer";
import Button from "../ui/Button";
import { ArrowRight } from "react-feather";

const EntrepreneurBanner = () => {
  return (
    <div className="py-5 lg:py-12">
      <CustomContainer>
        <div className="relative p-5 space-y-5 overflow-hidden text-white bg-primary rounded-3xl lg:p-10 lg:space-y-8">
          <h1 className="mrf-secondary-heading">
            Need a closer look? <br />
            Download a sample report?
          </h1>

          <div>
            <Button classNames="rounded-full" type="light">
              Download Sample <ArrowRight />
            </Button>
          </div>
          <div className="absolute bottom-0 right-0 hidden w-96 lg:block">
            <MRFImage src={image1} alt="image1" />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default EntrepreneurBanner;
