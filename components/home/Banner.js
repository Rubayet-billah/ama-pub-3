// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import BannerSlide from "./banner/BannerSlide";
import BannerFooter from "./banner/BannerFooter";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <section className="banner-content">
        {/* <BannerSlide />
        <BannerFooter /> */}
      </section>
    </div>
  );
};

export default Banner;
