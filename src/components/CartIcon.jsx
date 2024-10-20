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
