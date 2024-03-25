import React from "react";
import logo from "@/assets/logo2.png";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "react-feather";
import LinkTags from "./LinkTags";
import { headers } from "next/headers";
import Link from "next/link";

const MainNavbar = ({ categories = [] }) => {
  const heads = headers();
  const pathname = heads.get("next-url");

  const links = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "#" },
    {
      text: "Industries",
      url: "#",
      submenus: [
        { text: "Healthcare", url: "/reports" },
        { text: "SEO & SMO", url: "/reports/seo-smo" },
        { text: "Healthcare", url: "/reports" },
        { text: "SEO & SMO", url: "/reports/seo-smo" },
        { text: "Healthcare", url: "/reports" },
        { text: "SEO & SMO", url: "/reports/seo-smo" },
        { text: "Healthcare", url: "/reports" },
        { text: "SEO & SMO", url: "/reports/seo-smo" },
        { text: "Healthcare", url: "/reports" },
        { text: "SEO & SMO", url: "/reports/seo-smo" },
        { text: "Healthcare", url: "/reports" },
        { text: "SEO & SMO", url: "/reports/seo-smo" },
        { text: "Healthcare", url: "/reports" },
      ],
    },
    { text: "Services", url: "#" },
    { text: "Insights", url: "#" },
    { text: "About", url: "#" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <div className="navbar text-primary lg:py-4">
        <div className="lg:justify-end lg:mr-4 navbar-start lg:max-w-sm">
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
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <LinkTags categories={categories} pathname={pathname} />
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
          <ul className="px-4 text-base menu menu-horizontal">
            {/* <LinkTags pathname={pathname} /> */}

            {links.map((link, index) => (
              <li
                key={index}
                className={`px-4 text-primary cursor-pointer ${
                  link.submenus ? "group relative dropdown" : ""
                }`}
              >
                <Link
                  className={`p-0 ${
                    pathname == link.url ? "text-blue-500" : ""
                  }`}
                  href={link.url}
                >
                  {link.text} {link.submenus && <span>{">"}</span>}
                </Link>
                {/* Render submenus if they exist */}
                {link.submenus && (
                  <div className="absolute hidden h-auto group-hover:block dropdown-menu">
                    <ul className="top-0 z-10 grid grid-cols-2 gap-2 p-4 bg-white rounded shadow w-96">
                      {link.submenus.map((submenu, subIndex) => (
                        <li key={subIndex} className="py-1">
                          <Link
                            href={submenu.url}
                            className="block p-0 cursor-pointer text-primary"
                          >
                            {submenu.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
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
