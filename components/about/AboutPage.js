import React from "react";
import CustomContainer from "../ui/CustomContainer";
import Button from "../ui/Button";
import BannerSearch from "../home/banner/BannerSearch";
import AboutBanner from "./components/AboutBanner";
import ServiceCard from "../home/service/ServiceCard";
import HexagonSvg from "../ui/svg/HexagonSvg";
import { services, publishersLeft, publishersRight } from "./data/aboutData";
import "./AboutPage.css";

const Stats = () => (
  <div className="grid grid-cols-2 p-4 my-5 bg-white rounded shadow lg:divide-x-2 lg:grid-cols-5 place-items-center place-content-center">
    {[
      { value: "18m", label: "monthly visits" },
      { value: "4m+", label: "registered users" },
      { value: "22,500", label: "renowned sources" },
      { value: "170", label: "industries" },
      { value: "16", label: "years of experience" },
    ].map((stat, index) => (
      <div key={index} className="w-full p-4 text-center text-tertiary">
        <h3 className="text-2xl lg:text-3xl">{stat.value}</h3>
        <p className="text-sm text-success">{stat.label}</p>
      </div>
    ))}
  </div>
);

const ServicesSection = () => (
  <section className="relative overflow-hidden bg-opacity-10 bg-neutral">
    <CustomContainer classNames="py-5 lg:py-12 z-[2] relative">
      <div>
        <h2 className="mb-5 text-xl lg:text-3xl">
          Our <span className="font-bold">Services</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12 lg:mt-12">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </CustomContainer>
    <div className="absolute right-0 rotate-45 bottom-5 w-72">
      <HexagonSvg />
    </div>
  </section>
);

const PublishersSection = () => (
  <section className="relative overflow-hidden">
    <CustomContainer classNames="py-5 lg:py-12">
      <div>
        <h2 className="mb-5 text-xl lg:text-3xl">
          About <span className="font-bold">Publishers</span>
        </h2>
      </div>
      <div>
        <p className="text-success">
          MarketResearch.com features reports from hundreds of leading
          publishers and consulting firms worldwide. Our publishers range from
          larger publishing companies, covering numerous verticals and markets,
          to smaller specialty firms, which are highly specialized around a core
          niche focus.
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
    <div className="absolute right-0 h-full lg:right-40 top-1/3 w-96 lg:scale-110">
      <div className="relative">
        <div className="absolute top-24 w-52 h-52 rotate-[15deg]">
          <HexagonSvg />
        </div>
        <div className="absolute top-0 left-28 w-52 h-52 rotate-[15deg]">
          <HexagonSvg />
        </div>
        <div className="absolute top-36 left-36 w-52 h-52 rotate-[15deg]">
          <HexagonSvg />
        </div>
      </div>
    </div>
  </section>
);

const CareerSection = () => (
  <section>
    <CustomContainer classNames="py-5 lg:py-12">
      <div>
        <h2 className="mb-5 text-xl lg:text-3xl">
          Your <span className="font-bold">Career</span> with us
        </h2>
      </div>
      <div>
        <p className="mb-5">
          The combination of the pioneering spirit of a start-up with the
          stability of an established company makes Statista an exceptional
          employer, which walks unconventional and innovative paths. We prefer
          fast decision-making, flat hierarchies, and a company culture based
          around learning by doing – all this makes us more successful than
          ever.
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
);

const AboutPage = ({ sponsors, testimonials }) => (
  <>
    <div className="banner-container">
      <BannerSearch />
      <section className="banner-content mt-[5%]">
        <AboutBanner />
      </section>
    </div>
    <section>
      <CustomContainer>
        <Stats />
      </CustomContainer>
    </section>
    <ServicesSection />
    <PublishersSection />
    <CareerSection />
  </>
);

export default AboutPage;
