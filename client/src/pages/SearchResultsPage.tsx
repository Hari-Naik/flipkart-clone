import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import { productType } from "../Types";
import { fetchProducts } from "../features/products/productsApi";
import SearchProductItem from "../components/SearchProductItem";
import SearchResultsSkelton from "../components/Loading/SearchResultsSkelton";
import SearchResultsEmptyView from "../components/SearchResultsEmptyView";

const SearchResultsPage = () => {
  const [products, setProducts] = useState<productType[] | any>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      const suggestions = await fetchProducts(
        `https://dummyjson.com/products/search?q=${query}`
      );

      setProducts(suggestions);
      setLoading(false);
    };

    fetchSuggestions();
  }, [query]);

  if (loading) {
    return <SearchResultsSkelton />;
  }

  if (products?.length <= 0) {
    return <SearchResultsEmptyView />;
  }

  return (
    <section className="w-fullbg-[#f1f3f6]">
      <div className="w-full bg-[#fff] shadow-sm m-2 px-4 py-2">
        <Breadcrumbs />
        <h2 className="text-base text-[#212121] font-semibold mt-2">
          Search results for "{query}"
        </h2>

        <ul className="flex flex-col gap-2 mt-2">
          {products?.map((product: productType) => (
            <SearchProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SearchResultsPage;
