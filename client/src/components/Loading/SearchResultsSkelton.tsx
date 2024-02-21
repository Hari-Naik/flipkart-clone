import React from "react";

const CardSkelton = () => {
  return (
    <div className="w-full flex gap-2 border-b border-[#f0f0f0] bg-gray-100 py-4">
      <div className="w-[20%] flex justify-center bg-gray-100">
        <div className="w-[90%] max-w-[170px] h-[170px] mr-1 bg-gray-200 animate-pulse"></div>
        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
      <div className="flex-1 flex flex-col gap-2 bg-gray-100">
        <div className="w-[30%] h-5 rounded bg-gray-200 animate-pulse"></div>
        <div className="w-[20%] h-5 rounded bg-gray-200 animate-pulse"></div>
        <div className="w-[15%] h-5 rounded bg-gray-200 animate-pulse"></div>
        <div className="mt-10 w-[40%] h-5 rounded bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};

const SearchResultsSkelton = () => {
  return (
    <div className="w-full h-max m-4 bg-white">
      <div className="w-[30%] h-5 bg-gray-200 rounded animate-pulse mb-2"></div>
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
    </div>
  );
};

export default SearchResultsSkelton;
