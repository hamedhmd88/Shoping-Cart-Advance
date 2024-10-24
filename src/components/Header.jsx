import React, { useEffect, useState } from "react";
import { FiMenu, FiSearch, FiUser, FiPhone, FiMail } from "react-icons/fi"; // Importing icons
import { Link, NavLink } from "react-router-dom"; // Assuming you're using react-router for navigation
import logo from "../assets/logo/logo.png";
import CartIcon from "./CartIcon";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-[#010409] text-gray-200 shadow-[#010409]  p-2 mb-10 shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300`}
    >
      {/* Upper Section */}
      <div className="w-full flex justify-between items-center p-3 mb-3">
        {/* Left Section - Logo */}
        <div className="flex w-[20%] items-center space-x-2">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="ml-8 h-14 w-[200px] text-center"
            />
          </Link>
        </div>

        {/* Center Section - Search Bar */}
        {
          <div className="w-full flex justify-around items-center mb-5">
            <nav className="hidden md:flex space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                Cart
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>

          /* Right Section - Login and Cart Icons */
        }
        <div className="flex mr-32 justify-center gap-4 items-center w-[12%]">
          <Link to="/login" className="border-r-2 pr-4">
            <FiUser className="text-4xl cursor-pointer" />
          </Link>
          {/* <FiShoppingCart className="text-2xl cursor-pointer" /> */}
          <CartIcon />
        </div>
      </div>

      {/* Lower Section */}

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black px-4 py-2">
          <Link to="/" className="block py-2 hover:text-gray-200">
            Home
          </Link>
          <Link to="/products" className="block py-2 hover:text-gray-200">
            Products
          </Link>
          <Link to="/about" className="block py-2 hover:text-gray-200">
            About Us
          </Link>
          <Link to="/contact" className="block py-2 hover:text-gray-200">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
