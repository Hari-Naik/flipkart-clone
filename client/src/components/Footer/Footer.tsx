import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between px-4 py-8 bg-[#172337] text-xs text-[#fff] font-semibold mt-5">
      <h2 className="text-[17px]">Copyright © 2024. All rights are reserved</h2>
      <Icons />
    </footer>
  );
};

export default Footer;
