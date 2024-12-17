import React from "react";
import bgImage from "../assets/images/bg.png"; // Adjust the path based on your actual folder structure

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden flex justify-center items-center p-4 md:p-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Overlay */}
      <div className="bg-black bg-opacity-60 w-full h-full flex justify-center items-center rounded-3xl">
        <div className="max-w-4xl text-white px-6 py-8 md:px-12 md:py-12 rounded-xl bg-black bg-opacity-60 shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-500 mb-6 text-center md:text-left">
            About Salam Fast Food Restaurant
          </h2>
          <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-6 text-gray-200">
            <p>
              <span className="text-green-400 font-semibold">
                Salam Fast Food Restaurant
              </span>{" "}
              is an international fast food chain that offers a wide variety of
              delicious meals for everyone. Whether you're dining at our hotel
              or opting for doorstep delivery, we ensure a seamless experience
              initiated through our online delivery system. To boost customer
              trust and convenience, we have integrated the secure{" "}
              <span className="text-green-300 font-semibold">e-paySalam</span>{" "}
              financial transaction mobile app, allowing for effortless and
              reliable payments. Owned and founded by{" "}
              <span className="text-green-400 font-semibold">
                Gatbel Gatluak
              </span>
              , a software developer and the sole developer of the restaurant
              website and e-paySalam.
            </p>
            <p>
              Salam Fast Food Restaurant is the leading fast-food provider in{" "}
              <span className="text-green-300 font-semibold">
                Gambella City
              </span>
              , offering high-quality, fresh meals and refreshing fruit juices
              that satisfy every craving. Our commitment to quality, freshness,
              and customer satisfaction sets us apart.
            </p>
            <p>
              We pride ourselves on integrating modern technology to enhance
              customer experience. Our beautifully designed, interactive website
              allows customers to browse our menu, place orders seamlessly, and
              enjoy fast doorstep delivery. By incorporating cutting-edge{" "}
              <span className="text-green-300 font-semibold">
                AI technology
              </span>
              , we ensure a smooth, user-friendly experience tailored to meet
              our customers' needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
