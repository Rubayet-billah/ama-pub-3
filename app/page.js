import Banner from "@/components/home/Banner";
import EntrepreneurBanner from "@/components/home/EntrepreneurBanner";
import Footer from "@/components/home/Footer";
import Industries from "@/components/home/Industries";
import Newses from "@/components/home/Newses";
import Service from "@/components/home/Service";
import Sponsors from "@/components/home/Sponsors";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import {
  fetchIndustriesHome,
  fetchRecentReports,
  fetchSponsorLogos,
  fetchTestimonials,
} from "@/utils/fetchFunctions";

export default async function Home() {
  const [industryCardDataHome, testimonialsHome, sponsorsHome, recentReports] =
    await Promise.all([
      fetchIndustriesHome(),
      fetchTestimonials(),
      fetchSponsorLogos(),
      fetchRecentReports(),
    ]);

  return (
    <div>
      <Banner />
      <Service />
      <Industries industries={industryCardDataHome} />
      <Newses recentReports={recentReports} />
      <StatsSection />
      <Testimonials testimonials={testimonialsHome} />
      <Sponsors sponsors={sponsorsHome} />
      <EntrepreneurBanner />
      <Footer />
    </div>
  );
}
