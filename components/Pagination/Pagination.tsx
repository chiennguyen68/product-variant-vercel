const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
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
    <div className="flex justify-between items-center mt-8 w-1/2 float-right p-[20px]">
      <span className="text-normal">
        Page {currentPage} of {totalPages}
      </span>
      <div className="w-[50%] flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          } bg-blue-500 text-white px-4 py-2 rounded focus:outline-none`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          } bg-blue-500 text-white px-4 py-2 rounded focus:outline-none`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
