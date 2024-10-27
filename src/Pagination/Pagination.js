import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  const pageChange = (data) => {
    updatePageNumber(data.selected + 1); // ReactPaginate uses zero-based indexing
  };

  return (
    <>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="..."
        pageCount={info?.pages || 0} // Handle if info is not available yet
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={pageChange}
        containerClassName="pagination justify-content-center my-4 gap-4"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        forcePage={pageNumber - 1} // Adjust to zero-based index
      />

      <style jsx>
        {`
          a {
            color: white;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (min-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Pagination;
