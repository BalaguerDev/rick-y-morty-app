import React, { useEffect, useState } from 'react';
import '../../styles/pagination.css';
import classNames from 'classnames';
import { useMemo } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos de flechas
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  // Calcula el rango de páginas a mostrar en función de la página actual y el número máximo de páginas a mostrar.
  const generatePageNumbers = useMemo(() => {
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
  }, [page, totalPages, maxPagesToShow]);

  return (
    <div className="pagination-container">
      <button className="pagination-arrow" onClick={handlePrevPage} disabled={page === 1}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {generatePageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={classNames('pagination-button', { active: pageNumber === page })}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pagination-arrow" onClick={handleNextPage} disabled={page === totalPages}>
        <FontAwesomeIcon icon={faChevronRight} /> 
      </button>
    </div>
  );
};

export default Pagination;