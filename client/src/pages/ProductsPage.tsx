import React, { useEffect, useState } from "react";

import Filters from "../components/Filters/Filters";
import Loading from "../components/Products/Loading";
import { fetchProducts } from "../features/products/productsApi";
import { productType } from "../Types";
import LoadingModal from "../components/Modal/LoadingModal";
import Pagination from "../components/Pagination/Pagination";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { useSearchParams } from "react-router-dom";
import SortBy from "../components/Products/SortBy";
import Products from "../components/Products/Products";

export const sortBy = [
  { id: "LH", text: "Low to High" },
  { id: "HL", text: "High to Low" },
];

const ProductsPage = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showLoadingModal, setShowLoadingModal] = useState<boolean>(false);
  const [sortId, setSortId] = useState(sortBy[0].id);

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = async () => {
    setLoading(true);
    const products = await fetchProducts(
      `https://dummyjson.com/products?limit=10&skip=${+page * 10 - 10}`
    );
    sortProducts("LH", products);
  };

  const sortProductsByRating = (rating: number) => {
    const filteredProducts = products.filter(
      product => product.rating >= rating
    );

    setProducts(filteredProducts);
  };

  const sortProductsByCategory = async (category: string) => {
    setShowLoadingModal(true);
    const productsByCategory = await fetchProducts(
      `https://dummyjson.com/products/category/${category}`
    );
    setProducts(productsByCategory);
    setShowLoadingModal(false);
  };

  const sortProducts = (id: string, data?: productType[]) => {
    const newData = [...(data || products)];
    if (id === "LH") {
      newData.sort((a, b) => a.price - b.price);
    } else {
      newData.sort((a, b) => b.price - a.price);
    }
    setProducts(newData);
    setLoading(false);
    setSortId(id);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex space-x-2 p-2">
      <Filters
        sortProductsByCategory={sortProductsByCategory}
        sortProductsByRating={sortProductsByRating}
        getProducts={getProducts}
      />
      <section className="w-[99%] md:w-[80%] h-max bg-white shadow-md p-3">
        <Breadcrumbs />
        <h2 className="text-base text-[#212121] font-semibold my-1">
          All Products
        </h2>
        <SortBy sortId={sortId} sortProducts={sortProducts} />
        <Products products={products} />
        <Pagination page={+page} />
      </section>

      <LoadingModal showLoadingModal={showLoadingModal} />
    </main>
  );
};

export default ProductsPage;
