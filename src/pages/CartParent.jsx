// import React, { useState } from "react";
// import CartDrawerContent from "../components/CartDrawerContent";

// function CartParent() {
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Add to Cart logic
//   const handleAddToCart = (product) => {
//     setCartItems((prev) => {
//       const existingIndex = prev.findIndex((p) => p.name === product.name);
//       if (existingIndex !== -1) {
//         const updated = [...prev];
//         updated[existingIndex].qty += 1; // increase quantity
//         return updated;
//       } else {
//         return [...prev, { ...product, qty: 1 }]; // add new with qty=1
//       }
//     });
//   };

//   // ✅ Delete product
//   const handleDelete = (index) => {
//     setCartItems((prev) => prev.filter((_, i) => i !== index));
//   };

//   // ✅ Update quantity manually (+ / - buttons)
//   const handleUpdateQty = (index, newQty) => {
//     setCartItems((prev) => {
//       const updated = [...prev];
//       updated[index].qty = newQty;
//       return updated;
//     });
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-xl font-semibold mb-4">Products</h1>

//       <button
//         onClick={() =>
//           handleAddToCart({
//             name: "Smart Watch",
//             price: 199,
//             images: ["https://via.placeholder.com/80"],
//           })
//         }
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Add Smart Watch
//       </button>

//       <div className="mt-6 border-t pt-4">
//         <h2 className="text-lg font-bold mb-3">Your Cart</h2>
//         <CartDrawerContent
//           items={cartItems}
//           onEdit={() => {}}
//           onDelete={handleDelete}
//           onUpdateQty={handleUpdateQty}
//         />
//       </div>
//     </div>
//   );
// }

// export default CartParent;
