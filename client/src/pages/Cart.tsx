import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import CartItem from "../components/Cart/CartItem";
import { removeFromCart } from "../features/cart/cartSlice";
import PriceDetails from "../components/Cart/PriceDetails";
import EmptyCartView from "../components/Cart/EmptyCartView";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import { setLoginModal } from "../features/login/loginSlice";
import { ToastContainer } from "react-toastify";
import { successToast } from "../libs/utils";

const Cart = () => {
  const cart = useAppSelector(state => state.cart.cart);

  const dispatch = useAppDispatch();
  const token = Cookies.get("token");

  const handleRemoveFromCart = (itemId: number, title: string) => {
    dispatch(removeFromCart(itemId));
    successToast(`Successfully removed ${title} from your cart`);
  };

  const checkout = async () => {
    if (token) {
      const stripe = await loadStripe(
        "pk_test_51NzCKKSA4rbPIDcGkV3rEaRnErcRhpSrVahWXKNyRQFtSFhq5IVdnK87fJWkSHhH201NmWruXLC9hIdY3MLdIz2M00FjFRpISO"
      );

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      };

      const response = await fetch(
        "https://flipkart-backend-two.vercel.app/api/checkout",
        options
      );

      const session = await response.json();

      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      console.log(result);

      if (result?.error) {
        alert(result.error);
      }
    } else {
      dispatch(setLoginModal(true));
    }
  };

  return (
    <main className="flex flex-col items-center md:flex-row md:justify-center md:items-start md:space-x-4 overflow-hidden overflow-y-auto pt-6">
      {cart.length ? (
        <>
          <ul className="w-[96%] md:w-[60%] h-max bg-white shadow-sm">
            {cart.map(product => (
              <CartItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
            <div className="shadow-md w-full py-2 text-end">
              <button
                onClick={checkout}
                className="px-10 py-2 bg-[#FB641B] text-white text-base font-semibold">
                PLACE ORDER
              </button>
            </div>
          </ul>
          <PriceDetails />
        </>
      ) : (
        <EmptyCartView
          title="Your cart is empty!"
          description="Add items to it now."
        />
      )}
      <ToastContainer />
    </main>
  );
};

export default Cart;
