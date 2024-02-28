import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center space-x-2 p-2">
      <div className="h-full w-[20%] bg-gray-200 animate-pulse shadow-md"></div>
      <div className="h-full flex-auto bg-gray-200 animate-pulse shadow-md"></div>
    </div>
  );
};

export default Loading;
