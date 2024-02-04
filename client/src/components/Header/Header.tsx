import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { KeyboardArrowDown, ShoppingCart, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setLoginModal } from "../../features/login/loginSlice";
import Cookies from "js-cookie";
import Account from "./Account";

const Header = () => {
  const cart = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();
  const token = Cookies.get("token");
  const onClickLoginBtn = () => {
    dispatch(setLoginModal(true));
  };
  return (
    <header className="w-full flex flex-col bg-[#2874f0] sticky top-0 z-50 py-2 px-4 md:pl-[12%] lg:pr-[12%] ">
      {/* logo */}
      <div className="w-full flex items-center justify-between sm:justify-normal">
        <div className="flex-auto flex items-center gap-3">
          <Menu className="sm:!hidden text-white cursor-pointer" />
          <Logo />
          <Search />
        </div>

        {/* right */}
        <div className="flex items-center gap-6 md:space-x-6 lg:space-x-3 sm:ml-10 text-white text-base font-medium">
          {token ? (
            <Account />
          ) : (
            <button
              onClick={onClickLoginBtn}
              className="border-none font-normal md:px-8 md:py-0.5 md:bg-white md:text-[#2874f0] cursor-pointer text-base md:font-medium border border-[#dbdbdb] rounded-sm order-2 md:order-none">
              Login
            </button>
          )}
          <div className="hidden lg:flex">Become a Seller</div>
          <div className="hidden lg:flex lg:items-center">
            <p>More</p>
            <KeyboardArrowDown className="!h-4 -ml-1" />
          </div>
          <Link
            to="/cart"
            className="flex items-center cursor-pointer order-1 md:order-none gap-1">
            <div className="relative">
              <ShoppingCart className="!h-5" />
              {cart.length > 0 && (
                <div className="absolute  top-0 left-2 h-3 w-3 bg-red-500 flex items-center justify-center text-xs rounded">
                  {cart.length}
                </div>
              )}
            </div>

            <p className="hidden md:block">Cart</p>
          </Link>
        </div>
      </div>

      <Search mobile={true} />
    </header>
  );
};

export default Header;
