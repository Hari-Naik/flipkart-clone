import React from "react";
import { sortBy } from "../../pages/ProductsPage";
import { productType } from "../../Types";

type Props = {
  sortId: string;
  sortProducts: (id: string, data?: productType[]) => void;
};

const SortBy: React.FC<Props> = ({ sortId, sortProducts }) => {
  return (
    <div className="flex items-center space-x-4 text-sm text-[#212121]">
      <p className="font-semibold cursor-pointer pb-1">Sort By</p>
      {sortBy.map(item => (
        <p
          key={item.id}
          onClick={() => sortProducts(item.id)}
          className={`cursor-pointer pb-1 transition ${
            sortId === item.id
              ? "text-[#2874f0] border-[#2874f0] border-b-2 font-semibold"
              : ""
          }`}>
          Price-- {item.text}
        </p>
      ))}
    </div>
  );
};

export default SortBy;
