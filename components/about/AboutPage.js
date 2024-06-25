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
      <section className="bg-opacity-10 bg-neutral">
        <CustomContainer classNames="py-5 lg:py-12">
          <div>
            <h2 className="text-xl lg:text-3xl">
              Our <span className="font-bold">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12 lg:mt-12">
            {services?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </CustomContainer>
      </section>
    </>
  );
};

export default AboutPage;
