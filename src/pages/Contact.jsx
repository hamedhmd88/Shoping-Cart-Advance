import React from "react";
import contact from "../assets/logo/contact.jpg";
import contact1 from "../assets/logo/contact1.svg"; // Import the appropriate image

const Contact = () => {
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-r  bg-[#0D1117] w-full mt-28">
        <section className="relative w-full mt-10 shadow-2xl">
          <img src={contact} className="w-full h-96 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
            <h1 className=" text-gray-200  text-4xl md:text-5xl mb-4 font-bold">
              Contact Us
            </h1>
            <p className=" text-gray-300 mt-6 max-w-2xl text-lg">
              Have any questions? We'd love to hear from you.
            </p>
          </div>
        </section>

        <div className="w-1/2 border-t-2 border-r-2 border-l-2 border-gray-200 rounded-xl my-8 mx-auto max-w-4xl">
          <img
            src={contact1}
            alt="About Us Team"
            className="w-full p-5 h-96 object-contain rounded-2xl shadow-lg"
          />
        </div>
        <section className="bg-gradient-to-r  bg-[#0D1117] text-gray-200 py-2 px-4 flex flex-col items-center my-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {/* Left Column */}
            <div className="border-t-2 border-b-2 border-blue-800 rounded-lg  shadow-lg  p-6 flex flex-col items-center  hover:border-b-[12px] hover:border-t-[12px]  transition-all">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">Press</h2>
              <p className="text-gray-400 text-md font-medium text-center mb-6">
                Are you interested in our latest news or working on a story?
              </p>
              <button className="border font-semibold  text-gray-300 px-4 py-2 rounded-lg hover:bg-[#010409] transition">
                Visit Press Page
              </button>
            </div>

            {/* Middle Column - Slightly Higher */}
            <div className="border-t-2 border-b-2  border-green-800 rounded-lg shadow-lg   p-6 flex flex-col items-center  hover:border-b-[12px] hover:border-t-[12px]  transition-all relative lg:top-8">
              <h2 className="text-2xl font-bold text-green-800 bg- mb-3">
                Help & Support
              </h2>
              <p className="text-gray-400 text-md font-medium text-center mb-6">
                Our support team is spread across the globe to give you answers
                fast.
              </p>
              <button className="border font-semibold  text-gray-300 px-4 py-2 rounded-lg hover:bg-[#010409] transition">
                Visit Support Page
              </button>
            </div>

            {/* Right Column */}
            <div className="border-t-2 border-b-2 border-indigo-800 rounded-lg  shadow-lg  p-6 flex flex-col items-center  hover:border-b-[12px] hover:border-t-[12px]  transition-all">
              <h2 className="text-2xl font-bold text-indigo-800 bg- mb-3">
                Sales
              </h2>
              <p className="text-gray-400 text-md font-medium text-center mb-6">
                Get in touch with our sales team to see how we can work
                together.
              </p>
              <button className="border font-semibold  text-gray-300 px-4 py-2 rounded-lg hover:bg-[#010409] transition">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
