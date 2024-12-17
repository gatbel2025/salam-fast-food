import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Services from "./components/Services"; // Ensure this path is correct
import FoodMenu from "./components/FoodMenu";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <WhyChooseUs />
      <FoodMenu />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
