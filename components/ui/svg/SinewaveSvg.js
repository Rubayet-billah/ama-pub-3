import React from "react";
import PropTypes from "prop-types";

const SinewaveSvg = ({ flip = false, zIndex = 0 }) => {
  const transformStyle = flip ? { transform: "scaleX(-1)" } : {};
  return (
    <div
      className={`absolute h-full items-center lg:w-[25vw] ${
        flip && "right-0"
      }`}
      style={{ zIndex, ...transformStyle }}
    >
      <svg
        viewBox="0 0 220 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          margin: "0",
          width: "100%",
          // height: "100%",
        }}
      >
        <path
          fill="var(--color-accent)" // Replace with your desired fill color
          d="M0,0 C50,100 150,100 200,200 C150,300 50,300 0,400 L0,0 Z"
        />
      </svg>
    </div>
  );
};

// SinewaveSvg.propTypes = {
//   flip: PropTypes.bool,
//   zIndex: PropTypes.number,
//   className: PropTypes.string,
//   style: PropTypes.object,
// };

// SinewaveSvg.defaultProps = {
//   flip: false,
//   zIndex: 0,
//   className: "",
//   style: {},
// };

export default SinewaveSvg;
