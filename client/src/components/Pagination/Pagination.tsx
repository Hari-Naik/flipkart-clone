import React from "react";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<Props> = ({ page, setPage }) => {
  const selectPage = (selectedPage: number) => {
    if (selectedPage >= 1 && selectedPage !== page && selectedPage <= 10) {
      setPage(selectedPage);
    }
  };

  return (
    <div className="w-full h-full pt-4 flex items-center justify-center">
      {page > 1 && (
        <button
          onClick={() => selectPage(page - 1)}
          className="uppercase text-[#2874f0] font-semibold text-sm">
          Previous
        </button>
      )}
      {[...Array(10)].map((_, i) => {
        return (
          <div
            onClick={() => selectPage(i + 1)}
            className={`ml-4 md:ml-6 cursor-pointer  text-sm font-semibold flex items-center justify-center ${
              page === i + 1 && "h-6 w-6 bg-[#2874f0] rounded-full text-white"
            }`}>
            {i + 1}
          </div>
        );
      })}
      <button
        onClick={() => selectPage(page + 1)}
        className="ml-4 md:ml-6 uppercase text-[#2874f0] font-semibold text-sm">
        next
      </button>
    </div>
  );
};

export default Pagination;
