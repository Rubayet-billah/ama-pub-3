// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import BannerSlide from "./banner/BannerSlide";
import BannerFooter from "./banner/BannerFooter";
import "./Banner.css";
import BannerSearch from "./banner/BannerSearch";

const Banner = () => {
  return (
    <div className="banner-container">
      <BannerSearch />
      <section className="banner-content mt-[5%]">
        <BannerSlide />
        {/* <BannerFooter /> */}
      </section>
    </div>
  );
};

export default Banner;
