import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface PropType {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  color?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<PropType> = ({
  text,
  icon: Icon,
  color,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center  flex-auto ${
        text === "Add to cart"
          ? "bg-[#ff9f00] text-white"
          : "bg-transparent border border-[#d4d5d9] text-[#000]"
      } rounded-sm text-base font-semibold uppercase py-3 cursor-pointer`}>
      <Icon className="!h-5" style={{ color }} />
      {text}
    </button>
  );
};

export default CustomButton;
