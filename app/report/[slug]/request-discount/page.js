import CheckoutForm from "@/components/checkout/components/CheckoutForm";
import Footer from "@/components/home/Footer";
import CustomContainer from "@/components/ui/CustomContainer";
import { fetchReportBasicData } from "@/utils/fetchFunctions";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    alternates: {
      canonical: `${process.env.BASE_URL}/reports/${slug}`,
    },
    robots: {
      index: false,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export default async function page({ params }) {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  const reportData = await fetchReportBasicData(reportId);

  return (
    <>
      <CustomContainer>
        <CheckoutForm
          reportData={reportData}
          title={"Request Discount"}
          type="RDR"
        />
      </CustomContainer>
      <Footer />
    </>
  );
}
