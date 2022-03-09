import React from "react";
import Announcment from "../components/Announcment";
import Categorice from "../components/Categorice";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announcment />
      <Navbar />
      <Slider />
      <Categorice />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
