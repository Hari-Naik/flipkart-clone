import React from "react";
import { useAppSelector } from "../../app/hooks";
import { KeyboardArrowRight } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./SliderItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1280 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1280, min: 900 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 900, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

interface Props {
  title: string;
  start: number;
  end: number;
}

const Slider: React.FC<Props> = ({ start, end, title }) => {
  const products = useAppSelector(state => state.products.products);

  return (
    <section className="flex-auto mx-2 px-2 pt-4 pb-2 bg-white border border-slate-200 mb-4 shadow-sm">
      <div className="w-full flex items-center justify-between pr-3">
        <h2 className="text-[17px] md:text-xl text-[#212121] font-semibold">
          {title}
        </h2>
        <div className="h-5 w-5 bg-[#1c41d6] text-white rounded-full flex items-center justify-center cursor-pointer">
          <KeyboardArrowRight />
        </div>
      </div>
      {/* carousel */}
      <div className="w-full mt-4">
        <Carousel responsive={responsive}>
          {products.slice(start, end).map(product => (
            <SliderItem
              key={product.id}
              id={product.id}
              img={product.thumbnail}
              title={product.title}
              price={product.price}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
