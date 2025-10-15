import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

// Dummy data
const categoryData = {
  "fast-fashion": [
    {
      id: 1,
      title: "Linen-blend Dress",
      description: "Stylish summer wear",
      price: 45,
      images: ["/assets/dress1.jpg"],
      quantity: 5,
    },
    {
      id: 2,
      title: "Casual Shirt",
      description: "Cotton casual wear",
      price: 25,
      images: ["/assets/shirt1.jpg"],
      quantity: 8,
    },
    {
      id: 3,
      title: "Denim Jacket",
      description: "Trendy blue jacket",
      price: 60,
      images: ["/assets/jacket1.jpg"],
      quantity: 3,
    },
  ],
};

function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const products = categoryData[name] || [];

  const [isCatOpen, setIsCatOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const allCategories = ["fast-fashion", "sports-wear", "shoes", "handbags"];

  const formatCategoryName = (str) =>
    str
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  
  return (
    <div className="min-h-screen w-full bg-gray-100 p-6">
      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-6">
        {formatCategoryName(name)} Collection
      </h2>

      {/* Layout with Sidebar + Products */}
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 bg-white border p-4 rounded shadow">
          {/* Filter by Category */}
          <div className="mb-6">
            <button
              onClick={() => setIsCatOpen(!isCatOpen)}
              className="flex items-center justify-between w-full text-lg font-semibold"
            >
              Filter by Category
              <FaChevronDown
                className={`transition-transform ${
                  isCatOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isCatOpen && (
              <ul className="mt-2 space-y-2 text-gray-600">
                {allCategories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => navigate(`/category/${cat}`)}
                    className="cursor-pointer hover:text-[#CC9966]"
                  >
                    {formatCategoryName(cat)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Filter by Price */}
          <div className="bg-red-500 mt-96">
            <button
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="flex items-center justify-between w-full text-lg font-semibold"
            >
              Filter by Price
              <FaChevronDown
                className={`transition-transform ${
                  isPriceOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isPriceOpen && (
              <h1 className="mt-2">
                <input type="range" min="0" max="600" className="w-full" />
                <p className="text-sm text-gray-500 mt-1">$0 - $600</p>
              </h1>
            )}
          </div>
        </div>
       {/* Products Grid */}
        <div className="flex-1">
          {products.length === 0 ? (
            <p>No products available in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  images={item.images}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
