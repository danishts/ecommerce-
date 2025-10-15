// import React from "react";

// function CartDrawerContent({ items = [] }) {
//   return (
//     <div className="font-display">
//       {items.length === 0 ? (
//         <p className="text-gray-600">🛒 Your cart is empty.</p>
//       ) : (
//         items.map((item, idx) => (
//           <div
//             key={idx}
//             className="flex justify-between items-center py-2 border-b"
//           >
//             <span>{item.name}</span>
//             <span className="text-[#CC9966]">${item.price}</span>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default CartDrawerContent;



















// // ✅ CartDrawerContent.jsx
// import React from "react";

// function CartDrawerContent({ items }) {
//   return (
//     <div>
//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {items.map((item, i) => (
//             <li
//               key={i}
//               className="flex justify-between border-b py-2 text-gray-700"
//             >
//               <span>{item.name}</span>
//               <span>${item.price}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default CartDrawerContent;































// import React from "react";

// function CartDrawerContent({ items }) {
//   // Subtotal calculation
//   const subtotal = items.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="p-4">
//       {items.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="divide-y divide-gray-200">
//             {items.map((item, i) => (
//               <li key={i} className="py-4 flex justify-between items-start">
//                 <div>
//                   {/* Product name */}
//                   <h3 className="text-gray-800 font-semibold text-sm">
//                     {item.name}
//                   </h3>

//                   {/* Product price below name */}
//                   <p className="text-gray-600 text-xs mt-1">${item.price}</p>
//                 </div>

//                 {/* Optional: product quantity or image can go here */}
//               </li>
//             ))}
//           </ul>

//           {/* Subtotal section */}
//           <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-gray-800">
//             <span className="font-display text-[#777777]">Cart Subtotal: </span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CartDrawerContent;



















































// import React, { useState } from "react";
// import { FaTrash, FaEdit } from "react-icons/fa";

// function CartDrawerContent({ items, onEdit, onDelete }) {
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   // 🧮 Subtotal calculation
//   const subtotal = items.reduce((acc, item) => acc + item.price, 0);

//   // 🔸 Open confirmation modal
//   const handleDeleteClick = (index) => {
//     setSelectedIndex(index);
//     setShowConfirm(true);
//   };

//   // 🔸 Confirm delete
//   const confirmDelete = () => {
//     if (selectedIndex !== null) {
//       onDelete(selectedIndex);
//       setShowConfirm(false);
//       setSelectedIndex(null);
//     }
//   };

//   // 🔸 Cancel delete
//   const cancelDelete = () => {
//     setShowConfirm(false);
//     setSelectedIndex(null);
//   };

//   return (
//     <div className="p-4">
//       {items.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="divide-y divide-gray-200">
//             {items.map((item, i) => (
//               <li key={i} className="py-4 flex justify-between items-center">
//                 {/* Product Info */}
//                 <div className="flex items-center gap-3">
//                   {/* 🖼 Product image */}
//                   {item.images && item.images.length > 0 && (
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded-md border"
//                     />
//                   )}

//                   <div>
//                     <h3 className="text-gray-800 font-semibold text-sm">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-600 text-xs mt-1">${item.price}</p>
//                   </div>
//                 </div>

//                 {/* ✏️ Edit + 🗑 Delete buttons */}
//                 <div className="flex gap-3 text-gray-600">
//                   <button
//                     onClick={() => onEdit(item)}
//                     className="hover:text-blue-500"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteClick(i)}
//                     className="hover:text-red-500"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* 🧾 Subtotal section */}
//           <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-gray-800">
//             <span className="font-display text-[#777777]">Cart Subtotal:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//         </>
//       )}

//       {/* 🪟 Delete Confirmation Modal */}
//       {showConfirm && (
//         <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-md shadow-lg w-[320px] p-5 text-center">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Are you sure?
//             </h2>
//             <p className="text-gray-600 text-sm mb-5">
//               You would like to remove this item from the shopping cart?
//             </p>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartDrawerContent;




































// import React, { useState } from "react";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { IoClose } from "react-icons/io5"; // ❌ Close icon import

// function CartDrawerContent({ items, onEdit, onDelete }) {
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const subtotal = items.reduce((acc, item) => acc + item.price, 0);

//   const handleDeleteClick = (index) => {
//     setSelectedIndex(index);
//     setShowConfirm(true);
//   };

//   const confirmDelete = () => {
//     if (selectedIndex !== null) {
//       onDelete(selectedIndex); // ✅ delete item from parent
//       setShowConfirm(false);
//       setSelectedIndex(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowConfirm(false);
//     setSelectedIndex(null);
//   };

//   return (
//     <div className="p-4">
//       {items.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="divide-y divide-gray-200">
//             {items.map((item, i) => (
//               <li key={i} className="py-4 flex justify-between items-center">
//                 <div className="flex items-center gap-3">
//                   {item.images && item.images.length > 0 && (
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded-md border"
//                     />
//                   )}

//                   <div>
//                     <h3 className="text-gray-800 font-semibold text-sm">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-600 text-xs mt-1">${item.price}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3 text-gray-600">
//                   <button
//                     onClick={() => onEdit(item)}
//                     className="hover:text-blue-500"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteClick(i)}
//                     className="hover:text-red-500"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-gray-800">
//             <span className="font-display text-[#777777]">Cart Subtotal:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           <div className="flex">
//             {" "}
//             <button>Checkout </button>
//             <button>Card View </button>
//           </div>
//           </div>
//         </>
//       )}

//       {/* 🧾 Confirmation Modal */}
//       {showConfirm && (
//         <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
//           <div className="relative bg-white w-[320px] p-5 text-center rounded-md shadow-lg">
//             {/* ❌ Close Icon */}
//             <button
//               onClick={cancelDelete}
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl transition-transform duration-300 hover:rotate-90"
//             >
//               <IoClose />
//             </button>

//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Are you sure?
//             </h2>
//             <p className="text-gray-600 text-sm mb-5">
//               You would like to remove this item from the shopping cart?
//             </p>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartDrawerContent;




























// import React, { useState } from "react";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// function CartDrawerContent({ items, onEdit, onDelete }) {
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const navigate = useNavigate();

//   const subtotal = items.reduce((acc, item) => acc + item.price, 0);

//   const handleDeleteClick = (index) => {
//     setSelectedIndex(index);
//     setShowConfirm(true);
//   };

//   const confirmDelete = () => {
//     if (selectedIndex !== null) {
//       onDelete(selectedIndex);
//       setShowConfirm(false);
//       setSelectedIndex(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowConfirm(false);
//     setSelectedIndex(null);
//   };

//   return (
//     <div className="p-4 flex flex-col min-h-full justify-between">
//       {items.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           {/* 🛍️ Cart Items */}
//           <ul className="divide-y divide-gray-200 mb-4">
//             {items.map((item, i) => (
//               <li key={i} className="py-4 flex justify-between items-center">
//                 <div className="flex items-center gap-3">
//                   {item.images && item.images.length > 0 && (
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="w-12 h-12 object-cover rounded-md border"
//                     />
//                   )}
//                   <div>
//                     <h3 className="text-gray-800 font-semibold text-sm">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-600 text-xs mt-1">${item.price}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3 text-gray-600">
//                   <button
//                     onClick={() => onEdit(item)}
//                     className="hover:text-blue-500"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteClick(i)}
//                     className="hover:text-red-500"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* 💵 Subtotal + Buttons */}
//           <div className="mt-auto border-t pt-4">
//             <div className="flex justify-between font-semibold text-gray-800 mb-4">
//               <span className="text-[#777777]">Cart Subtotal:</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between gap-3">
//               <button
//                 onClick={() =>
//                   navigate("/checkout", { state: { cartItems: items } })
//                 }
//                 className="w-1/2 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
//               >
//                 Checkout
//               </button>
//               <button className="w-1/2 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition">
//                 Cart View
//               </button>
//             </div>
//           </div>
//         </>
//       )}

//       {/* 🧾 Confirmation Modal */}
//       {showConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="relative bg-white w-[320px] p-5 text-center rounded-md shadow-lg">
//             <button
//               onClick={cancelDelete}
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl transition-transform duration-300 hover:rotate-90"
//             >
//               <IoClose />
//             </button>

//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Are you sure?
//             </h2>
//             <p className="text-gray-600 text-sm mb-5">
//               You would like to remove this item from the shopping cart?
//             </p>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartDrawerContent;






























































// src/components/CartDrawerContent.jsx
import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function CartDrawerContent({ items, onEdit, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  // ✅ Subtotal considering quantity
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  const handleDeleteClick = (index) => {
    setSelectedIndex(index);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (selectedIndex !== null) {
      onDelete(selectedIndex);
      setShowConfirm(false);
      setSelectedIndex(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setSelectedIndex(null);
  };

  return (
    <div className="p-4 flex flex-col min-h-full justify-between">
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* 🛍️ Cart Items */}
          <ul className="divide-y divide-gray-200 mb-4">
            {items.map((item, i) => (
              <li key={i} className="py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {item.images?.[0] && (
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md border"
                    />
                  )}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1">
                      ${item.price.toFixed(2)} x {item.qty || 1}
                    </p>
                    <p className="text-gray-800 font-semibold text-sm mt-1">
                      Total: ${(item.price * (item.qty || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-gray-600">
                  <button
                    onClick={() => onEdit(item)}
                    className="hover:text-blue-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(i)}
                    className="hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* 💵 Subtotal + Buttons */}
          <div className="mt-auto border-t pt-4">
            <div className="flex justify-between font-semibold text-gray-800 mb-4">
              <span className="text-[#777777]">Cart Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between gap-3">
              <button
                onClick={() =>
                  navigate("/checkout", { state: { cartItems: items } })
                }
                className="w-1/2 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Checkout
              </button>
              <button
                onClick={() =>
                  navigate("/shipping", { state: { cartItems: items } })
                }
                className="w-1/2 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Shipping 
              </button>
            </div>
          </div>
        </>
      )}

      {/* 🧾 Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative bg-white w-[320px] p-5 text-center rounded-md shadow-lg">
            <button
              onClick={cancelDelete}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl transition-transform duration-300 hover:rotate-90"
            >
              <IoClose />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Are you sure?
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              You want to remove this item from the shopping cart?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartDrawerContent;
