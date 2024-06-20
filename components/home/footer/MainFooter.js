import React from "react";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import {
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "react-feather";
import Link from "next/link";
import CustomContainer from "@/components/ui/CustomContainer";
import SubscribeForm from "./SubscribeForm";
import MRFImage from "@/components/ui/Image";
import paymentImg from "@/assets/footer/payment.png";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  const copyrightMsg = "AMA Research. All rights reserved";
  return (
    <div className="bg-neutral">
      <CustomContainer>
        <section className="grid grid-cols-1 gap-8 py-8 text-white md:grid-cols-2 lg:grid-cols-4 lg:py-12">
          <div className="w-full py-4 space-y-3">
            <h2 className="text-2xl font-bold">Business Address</h2>
            <h3 className="text-2xl font-bold">Head Office</h3>
            <p className="flex gap-2">
              <MapPin className="w-[46px] text-accent mt-1" size={18} />
              <span>
                Office no. A 5010, fifth floor, Solitaire Business Hub, Near
                Phoenix mall, Pune, Maharashtra 411014
              </span>
            </p>
          </div>{" "}
          <div className="w-full py-4 space-y-3">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex flex-col">
              <p>Craig Francis</p>
              <p className="text-sm text-accent">Business Development Head</p>
            </div>
            <p className="flex items-center gap-2">
              <PhoneCall className="text-accent" size={18} />{" "}
              <span>+44 1223 92 666</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-accent" size={18} />
              <span className="">sales@advancemarketanalytics.com</span>
            </p>
          </div>
          <div className="w-full py-4 space-y-3">
            <h2 className="pb-2 text-2xl font-bold">Connect With Us</h2>
            {/* <div className="grid grid-cols-2">
              <div className="flex flex-col gap-2">
                <Link className="hover:text-info" href="/about">
                  About
                </Link>
                <Link className="hover:text-info" href="/contact">
                  Contacts
                </Link>
                <Link className="hover:text-info" href="/#testimonial">
                  Testimonials
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link className="hover:text-info" href="/service">
                  Services
                </Link>
                <Link className="hover:text-info" href="/career">
                  Career
                </Link>
              </div>
            </div> */}
            <div className="flex gap-2 mt-3 lg:gap-4 md:mt-0">
              <Link
                href="https://www.facebook.com/advancemarketanalytics"
                target="_blank"
                aria-label="Facebook link"
                className="p-2 duration-100 bg-white rounded-full hover:text-white text-secondary hover:bg-secondary"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/amareport"
                target="_blank"
                aria-label="Twitter link"
                className="p-2 duration-100 bg-white rounded-full hover:text-white text-secondary hover:bg-secondary"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/advance-market-analytics"
                target="_blank"
                aria-label="LinkedIn link"
                className="p-2 duration-100 bg-white rounded-full hover:text-white text-secondary hover:bg-secondary"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
          <div className="w-full py-4 space-y-3">
            <h2 className="pb-2 text-2xl font-bold">Secure Payment Partners</h2>
            <div className="max-w-56">
              {/* <SubscribeForm /> */}
              <MRFImage src={paymentImg} alt="payment image" />
            </div>
            {/* <p className="pt-8 text-sm">get latest updates and offers.</p> */}
          </div>
        </section>
        <hr />
        <footer className="py-6 space-y-3 text-sm text-white md:flex md:justify-between md:space-y-0">
          <p>© {`${currentYear} ${copyrightMsg}`}</p>
          <div className="items-center gap-2 md:flex lg:gap-4">
            <div className="flex gap-2 lg:gap-8">
              <Link className="hover:text-info" href="/privacy-policy">
                Privacy Policy
              </Link>
              <hr className="w-0 h-auto border" />
              <Link className="hover:text-info" href="/terms-and-condition">
                Terms and Conditions
              </Link>
              <hr className="w-0 h-auto border" />
              <Link className="hover:text-info" href="/faq">
                FAQ
              </Link>
            </div>
            {/* <div className="flex items-center justify-center gap-2 mt-3 lg:gap-4 md:mt-0">
              <Link
                href="https://www.facebook.com/advancemarketanalytics"
                target="_blank"
                aria-label="Facebook link"
                className="hover:text-info"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/amareport"
                target="_blank"
                aria-label="Twitter link"
                className="hover:text-info"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/advance-market-analytics"
                target="_blank"
                aria-label="LinkedIn link"
                className="hover:text-info"
              >
                <Linkedin size={18} />
              </Link>
            </div> */}
          </div>
        </footer>
      </CustomContainer>
    </div>
  );
};

export default MainFooter;
