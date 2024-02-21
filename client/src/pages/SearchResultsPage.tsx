import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import { productType } from "../Types";
import { fetchProducts } from "../features/products/productsApi";
import SearchProductItem from "../components/SearchProductItem";
import SearchResultsSkelton from "../components/Loading/SearchResultsSkelton";

const SearchResultsPage = () => {
  const [products, setProducts] = useState<productType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 7000));
      const suggestions = await fetchProducts(
        `https://dummyjson.com/products/search?q=${query}`
      );

      setProducts(suggestions);
      setLoading(false);
    };

    fetchSuggestions();
  }, [query]);

  const EmptyView = () => {
    return (
      <div className="w-full h-[75vh] sm:h-[calc(100vh-150px)] flex flex-col items-center justify-center m-2">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"
          alt="error-no-search-results"
          className="mb-4"
        />
        <h2 className=" text-2xl text-[#212121] font-semibold">
          Sorry, no results found!
        </h2>
        <p className=" text-lg text-[#878787] text-center mt-2">
          Please check the spelling or try searching for something else.
        </p>
      </div>
    );
  };

  if (loading) {
    return <SearchResultsSkelton />;
  }

  if (products && products?.length <= 0) {
    return <EmptyView />;
  }

  return (
    <section className="w-fullbg-[#f1f3f6]">
      <div className="w-full bg-[#fff] shadow-sm m-2 px-4 py-2">
        <Breadcrumbs />
        <h2 className="text-base text-[#212121] font-semibold mt-2">
          Search results for "{query}"
        </h2>

        <ul className="flex flex-col gap-2 mt-2">
          {products &&
            products.map(product => (
              <SearchProductItem key={product.id} product={product} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default SearchResultsPage;
