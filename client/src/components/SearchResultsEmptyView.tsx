import React from "react";

const SearchResultsEmptyView = () => {
  return (
    <div className="w-full h-[calc(100vh-58px)] flex flex-col items-center justify-center">
      <img
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"
        alt="error-no-search-results"
        className="mb-4"
      />
      <h2 className=" text-2xl text-[#212121] font-semibold">
        Sorry, no results found!
      </h2>
      <p className=" text-lg text-[#878787] text-center mt-2">
        Please check the spelling or try searching for something else.
      </p>
    </div>
  );
};

export default SearchResultsEmptyView;
