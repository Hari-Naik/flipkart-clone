import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getProducts } from "./features/products/productsSlice";
import Success from "./components/Cart/Success";
import { Cancel } from "@mui/icons-material";
import LoginModal from "./components/Login/Login";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useAppDispatch();

  const showLoginModal = useAppSelector(state => state.login.showLoginModal);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <main className="h-screen w-screen bg-[#f1f2f4] overflow-hidden overflow-y-auto pb-4">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showLoginModal && <LoginModal />}
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
