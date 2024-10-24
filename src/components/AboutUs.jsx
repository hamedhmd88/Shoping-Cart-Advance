import React from "react";
import about1 from "../assets/logo/about1.svg"; // Import the appropriate image

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 px-6 bg-[#0D1117] text-white">
      {/* Team image */}
      <div className="w-1/2 border-t-2 border-r-2 border-l-2 border-gray-200 rounded-xl my-2 mx-auto max-w-4xl">
        <img
          src={about1}
          alt="About Us Team"
          className="w-full p-5 h-96  object-contain rounded-2xl shadow-lg"
        />
      </div>

      <div className="border-l border-b border-gray-200 mt-3">
        <h2 className="text-3xl  md:text-4xl font-bold text-left text-gray-200 mt-8 ml-5">
          Who We Are?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 my-4 text-left max-w-2xl ml-5">
          We are a professional team with over 10 years of experience in product
          sales and offering premium services to our customers. Our goal is to
          provide the best quality products at competitive prices. Our office is
          located at 123 Main Street, Tehran. We are always striving to meet
          your needs in the best possible way.
        </p>
      </div>
      <div className="border-r border-b border-gray-200 mt-3">
        <h2 className="text-3xl  md:text-4xl font-bold text-left text-gray-200 mt-8 mr-5">
          What We Do?
        </h2>

        <p className="text-lg md:text-xl text-gray-300  my-4 text-left max-w-2xl mr-5">
          We specialize in providing top-notch products across various
          industries. Our team ensures that each item we offer meets high
          standards of quality and customer satisfaction. From consumer
          electronics to household goods, we strive to deliver the best shopping
          experience.
        </p>
      </div>
      <div className="border-l border-b border-gray-200 mt-6">
        <h2 className="text-3xl  md:text-4xl font-bold text-left text-gray-200 mt-8 ml-5">
          Where to Find Us?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 my-4 text-left max-w-2xl ml-5">
          We are primarily an online business, delivering products straight to
          your doorstep. However, if you'd like to visit us in person, our
          headquarters are located in Tehran, Main Street, Building 123. Whether
          online or offline, we are always here to serve your needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
