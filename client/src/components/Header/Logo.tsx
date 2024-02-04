import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <Link to="/">
      <img className="h-5" src={logoURL} alt="logo" />
      <div className="flex items-center flex-nowrap hover:cursor-pointer hover:underline decoration-white">
        <p className="text-[11px] italic text-white -mt-1">
          Explore <span className="text-[#fff000] font-semibold">Plus</span>
        </p>
        <img className="h-2 -mt-1" src={subURL} alt="plus" />
      </div>
    </Link>
  );
};

export default Logo;
