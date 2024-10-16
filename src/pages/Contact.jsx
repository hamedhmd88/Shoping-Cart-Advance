import React from "react";
import contact from "../assets/logo/contact.jpg"
const Contact = () => {
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-r  from-stone-950 via-stone-800 to-slate-900 w-full mt-28">
        <section className="relative w-full mt-10 shadow-2xl">
          <img src={contact}  className="w-full h-96 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="[text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-white italic text-4xl md:text-5xl mb-4 font-bold">
            Contact Us
          </h1>
          <p className="[text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-gray-200 mt-6 max-w-2xl text-lg">
            Have any questions? We'd love to hear from you.
          </p>
          </div>
          
        </section>

        <section className="bg-gradient-to-r  from-stone-950 via-stone-800 to-slate-900 text-white py-2 px-4 flex flex-col items-center mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {/* Left Column */}
            <div className="border-t-8 border-b-8 border-blue-800 rounded-lg  shadow-lg  shadow-blue-800 p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-blue-800 transition">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">Press</h2>
              <p className="text-gray-400 text-md font-medium text-center mb-6">
                Are you interested in our latest news or working on a story?
              </p>
              <button className="border-2 border-blue-500 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-800 hover:text-white transition">
                Visit Press Page
              </button>
            </div>

            {/* Middle Column - Slightly Higher */}
            <div className="border-t-8 border-b-4 border-green-800 rounded-lg shadow-lg shadow-green-800  p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-green-800 transition relative lg:top-8">
              <h2 className="text-2xl font-bold text-green-800 bg- mb-3">
                Help & Support
              </h2>
              <p className="text-gray-400 text-md font-medium text-center mb-6">
                Our support team is spread across the globe to give you answers
                fast.
              </p>
              <button className="border-2 border-green-500 text-green-400 px-4 py-2 rounded-lg hover:bg-green-800 hover:text-white transition">
                Visit Support Page
              </button>
            </div>

            {/* Right Column */}
            <div className="border-t-8 border-b-8 border-indigo-800 rounded-lg  shadow-lg shadow-indigo-800 p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-indigo-800 transition">
              <h2 className="text-2xl font-bold text-indigo-800 bg- mb-3">
                Sales
              </h2>
              <p className="text-gray-400 text-md font-medium text-center mb-6">
                Get in touch with our sales team to see how we can work
                together.
              </p>
              <button className="border-2 border-indigo-500 text-indigo-400 px-4 py-2 rounded-lg hover:bg-indigo-800 hover:text-white transition">
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
