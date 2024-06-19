import React from "react";

const SectionTitle = ({ children, classNames }) => {
  return (
    <div
      className={`flex flex-col items-center py-5 md:py-12 lg:pb-16 ${
        " " + classNames
      }`}
    >
      <h1 className="text-center capitalize mrf-sub-heading text-primary">
        {children}
      </h1>
      <hr className="w-12 mt-2 border-t-2 border-b-2 rounded lg:w-40 border-tertiary" />
    </div>
  );
};

export default SectionTitle;
