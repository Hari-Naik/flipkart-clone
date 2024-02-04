import { Discount } from "@mui/icons-material";
import React from "react";

interface PropsType {
  title: string;
}

const Offers: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="flex items-center gap-2 text-[14px] text-[#212121]">
      <Discount className="!h-4 mt-1 text-[#26a541]" />
      <p>
        <span className="font-semibold mr-1">Bank Offer</span>
        {title}
        <span className="text-[#2874f0] ml-1 font-medium">T&C</span>
      </p>
    </div>
  );
};

export default Offers;
