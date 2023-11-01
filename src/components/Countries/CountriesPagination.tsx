// import { type Country } from "~/interfaces/country";
// import { useAppDispatch } from "~/redux/hooks";
// import { changeStartPage } from "~/redux/reducers/countryReducer";

import { useEffect } from "react";

interface Props {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

// utils
const getPaginationNumbers = (
  currentPage: number,
  totalItems: number,
  itemsPerPage: number,
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const delta = 2;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (const page of range) {
    if (l) {
      if (page - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (page - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(page);
    l = page;
  }

  return rangeWithDots;
};

const CountriesPagination = ({
  currentPage,
  itemsPerPage,
  onPageChange,
  totalItems,
}: Props) => {
  const pageNumbers = getPaginationNumbers(
    currentPage,
    totalItems,
    itemsPerPage,
  );

  useEffect(() => {
    // Este efecto se activará cuando totalItems cambie
    if (currentPage > pageNumbers.length) {
      // Si la página actual es mayor que la cantidad de páginas, navega a la primera página.
      onPageChange(1);
    }
  }, [currentPage, totalItems, pageNumbers.length, onPageChange]);

  return (
    <div className="mb-4 mt-auto flex justify-center gap-3">
      {pageNumbers.map((page, i) => (
        <button
          key={i}
          onClick={() => {
            if (typeof page === "number") {
              onPageChange(page);
            }
          }}
          className={`rounded-md bg-[rgb(240,240,240)] px-2 py-1 transition hover:bg-lime-500 dark:bg-[rgb(30,30,30)] dark:hover:bg-lime-500 ${
            page === currentPage ? "bg-lime-500 dark:bg-lime-500" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default CountriesPagination;
