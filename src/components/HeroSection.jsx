import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat"
      aria-label="Kids fashion collection hero section"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-primary"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-lg max-w-2xl text-baloo">
          Discover the Cutest Outfits for Your Little Ones
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl font-light drop-shadow-md">
          Explore our brand new collection with styles perfect for kids of all ages.
        </p>

        <div className="mt-8 flex space-x-4">
          <Link to="/shop">
          <button
            type="button"
            className="inline-flex items-center bg-primary px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
            aria-label="Shop Now"
          >
            <ShoppingCartIcon className="w-5 h-5 mr-2" />
            Shop Now
          </button>
          </Link>
          
          <button
            type="button"
            className="inline-flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-4 focus:ring-white/50 transition"
            aria-label="Learn More"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
