import { radioCanada } from "@/app/layout";
import React from "react";
import logo from "@/assets/logo2.png";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "react-feather";

const MainNavbar = () => {
  const links = [
    { text: "Home", url: "#" },
    { text: "About Us", url: "#" },
    { text: "Services", url: "#" },
    { text: "Verticals", url: "#" },
    { text: "Research Insights", url: "#" },
    { text: "Resources", url: "#" },
    { text: "Contact Us", url: "#" },
  ];
  const linkTags = (
    <>
      {links.map((link, index) => (
        <li key={index} className="text-base text-primary font-[500]">
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </>
  );
  return (
    <div className={radioCanada.className}>
      <div className="navbar bg-base-100 text-primary lg:py-4">
        <div className="lg:justify-end lg:mr-4 navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkTags}
            </ul>
          </div>
          <button>
            <Image
              className="max-w-52 lg:max-w-64 md:px-4"
              src={logo}
              alt="ama logo"
            />
          </button>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{linkTags}</ul>
        </div>
        <div className="lg:w-1/4 navbar-end">
          <div className="flex items-center gap-2 lg:gap-4">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
