import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  img: string;
  title: string;
  price: number;
};

const SliderItem: React.FC<Props> = ({ id, img, title, price }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="h-[270px] flex flex-col items-center justify-center gap-4 border border-[#dbdbdb] mr-4 p-3">
      <img
        className="w-full h-[170px] object-cover hover:scale-105 hover:cursor-pointer transition"
        src={img}
        alt={title}
      />
      <div>
        <p className=" text-sm text-[#222222] text-center">{title}</p>
        <p className="text-sm text-[#222222] text-center font-semibold">
          From ${price}
        </p>
      </div>
    </Link>
  );
};

export default SliderItem;
