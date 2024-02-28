import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header";
import LoginModal from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import SearchResultsPage from "./pages/SearchResultsPage";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getProducts } from "./features/products/productsSlice";
import Loading from "./components/Loading/Loading";

//routes
const Home = lazy(() => import("./pages/Home"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Success = lazy(() => import("./pages/Success"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <Suspense fallback={<Loading />}>
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
          </Suspense>
          {showLoginModal && <LoginModal />}
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
