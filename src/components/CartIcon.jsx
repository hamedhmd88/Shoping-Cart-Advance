// src/components/CartIcon.js
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div >
      <Link to="/cart">
        <div className="relative">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-5-8V5a3 3 0 10-6 0v8"
            />
          </svg> */}
          <FiShoppingCart className='text-3xl'/>
          <span className="absolute -top-3 -right-2 bg-amber-700 text-white rounded-full px-2 py-1 text-xs">
            {totalQuantity}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;
