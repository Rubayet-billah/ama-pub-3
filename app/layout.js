import { Inter, Radio_Canada } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/home/navbar/TopNavbar";
import MainNavbar from "@/components/home/navbar/MainNavbar";
import { parentCategories } from "@/db/fakedata";
import { fetchParentCategories } from "@/utils/fetchFunctions";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
export const radioCanada = Radio_Canada({ subsets: ["latin"] });

export const metadata = {
  title:
    "Get Market Research Analysis with Market Share, Market Size & Forecast Analysis Market | Archive Market Reports",
  description:
    "Archive Market Reports stands as a premier Market Research Company, offering quantified B2B research that uncovers high-growth emerging opportunities impacting over 80% of global corporate revenues. Our team of Analysts diligently tracks high-growth studies, providing detailed statistical analyses and in-depth insights into market trends and dynamics, delivering a comprehensive industry overview. Employing an extensive research methodology, we fuse critical insights with industry factors and market forces to deliver optimal value to our clients. Drawing from reliable primary and secondary data sources, our analysts and consultants extract actionable data tailored to meet our clients' business objectives.",
  keywords:
    "Global Market Research , Latest industry analysis , in-Depth Market Study , customized market research study, Syndicate Market Research , market research analyst , market survey report , Company profile industry report , Market outlook report",
};

export default async function RootLayout({ children }) {
  const parentCategories = await fetchParentCategories();
  return (
    <html data-theme="customTheme" lang="en">
      <body
        className={radioCanada.className}
        style={{
          backgroundColor: "var(--color-bg-base)",
          color: "var(--color-text-base)",
        }}
      >
        <TopNavbar />
        <MainNavbar parentCategories={parentCategories} />
        <main>{children}</main>
      </body>
      <GoogleAnalytics gaId="G-P6KVG34JV0" />
      {/* <body className={radioCanada.className}>{children}</body> */}
    </html>
  );
}
