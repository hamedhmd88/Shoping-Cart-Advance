// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu and close icons
// import CartIcon from "./CartIcon"; // Import CartIcon for the cart icon with total items

// const Header = ({ isLogin }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

//   const controlHeader = () => {
//     if (window.scrollY > lastScrollY) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", controlHeader);
//     return () => {
//       window.removeEventListener("scroll", controlHeader);
//     };
//   }, [lastScrollY]);

//   return (
//     <header
//   className={`${
//     isVisible ? "translate-y-0" : "-translate-y-full"
//   } bg-gradient-to-r  from-stone-950 via-stone-800 to-slate-900 text-white shadow-gray-800 p-4 shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300`}
// >
//   <div className="container flex justify-between md:justify-around items-center">
//     <h1 className="text-2xl font-semibold">
//       <Link to="/" className="text-white">
//         Product Store
//       </Link>
//     </h1>

//     {/* دکمه منوی همبرگری در حالت موبایل */}
//     <button
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//       className="text-3xl md:hidden focus:outline-none"
//     >
//       {isMenuOpen ? <FiX /> : <FiMenu />}
//     </button>

//     {/* منوی اصلی که در حالت دسکتاپ نمایش داده می‌شود */}
//     <nav className="hidden md:flex xl:mr-14 gap-3 space-x-7">
//       <Link
//         to="/"
//         className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
//       >
//         Home
//       </Link>
//       <Link
//         to="/products"
//         className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
//       >
//         Products
//       </Link>
//       <Link
//         to="/cart"
//         className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
//       >
//         Cart
//       </Link>
//       <Link
//         to="/about"
//         className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
//       >
//         About us
//       </Link>
//       <Link
//         to="/contact"
//         className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
//       >
//         Contact us
//       </Link>

//     </nav>
//     <div className=" flex justify-center gap-4 ">
//     {isLogin ? null : (
//         <Link
//           to="/login"
//           className="hover:text-gray-950 hidden md:block hover:bg-gray-500 bg-gray-800 rounded-lg px-4 py-2 text-xl font-medium transition-colors "
//         >
//           Login
//         </Link>
//       )}
//     <CartIcon />
//     </div>

//     {/* منوی موبایل که با کلیک بر روی همبرگری باز می‌شود */}
//     <div
//       className={` absolute top-0 left-0 h-screen w-64 bg-zinc-200 text-gray-800 transform ${
//         isMenuOpen ? "translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 lg:hidden z-40`}
//     >
//       <div className="p-6">
//         <h2 className="text-2xl font-semibold mb-4">Menu</h2>
//         <nav className="flex flex-col space-y-4">
//           <Link
//             to="/"
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:text-gray-950 font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/products"
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:text-gray-950 font-medium"
//           >
//             Products
//           </Link>
//           <Link
//             to="/cart"
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:text-gray-950 font-medium"
//           >
//             Cart
//           </Link>
//         </nav>
//       </div>
//     </div>
//   </div>
// </header>

//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiPhone,
  FiMail,
} from "react-icons/fi"; // Importing icons
import { Link, NavLink } from "react-router-dom"; // Assuming you're using react-router for navigation
import logo from "../assets/logo/logo.png";
import CartIcon from "./CartIcon";
import { isAction } from "@reduxjs/toolkit";
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
      } bg-gradient-to-r  from-stone-950 via-stone-800 to-slate-900 text-white shadow-gray-800 p-2 mb-10 shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300`}
    >
      {/* Upper Section */}
      <div className="w-full flex justify-around items-center p-4">
        {/* Left Section - Logo */}
        <div className="flex w-3/12 items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="ml-8 h-20 w-[200px] text-center"
          />
          <span className="text-2xl text-blue-800 italic font-bold"></span>
        </div>

        {/* Center Section - Search Bar */}
        <div className="hidden mr-5 md:flex items-center border-2 border-gray-500 rounded-full px-4 py-2 w-3/12">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-gray-800 outline-none bg-transparent"
          />
          <FiSearch className="text-gray-500" />
        </div>

        {/* Right Section - Login and Cart Icons */}
        <div className="flex mr-4 justify-around space-x-6 items-center w-1/6">
          <Link to="/login">
            <FiUser className="text-3xl cursor-pointer" />
          </Link>
          {/* <FiShoppingCart className="text-2xl cursor-pointer" /> */}
          <CartIcon />
        </div>

        {/* Mobile Search Icon */}
        <div className="flex md:hidden">
          <FiSearch className="text-2xl" />
        </div>
      </div>

      {/* Lower Section */}
      <div className="w-full flex justify-around items-center  mb-5">
        {/* Left Section - Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
          >
            Cart
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right Section - Contact Info */}
        <div className="hidden md:flex space-x-6 items-center gap-5">
          <div className="flex items-center space-x-1">
            <FiPhone className="text-xl  " />
            <span className=" text-xl text-zinc-500 font-medium">
              +123 456 789
            </span>
          </div>
          <div className="flex items-center space-x-1 gap-1">
            <FiMail className="text-xl" />
            <span className=" text-xl text-zinc-500 font-medium">
              hmdhamed88@gmail.com
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 px-4 py-2">
          <Link to="/" className="block py-2 hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="block py-2 hover:text-gray-200">
            About Us
          </Link>
          <Link to="/services" className="block py-2 hover:text-gray-200">
            Services
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
