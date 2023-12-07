import React, { useState } from "react";

const Pagination = ({ onChangePage, currentPage, count }) => {
  let allPages = [];
  for (let i = 1; i <= Math.ceil(count / 10); i++) {
    allPages.push(i);
  }
  console.log(count);
  console.log(allPages);

  return (
    <div className="pagination">
      {allPages.map((page) => (
        <button
          key={page}
          onClick={() => onChangePage(page)}
          className={`pagination-button ${
            page === currentPage ? "active" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
