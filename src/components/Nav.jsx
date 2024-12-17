import React, { useState } from "react";
import { Link } from "react-scroll";
import foodLogo from "../assets/images/food-logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 mb-14">
      {/* Main Container */}
      <div className="flex justify-between items-center w-full px-4 py-2 md:px-8">
        {/* Logo and Restaurant Name Section */}
        <div className="bg-green-500 rounded-2xl shadow-lg p-4 flex items-center space-x-4">
          <img
            src={foodLogo}
            alt="Food Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-md"
          />
          <h1 className="text-lg md:text-2xl font-bold text-white">
            SALAM FAST FOOD RESTAURANT
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8 bg-white rounded-2xl shadow-lg p-4">
            <li className="text-center">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="flex flex-col items-center text-gray-800 hover:text-green-600 cursor-pointer transition duration-300"
              >
                <span className="text-3xl">🍽️</span>
                <span className="text-sm font-semibold mt-1">Home</span>
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="flex flex-col items-center text-gray-800 hover:text-green-600 cursor-pointer transition duration-300"
              >
                <span className="text-3xl">💬</span>
                <span className="text-sm font-semibold mt-1">About</span>
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="why-choose-us"
                smooth={true}
                duration={500}
                className="flex flex-col items-center text-gray-800 hover:text-green-600 cursor-pointer transition duration-300"
              >
                <span className="text-3xl">⭐</span>
                <span className="text-sm font-semibold mt-1">
                  Why Choose Us
                </span>
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="food-menu"
                smooth={true}
                duration={500}
                className="flex flex-col items-center text-gray-800 hover:text-green-600 cursor-pointer transition duration-300"
              >
                <span className="text-3xl">🍔</span>
                <span className="text-sm font-semibold mt-1">Food Menu</span>
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                className="flex flex-col items-center text-gray-800 hover:text-green-600 cursor-pointer transition duration-300"
              >
                <span className="text-3xl">📞</span>
                <span className="text-sm font-semibold mt-1">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white rounded-lg shadow-lg mt-2`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              🍽️ Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              💬 About
            </Link>
          </li>
          <li>
            <Link
              to="why-choose-us"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              ⭐ Why Choose Us
            </Link>
          </li>
          <li>
            <Link
              to="food-menu"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              🍔 Food Menu
            </Link>
          </li>
          <li>
            <Link
              to="contact-us"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              📞 Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
