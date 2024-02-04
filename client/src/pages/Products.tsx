import React, { useEffect, useState } from "react";

import ProductItem from "../components/Products/ProductItem";
import Filters from "../components/Filters/Filters";
import Loading from "../components/Products/Loading";
import { fetchProducts } from "../features/products/productsApi";
import { productType } from "../Types";
import LoadingModal from "../components/Modal/LoadingModal";
import Pagination from "../components/Pagination/Pagination";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const sortBy = [
  { id: "LH", text: "Low to High" },
  { id: "HL", text: "High to Low" },
];

const Products = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showLoadingModal, setShowLoadingModal] = useState<boolean>(false);

  const [sortId, setSortId] = useState(sortBy[0].id);
  const [page, setPage] = useState<number>(1);

  const getProducts = async () => {
    setLoading(true);
    const products = await fetchProducts(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
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

  useEffect(() => {
    getProducts();
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="h-full w-full flex space-x-2 p-2">
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
        <div className="flex items-center space-x-4 text-sm text-[#212121]">
          <p className="font-semibold cursor-pointer pb-1">Sort By</p>
          {sortBy.map(item => (
            <p
              key={item.id}
              onClick={() => sortProducts(item.id)}
              className={`cursor-pointer pb-1 transition ${
                sortId === item.id
                  ? "text-[#2874f0] border-[#2874f0] border-b-2 font-semibold"
                  : ""
              }`}>
              Price-- {item.text}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} />
      </section>

      <LoadingModal showLoadingModal={showLoadingModal} />
    </main>
  );
};

export default Products;
