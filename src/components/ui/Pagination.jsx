import React from 'react';
import Button from './Button';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <Button
        onClick={handlePrevious}
        variant="outline"
        className="rounded-l-lg"
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span className="p-2 border">{currentPage}</span>
      <Button
        onClick={handleNext}
        variant="outline"
        className="rounded-r-lg"
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;