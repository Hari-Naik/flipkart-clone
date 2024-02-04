import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const bannerData = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
  },
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <div className="px-2 py-4">
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        showDots={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        slidesToSlide={1}>
        {bannerData.map(data => (
          <img
            className="w-full h-[140px] md:h-[170px] lg:h-[233px] object-cover"
            key={data.id}
            src={data.url}
            alt="banner"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
