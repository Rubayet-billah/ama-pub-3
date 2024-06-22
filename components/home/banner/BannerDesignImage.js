import React from "react";

const BannerDesignImage = () => {
  return (
    <div className="absolute z-[-1] w-40 h-36 top-2/3 lg:top-[15vw] left-[10%] scale-75 lg:scale-100">
      <div className="relative">
        <div
          className="absolute top-0 w-20 h-20 rounded-full bg-tertiary"
          style={
            {
              // clipPath: "polygon(50% 32%, 100% 60%, 82% 100%, 18% 100%, 0 60%)",
            }
          }
        ></div>
        <div
          className="absolute top-0 w-[84px] h-[84px] rotate-[30deg] left-20 bg-tertiary"
          style={{
            clipPath:
              "polygon(25% 5%, 76% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          }}
        ></div>
        <div
          className="absolute w-24 h-24 top-10 left-8 bg-tertiary"
          style={{
            clipPath: "polygon(50% 32%, 100% 60%, 82% 100%, 18% 100%, 0 60%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BannerDesignImage;
