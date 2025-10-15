// import React, { useState } from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { IoGitCompareOutline } from "react-icons/io5";

// function ProductCard({ title, description, images = [], price }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative w-full sm:w-80 h-[360px] sm:h-[480px] font-display bg-white overflow-hidden
//                  hover:shadow-xl transition-transform duration-300"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image */}
//       <div className="relative w-full h-48 sm:h-72 overflow-hidden">
//         <img
//           src={isHovered && images[1] ? images[1] : images[0]}
//           alt={title}
//           className="w-full h-full object-cover transition-all duration-500"
//         />

//         {/* Top Right Icons with Right-to-Left Tooltip */}
//         {isHovered && (
//           <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-2">
//             {/* Heart */}
//             <div className="relative group">
//               <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                 <FaHeart className="text-lg" />
//               </button>
//               <span
//                 className="absolute right-full top-1/2 -translate-y-1/2
//                                opacity-0 group-hover:opacity-100
//                                translate-x-2 group-hover:-translate-x-0
//                                bg-[#CC9966] text-white text-xs rounded px-2 py-1
//                                transition-all duration-300 whitespace-nowrap"
//               >
//                 Add to Wishlist
//               </span>
//             </div>

//             {/* Compare */}
//             <div className="relative group">
//               <button className="p-2 rounded-full  bg-[#CC9966] hover:text-white transition">
//                 <IoGitCompareOutline className="text-lg" />
//               </button>
//               <span
//                 className="absolute right-full top-1/2 -translate-y-1/2
//                                opacity-0 group-hover:opacity-100
//                                translate-x-2 group-hover:-translate-x-0
//                                bg-[#CC9966] text-white text-xs rounded px-2 py-1
//                                transition-all duration-300 whitespace-nowrap"
//               >
//                 Compare this product
//               </span>
//             </div>
//           </div>
//         )}

//         {/* Sliding Add to Cart Button */}
//         <div
//           className={`absolute bottom-0 left-0 w-full h-10 sm:h-12 bg-[#CC9966] bg-opacity-90 flex items-center justify-center
//                      transform transition-transform duration-500 ${
//                        isHovered ? "translate-y-0" : "translate-y-full"
//                      }`}
//         >
//           <button
//             className="group flex items-center gap-2 px-4 py-2 text-white font-medium
//                        transition-all duration-300 hover:bg-green-600 w-full h-full justify-center"
//           >
//             <FaShoppingCart className="text-lg hidden group-hover:block" />
//             ADD TO CART
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-2 sm:p-4 flex flex-col justify-between h-[120px] sm:h-[160px]">
//         <div>
//           <h2 className="text-md sm:text-lg font-bold hover:text-[#CC9966] text-[#333333] truncate">
//             {title}
//           </h2>
//           <p className="text-xs sm:text-sm text-[#777777] hover:text-[#CC9966] mt-1 sm:mt-2 truncate">
//             {description}
//           </p>
//           <p className="text-[14px] sm:text-xl mt-1 sm:mt-2 text-[#CC9966]">
//             ${price}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




// import React, { useState } from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { IoGitCompareOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom"; // ✅ Import

// function ProductCard({ title, description, images = [], price }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // 🔹 Click handler
//   const handleCardClick = () => {
//     navigate("/product-details", {
//       state: { title, description, images, price },
//     });
//   };

//   return (
//     <div
//       className="relative w-full sm:w-80 h-[360px] sm:h-[480px] font-display bg-white overflow-hidden
//                  hover:shadow-xl transition-transform duration-300 cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleCardClick} // ✅ Click par details page par le jaye
//     >
//       {/* Image */}
//       <div className="relative w-full h-48 sm:h-72 overflow-hidden">
//         <img
//           src={isHovered && images[1] ? images[1] : images[0]}
//           alt={title}
//           className="w-full h-full object-cover transition-all duration-500"
//         />

//         {/* Top Right Icons */}
//         {isHovered && (
//           <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-2">
//             {/* Heart */}
//             <div className="relative group">
//               <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                 <FaHeart className="text-lg" />
//               </button>
//               <span className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0 bg-[#CC9966] text-white text-xs rounded px-2 py-1 transition-all duration-300 whitespace-nowrap">
//                 Add to Wishlist
//               </span>
//             </div>

//             {/* Compare */}
//             <div className="relative group">
//               <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                 <IoGitCompareOutline className="text-lg" />
//               </button>
//               <span className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0 bg-[#CC9966] text-white text-xs rounded px-2 py-1 transition-all duration-300 whitespace-nowrap">
//                 Compare this product
//               </span>
//             </div>
//           </div>
//         )}

//         {/* Add to Cart Button */}
//         <div
//           className={`absolute bottom-0 left-0 w-full h-10 sm:h-12 bg-[#CC9966] bg-opacity-90 flex items-center justify-center
//                      transform transition-transform duration-500 ${
//                        isHovered ? "translate-y-0" : "translate-y-full"
//                      }`}
//         >
//           <button
//             className="group flex items-center gap-2 px-4 py-2 text-white font-medium
//                        transition-all duration-300 hover:bg-green-300 w-full h-full justify-center"
//           >
//             <FaShoppingCart className="text-lg hidden group-hover:block" />
//             ADD TO CART
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-2 sm:p-4 flex flex-col justify-between h-[120px] sm:h-[160px]">
//         <div>
//           <h2 className="text-md sm:text-lg font-bold hover:text-[#CC9966] text-[#333333] truncate">
//             {title}
//           </h2>
//           <p className="text-xs sm:text-sm text-[#777777] hover:text-[#CC9966] mt-1 sm:mt-2 truncate">
//             {description}
//           </p>
//           <p className="text-[14px] sm:text-xl mt-1 sm:mt-2 text-[#CC9966]">
//             ${price}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;






// import React, { useState } from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { IoGitCompareOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// function ProductCard({ title, description, images = [], price }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // Navigate to Product Details Page
//   const handleCardClick = () => {
//     navigate("/product-details", {
//       state: { title, description, images, price },
//     });
//   };

//   return (
//     <div
//       className="relative w-full sm:w-72 md:w-80 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px] bg-white overflow-hidden
//                  hover:shadow-xl transition-transform duration-300 cursor-pointer font-display"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleCardClick}
//     >
//       {/* Image */}
//       <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72 overflow-hidden">
//         <img
//           src={isHovered && images[1] ? images[1] : images[0]}
//           alt={title}
//           className="w-full h-full object-cover transition-all duration-500"
//         />

//         {/* Top Right Icons */}
//         {isHovered && (
//           <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 flex flex-col gap-2">
//             {/* Wishlist */}
//             <div className="relative group">
//               <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                 <FaHeart className="text-lg sm:text-xl" />
//               </button>
//               <span
//                 className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0
//                                bg-[#CC9966] text-white text-xs sm:text-sm rounded px-2 py-1 transition-all duration-300 whitespace-nowrap"
//               >
//                 Add to Wishlist
//               </span>
//             </div>

//             {/* Compare */}
//             <div className="relative group">
//               <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                 <IoGitCompareOutline className="text-lg sm:text-xl" />
//               </button>
//               <span
//                 className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0
//                                bg-[#CC9966] text-white text-xs sm:text-sm rounded px-2 py-1 transition-all duration-300 whitespace-nowrap"
//               >
//                 Compare this product
//               </span>
//             </div>
//           </div>
//         )}

//         {/* Add to Cart */}
//         <div
//           className={`absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 bg-[#CC9966] bg-opacity-90 flex items-center justify-center
//                      transform transition-transform duration-500 ${
//                        isHovered ? "translate-y-0" : "translate-y-full"
//                      }`}
//         >
//           <button className="group flex items-center gap-2 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-green-300 w-full h-full justify-center text-sm sm:text-base">
//             <FaShoppingCart className="text-lg sm:text-xl hidden group-hover:block" />
//             ADD TO CART
//           </button>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-2 sm:p-4 md:p-4 flex flex-col justify-between h-[120px] sm:h-[140px] md:h-[160px]">
//         <div>
//           <h2 className="text-sm sm:text-md md:text-lg font-bold hover:text-[#CC9966] text-[#333333] truncate">
//             {title}
//           </h2>
//           <p className="text-xs sm:text-sm md:text-base text-[#777777] hover:text-[#CC9966] mt-1 sm:mt-2 truncate">
//             {description}
//           </p>
//           <p className="text-[14px] sm:text-lg md:text-xl mt-1 sm:mt-2 text-[#CC9966]">
//             ${price}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;





// import React, { useState } from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { IoGitCompareOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// function ProductCard({
//   title,
//   description,
//   images = [],
//   price,
//   view = "grid",
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate("/product-details", {
//       state: { title, description, images, price },
//     });
//   };

  

//   // List view classes
//   const listViewClasses =
//     "flex flex-col sm:flex-row items-center justify-between gap-4 p-4 h-auto";

//   const gridViewClasses =
//     "relative w-full sm:w-72 md:w-80 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px]";

//   return (
//     <div
//       className={`bg-white hover:shadow-xl transition-transform duration-300 cursor-pointer font-display ${
//         view === "list" ? listViewClasses : gridViewClasses
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleCardClick}
//     >
//       {/* Image */}
//       <div
//         className={`relative overflow-hidden ${
//           view === "list"
//             ? "w-full sm:w-1/4 h-48 sm:h-32 md:h-40"
//             : "w-full h-48 sm:h-60 md:h-72 lg:h-72"
//         }`}
//       >
//         <img
//           src={isHovered && images[1] ? images[1] : images[0]}
//           alt={title}
//           className="w-full h-full object-cover transition-all duration-500"
//         />

//         {/* Top Right Icons */}
//         {view === "grid" && isHovered && (
//           <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 flex flex-col gap-2">
//             <div className="relative group">
//               <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                 <FaHeart className="text-lg sm:text-xl" />
//               </button>
//               <span className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0 bg-[#CC9966] text-white text-xs sm:text-sm rounded px-2 py-1 transition-all duration-300 whitespace-nowrap">
//                 Add to Wishlist
//               </span>
//             </div>
//             <div className="relative group">
//               <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                 <IoGitCompareOutline className="text-lg sm:text-xl" />
//               </button>
//               <span className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0 bg-[#CC9966] text-white text-xs sm:text-sm rounded px-2 py-1 transition-all duration-300 whitespace-nowrap">
//                 Compare this product
//               </span>
//             </div>
//           </div>
//         )}

//         {/* Add to Cart */}
//         <div
//           className={`absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 bg-[#CC9966] bg-opacity-90 flex items-center justify-center transform transition-transform duration-500 ${
//             view === "grid"
//               ? isHovered
//                 ? "translate-y-0"
//                 : "translate-y-full"
//               : ""
//           }`}
//         >
//           <button className="group flex items-center gap-2 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-green-300 w-full h-full justify-center text-sm sm:text-base">
//             <FaShoppingCart className="text-lg sm:text-xl hidden group-hover:block" />
//             ADD TO CART
//           </button>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div
//         className={`${
//           view === "list"
//             ? "flex-1 px-4 py-2"
//             : "p-2 sm:p-4 md:p-4 flex flex-col justify-between h-[120px] sm:h-[140px] md:h-[160px]"
//         }`}
//       >
//         <h2 className="text-sm sm:text-md md:text-lg font-bold hover:text-[#CC9966] text-[#333333] truncate">
//           {title}
//         </h2>
//         <p className="text-xs sm:text-sm md:text-base text-[#777777] hover:text-[#CC9966] mt-1 sm:mt-2 truncate">
//           {description}
//         </p>
//         <p className="text-[14px] sm:text-lg md:text-xl mt-1 sm:mt-2 text-[#CC9966]">
//           ${price}
//         </p>
//         {view === "list" && (
//           <button className="mt-2 px-4 py-2 bg-[#CC9966] text-white rounded hover:bg-[#b38655]">
//             Add to Cart
//           </button>
        
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;



























// import React, { useState } from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { IoGitCompareOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// function ProductCard({
//   title,
//   description,
//   images = [],
//   price,
//   view = "grid",
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showForm, setShowForm] = useState(false); // 🟢 form popup control
//   const navigate = useNavigate();

//   // 🟢 image click → product details
//   const handleCardClick = () => {
//     navigate("/product-details", {
//       state: { title, description, images, price },
//     });
//   };

//   // 🟢 Add to cart → open popup form
//   const handleFormOpen = (e) => {
//     e.stopPropagation();
//     setShowForm(true);
//   };

//   // 🟢 close form
//   const handleFormClose = (e) => {
//     e.stopPropagation();
//     setShowForm(false);
//   };

//   const listViewClasses =
//     "flex flex-col sm:flex-row items-center justify-between gap-4 p-4 h-auto";
//   const gridViewClasses =
//     "relative w-full sm:w-72 md:w-80 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px]";

//   return (
//     <>
//       <div
//         className={`bg-white hover:shadow-xl transition-transform duration-300 cursor-pointer font-display ${
//           view === "list" ? listViewClasses : gridViewClasses
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleCardClick}
//       >
//         {/* Image */}
//         <div
//           className={`relative overflow-hidden ${
//             view === "list"
//               ? "w-full sm:w-1/4 h-48 sm:h-32 md:h-40"
//               : "w-full h-48 sm:h-60 md:h-72 lg:h-72"
//           }`}
//         >
//           <img
//             src={isHovered && images[1] ? images[1] : images[0]}
//             alt={title}
//             className="w-full h-full object-cover transition-all duration-500"
//           />

//           {/* Top Right Icons */}
//           {view === "grid" && isHovered && (
//             <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 flex flex-col gap-2">
//               <div className="relative group">
//                 <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                   <FaHeart className="text-lg sm:text-xl" />
//                 </button>
//                 <span className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0 bg-[#CC9966] text-white text-xs sm:text-sm rounded px-2 py-1 transition-all duration-300 whitespace-nowrap">
//                   Add to Wishlist
//                 </span>
//               </div>
//               <div className="relative group">
//                 <button className="p-2 rounded-full bg-[#CC9966] hover:text-white transition">
//                   <IoGitCompareOutline className="text-lg sm:text-xl" />
//                 </button>
//                 <span className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:-translate-x-0 bg-[#CC9966] text-white text-xs sm:text-sm rounded px-2 py-1 transition-all duration-300 whitespace-nowrap">
//                   Compare this product
//                 </span>
//               </div>
//             </div>
//           )}

//           {/* Add to Cart */}
//           <div
//             className={`absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 bg-[#CC9966] bg-opacity-90 flex items-center justify-center transform transition-transform duration-500 ${
//               view === "grid"
//                 ? isHovered
//                   ? "translate-y-0"
//                   : "translate-y-full"
//                 : ""
//             }`}
//           >
//             <button
//               onClick={handleFormOpen} // 🟢 popup open
//               className="group flex items-center gap-2 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-green-300 w-full h-full justify-center text-sm sm:text-base"
//             >
//               <FaShoppingCart className="text-lg sm:text-xl hidden group-hover:block" />
//               ADD TO CART
//             </button>
//           </div>
//         </div>

//         {/* Product Info */}
//         <div
//           className={`${
//             view === "list"
//               ? "flex-1 px-4 py-2"
//               : "p-2 sm:p-4 md:p-4 flex flex-col justify-between h-[120px] sm:h-[140px] md:h-[160px]"
//           }`}
//         >
//           <h2 className="text-sm sm:text-md md:text-lg font-bold hover:text-[#CC9966] text-[#333333] truncate">
//             {title}
//           </h2>
//           <p className="text-xs sm:text-sm md:text-base text-[#777777] hover:text-[#CC9966] mt-1 sm:mt-2 truncate">
//             {description}
//           </p>
//           <p className="text-[14px] sm:text-lg md:text-xl mt-1 sm:mt-2 text-[#CC9966]">
//             ${price}
//           </p>

//           {view === "list" && (
//             <button
//               onClick={handleFormOpen} // 🟢 popup open
//               className="mt-2 px-4 py-2 bg-[#CC9966] text-white rounded hover:bg-[#b38655]"
//             >
//               Add to Cart
//             </button>
//           )}
//         </div>
//       </div>

//       {/* 🟢 Popup Form */}
//       {showForm && (
//         <div
//           onClick={handleFormClose}
//           className="fixed inset-0  bg-opacity-40 flex justify-center items-center z-50"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white rounded-lg p-6 w-[90%] sm:w-[400px] shadow-lg relative"
//           >
//             <button
//               onClick={handleFormClose}
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
//             >
//               ✕
//             </button>
//             <h2 className="text-2xl font-bold text-[#CC9966] mb-4 text-center">
//               Add to Cart Form
//             </h2>

//             {/* 🟡 Values from product */}
//             <div className="mb-4 flex flex-col gap-2 text-gray-700">
//               <p>
//                 <strong>Product:</strong> {title}
//               </p>
//               <p>
//                 <strong>Price:</strong> ${price}
//               </p>
//             </div>

//             {/* 🟢 Example input */}
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="border border-gray-300 rounded px-3 py-2 w-full mb-3 focus:outline-[#CC9966]"
//             />
//             <input
//               type="number"
//               placeholder="Quantity"
//               className="border border-gray-300 rounded px-3 py-2 w-full mb-4 focus:outline-[#CC9966]"
//             />

//             <button className="bg-[#CC9966] text-white px-4 py-2 rounded w-full hover:bg-[#b38655]">
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ProductCard;
































































// import React, { useState } from "react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { IoGitCompareOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// import FormPopup from "./FormPopup"; // ✅ import added

// function ProductCard({
//   title,
//   description,
//   images = [],
//   price,
//   view = "grid",
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate("/product-details", {
//       state: { title, description, images, price },
//     });
//   };

//   const handleFormOpen = (e) => {
//     e.stopPropagation();
//     setShowForm(true);
//   };

//   const handleFormClose = (e) => {
//     e.stopPropagation();
//     setShowForm(false);
//   };

//   const listViewClasses =
//     "flex flex-col sm:flex-row items-center justify-between gap-4 p-4 h-auto";
//   const gridViewClasses =
//     "relative w-full sm:w-72 md:w-80 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px]";

//   return (
//     <>
//       <div
//         className={`bg-white hover:shadow-xl transition-transform duration-300 cursor-pointer font-display ${
//           view === "list" ? listViewClasses : gridViewClasses
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={handleCardClick}
//       >
//         {/* Image */}
//         <div
//           className={`relative overflow-hidden ${
//             view === "list"
//               ? "w-full sm:w-1/4 h-48 sm:h-32 md:h-40"
//               : "w-full h-48 sm:h-60 md:h-72 lg:h-72"
//           }`}
//         >
//           <img
//             src={isHovered && images[1] ? images[1] : images[0]}
//             alt={title}
//             className="w-full h-full object-cover transition-all duration-500"
//           />

//           {/* Add to Cart Button */}
//           <div
//             className={`absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 bg-[#CC9966] bg-opacity-90 flex items-center justify-center transform transition-transform duration-500 ${
//               view === "grid"
//                 ? isHovered
//                   ? "translate-y-0"
//                   : "translate-y-full"
//                 : ""
//             }`}
//           >
//             <button
//               onClick={handleFormOpen}
//               className="group flex items-center gap-2 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-green-300 w-full h-full justify-center text-sm sm:text-base"
//             >
//               <FaShoppingCart className="text-lg sm:text-xl hidden group-hover:block" />
//               ADD TO CART
//             </button>
//           </div>
//         </div>

//         {/* Product Info */}
//         <div
//           className={`${
//             view === "list"
//               ? "flex-1 px-4 py-2"
//               : "p-2 sm:p-4 md:p-4 flex flex-col justify-between h-[120px] sm:h-[140px] md:h-[160px]"
//           }`}
//         >
//           <h2 className="text-sm sm:text-md md:text-lg font-bold hover:text-[#CC9966] text-[#333333] truncate">
//             {title}
//           </h2>
//           <p className="text-xs sm:text-sm md:text-base text-[#777777] hover:text-[#CC9966] mt-1 sm:mt-2 truncate">
//             {description}
//           </p>
//           <p className="text-[14px] sm:text-lg md:text-xl mt-1 sm:mt-2 text-[#CC9966]">
//             ${price}
//           </p>
//         </div>
//       </div>

//       {/* ✅ Popup Form Component */}
//       {showForm && (
//         <FormPopup onClose={handleFormClose} title={title} price={price} />
//       )}
//     </>
//   );
// }

// export default ProductCard;








































import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import FormPopup from "./FormPopup"; // ✅ import added

function ProductCard({
  title,
  description,
  images = [],
  price,
  view = "grid",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/product-details", {
      state: { title, description, images, price },
    });
  };

  const handleFormOpen = (e) => {
    e.stopPropagation();
    setShowForm(true);
  };

  const handleFormClose = (e) => {
    e.stopPropagation();
    setShowForm(false);
  };

  const listViewClasses =
    "flex flex-col sm:flex-row items-center justify-between gap-4 p-4 h-auto";
  const gridViewClasses =
    "relative w-full sm:w-72 md:w-80 lg:w-80 h-[360px] sm:h-[420px] md:h-[480px]";

  return (
    <>
      <div
        className={`bg-white hover:shadow-xl transition-transform duration-300 cursor-pointer font-display ${
          view === "list" ? listViewClasses : gridViewClasses
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            view === "list"
              ? "w-full sm:w-1/4 h-48 sm:h-32 md:h-40"
              : "w-full h-48 sm:h-60 md:h-72 lg:h-72"
          }`}
        >
          <img
            src={isHovered && images[1] ? images[1] : images[0]}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Add to Cart Button */}
          <div
            className={`absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 bg-[#CC9966] bg-opacity-90 flex items-center justify-center transform transition-transform duration-500 ${
              view === "grid"
                ? isHovered
                  ? "translate-y-0"
                  : "translate-y-full"
                : ""
            }`}
          >
            <button
              onClick={handleFormOpen}
              className="group flex items-center gap-2 px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-green-300 w-full h-full justify-center text-sm sm:text-base"
            >
              <FaShoppingCart className="text-lg sm:text-xl hidden group-hover:block" />
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div
          className={`${
            view === "list"
              ? "flex-1 px-4 py-2"
              : "p-2 sm:p-4 md:p-4 flex flex-col justify-between h-[120px] sm:h-[140px] md:h-[160px]"
          }`}
        >
          <h2 className="text-sm sm:text-md md:text-lg font-bold hover:text-[#CC9966] text-[#333333] truncate">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#777777] hover:text-[#CC9966] mt-1 sm:mt-2 truncate">
            {description}
          </p>
          <p className="text-[14px] sm:text-lg md:text-xl mt-1 sm:mt-2 text-[#CC9966]">
            ${price}
          </p>
        </div>
      </div>

      {/* ✅ Popup Form Component */}
      {showForm && (
        <FormPopup onClose={handleFormClose} title={title} price={price} />
      )}
    </>
  );
}

export default ProductCard;


