import React from "react";
import ImageSlider from "../components/ImageSlider";
import hero from "../assets/logo/hero.jpg";
import SectionHomePage from "../components/SectionHomePage";
import PopularProduct from "../components/PopularProductForMen";
import Accordn from "../components/Accordn";
import PopularProdutsForWomen from "../components/popularProdutsForWomen";
import GridSection from "../components/GridSection";

const HomePage = ({ name }) => {
  return (
    <div className="min-h-screen bg-[#0D1117] mt-40 flex flex-col items-center justify-center">
      <section className="w-full bg-white">
        <div className="relative shadow-2xl">
          <img
            src={hero}
            alt="Main Product Image"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
            <h1 className="  text-white italic text-4xl md:text-5xl mb-4 font-bold">
              {name} Welcome to our website
            </h1>
            <p className=" text-gray-200 mt-6 max-w-2xl text-lg">
              Discover the best products at unbeatable prices. Explore our wide
              range of items and enjoy a seamless shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Infinite Horizontal Scroll Section */}
      <ImageSlider />

      <SectionHomePage />

      <PopularProduct />
      
      <PopularProdutsForWomen />

      <GridSection/>

      <Accordn />
    </div>
  );
};

export default HomePage;
