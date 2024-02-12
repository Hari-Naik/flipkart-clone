import React from "react";
import { useAppSelector } from "../app/hooks";

import WishlistItem from "../components/Wishlist/WishlistItem";
import EmptyCartView from "../components/Cart/EmptyCartView";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

const Wishlist = () => {
  const wishlist = useAppSelector(state => state.wishlist.wishlist);
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="w-full h-full">
      {wishlist.length === 0 && (
        <EmptyCartView
          title="Empty Wishlist"
          description=" You have no items in your wishlist. Start adding!"
        />
      )}

      {wishlist.length > 0 && (
        <div className="max-w-2xl bg-white mx-auto shadow-md mt-10">
          <h2 className="text-[17px] font-semibold text-[#212121] p-4">
            My Wishlist ({wishlist.length})
          </h2>

          {wishlist.map(item => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      )}

      <ToastContainer />
    </section>
  );
};

export default Wishlist;
