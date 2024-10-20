import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import the icons
import logo from "../assets/logo/logo.png";
import { FiMail, FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="bg-[#010409] text-gray-200 shadow-[#010409]  hover:text-gray-400 border-t  p-10 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div className=" mr-3">
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">
            <img src={logo} className=" h-38 w-1/2" />
          </h2>
          <p className="text-base text-gray-300 ">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100  mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Content
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Create
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Terms & Services
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100  mb-4">
            Community
          </h3>
          <ul className="space-y-2 text-base font-medium">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Suggestions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Newsletters
              </a>
            </li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100  mb-4">Partner</h3>
          <ul className="space-y-2 text-base font-medium">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Our Partner
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 text-base font-medium"
              >
                Become a Partner
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex space-x-6 justify-end items-center gap-5 mr-10">
        <div className="flex items-center space-x-1">
          <FiPhone className="text-xl  " />
          <span className=" text-xl text-zinc-500 font-medium">
            +123 456 789
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FiMail className="text-xl" />
          <span className=" text-xl text-zinc-500 font-medium">
            hmdhamed88@gmail.com
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xl drop-shadow-xl text-gray-400 italic font-medium">
            Developed By Hamed Mahjoobi{" "}
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {/* Social Media Icons using React Icons */}
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
