import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import { useAppSelector } from "../app/hooks";

import Slider from "../components/Slider/Slider";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const loading = useAppSelector(state => state.products.loading);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Banner />
      <Slider title="Best of Electronics" start={0} end={11} />
      <Slider title="Beauty, Food, Toys & more" start={11} end={27} />
      <Slider title="Home Decor & Furniture " start={27} end={38} />
      <Slider title="Fashion Best Sellers" start={38} end={60} />
      <Slider title="Top Deals On Watches & Bags" start={60} end={86} />
      <Slider title="Automotive, Motorcycle & Lighting" start={86} end={100} />
    </>
  );
};

export default Home;
