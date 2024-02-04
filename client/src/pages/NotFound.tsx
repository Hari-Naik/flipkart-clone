import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <img
        src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
        className="w-[450px] max-w-full mt-10"
        alt="not-found"
      />
      <h3 className=" text-lg pt-2 mb-[35px] text-center">
        Unfortunately the page you are looking for has been moved or deleted
      </h3>
      <Link
        to="/"
        className="py-1 px-5 bg-[#2874f0] rounded text-base text-white uppercase shadow-md">
        Go to homepage
      </Link>
    </main>
  );
};

export default NotFound;
