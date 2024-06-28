"use client";

import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import Link from "next/link";
import { useDebounce } from "@/utils/hooks";

const ProductListSearch = ({ currentCategory }) => {
  // State to hold the input field value
  const [searchValue, setSearchValue] = useState("");

  // State to track whether the input is focused
  const [isInputFocused, setIsInputFocused] = useState(false);

  // State to track whether the user is typing
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const categoryId = null; // Set categoryId to null

  // Debounce the search value
  const debouncedSearchValue = useDebounce(searchValue, 700);

  // Function to handle input field changes
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  // Function to handle input focus
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  // Function to handle input blur
  const handleInputBlur = () => {
    // Handled with setTimeout otherwise it triggers before navigating
    const timeout = setTimeout(() => {
      setIsInputFocused(false);
    }, 500);

    return () => clearTimeout(timeout);
  };

  const sugesstionFetch = async (payload) => {
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const { data } = await res.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };

  // Effect to handle debounced search value changes
  useEffect(() => {
    // Check if input value meets criteria (minimum 3 letters excluding space)
    if (debouncedSearchValue.trim().replace(/\s/g, "").length >= 3) {
      // Perform further processing here

      sugesstionFetch({
        catID: categoryId,
        query: debouncedSearchValue,
      });

      setIsTyping(true);
    } else {
      setIsTyping(false);
      setSuggestions([]); // Clear suggestions if search value is less than 3 characters
    }
  }, [debouncedSearchValue, categoryId]);

  return (
    <div className="relative z-10 py-2 mx-auto border shadow-lg bg-contact-form">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 pr-16 text-primary placeholder-primary bg-inherit focus:outline-none"
          type="search"
          placeholder="Search Reports..."
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-4 text-white bg-secondary"
          aria-label="Search"
        >
          <Search />
        </button>
      </form>
      {isInputFocused && isTyping && (
        <div className="absolute left-0 py-4 text-sm text-black bg-white rounded shadow-md z-[2] w-96 top-full">
          {suggestions?.map((sg, index) => (
            <Link
              key={index}
              href={`/reports/${sg?.slug}`}
              className="block px-4 py-1 mb-1 hover:text-info hover:bg-contact-form"
              onClick={() => {
                setSearchValue("");
                setIsTyping(false);
              }}
            >
              {sg?.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListSearch;
