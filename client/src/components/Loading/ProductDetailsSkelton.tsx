import React from "react";

const ProductDetailsSkelton = () => {
  return (
    <div className="w-[90%] h-[calc(100vh-93px)] sm:h-[calc(100vh-52px)] mx-auto flex items-center gap-4 my-4 bg-gray-100 shadow-md p-4">
      <div className="w-[30%] h-full bg-gray-200 animate-pulse"></div>
      <div className="flex-1 h-full bg-gray-200 animate-pulse"></div>
    </div>
  );
};

export default ProductDetailsSkelton;
