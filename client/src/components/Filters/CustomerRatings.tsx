import { Star } from "@mui/icons-material";
import React, { useState } from "react";

const ratings = [
  {
    id: 4,
    rating: 4,
  },
  {
    id: 3,
    rating: 3,
  },
];

interface PropType {
  sortProductsByRating: (rating: number) => void;
}

const CustomerRatings: React.FC<PropType> = ({ sortProductsByRating }) => {
  const [activeRating, setActiveRating] = useState<number>(0);

  const onClickRating = (rating: number) => {
    sortProductsByRating(rating);
    setActiveRating(rating);
  };

  return (
    <div className="w-full p-3">
      <h2 className="text-[11px] text-[#212121] font-sans font-medium uppercase">
        customer ratings
      </h2>
      {ratings.map(item => (
        <button
          onClick={() => onClickRating(item.rating)}
          key={item.id}
          className={`flex items-center text-sm my-1 outline-none ${
            activeRating === item.rating ? "font-semibold" : ""
          }`}>
          <span className="flex items-center">
            {item.rating}
            <Star className="!h-3 -m-1" />
          </span>
          & above
        </button>
      ))}
    </div>
  );
};

export default CustomerRatings;
