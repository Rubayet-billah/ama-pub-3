import React from "react";

const HexagonSvg = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="var(--color-accent)"
        d="M50 3
             Q55 3 58 7
             L83 25
             Q86 27 86 32
             L86 68
             Q86 73 83 75
             L58 93
             Q55 97 50 97
             Q45 97 42 93
             L17 75
             Q14 73 14 68
             L14 32
             Q14 27 17 25
             L42 7
             Q45 3 50 3
             Z"
        style={{
          scale: "1.2 1",
          opacity: "30%",
        }}
      />
    </svg>
  );
};

export default HexagonSvg;
