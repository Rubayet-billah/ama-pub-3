/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductsList from "@/components/products/ProductsList";
import CustomContainer from "@/components/ui/CustomContainer";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import {
  fetchCategories,
  fetchCategory,
  fetchReports,
} from "@/utils/fetchFunctions";
import { useParams } from "next/navigation";
import React from "react";
import { Home } from "react-feather";

export const generateMetadata = async ({ params }) => {
  const category = params.categorySlug.replaceAll("-", " ");
  return {
    title: `Market in-Depth Research Report for ${category} : Archive Market Reports`,
  };
};

const ReportListing = async ({ params, searchParams }) => {
  const categorySlug = decodeURIComponent(params.categorySlug);
  const reports = await fetchReports({ categorySlug, searchParams });
  const currentCategory = await fetchCategory(categorySlug);
  const sidebarCategories = await fetchCategories();
  return (
    <>
      <section className="py-2 text-white lg:py-4 bg-primary">
        <CustomContainer>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LucidIcon
                name={
                  currentCategory?.parent?.icon ||
                  currentCategory?.icon ||
                  "FileText"
                }
                classNames="mx-auto text-white"
                size={30}
              />
              <span className="text-lg font-bold md:text-xl ">
                {currentCategory?.label}
              </span>
            </div>
            <div className="hidden md:block">
              <i className="text-lg font-bold md:text-xl ">
                "Designing Growth Strategies Is In Our DNA"
              </i>
            </div>
          </div>
        </CustomContainer>
      </section>
      <CustomContainer>
        <section className="grid gap-5 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <ProductsList
              reports={reports}
              isAllReports={false}
              currentCategory={currentCategory}
            />
          </div>
          <div className="sticky top-0 h-screen mb-5 overflow-y-auto lg:block">
            <ProductSidebar categories={sidebarCategories} />
          </div>
        </section>
      </CustomContainer>
      <Footer />
    </>
  );
};

export default ReportListing;
