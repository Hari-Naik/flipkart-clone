import React from "react";
import { useAppSelector } from "../app/hooks";

import WishlistItem from "../components/Wishlist/WishlistItem";
import EmptyCartView from "../components/Cart/EmptyCartView";
import { ToastContainer } from "react-toastify";

const Wishlist = () => {
  const wishlist = useAppSelector(state => state.wishlist.wishlist);

  //   if (wishlist.length === 0) {
  //     return (
  //       <EmptyCartView
  //         title="Empty Wishlist"
  //         description=" You have no items in your wishlist. Start adding!"
  //       />
  //     );
  //   }

  return (
    <section className="max-w-2xl bg-white mx-auto shadow-md mt-10">
      {wishlist.length === 0 && (
        <EmptyCartView
          title="Empty Wishlist"
          description=" You have no items in your wishlist. Start adding!"
        />
      )}
      {wishlist.length > 0 && (
        <h2 className="text-[17px] font-semibold text-[#212121] p-4">
          My Wishlist ({wishlist.length})
        </h2>
      )}
      {wishlist &&
        wishlist.map(item => <WishlistItem key={item.id} item={item} />)}
      <ToastContainer />
    </section>
  );
};

export default Wishlist;
