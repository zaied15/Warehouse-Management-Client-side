import React from "react";
import Banner from "./Banner/Banner";
import Chart from "./Chart/Chart";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import StockOut from "./StockOut/StockOut";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedItems></FeaturedItems>
      <StockOut></StockOut>
      <Chart></Chart>
    </div>
  );
};

export default Home;
