import React from 'react';
import './Pagination.css'; // Importing the CSS file for styling

const Pagination = ({ currentPage, totalPages, onPageChange, onPrevious, onNext }) => {
  // Function to render pagination buttons
  const renderPagination = () => {
    const paginationButtons = [];

    // Render previous button if not on the first page
    if (currentPage > 1) {
      paginationButtons.push(
        <button key="previous" onClick={onPrevious}>
          {"<"}
        </button>
      );
    }

    // Render first page button
    paginationButtons.push(
      <button key={1} onClick={() => onPageChange(1)} className={1 === currentPage ? 'active' : ''}>
        {1}
      </button>
    );

    // Render ellipsis if currentPage > 3
    if (currentPage > 3) {
      paginationButtons.push(<span key="ellipsis-prev">...</span>);
    }

    // Calculate startPage and endPage based on currentPage
    let startPage, endPage;
    if (currentPage <= 3) {
      startPage = 2;
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 2);
      endPage = totalPages - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    // Render buttons for the calculated range
    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <button key={i} onClick={() => onPageChange(i)} className={i === currentPage ? 'active' : ''}>
          {i}
        </button>
      );
    }

    // Render ellipsis if currentPage < totalPages - 2
    if (currentPage < totalPages - 2) {
      paginationButtons.push(<span key="ellipsis-next">...</span>);
    }

    // Render last page button if totalPages > 1
    if (totalPages > 1) {
      paginationButtons.push(
        <button key={totalPages} onClick={() => onPageChange(totalPages)} className={totalPages === currentPage ? 'active' : ''}>
          {totalPages}
        </button>
      );
    }

    // Render next button if not on the last page
    paginationButtons.push(
      <button key="next" onClick={onNext} disabled={currentPage === totalPages}>
        {">"}
      </button>
    );

    return paginationButtons;
  };

  // Return the pagination component
  return <div className="pagination">{renderPagination()}</div>;
};

export default Pagination; // Exporting the Pagination component for use in other parts of the application
