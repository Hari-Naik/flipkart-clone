import React from "react";

const Loading = () => {
  return (
    <div className="h-full flex items-center space-x-2 p-2">
      <div className="h-full w-[20%] bg-white animate-pulse shadow-md"></div>
      <div className="h-full flex-auto bg-white animate-pulse shadow-md"></div>
    </div>
  );
};

export default Loading;
