// import React, { useState } from "react";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";

// function FormPopup({ onClose, title = "Product Name", price = 99.99 }) {
//   const [quantity, setQuantity] = useState(1);

//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50">
//       <div className="bg-white h-72 p-6 w-[420px] relative">
//         {/* 🔸 Top Section */}
//         <div className="flex justify-between items-center mb-3">
//           <h2 className="text-2xl  text-[#7777777]">{title}</h2>

//           {/* 🔹 Close Button (× → – on hover) */}
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-[#CC9966] text-3xl font-bold leading-none transition-all duration-300 relative group"
//           >
//             {/* Cross by default */}
//             <span className="block group-hover:opacity-0 transition-all duration-200">
//               ×
//             </span>
//             {/* Minus on hover */}
//             <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
//               –
//             </span>
//           </button>
//         </div>

//         {/* 🔸 Price */}
//         <p className="text-gray-700 font-medium mb-4 text-lg">
//           Price:{" "}
//           <span className="text-[#CC9966] font-bold text-xl">${price}</span>
//         </p>

//         {/* 🔸 Quantity */}
//         <div className="flex items-center justify-between mb-6">
//           <span className="text-gray-700 font-medium text-lg">Qty:</span>
//           <div className="flex items-center border border-gray-300 rounded overflow-hidden">
//             <button
//               onClick={handleDecrease}
//               className="px-3 py-2 text-gray-600 hover:text-white hover:bg-[#CC9966] transition text-base"
//             >
//               <FaMinus />
//             </button>
//             <input
//               type="text"
//               readOnly
//               value={quantity}
//               className="w-10 text-center text-gray-800 border-x border-gray-300 text-base font-semibold"
//             />
//             <button
//               onClick={handleIncrease}
//               className="px-3 py-2 text-gray-600  hover:text-white hover:bg-[#CC9966] transition text-base"
//             >
//               <FaPlus />
//             </button>
//           </div>
//         </div>

//         {/* 🔸 Buttons */}
//         <div className="flex gap-3">
//           <button className="bg-[#CC9966] text-[14px] hover:bg-[#b38655] h-11 text-white px-6 py-3  font-display w-1/2 transition-all duration-200 shadow-md hover:shadow-lg">
//             🛒 Add to Cart
//           </button>

//           <button className="relative h-11 text-[14px] flex border border-[#777777] items-center justify-center gap-2 px-6 py-3  text-base font-display w-1/2 transition-all duration-200 group overflow-hidden">
//             <FaHeart size={18} />
//             <span className="relative inline-block">
//               Add to Wishlist
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px]  bg-[#CC9966] group-hover:w-full transition-all duration-300"></span>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FormPopup;











import React, { useState } from "react";
import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // ✅ import context
import { message } from "antd";

function FormPopup({
  onClose,
  title = "Product Name",
  price = 99.99,
  openDrawer, // ✅ ye prop Navbar se milega taake cart drawer open ho
}) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // ✅ useCart hook se function liya

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // ✅ Add to Cart ka function
  const handleAddToCart = () => {
    const item = {
      name: title,
      price,
      quantity,
    };

    addToCart(item); // context me add kare
    message.success(`${title} added to cart! 🛒`);
    if (openDrawer) openDrawer("cart"); // ✅ Cart Drawer open ho jaye
    onClose(); // popup band ho jaye
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50">
      <div className="bg-white h-72 p-6 w-[420px] relative">
        {/* 🔸 Top Section */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl text-[#777777]">{title}</h2>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-[#CC9966] text-3xl font-bold leading-none transition-all duration-300 relative group"
          >
            <span className="block group-hover:opacity-0 transition-all duration-200">
              ×
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
              –
            </span>
          </button>
        </div>

        {/* 🔸 Price */}
        <p className="text-gray-700 font-medium mb-4 text-lg">
          Price:{" "}
          <span className="text-[#CC9966] font-bold text-xl">${price}</span>
        </p>

        {/* 🔸 Quantity */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-700 font-medium text-lg">Qty:</span>
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <button
              onClick={handleDecrease}
              className="px-3 py-2 text-gray-600 hover:text-white hover:bg-[#CC9966] transition text-base"
            >
              <FaMinus />
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="w-10 text-center text-gray-800 border-x border-gray-300 text-base font-semibold"
            />
            <button
              onClick={handleIncrease}
              className="px-3 py-2 text-gray-600 hover:text-white hover:bg-[#CC9966] transition text-base"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* 🔸 Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="bg-[#CC9966] text-[14px] hover:bg-[#b38655] h-11 text-white px-6 py-3 font-display w-1/2 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            🛒 Add to Cart
          </button>

          <button className="relative h-11 text-[14px] flex border border-[#777777] items-center justify-center gap-2 px-6 py-3 text-base font-display w-1/2 transition-all duration-200 group overflow-hidden">
            <FaHeart size={18} />
            <span className="relative inline-block">
              Add to Wishlist
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CC9966] group-hover:w-full transition-all duration-300"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormPopup;
























































































