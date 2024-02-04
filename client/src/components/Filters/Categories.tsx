import React, { useEffect, useState } from "react";

interface PropType {
  sortProductsByCategory: (category: string) => void;
}

const Categories: React.FC<PropType> = ({ sortProductsByCategory }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [end, setEnd] = useState<number>(4);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const categories = await response.json();
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  const handleCategories = () => {
    if (end === 4) {
      setEnd(categories.length);
    } else {
      setEnd(4);
    }
  };

  const getProductsByCategory = (category: string) => {
    setActiveCategory(category);
    sortProductsByCategory(category);
  };

  return (
    <div className="w-full border-b border-[#c2c2c2] p-3">
      <h2 className="text-[11px] text-[#212121] font-sans font-medium uppercase mb-2">
        categories
      </h2>
      {categories?.slice(0, end).map(category => (
        <p
          key={category}
          onClick={() => getProductsByCategory(category)}
          className={`text-sm cursor-pointer mb-2 ${
            activeCategory === category ? "font-semibold" : ""
          }`}>
          {category}
        </p>
      ))}
      <button
        onClick={handleCategories}
        className="text-sm text-[#2874f0] outline-none">
        {end === 4 ? `Show ${categories?.length - 4} more` : "Show less"}
      </button>
    </div>
  );
};

export default Categories;
