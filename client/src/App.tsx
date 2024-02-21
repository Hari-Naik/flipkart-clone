import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getProducts } from "./features/products/productsSlice";

import LoginModal from "./components/Login/Login";
import Wishlist from "./pages/Wishlist";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/ProductsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();

  const showLoginModal = useAppSelector(state => state.login.showLoginModal);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <main className="h-screen w-screen bg-[##f1f1f1] overflow-hidden overflow-y-auto">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showLoginModal && <LoginModal />}
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
