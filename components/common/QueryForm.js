"use client";
import InputText from "@/components/ui/forms/InputText";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { countryList } from "@/db/countryList";
import InputRadio from "../ui/forms/InputRadio";
import Image from "next/image";
import visaLogo from "@/assets/checkout/visaLogo.jpg";
import bankLogo from "@/assets/checkout/bankLogo.png";
import Amex from "@/assets/checkout/amex.jpg";
import Hdfc from "@/assets/checkout/hdfc.jpg";
import Razorpay from "@/assets/checkout/razorpay.jpg";
import Wire_transfer from "@/assets/checkout/wire_transfer.jpg";
import Captcha from "./Capcha";
import { RefreshCcw } from "react-feather";
import Link from "next/link";
import Sponsors from "../home/Sponsors";
import { fetchSponsorLogos } from "@/utils/fetchFunctions";
import SponsorSlider from "../home/sponsor/SponsorSlider";
const QueryForm = ({
  btnText = "Submit",
  type = "MRF",
  slug = "",
  status = "NOPN",
  direct = false,
  price = {},
}) => {
  let reportPrice = 0;
  const searchParams = useSearchParams();
  const priceType = searchParams.get("type");
  if (priceType) {
    switch (priceType) {
      case "single":
        reportPrice = price.singlePrice;
        break;
      case "multi":
        reportPrice = price.multiPrice;
        break;
      case "corporate":
        reportPrice = price.enterprisePrice;
        break;

      default:
        break;
    }
  }

  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [checked, setChecked] = useState(true);
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
  const [sponsorsHome, setSponsorsHome] = useState([]);

  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    country: "",
    phone: "",
    company_name: "",
    designation: "",
    comment: "",
    industry: "MRF",
    service_type: type,
    status: status,
    direct: direct,
    // paymentMethod: "visa", // Default payment method
    report_page_link: `https://ama-admin.com/report/${slug}`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha !== userInput) {
      setError("Wrong captcha");
      return false;
    }
    if (!checked) {
      setError("Please accept the terms and conditions");
      return false;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // Check if any required field is empty
    const requiredFields = [
      "full_name",
      "email",
      "country",
      "phone",
      "company_name",
      "designation",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      alert("Please fill in all required fields.");
      return; // Stop submission
    } else {
      try {
        setSubmitted(true);
        const res = await fetch(
          `https://www.advancemarketreport.com/api/v1/lead`,
          {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(
              !direct
                ? formData
                : {
                    ...formData,
                    order: {
                      paymentMode: paymentMethod,
                      amount: reportPrice,
                    },
                  }
            ),
          }
        );
        const resData = await res.json();
        router.push("/thank-you");
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const handlePaymentMethodChange = (e) => {
    console.log(e.target.value);
    setPaymentMethod(e.target.value);
  };

  const generateCaptcha = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 6 digit random number
    setCaptcha(randomNum.toString());
    drawCaptcha(randomNum.toString());
  };

  const drawCaptcha = (captcha) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawing
      ctx.fillStyle = "#3498db"; // Set color, example using a hex code for a shade of blue
      ctx.font = "24px Arial"; // You can also customize the font size and family here
      ctx.fillText(captcha, 10, 30); // Draw the captcha text
    }
  };

  const getSponsorsHome = async () => {
    setSponsorsHome(await fetchSponsorLogos());
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    generateCaptcha();
    getSponsorsHome();
    return;
  }, []);
  return (
    <>
      {direct && (
        <>
          <hr className="mt-5" />
          <div className="text-2xl font-semibold my-5 ">
            Total Amount: ${reportPrice}
          </div>
        </>
      )}
      <h3 className="mt-4">Our Clients</h3>
      <div className="py-0">
        <SponsorSlider sponsors={sponsorsHome} />
      </div>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <InputText
            name="full_name"
            placeholder="Enter your name *"
            value={formData.name}
            onChange={handleInputChange}
            required={true}
          />
          <InputText
            name="email"
            placeholder="Enter your email *"
            value={formData.email}
            onChange={handleInputChange}
            required={true}
          />
          <select
            name="country"
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-200 focus:outline-none text-sm"
          >
            <option value={""}>Select Country</option>
            {countryList.map((country) => (
              <option key={country.value} value={country.caption}>
                {" "}
                {country.caption}{" "}
              </option>
            ))}
          </select>
          <InputText
            name="phone"
            placeholder="Enter your contact *"
            value={formData.contact}
            onChange={handleInputChange}
            required={true}
          />
          <InputText
            name="company_name"
            placeholder="Enter your company *"
            value={formData.company}
            onChange={handleInputChange}
            required={true}
          />
          <InputText
            name="designation"
            placeholder="Enter your designation *"
            value={formData.designation}
            onChange={handleInputChange}
            required={true}
          />
          <InputText
            name="comment"
            placeholder="Enter your message *"
            value={formData.message}
            onChange={handleInputChange}
            classNames={"md:col-span-2"}
          />
        </div>
        {/* Payment method radio inputs */}
        {direct && (
          <div className="my-4">
            <label className="block mb-2 font-semibold">Payment Method:</label>
            <div className="">
              <InputRadio
                name="paymentMethod"
                value="razorpay"
                checked={paymentMethod === "razorpay"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Razorpay}
                    alt="bank image"
                  />
                }
              />
              <InputRadio
                name="paymentMethod"
                value="hdfc"
                checked={paymentMethod === "hdfc"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Hdfc}
                    alt="bank image"
                  />
                }
              />
              <InputRadio
                name="paymentMethod"
                value="amex"
                checked={paymentMethod === "amex"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Amex}
                    alt="bank image"
                  />
                }
              />
              <InputRadio
                name="paymentMethod"
                value="Wire_transfer"
                checked={paymentMethod === "Wire_transfer"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Wire_transfer}
                    alt="bank image"
                  />
                }
              />
            </div>
          </div>
        )}
        <div className="flex mt-5 items-center">
          <input
            className="input h-9 input-bordered rounded-sm w-40"
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Enter CAPTCHA"
          />
          <canvas color="red" ref={canvasRef} width="80" height="40"></canvas>
          <button
            className="text-primary"
            type="button"
            onClick={generateCaptcha}
          >
            <RefreshCcw />
          </button>
        </div>
        {direct && (
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-1 h-5 w-5"
            />
            <span>
              I read and Accept the{" "}
              <Link
                className="text-primary"
                target="_blank"
                href={`/terms-and-conditions`}
              >
                Terms and Conditions
              </Link>
            </span>
          </div>
        )}
        {error && <div className="text-error font-semibold"> {error} </div>}
        <button
          //   disabled={submitted}
          type="submit"
          className="px-4 py-2 mt-5 text-sm text-white rounded bg-primary"
        >
          {submitted ? "Submitting.." : btnText}
        </button>
      </form>
      <p className="text-sm mt-5">
        We do not share your information with anyone. However, we may send you
        emails based on your report interest from time to time. You may contact
        us at any time to opt-out.{" "}
      </p>
    </>
  );
};

export default QueryForm;