



























// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import img1 from "../assets/b22.jpg";
// import img2 from "../assets/ban.jpg";
// import img3 from "../assets/bann.jpg";

// function CategoryPage() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const pageTitle = state?.title || "Fast Fashion";

//   // Categories list (with quantity)
//   const categories = [
//     { name: "Clothing", count: 15 },
//     { name: "Shoes", count: 4 },
//     { name: "Handbags", count: 4 },
//     { name: "Women", count: 19 },
//     { name: "Men", count: 9 },
//     { name: "Accessories", count: 4 },
//   ];

//   // Products (category add ki hai har product k sath)
//   const products = [
//     {
//       title: "Stylish Shoes",
//       description:
//         "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
//       images: [img1, img2],
//       price: 99,
//       category: "Shoes",
//     },
//     {
//       title: "Leather Bag",
//       description:
//         "Morbi purus libero, faucibus adipiscing. Sed lectus eget est, vitae luctus metus libero eu augue.",
//       images: [img2, img3],
//       price: 149,
//       category: "Handbags",
//     },
//     {
//       title: "Smart Watch",
//       description:
//         "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
//       images: [img3, img1],
//       price: 199,
//       category: "Accessories",
//     },
//     {
//       title: "Men Jacket",
//       description: "Classic jacket for men, best for winters.",
//       images: [img1, img3],
//       price: 120,
//       category: "Men",
//     },
//   ];

//   // States
//   const [showCategories, setShowCategories] = useState(true);
//   const [priceRange, setPriceRange] = useState([0, 500]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Filtered Products
//   const filteredProducts = products.filter((product) => {
//     const matchCategory = selectedCategory
//       ? product.category === selectedCategory
//       : true;
//     const matchPrice =
//       product.price >= priceRange[0] && product.price <= priceRange[1];
//     return matchCategory && matchPrice;
//   });

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-6">
//       {/* Page Title */}
//       <h2 className="text-2xl bg-gray-100 h-36 flex justify-center items-center text-center font-bold mb-4 rounded">
//         {pageTitle}
//       </h2>

//       {/* Breadcrumb */}
//       <div className="w-full mb-4">
//         <div className="flex items-center gap-2 text-gray-600 text-sm md:text-lg">
//           <span
//             onClick={() => navigate("/")}
//             className="cursor-pointer hover:text-[#CC9966] transition text-sm md:text-base"
//           >
//             Home
//           </span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-3 h-3 md:w-4 md:h-4 text-gray-400"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//           <h1 className="text-sm md:text-base font-display text-gray-800">
//             {pageTitle}
//           </h1>
//         </div>
//         <div className="border-t border-gray-400 w-full mt-2"></div>
//       </div>

//       {/* Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Left Sidebar */}
//         <div className="col-span-1 bg-white p-4  sticky top-6 h-fit">
//           {/* Filter by Category */}
//           <div
//             className="flex justify-between items-center cursor-pointer  pb-2 mb-3"
//             onClick={() => setShowCategories(!showCategories)}
//           >
//             <h3 className="font-semibold text-gray-800">Filter by Category</h3>
//             {showCategories ? (
//               <FaChevronUp className="text-gray-600" />
//             ) : (
//               <FaChevronDown className="text-gray-600" />
//             )}
//           </div>

//           {showCategories && (
//             <ul className="space-y-2 mb-4">
//               {categories.map((cat, idx) => (
//                 <li
//                   key={idx}
//                   onClick={() => setSelectedCategory(cat.name)}
//                   className={`flex justify-between text-gray-700 cursor-pointer hover:text-[#CC9966] ${
//                     selectedCategory === cat.name
//                       ? "font-bold text-[#CC9966]"
//                       : ""
//                   }`}
//                 >
//                   <span>{cat.name}</span>
//                   <span className="text-sm text-gray-500">{cat.count}</span>
//                 </li>
//               ))}
//               {/* Reset button */}
//               <li
//                 onClick={() => setSelectedCategory(null)}
//                 className="text-sm text-blue-600 cursor-pointer mt-2"
//               >
//                 Clear Category
//               </li>
//             </ul>
//           )}

//           {/* Filter by Price */}
//           <div className="pt-3">
//             <h3 className="font-semibold text-gray-800 mb-2">
//               Filter by Price
//             </h3>
//             <div className="flex items-center gap-2">
//               <input
//                 type="range"
//                 min="0"
//                 max="500"
//                 value={priceRange[1]}
//                 onChange={(e) =>
//                   setPriceRange([priceRange[0], Number(e.target.value)])
//                 }
//                 className="w-full"
//               />
//             </div>
//             <p className="text-sm text-gray-600 mt-2">
//               ${priceRange[0]} - ${priceRange[1]}
//             </p>
//           </div>
//         </div>

//         {/* Right Side - Products */}
//         {/* Right Side - Products */}
//         <div className="col-span-3">
//           {/* Top Controls */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             {/* Items Count */}
//             <p className="text-gray-600 text-sm md:text-base">
//               {filteredProducts.length} Items
//             </p>

//             {/* Sort & View Options */}
//             <div className="flex items-center gap-4">
//               {/* Sort By Dropdown */}
//               <div className="flex items-center gap-2">
//                 <label htmlFor="sort" className="text-sm text-gray-600">
//                   Sort By
//                 </label>
//                 <select
//                   id="sort"
//                   className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
//                 >
//                   <option value="name">Name</option>
//                   <option value="priceLowHigh">Price: Low to High</option>
//                   <option value="priceHighLow">Price: High to Low</option>
//                   <option value="latest">Latest</option>
//                 </select>
//               </div>

//               {/* View Toggle Buttons */}
//               <div className="flex items-center gap-2">
//                 <button className="p-2 border rounded hover:bg-gray-100">
//                   {/* Grid Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 4.5h4.5v4.5H3.75V4.5zM9.75 4.5h4.5v4.5h-4.5V4.5zM15.75 4.5h4.5v4.5h-4.5V4.5zM3.75 10.5h4.5v4.5H3.75v-4.5zM9.75 10.5h4.5v4.5h-4.5v-4.5zM15.75 10.5h4.5v4.5h-4.5v-4.5zM3.75 16.5h4.5V21H3.75v-4.5zM9.75 16.5h4.5V21h-4.5v-4.5zM15.75 16.5h4.5V21h-4.5v-4.5z"
//                     />
//                   </svg>
//                 </button>
//                 <button className="p-2 border rounded hover:bg-gray-100">
//                   {/* List Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Product Grid */}
//           {filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {filteredProducts.map((product, idx) => (
//                 <ProductCard
//                   key={idx}
//                   title={product.title}
//                   description={product.description}
//                   images={product.images}
//                   price={product.price}
//                 />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">
//               No products found for selected filters.
//             </p>
//           )}
//         </div>
//         <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
  

//   {/* Right - View Toggle */}
//   <div className="flex items-center gap-2 md:ml-auto">
    
    
//   </div>
// </div>

//       </div>
//     </div>
//   );
// }

// export default CategoryPage;



























































































// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import img1 from "../assets/b22.jpg";
// import img2 from "../assets/ban.jpg";
// import img3 from "../assets/bann.jpg";

// function CategoryPage() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const pageTitle = state?.title || "Fast Fashion";

//   // Categories list (with quantity)
//   const categories = [
//     { name: "Clothing", count: 15 },
//     { name: "Shoes", count: 4 },
//     { name: "Handbags", count: 4 },
//     { name: "Women", count: 19 },
//     { name: "Men", count: 9 },
//     { name: "Accessories", count: 4 },
//   ];

//   // Products
//   const products = [
//     {
//       title: "Stylish Shoes",
//       description:
//         "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
//       images: [img1, img2],
//       price: 99,
//       category: "Shoes",
//     },
//     {
//       title: "Leather Bag",
//       description:
//         "Morbi purus libero, faucibus adipiscing. Sed lectus eget est, vitae luctus metus libero eu augue.",
//       images: [img2, img3],
//       price: 149,
//       category: "Handbags",
//     },
//     {
//       title: "Smart Watch",
//       description:
//         "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
//       images: [img3, img1],
//       price: 199,
//       category: "Accessories",
//     },
//     {
//       title: "Men Jacket",
//       description: "Classic jacket for men, best for winters.",
//       images: [img1, img3],
//       price: 120,
//       category: "Men",
//     },
//   ];

//   // States
//   const [showCategories, setShowCategories] = useState(true);
//   const [priceRange, setPriceRange] = useState([0, 500]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [view, setView] = useState("grid"); // "grid" or "list"

//   // Filtered Products
//   const filteredProducts = products.filter((product) => {
//     const matchCategory = selectedCategory
//       ? product.category === selectedCategory
//       : true;
//     const matchPrice =
//       product.price >= priceRange[0] && product.price <= priceRange[1];
//     return matchCategory && matchPrice;
//   });

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-6">
//       {/* Page Title */}
//       <h2 className="text-2xl bg-gray-100 h-36 flex justify-center items-center text-center font-bold mb-4 rounded">
//         {pageTitle}
//       </h2>

//       {/* Breadcrumb */}
//       <div className="w-full mb-4">
//         <div className="flex items-center gap-2 text-gray-600 text-sm md:text-lg">
//           <span
//             onClick={() => navigate("/")}
//             className="cursor-pointer hover:text-[#CC9966] transition text-sm md:text-base"
//           >
//             Home
//           </span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-3 h-3 md:w-4 md:h-4 text-gray-400"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//           <h1 className="text-sm md:text-base font-display text-gray-800">
//             {pageTitle}
//           </h1>
//         </div>
//         <div className="border-t border-gray-400 w-full mt-2"></div>
//       </div>

//       {/* Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Left Sidebar */}
//         <div className="col-span-1 bg-white p-4 sticky top-6 h-fit">
//           {/* Filter by Category */}
//           <div
//             className="flex justify-between items-center cursor-pointer pb-2 mb-3"
//             onClick={() => setShowCategories(!showCategories)}
//           >
//             <h3 className="font-semibold text-gray-800">Filter by Category</h3>
//             {showCategories ? (
//               <FaChevronUp className="text-gray-600" />
//             ) : (
//               <FaChevronDown className="text-gray-600" />
//             )}
//           </div>

//           {showCategories && (
//             <ul className="space-y-2 mb-4">
//               {categories.map((cat, idx) => (
//                 <li
//                   key={idx}
//                   onClick={() => setSelectedCategory(cat.name)}
//                   className={`flex justify-between text-gray-700 cursor-pointer hover:text-[#CC9966] ${
//                     selectedCategory === cat.name
//                       ? "font-bold text-[#CC9966]"
//                       : ""
//                   }`}
//                 >
//                   <span>{cat.name}</span>
//                   <span className="text-sm text-gray-500">{cat.count}</span>
//                 </li>
//               ))}
//               <li
//                 onClick={() => setSelectedCategory(null)}
//                 className="text-sm text-blue-600 cursor-pointer mt-2"
//               >
//                 Clear Category
//               </li>
//             </ul>
//           )}

//           {/* Filter by Price */}
//           <div className="pt-3">
//             <h3 className="font-semibold text-gray-800 mb-2">
//               Filter by Price
//             </h3>
//             <div className="flex items-center gap-2">
//               <input
//                 type="range"
//                 min="0"
//                 max="500"
//                 value={priceRange[1]}
//                 onChange={(e) =>
//                   setPriceRange([priceRange[0], Number(e.target.value)])
//                 }
//                 className="w-full"
//               />
//             </div>
//             <p className="text-sm text-gray-600 mt-2">
//               ${priceRange[0]} - ${priceRange[1]}
//             </p>
//           </div>
//         </div>

//         {/* Right Side - Products */}
//         <div className="col-span-3">
//           {/* Top Controls */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             {/* Items Count */}
//             <p className="text-gray-600 text-sm md:text-base">
//               {filteredProducts.length} Items
//             </p>

//             {/* Sort & View Options */}
//             <div className="flex items-center gap-4">
//               {/* Sort By Dropdown */}
//               <div className="flex items-center gap-2">
//                 <label htmlFor="sort" className="text-sm text-gray-600">
//                   Sort By
//                 </label>
//                 <select
//                   id="sort"
//                   className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
//                 >
//                   <option value="name">Name</option>
//                   <option value="priceLowHigh">Price: Low to High</option>
//                   <option value="priceHighLow">Price: High to Low</option>
//                   <option value="latest">Latest</option>
//                 </select>
//               </div>

//               {/* View Toggle Buttons */}
//               <div className="flex items-center gap-2">
//                 <button
//                   className={`p-2 border rounded hover:bg-gray-100 ${
//                     view === "grid" ? "bg-gray-200" : ""
//                   }`}
//                   onClick={() => setView("grid")}
//                 >
//                   {/* Grid Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 4.5h4.5v4.5H3.75V4.5zM9.75 4.5h4.5v4.5h-4.5V4.5zM15.75 4.5h4.5v4.5h-4.5V4.5zM3.75 10.5h4.5v4.5H3.75v-4.5zM9.75 10.5h4.5v4.5h-4.5v-4.5zM15.75 10.5h4.5v4.5h-4.5v-4.5zM3.75 16.5h4.5V21H3.75v-4.5zM9.75 16.5h4.5V21h-4.5v-4.5zM15.75 16.5h4.5V21h-4.5v-4.5z"
//                     />
//                   </svg>
//                 </button>
//                 <button
//                   className={`p-2 border rounded hover:bg-gray-100 ${
//                     view === "list" ? "bg-gray-200" : ""
//                   }`}
//                   onClick={() => setView("list")}
//                 >
//                   {/* List Icon */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-4"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Product Grid/List */}
//           {filteredProducts.length > 0 ? (
//             <div
//               className={`${
//                 view === "grid"
//                   ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//                   : "flex flex-col gap-4"
//               }`}
//             >
//               {filteredProducts.map((product, idx) => (
//                 <ProductCard
//                   key={idx}
//                   title={product.title}
//                   description={product.description}
//                   images={product.images}
//                   price={product.price}
//                   view={view} // optional: style differently in ProductCard if needed
//                 />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">
//               No products found for selected filters.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;


















































































































import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import img1 from "../assets/b22.jpg";
import img2 from "../assets/ban.jpg";
import img3 from "../assets/bann.jpg";

function CategoryPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const pageTitle = state?.title || "Fast Fashion";

  const categories = [
    { name: "Clothing", count: 15 },
    { name: "Shoes", count: 4 },
    { name: "Handbags", count: 4 },
    { name: "Women", count: 19 },
    { name: "Men", count: 9 },
    { name: "Accessories", count: 4 },
  ];

  const products = [
    {
      title: "Stylish Shoes",
      description:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      images: [img1, img2],
      price: 99,
      category: "Shoes",
    },
    {
      title: "Leather Bag",
      description:
        "Morbi purus libero, faucibus adipiscing. Sed lectus eget est, vitae luctus metus libero eu augue.",
      images: [img2, img3],
      price: 149,
      category: "Handbags",
    },
    {
      title: "Smart Watch",
      description:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      images: [img3, img1],
      price: 199,
      category: "Accessories",
    },
    {
      title: "Men Jacket",
      description: "Classic jacket for men, best for winters.",
      images: [img1, img3],
      price: 120,
      category: "Men",
    },
  ];

  const [showCategories, setShowCategories] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [view, setView] = useState("grid"); // "grid" or "list"

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-6">
      <h2 className="text-2xl bg-gray-100 h-36 flex justify-center items-center text-center font-bold mb-4 rounded">
        {pageTitle}
      </h2>

      {/* Breadcrumb */}
      <div className="w-full mb-4">
        <div className="flex items-center gap-2 text-gray-600 text-sm md:text-lg">
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-[#CC9966] transition text-sm md:text-base"
          >
            Home
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-3 md:w-4 md:h-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <h1 className="text-sm md:text-base font-display text-gray-800">
            {pageTitle}
          </h1>
        </div>
        <div className="border-t border-gray-400 w-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 bg-white p-4 sticky top-6 h-fit">
          <div
            className="flex justify-between items-center cursor-pointer pb-2 mb-3"
            onClick={() => setShowCategories(!showCategories)}
          >
            <h3 className="font-semibold text-gray-800">Filter by Category</h3>
            {showCategories ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </div>

          {showCategories && (
            <ul className="space-y-2 mb-4">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex justify-between text-gray-700 cursor-pointer hover:text-[#CC9966] ${
                    selectedCategory === cat.name
                      ? "font-bold text-[#CC9966]"
                      : ""
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-sm text-gray-500">{cat.count}</span>
                </li>
              ))}
              <li
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-blue-600 cursor-pointer mt-2"
              >
                Clear Category
              </li>
            </ul>
          )}

          {/* Filter by Price */}
          <div className="pt-3">
            <h3 className="font-semibold text-gray-800 mb-2">
              Filter by Price
            </h3>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-2">
              ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-gray-600 text-sm md:text-base">
              {filteredProducts.length} Items
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-gray-600">
                  Sort By
                </label>
                <select
                  id="sort"
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
                >
                  <option value="name">Name</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                  <option value="latest">Latest</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  className={`p-2 border rounded hover:bg-gray-100 ${
                    view === "grid" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setView("grid")}
                >
                  {/* Grid Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 4.5h4.5v4.5H3.75V4.5zM9.75 4.5h4.5v4.5h-4.5V4.5zM15.75 4.5h4.5v4.5h-4.5V4.5zM3.75 10.5h4.5v4.5H3.75v-4.5zM9.75 10.5h4.5v4.5h-4.5v-4.5zM15.75 10.5h4.5v4.5h-4.5v-4.5zM3.75 16.5h4.5V21H3.75v-4.5zM9.75 16.5h4.5V21h-4.5v-4.5zM15.75 16.5h4.5V21h-4.5v-4.5z"
                    />
                  </svg>
                </button>
                <button
                  className={`p-2 border rounded hover:bg-gray-100 ${
                    view === "list" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setView("list")}
                >
                  {/* List Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid/List */}
          {filteredProducts.length > 0 ? (
            <div
              className={`${
                view === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
              }`}
            >
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={idx}
                  title={product.title}
                  description={product.description}
                  images={product.images}
                  price={product.price}
                  view={view} // Pass view to adjust layout inside ProductCard
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No products found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
