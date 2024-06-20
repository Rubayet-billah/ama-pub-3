import React from "react";

const SinewaveSvg = ({
  flip = false,
  zIndex = 0,
  top = "auto",
  bottom = "auto",
}) => {
  const transformStyle = flip ? { transform: "scaleX(-1)" } : {};

  return (
    <div
      className={`absolute h-full items-center lg:w-[35vw] xl:w-[30vw] -top-12 lg:top-[-10%] xl:top-[-15%]  ${
        flip ? "right-0" : ""
      }`}
      style={{ zIndex, bottom, ...transformStyle }}
    >
      <svg
        viewBox="0 0 220 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          margin: "0",
          width: "100%",
          opacity: "13%",
        }}
      >
        <path
          // fill="#F1F6FA"
          fill="var(--color-accent)"
          d="M0,0 C50,100 150,100 200,200 C150,300 50,300 0,400 L0,0 Z"
        />
      </svg>
    </div>
  );
};

export default SinewaveSvg;
