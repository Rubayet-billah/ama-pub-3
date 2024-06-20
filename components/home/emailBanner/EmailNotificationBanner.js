import Button from "@/components/ui/Button";
import CustomContainer from "@/components/ui/CustomContainer";
import React from "react";
import { ArrowRight } from "react-feather";

const EmailNotificationBanner = () => {
  return (
    <div className="rounded-2xl bg-secondary max-w-[95%] lg:max-w-5xl xl:max-w-7xl mx-auto lg:py-8 my-5 lg:mb-12">
      <CustomContainer>
        <div className="flex flex-col items-center justify-center gap-5 p-4 my-4 lg:flex-row">
          <div className="flex-1 text-white">
            <h2 className="font-bold lg:text-xl xl:text-2xl">
              Want industry statistics and report delivered to your inbox
              monthly?
            </h2>
          </div>
          <div>
            <Button type="tertiary" classNames="rounded-full">
              <span> Sign me up</span>
              <span>
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default EmailNotificationBanner;
