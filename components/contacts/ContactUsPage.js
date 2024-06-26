import React from "react";
import CustomContainer from "../ui/CustomContainer";
import InputText from "../ui/forms/InputText";
import Button from "../ui/Button";
import ContactForm from "./components/ContactForm";
import UserCard from "./components/UserCard";
import ContactQueryForm from "./components/LocationTabs";
import BannerSearch from "../home/banner/BannerSearch";
import { Mail, MapPin, PhoneCall } from "react-feather";

const ContactUsPage = () => {
  return (
    <div>
      <main>
        {/* location tabs section */}
        <section className="relative h-auto py-5 mb-8 lg:py-12 lg:mb-12">
          <div className="absolute top-0 left-0 z-0 w-full h-3/4 bg-gradient-to-t from-tertiary to-secondary"></div>
          <CustomContainer classNames="relative z-10">
            <div className="mb-8 lg:mb-12">
              <BannerSearch />
            </div>
            <div className="mb-10 space-y-3 text-center text-white">
              <div>
                <h1 className="text-lg uppercase lg:text-xl">
                  customer support
                </h1>
                <hr className="w-24 mx-auto mt-2 border-2 border-accent" />
              </div>
              <div>
                <h1 className="mb-3 mrf-sub-heading">
                  We will be happy to help you!
                </h1>
                <p>
                  We’re here to help answer any questions about our products and
                  services.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactQueryForm />
            </div>
          </CustomContainer>
        </section>

        {/* get in touch section */}
        <section className="">
          <CustomContainer classNames="mb-10">
            <div className="mb-12">
              <h2 className="mb-3 mrf-secondary-heading">Our Help Center</h2>
              <p>
                To answer frequently asked questions about our products,
                platform and methodology, visit help.amr.com.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="mb-3 mrf-secondary-heading">Our Location</h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="relative p-8 pb-12 bg-opacity-25 rounded shadow-lg bg-accent">
                  <h1 className="mb-2 font-bold">India HQ</h1>
                  <h2 className="text-xl text-secondary">Pune</h2>
                  <div className="mt-5 space-y-2 text-sm text-success">
                    <p className="flex items-center gap-2">
                      <MapPin className="text-success" size={14} />
                      <span>
                        A5010, Solitaire Business Hub, <br /> Viman Nagar,{" "}
                        <br /> Pune India - 411014
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="text-success" size={14} />
                      <span>+1 551 333 1547 </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="text-success" size={14} />
                      <span>sales@advancemarketanalytics.com</span>
                    </p>
                  </div>
                  <div className="absolute w-24 h-24 overflow-hidden rounded right-4 top-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.266862679434!2d73.9091862770383!3d18.562003822911418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a9d17181d1%3A0xa43b5ca862fdefd7!2sSolitaire%20Business%20Hub%20Viman%20Nagar!5e0!3m2!1sen!2sbd!4v1711908597201!5m2!1sen!2sbd"
                      style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="relative p-8 pb-12 bg-opacity-25 rounded shadow-lg bg-accent">
                  <h1 className="mb-2 font-bold">United States HQ</h1>
                  <h2 className="text-xl text-secondary">New York</h2>
                  <div className="mt-5 space-y-2 text-sm text-success">
                    <p className="flex items-center gap-2">
                      <MapPin className="text-success" size={14} />
                      <span>
                        Unit No. 429, Parsonage Road Edison <br />
                        NJ New Jersey USA - 08837
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="text-success" size={14} />
                      <span>+1 5513331547</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="text-success" size={14} />
                      <span>sales@advancemarketanalytics.com</span>
                    </p>
                  </div>
                  <div className="absolute w-24 h-24 overflow-hidden rounded right-4 top-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.422585807878!2d-74.34572982450985!3d40.554344347253036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b64447791f2b%3A0x432ad0562805c3a!2s429%20Parsonage%20Rd%2C%20Edison%2C%20NJ%2008837%2C%20USA!5e0!3m2!1sen!2sbd!4v1711909188315!5m2!1sen!2sbd"
                      style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </CustomContainer>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;
