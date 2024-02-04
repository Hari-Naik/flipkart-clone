import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DropDown from "../DropDown/DropDown";
import { productType } from "../../Types";

import _debounce from "lodash/debounce";
import { fetchProducts } from "../../features/products/productsApi";

interface SearchPropTypes {
  mobile?: boolean;
}

const Search: React.FC<SearchPropTypes> = ({ mobile }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSuggestions = async (query: string) => {
    setLoading(true);
    const suggestions = await fetchProducts(
      `https://dummyjson.com/products/search?q=${query}`
    );

    setSuggestions(suggestions);
    setLoading(false);
  };

  const debounceFetchSuggestions = _debounce((query: string) => {
    fetchSuggestions(query);
  }, 1000);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);
    debounceFetchSuggestions(query);
  };

  return (
    <div
      className={`h-[36px] ${mobile ? "block" : "hidden"}  ${
        mobile && "mt-2"
      } ${mobile ? "sm:hidden" : "sm:block"}  sm:max-w-md 
	 flex-auto bg-white`}>
      <div className="flex items-center justify-between w-full h-full">
        <input
          onChange={handleQuery}
          className="w-full h-full  py-1 pl-4 border-none outline-none rounded-sm text-sm"
          type="text"
          value={query}
          placeholder="Search for products, brands and more"
        />

        <div className="h-full flex items-center mr-2">
          <SearchIcon className="text-[#2874f0]" />
        </div>
      </div>
      {query ? (
        <DropDown
          suggestions={suggestions}
          setQuery={setQuery}
          loading={loading}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
