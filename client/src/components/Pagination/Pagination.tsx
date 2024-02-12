import React from "react";
import { Link } from "react-router-dom";

type Props = {
  page: number;
};

const Pagination: React.FC<Props> = ({ page }) => {
  return (
    <div className="w-full h-full pt-4 flex items-center justify-center">
      {page > 1 && (
        <Link
          to={`?page=${page - 1}`}
          //   onClick={() => selectPage(page - 1)}
          className="uppercase text-[#2874f0] font-semibold text-sm">
          Previous
        </Link>
      )}
      {[...Array(10)].map((_, i) => {
        return (
          <Link
            to={`?page=${i + 1}`}
            // onClick={() => selectPage(i + 1)}
            className={`ml-4 md:ml-6 cursor-pointer  text-sm font-semibold flex items-center justify-center ${
              page === i + 1 &&
              "h-6 w-6 bg-[rgb(40,116,240)] rounded-full text-white"
            }`}>
            {i + 1}
          </Link>
        );
      })}
      {page <= 9 && (
        <Link
          to={`?page=${page + 1}`}
          //   onClick={() => selectPage(page + 1)}
          className="ml-4 md:ml-6 uppercase text-[#2874f0] font-semibold text-sm">
          next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
