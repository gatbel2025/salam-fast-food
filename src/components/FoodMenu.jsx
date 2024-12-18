import React from "react";

// Import images explicitly
import fruitJuices from "../assets/images/fruit-juices.png";
import softDrinks from "../assets/images/soft-drinks.png";
import milkshakes from "../assets/images/milkshakes.png";
import coffeeTea from "../assets/images/coffee-tea.png";

import burgersSandwiches from "../assets/images/burgers-sandwiches.png";
import pizza from "../assets/images/pizza.png";
import friedChicken from "../assets/images/fried-chicken.png";
import tacosBurritos from "../assets/images/tacos-burritos.png";

import frenchFries from "../assets/images/french-fries.png";
import onionRings from "../assets/images/onion-rings.png";
import mozzarellaSticks from "../assets/images/mozzarella-sticks.png";
import salads from "../assets/images/salads.png";

const FoodMenu = () => {
  // Food categories with their items, images, and prices
  const foodCategories = [
    {
      category: "Beverages",
      items: [
        { name: "Fruit Juices", price: 70, image: fruitJuices },
        { name: "Soft Drinks", price: 50, image: softDrinks },
        { name: "Milkshakes", price: 70, image: milkshakes },
        { name: "Coffee and Tea", price: 40, image: coffeeTea },
      ],
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Burgers and Sandwiches",
          price: 120,
          image: burgersSandwiches,
        },
        { name: "Pizza", price: 150, image: pizza },
        { name: "Fried Chicken", price: 100, image: friedChicken },
        { name: "Tacos and Burritos", price: 130, image: tacosBurritos },
      ],
    },
    {
      category: "Sides and Snacks",
      items: [
        { name: "French Fries", price: 60, image: frenchFries },
        { name: "Onion Rings", price: 50, image: onionRings },
        { name: "Mozzarella Sticks", price: 80, image: mozzarellaSticks },
        { name: "Salads", price: 90, image: salads },
      ],
    },
  ];

  return (
    <section
      id="food-menu"
      className="w-full min-h-screen bg-gradient-to-b from-blue-200 via-white to-green-200 py-12"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-600 mb-12">
          Our Menu
        </h2>

        {/* Render categories */}
        {foodCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Resized Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/200")
                    }
                    className="w-32 h-32 object-contain rounded-lg mb-4 border-2 border-gray-200"
                  />
                  <h4 className="text-lg font-bold text-gray-700 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Price:{" "}
                    <span className="text-sky-500 font-semibold">
                      {item.price} Birr
                    </span>
                  </p>
                  <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
