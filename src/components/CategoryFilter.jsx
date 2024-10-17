// src/components/CategoryFilter.js
import React from 'react';

const categories = ['All', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-8 mt-5">
      <h3 className="text-lg text-gray-200 drop-shadow-2xl font-semibold mb-2">Filter by Category</h3>
      <div className="flex space-x-1 md:space-x-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={`px-4 py-2 rounded-md font-semibold border border-gray-200 ${
              selectedCategory === category || (category === 'All' && !selectedCategory)
                ? 'bg-gray-400 text-gray-800'
                : 'bg-transparent text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
