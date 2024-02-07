import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="w-full h-[90%] flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-xl text-[#0d993c]">
        Order has been placed successfully!
      </h1>
      <div className="flex items-center  gap-4 mt-2">
        <Link
          to="/account/order"
          className="bg-[#2874f0] text-white p-2 rounded">
          View Orders
        </Link>
        <Link to={"/"} className="bg-[#2874f0] text-white p-2 rounded">
          Shop More
        </Link>
      </div>
    </div>
  );
};

export default Success;
