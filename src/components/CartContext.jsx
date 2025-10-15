// // src/context/CartContext.jsx
// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



























import React, { useState } from "react";
import CartDrawerContent from "./CartDrawerContent";
import img1 from "../assets/b22.jpg"; // apna image path laga lena

function CartDrawer() {
  const [items, setItems] = useState([
    { name: "Training Shoes", price: 99, image: img1 },
    { name: "Sport T-Shirt", price: 45, image: img1 },
  ]);

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const handleEdit = (item, index) => {
    alert(`Edit item: ${item.name}`);
    // yahan edit form ya selector open karwa sakte ho
  };

  return (
    <CartDrawerContent
      items={items}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}

export default CartDrawer;
