import React from "react";
import ReportCard from "./components/ReportCard";
import Pagination from "../ui/pagination/Pagination";
import ProductListSearch from "./components/ProductListSearch";
import ProductListContentDescription from "./components/ProductListContentDescription";

const ProductsList = ({
  reports: reportsData,
  isAllReports = false,
  currentCategory,
}) => {
  const currentPage = reportsData.page;
  const totalReports = reportsData.totalCount;
  return (
    <div className="mx-auto mt-5 space-y-5">
      {/* <ProductListContentDescription
        isAllReports={isAllReports}
        currentCategory={currentCategory}
      />

      <ProductListSearch
        isAllReports={isAllReports}
        currentCategory={currentCategory}
      /> */}
      <div>
        {reportsData?.data?.map((report, idx) => (
          <ReportCard report={report} key={idx} />
        ))}
        {!reportsData?.data?.totalCount && isAllReports ? (
          <section>
            <Pagination
              category={reportsData?.category}
              currentPage={+currentPage}
              totalPages={Math.ceil(totalReports / 20)}
            />
          </section>
        ) : (
          <div className="my-5 font-semibold text-center">
            No More Records | We are working on it
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
