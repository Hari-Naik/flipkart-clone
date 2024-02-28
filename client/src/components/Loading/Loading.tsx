import React from "react";

const Loading = () => {
  return (
    <>
      <div className="w-[98%] h-[270px] my-2 mx-auto bg-gray-200 shadow-sm animate-pulse"></div>
      <div className="flex items-center space-x-3 w-[98%] mx-auto">
        <div className="w-[80%] h-[300px] bg-gray-200 animate-pulse "></div>
        <div className="w-[20%] h-[300px] bg-gray-200 animate-pulse"></div>
      </div>
    </>
  );
};

export default Loading;
