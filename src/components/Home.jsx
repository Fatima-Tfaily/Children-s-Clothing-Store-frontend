import React from "react";
import Header from "./Header";
import SecondPart from "./SecondPart";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Brands from "./Brands";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SecondPart />
      <Categories />
      <AboutUs />
      <Testimonial />
      <Gallery />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
