import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title?: string;
  description?: string;
};

const EmptyCartView: React.FC<Props> = ({ title, description }) => (
  <div className="w-[90%] h-max flex flex-col items-center justify-center bg-white shadow-sm mt-10 mx-auto py-6">
    <img
      className=" h-48"
      src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
      alt=""
    />
    <div className="mt-4 text-center">
      <h1 className="text-lg text-[#212121]">{title}</h1>
      <p className=" text-xs text-[#212121] mt-2 mb-4">{description}</p>
      <Link
        to="/"
        className="py-2 px-10 bg-[#2874f0] text-white text-sm rounded">
        Shop now
      </Link>
    </div>
  </div>
);

export default EmptyCartView;
