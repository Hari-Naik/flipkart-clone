import React from "react";
import Categories from "./Categories";
import CustomerRatings from "./CustomerRatings";

interface PropType {
  sortProductsByCategory: (category: string) => void;
  sortProductsByRating: (rating: number) => void;
  getProducts: () => void;
}

const Filters: React.FC<PropType> = ({
  sortProductsByCategory,
  sortProductsByRating,
  getProducts,
}) => {
  return (
    <aside className="hidden md:block bg-white flex-auto h-max">
      <div className="w-full flex justify-between border-b border-[#c2c2c2] p-3">
        <h2 className="text-lg font-base text-[#212121]">Filters</h2>
        <button
          onClick={getProducts}
          className="text-xs font-base text-[#2874f0] uppercase">
          Clear all
        </button>
      </div>
      <Categories sortProductsByCategory={sortProductsByCategory} />
      <CustomerRatings sortProductsByRating={sortProductsByRating} />
    </aside>
  );
};

export default Filters;
