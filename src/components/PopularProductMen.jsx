import React from "react";
import { fetchProducts } from "../api/api";
import Loader from "../loader/Loader";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Rating from "./Rating ";

import popular1 from "../assets/logo/popular2.png";
import popular2 from "../assets/logo/popular3.png";
import popular3 from "../assets/logo/popular4.png";
import popular4 from "../assets/logo/popular5.png";
import popular5 from "../assets/logo/popular1.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

function PopularProductMen() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery("products", fetchProducts);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const imagesPopular = [popular1, popular2, popular3, popular4, popular5];

  const getFirstFiveWords = (text) => {
    const words = text.split(" ");
    return words.slice(0, 5).join(" ");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <>
      <div className=" mt-12  flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full ">
          <div className="text-center mb-3 border-b-4 border-gary-300 drop-shadow-2xl py-2">
            <h1 className="text-3xl  font-bold text-gray-200 drop-shadow-2xl mb-4">
              {" "}
              Popular Products For Men{" "}
            </h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full max-w-6xl p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Show only first five products */}
          {products.slice(1, 4).map((product, index) => {
            const cartItem = cart.items.find((item) => item.id === product.id);
            const productQuantity = cartItem?.quantity || 0;
            return (
              <div
                key={product.id}
                className=" h-4/5 w-full border border-gray-300 rounded-xl shadow-inner shadow-gray-400 p-6 hover:shadow-inner hover:shadow-gray-300  drop-shadow-2xl transition-shadow"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={imagesPopular[index + 1]}
                    alt={product.title}
                    className="w-full h-1/2  object-contain mix-blend-multiply mb-4 rounded-2xl"
                  />
                  <h3 className="text-lg text-center font-bold mb-5 text-gray-400">
                    {getFirstFiveWords(product.title)}
                  </h3>
                  <div className=" w-full flex justify-center flex-col items-center gap-3">
                    <p className="text-gray-400">Price : ${product.price}</p>
                    {/* Display the rating */}
                    <Rating rating={product?.rating?.rate} />
                  </div>
                </Link>
                {/* Add to Cart button or quantity controls */}
                <div className="flex justify-center gap-4 items-center mt-8">
                  {productQuantity > 0 ? (
                    <>
                      <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="px-4 py-2 border  border-red-600 text-red-600 font-extrabold text-md rounded-md hover:bg-red-600 hover:text-gray-200 transition"
                      >
                        -
                      </button>
                      <span className=" text-gray-400 font-medium text-lg">
                        {productQuantity}
                      </span>
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="px-4 py-2 border  border-blue-600 text-blue-600 font-extrabold text-md rounded-md hover:bg-blue-600 hover:text-gray-200 transition"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="border font-semibold  text-gray-300 px-4 py-2 rounded-lg hover:bg-[#010409] transition"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default PopularProductMen;
