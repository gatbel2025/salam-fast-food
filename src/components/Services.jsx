import React from "react";
import bgImage from "../assets/images/bg.png"; // Import the background image

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 mb-16"
      style={{
        backgroundImage: `url(${bgImage})`, // Set the imported background image
      }}
    >
      {/* Overlay for better visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="service-item text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="service-icon text-4xl mb-2">📱</div>
            <h3 className="text-xl font-semibold">Online Booking</h3>
            <p>Book your meals online easily.</p>
          </div>
          <div className="service-item text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="service-icon text-4xl mb-2">🍔</div>
            <h3 className="text-xl font-semibold">Fast Food</h3>
            <p>Delicious fast food for everyone.</p>
          </div>
          <div className="service-item text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="service-icon text-4xl mb-2">🥗</div>
            <h3 className="text-xl font-semibold">Healthy Food</h3>
            <p>Enjoy healthy and nutritious meals.</p>
          </div>
          <div className="service-item text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="service-icon text-4xl mb-2">🚚</div>
            <h3 className="text-xl font-semibold">Delivery</h3>
            <p>Fast and reliable delivery to your door.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
