import React, { useEffect, useState } from 'react';
import '../../styles/pagination.css';

const Pagination = ({ page, totalPages, handlePrevPage, handleNextPage, setPage }) => {
  const [maxPagesToShow, setMaxPagesToShow] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMaxPagesToShow(5);
      } else {
        setMaxPagesToShow(10);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const generatePageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <button className="pagination-arrow" onClick={handlePrevPage} disabled={page === 1}>
        &#8249; {/* Flecha hacia la izquierda */}
      </button>
      {generatePageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={`pagination-button ${pageNumber === page ? 'active' : ''}`}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pagination-arrow" onClick={handleNextPage} disabled={page === totalPages}>
        &#8250; {/* Flecha hacia la derecha */}
      </button>
    </div>
  );
};

export default Pagination;

