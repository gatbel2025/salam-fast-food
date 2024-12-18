import React from "react";
import bgImage from "../assets/images/bg-img.png"; // Adjust the path based on your actual folder structure

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center mt-4 mb-4 justify-center py-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center text-white px-4 py-10 rounded-lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl text-gray-200 space-y-4">
            <li>Fresh Ingredients</li>
            <li>Fast Delivery</li>
            <li>Affordable Prices</li>
            <li>Variety of Delicious Meals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
