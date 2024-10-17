import PropTypes from "prop-types";
import Button from "../ui/Button";

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

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="mt-4 flex justify-center space-x-2">
      <Button
        onClick={handlePrevious}
        variant="outline"
        className="rounded-l-lg"
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      {getPageNumbers().map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          variant={currentPage === page ? "solid" : "outline"}
          className="px-4"
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={handleNext}
        variant="outline"
        className="rounded-r-lg"
        disabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
