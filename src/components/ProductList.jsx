import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/api";
import useSearch from "../hooks/useSearch";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import Rating from "./Rating ";
import Loader from "../loader/Loader";

const ProductList = ({ category }) => {
  const { data, isLoading, error } = useQuery("products", fetchProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("none");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { search, setSearch, sortedItems } = useSearch(
    data || [],
    searchTerm,
    category,
    sortOption
  );

  const getFirstFiveWords = (text) => {
    const words = text.split(" ");
    return words.slice(0, 3).join(" ");
  };

  const getFirstNineWordsDes = (des) => {
    const words = des.split(" ");
    return words.slice(0, 7).join(" ");
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error fetching products</div>;

  return (
    <>
      <div className="text-gray-300">
        <div className="flex flex-col gap-2 justify-around mb-6 md:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full md:w-1/3 p-2 mb-4  bg-transparent text-gray-200 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-100 placeholder:text-gray-200"
          />

          <div className="mb-4">
            <label
              htmlFor="sort"
              className="font-semibold text-grayslate-200 drop-shadow-2xl mr-2"
            >
              Sort by price
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 bg-gray-400 text-gray-800  border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
            >
              <option className=" bg-transparent" value="all">
                All
              </option>
              <option className=" bg-transparent" value="lowToHigh">
                Lowest to Highest
              </option>
              <option className=" bg-transparent" value="highToLow">
                Highest to Lowest
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedItems.map((product) => {
            const cartItem = cart.items.find((item) => item.id === product.id);
            const productQuantity = cartItem?.quantity || 0;

            return (
              <div
                key={product.id}
                className=" h-[400px] border-2 bg-gray-300 border-gray-700 rounded-xl shadow-lg p-4 hover:shadow-2xl drop-shadow-2xl transition-shadow"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-1/2 opacity- object-contain mix-blend-multiply bg-transparent mb-4 rounded-2xl"
                  />
                  <h3 className="text-lg font-bold mb-2 text-slate-800">
                    {getFirstFiveWords(product.title)}
                  </h3>
                  <div className="w-full flex justify-between">
                    <p className="text-slate-800">Price : ${product.price}</p>
                    <Rating rating={product?.rating?.rate} />
                  </div>
                  <p className="mt-3 text-sm text-slate-800">
                    {getFirstNineWordsDes(product.description)} .....
                  </p>
                </Link>

                {/* Add to Cart button or quantity controls */}
                <div className="flex justify-center gap-4 items-center mt-4">
                  {productQuantity > 0 ? (
                    <>
                      <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="px-3 py-1 text-md bg-red-500 text-white rounded-md hover:bg-red-700 transition"
                      >
                        -
                      </button>
                      <span className="text-slate-800">{productQuantity}</span>
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="px-3 py-1 text-md bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="px-3 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
