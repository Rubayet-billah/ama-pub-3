"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "react-feather";

const SummaryTabFAQAccordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-0 my-2 border rounded bg-accent collapse">
      <input
        className="p-0"
        onClick={() => setIsOpen(!isOpen)}
        type="checkbox"
        aria-label={item?.question}
      />
      <div className="flex items-center justify-between px-4 py-1 font-medium collapse-title ">
        <p> {item.question} </p>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </div>
      <div className="collapse-content">
        <p className="text-sm text-neutral">{item.answer}</p>
      </div>
    </div>
  );
};

export default SummaryTabFAQAccordion;
