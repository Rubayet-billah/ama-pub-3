/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CustomContainer from "../ui/CustomContainer";
import Button from "../ui/Button";
import { ArrowRight, FileText, Phone } from "react-feather";
import bannerImage1 from "@/assets/about/banner/image1.png";
import bannerImage2 from "@/assets/about/banner/image2.png";
import avatar from "@/assets/report/avatar.png";
import quotation from "@/assets/report/quotation.png";
import Image from "next/image";
import Link from "next/link";
import Sponsors from "../home/Sponsors";
import Testimonials from "./components/Testimonials";
import { websiteTitle } from "@/constants/constants";
import BannerSearch from "../home/banner/BannerSearch";
import "./AboutPage.css";
import AboutBanner from "./components/AboutBanner";
import ServiceCard from "../home/service/ServiceCard";
import icon1 from "@/assets/serviceCard/servicesIcon/Picture1.png";
import icon2 from "@/assets/serviceCard/servicesIcon/Picture2.png";
import icon3 from "@/assets/serviceCard/servicesIcon/Picture3.png";
import image1 from "@/assets/serviceCard/image-1.jpg";
import image2 from "@/assets/serviceCard/image-2.jpeg";
import image3 from "@/assets/serviceCard/image-3.jpeg";
import HexagonSvg from "../ui/svg/HexagonSvg";

const AboutPage = ({ sponsors, testimonials }) => {
  const services = [
    {
      id: 1,
      title: "Consulting",
      description:
        "Get expert advice and strategic guidance tailored to your specific business needs.",
      icon: icon1,
      image: image1,
    },
    {
      id: 2,
      title: "Customized Research",
      description:
        "Receive in-depth research reports customized to your industry, market, or topic of interest.",
      icon: icon2,
      image: image2,
    },
    {
      id: 3,
      title: "Syndicate Research",
      description:
        "Access comprehensive research reports collaborated and shared among multiple stakeholders in the industry.",
      icon: icon3,
      image: image3,
    },
  ];

  const publishersLeft = [
    "Freedonia Group",
    "First Research, Inc.",
    "Plunkett Research, Ltd.",
    "Asia Market Information & Development Company",
    "IDC",
    "WinterGreen Research",
    "BCC Research",
    "Koncept Analytics",
  ];

  const publishersRight = [
    "TechNavio",
    "MarketsandMarkets",
    "Mintel - Snapshots",
    "SpendEdge",
    "Oxford Economics",
    "Mind Commerce",
    "Meticulous Research",
    "9Dimen Research",
  ];

  return (
    <>
      <div className="banner-container">
        <BannerSearch />
        <section className="banner-content mt-[5%]">
          <AboutBanner />
        </section>
      </div>
      <section>
        <CustomContainer>
          <div className="grid grid-cols-2 p-4 my-5 bg-white rounded shadow lg:grid-cols-5 place-items-center">
            <div className="p-4 text-center text-tertiary">
              <h3 className="text-2xl lg:text-3xl">18m</h3>
              <p className="text-sm text-success">monthly visits</p>
            </div>
            <div className="p-4 text-center text-tertiary">
              <h3 className="text-2xl lg:text-3xl">4m+</h3>
              <p className="text-sm text-success">registered users</p>
            </div>
            <div className="p-4 text-center text-tertiary">
              <h3 className="text-2xl lg:text-3xl">22,500</h3>
              <p className="text-sm text-success">renowned sources</p>
            </div>
            <div className="p-4 text-center text-tertiary">
              <h3 className="text-2xl lg:text-3xl">170</h3>
              <p className="text-sm text-success">industries</p>
            </div>
            <div className="p-4 text-center text-tertiary">
              <h3 className="text-2xl lg:text-3xl">16</h3>
              <p className="text-sm text-success">years of experience</p>
            </div>
          </div>
        </CustomContainer>
      </section>
      <section className="relative bg-opacity-10 bg-neutral">
        <CustomContainer classNames="py-5 lg:py-12 z-[2] relative">
          <div>
            <h2 className="mb-5 text-xl lg:text-3xl">
              Our <span className="font-bold">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12 lg:mt-12">
            {services?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </CustomContainer>
        {/* <div className="absolute right-0 rotate-45 bottom-5 w-72">
          <HexagonSvg />
        </div> */}
      </section>
      <section className="relative">
        <CustomContainer classNames="py-5 lg:py-12">
          <div>
            <h2 className="mb-5 text-xl lg:text-3xl">
              About <span className="font-bold">Publishers</span>
            </h2>
          </div>
          <div>
            <p className="text-success">
              MarketResearch.com features reports from hundreds of leading
              publishers and consulting firms worldwide. Our publishers range
              from larger publishing companies, covering numerous verticals and
              markets, to smaller specialty firms, which are highly specialized
              around a core niche focus.
            </p>
          </div>
          <h2 className="my-4 text-lg lg:text-xl">Popular Recent Publishers</h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <ul>
              {publishersLeft.map((publisher, index) => (
                <li key={index} className="text-neutral">
                  {publisher}
                </li>
              ))}
            </ul>
            <ul>
              {publishersRight.map((publisher, index) => (
                <li key={index} className="text-neutral">
                  {publisher}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid mt-5 place-items-center lg:mt-10">
            <Button type="tertiary">View All Our Publishers</Button>
          </div>
        </CustomContainer>
        <hr className="w-1/2 mx-auto" />
      </section>
      <section>
        <CustomContainer classNames="py-5 lg:py-12">
          <div>
            <h2 className="mb-5 text-xl lg:text-3xl">
              Your <span className="font-bold">carrier</span> with us
            </h2>
          </div>
          <div>
            <p className="mb-5">
              The combination of the pioneering spirit of a start-up with the
              stability of an established company makes Statista an exceptional
              employer, which walks unconventional and innovative paths. We
              prefer fast decision-making, flat hierarc- hies and a company
              culture based around learning by doing – all this makes us more
              successful than ever.
            </p>
            <p>
              If you would like to be a part of Statista’s success history, love
              challenges and have a passion for data, then Statista is the right
              choice for you.
            </p>
          </div>
          <div className="grid mt-5 place-items-center lg:mt-10">
            <Button type="tertiary">See our job offers</Button>
          </div>
        </CustomContainer>
        <hr className="w-1/2 mx-auto" />
      </section>
    </>
  );
};

export default AboutPage;
