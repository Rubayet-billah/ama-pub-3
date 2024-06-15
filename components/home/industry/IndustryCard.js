import LucidIcon from "@/components/ui/icons/LucidIcons";
import Link from "next/link";
import React from "react";

const IndustryCard = ({ industry }) => {
  const { label, summary, icon, link } = industry;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <Link href={`/industries/${link}`} className="duration-300">
      <div className="relative z-10 p-4 mx-auto mb-2 duration-300 rounded-full w-fit bg-tertiary hover:bg-primary group">
        {icon && (
          <LucidIcon
            name={icon}
            classNames="mx-auto text-primary group-hover:text-tertiary duration-300"
            size={30}
          />
        )}
      </div>
      <h1 className="font-bold text-center text-primary">{label}</h1>
    </Link>
  );
};

export default IndustryCard;
