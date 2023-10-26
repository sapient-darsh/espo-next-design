import React from "react";
import ChevronLeftLinear from "../assets/svg/chevronLeftLinear";
import ChevronRightLinear from "../assets/svg/chevronRightLinear";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];
  const paginationRange = 3; // Number of page numbers to display at a time

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  let startPage, endPage;

  if (totalPages <= paginationRange) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.ceil(paginationRange / 2)) {
      startPage = 1;
      endPage = paginationRange;
    } else if (currentPage + Math.floor(paginationRange / 2) >= totalPages) {
      startPage = totalPages - paginationRange + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(paginationRange / 2);
      endPage = currentPage + Math.ceil(paginationRange / 2) - 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto font-slussen">
      <div className="flex justify-evenly items-center py-10 gap-5">
        <div>
          <div
            className={`rounded-lg border border-dark p-1 sm:p-2 ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            } `}
            onClick={previousPage}
          >
            <ChevronLeftLinear />
          </div>
        </div>
        <div className="flex justify-center items-center py-10 gap-2 sm:gap-5">
          {startPage > 1 && (
            <div
              className="hidden sm:block text-dark text-center cursor-pointer rounded-lg border border-dark px-3 py-1 sm:px-4 sm:py-2 "
              onClick={() => paginate(1)}
            >
              1
            </div>
          )}
          {startPage > 1 && (
            <div className="hidden sm:block text-dark text-center rounded-lg border border-dark px-3 py-1 sm:px-4 sm:py-2">
              ...
            </div>
          )}
          {pageNumbers.map((number) => (
            <div
              key={number}
              onClick={() => paginate(number)}
              className={`${
                number === currentPage
                  ? "text-white bg-dark"
                  : "text-dark hover:text-white bg-white hover:bg-dark"
              } rounded-lg border border-dark text-base font-semibold px-3 py-1 sm:px-4 sm:py-2  cursor-pointer `}
            >
              {number}
            </div>
          ))}
          {endPage < totalPages && (
            <div className="hidden sm:block text-dark text-center rounded-lg border border-dark px-3 py-1 sm:px-4 sm:py-2">
              ...
            </div>
          )}
          {endPage < totalPages && (
            <div
              className="hidden sm:block text-dark text-center cursor-pointer rounded-lg border border-dark px-3 py-1 sm:px-4 sm:py-2"
              onClick={() => paginate(totalPages)} // Go to the last page
            >
              {totalPages}
            </div>
          )}
        </div>
        <div>
          <div
            className={`rounded-lg border border-dark p-1 sm:p-2 ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            } `}
            onClick={nextPage}
          >
            <ChevronRightLinear />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginate;
