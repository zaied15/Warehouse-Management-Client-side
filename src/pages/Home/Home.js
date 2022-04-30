import React from "react";
import Banner from "./Banner/Banner";
import Chart from "./Chart/Chart";
import FeaturedItems from "./FeaturedItems/FeaturedItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedItems></FeaturedItems>
      <Chart></Chart>
    </div>
  );
};

export default Home;
