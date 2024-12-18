import React from "react";

// Import images from assets folder
import foodImage from "../assets/images/img.png";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-100 relative mb-4 mt-20 md:mt-32 p-4 md:p-8 lg:p-12 shadow-lg overflow-hidden"
    >
      {/* Left Side Content */}
      <div className="text-gray-800 max-w-lg text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 mb-6 leading-tight">
          Welcome to Salam Fast Food Restaurant
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-4 leading-snug">
          Fresh & Healthy Meal Plans Delivered Right to Your Doorstep
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed text-gray-700">
          Enjoy delicious meals, freshly prepared for you, at affordable prices
          starting from{" "}
          <span className="font-bold text-green-600">70 Birr</span>. Our
          commitment is to bring health and taste together!
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
          View Our Menu
        </button>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={foodImage}
          alt="Delicious Food"
          className="w-full h-auto max-h-[400px] object-contain rounded-3xl transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Home;
