function Pagination({ currentPage, totalPages, onPageChange }) {
  // Nothing to paginate if everything fits on one page.
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const baseButton =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";
  const normalButton =
    "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white";
  const activeButton = "border-blue-600 bg-blue-600 text-white";

  return (
    <nav
      aria-label="Product pages"
      className="mt-6 flex items-center justify-between gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        aria-label="Previous page"
        className={`${baseButton} ${normalButton}`}
      >
        <span aria-hidden="true">‹</span>
        <span className="ml-1 hidden sm:inline">Previous</span>
      </button>

      {/* Phones: compact text */}
      <p className="text-sm text-gray-700 sm:hidden">
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        {totalPages}
      </p>

      {/* Tablet and up: page number buttons */}
      <ul className="hidden flex-wrap justify-center gap-1 sm:flex">
        {pageNumbers.map((page) => {
          const isCurrent = page === currentPage;
          return (
            <li key={page}>
              <button
                type="button"
                onClick={() => onPageChange(page)}
                aria-label={`Page ${page}`}
                aria-current={isCurrent ? "page" : undefined}
                className={`${baseButton} ${isCurrent ? activeButton : normalButton}`}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        aria-label="Next page"
        className={`${baseButton} ${normalButton}`}
      >
        <span className="mr-1 hidden sm:inline">Next</span>
        <span aria-hidden="true">›</span>
      </button>
    </nav>
  );
}

export default Pagination;
