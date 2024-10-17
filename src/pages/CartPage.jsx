// src/components/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';
import {  useNavigate } from 'react-router-dom';


const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.items.length === 0) {
    return (
      <div className="text-center mt-52 mx-auto text-gray-200 min-h-[500px]">
        <h1 className="text-2xl font-bold m-5">Your Cart is Empty!</h1>
       
        <button
          onClick={() => navigate('/products')}
          className="mt-4 px-4 py-2 text-xl border shadow-md text-white rounded-md hover:bg-[#010409]  transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto  mt-52 p-6 text-gray-300 min-h-[500px]">
      <h1 className="text-2xl font-bold mb-4 ">Your Cart</h1>

      <div className="grid grid-cols-1 gap-4">
        
        {cart.items.map((item) => (
          <>
            <div key={item.id} className="flex justify-between items-center bg-white  border-2 border-gray-600 p-4  rounded-md shadow-2xl">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-contain ml-4 " />
            <div className='bg-zinc-300 p-5 rounded-2xl w-1/2 flex flex-col gap-1'>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className=" font-semibold text-gray-700">${item.price}</p>
              <p className='text-gray-800'>Quantity: {item.quantity}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="px-4 py-2 border  border-red-600 text-red-600 font-extrabold text-md rounded-md hover:bg-red-600 hover:text-gray-200 transition"
              >
                -
              </button>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="px-4 py-2 border  border-blue-600 text-blue-600 font-extrabold text-md rounded-md hover:bg-blue-600 hover:text-gray-200 transition"
              >
                +
              </button>
            </div>
          </div>
          
        </>
        
          
        ))}
      </div>

      {/* Total Price */}
      <div className="text-right text-gray-200 mt-3">
        <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>

      {/* Clear Cart Button */}
      <div className="mt-4 text-center">
        <button
          onClick={() => dispatch(clearCart())} // Dispatch clearCart action
          className="px-4 py-2 font-semibold text-lg border border-red-600 text-gray-200 rounded-md hover:shadow-xl hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>

      {/* Back to Products Button */}
      <div className="mt-7 text-center">
        <button
          onClick={() => navigate('/products')}
          className="px-4 py-2 font-semibold text-lg border text-white rounded-md hover:shadow-xl hover:bg-[#010409]  transition"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default CartPage;
