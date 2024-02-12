import React from "react";
import { useNavigate } from "react-router";

interface PropTypes {
  text: string;
  image: string;
  onClick?: () => void;
}

const NavItem: React.FC<PropTypes> = ({ text, image }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };
  return (
    <li
      onClick={text === "Shop" ? handleNavigate : () => {}}
      className="min-w-max flex flex-col items-center justify-center cursor-pointer group transition">
      <img className=" h-16" src={image} alt={text} />
      <p className="text-sm text-[#333333] font-semibold group-hover:text-[#2874f0]">
        {text}
      </p>
    </li>
  );
};

export default NavItem;
