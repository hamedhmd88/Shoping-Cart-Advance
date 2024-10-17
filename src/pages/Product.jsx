import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter"
import ProductList from "../components/ProductList"
import heroo from "../assets/logo/productList.jpg"
function Product() {
    const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-[#0D1117] w-full mt-10">
      <div className="relative w-full mt-10 shadow-2xl">
          <img
            src={heroo}
            alt="Main Product Image"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
            <h1 className="  text-white italic text-4xl md:text-5xl font-bold">
            Welcome to the Ultimate Shopping Experience
            </h1>
           
          </div>
        </div>
        <div className="p-8">
        <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                  <ProductList category={selectedCategory} />
        </div>
      
      </div>
    </>
  )
}

export default Product
