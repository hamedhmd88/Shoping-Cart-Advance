
import React from "react";
import { FaCheckCircle, FaUsers, FaFlag, FaAward } from "react-icons/fa";

const GridSection = () => {
  return (
    <section className="w-full  py-16 px-4 mb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Title and Description */}
        <div className=" w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-400 italic mb-4">
            What Makes Us The Best From Others?
          </h2>
          <p className="text-gray-400 text-lg">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>

        {/* Right Side: Features with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="text-red-500">
              <FaAward size={30} />
            </div>
            <div className=" border-l-2 border-b-2 px-6 py-4 border-red-600 shadow-md shadow-red-500">
              <h3 className="text-xl font-bold text-gray-300 italic">5 Years Of Experience</h3>
              <p className="text-gray-400">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="text-yellow-500">
              <FaUsers size={30} />
            </div>
            <div className=" border-l-2 border-b-2 px-6 py-4 border-yellow-600 shadow-md shadow-yellow-500">
              <h3 className="text-xl font-bold text-gray-300 italic">Expert Team Members</h3>
              <p className="text-gray-400">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="text-green-500">
              <FaCheckCircle size={30} />
            </div>
            <div className=" border-l-2 border-b-2 px-6 py-4 border-green-600 shadow-md shadow-green-500">
              <h3 className="text-xl font-bold text-gray-300 italic">100% Satisfaction</h3>
              <p className="text-gray-400">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="text-blue-500">
              <FaFlag size={30} />
            </div>
            <div className=" border-l-2 border-b-2 px-6 py-4 border-blue-600 shadow-md shadow-blue-500">
              <h3 className="text-xl font-bold text-gray-300 italic">Best In America</h3>
              <p className="text-gray-400">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;

