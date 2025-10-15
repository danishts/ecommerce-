// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";

// function CheckoutPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
//   const [showDiscount, setShowDiscount] = useState(false);
//     const [discountCode, setDiscountCode] = useState("");
//     const [showShipping, setShowShipping] = useState(false);

//   const [discountApplied, setDiscountApplied] = useState(0);

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * (item.qty || 1),
//     0
//   );
//   const shipping = 5.0;
//   const total = subtotal + shipping - discountApplied;

//   const handleClearCart = () => setCartItems([]);

//   const handleApplyDiscount = () => {
//     if (discountCode.toUpperCase() === "SAVE5") {
//       setDiscountApplied(5);
//     } else {
//       setDiscountApplied(0);
//     }
//     setShowDiscount(false); // close dropdown after apply
//   };

//   return (
//     <div className="min-h-screen px-4 py-6 bg-gray-50">
//       {/* Header */}
//       <div className="bg-gray-100 h-36 w-full flex items-center justify-center text-3xl font-bold text-gray-800 mb-6">
//         Shopping Cart
//       </div>

//       {cartItems.length === 0 ? (
//         <div className="text-center py-10">
//           <p className="text-gray-500 mb-4">
//             You have no items in your shopping cart.
//             <br />
//             Click here to continue shopping
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
//           >
//             Go Shopping
//           </button>
//         </div>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
//           {/* Left Side: Cart Items */}
//           <div className="flex-1 bg-white p-6 rounded-md shadow">
//             {/* Table headers */}
//             <div className="flex justify-between font-semibold text-[#777777] border-b pb-2 mb-4">
//               <div className="w-1/2">Product</div>
//               <div className="flex w-1/2 justify-between">
//                 <div>Price</div>
//                 <div>Quantity</div>
//                 <div>Total</div>
//               </div>
//             </div>

//             {/* Cart Items */}
//             <ul className="divide-y divide-gray-200 mb-6">
//               {cartItems.map((item, i) => (
//                 <li
//                   key={i}
//                   className="py-4 flex justify-between items-center hover:bg-gray-50 rounded-md transition"
//                 >
//                   <div className="flex items-center gap-4 w-1/2">
//                     {item.images && item.images.length > 0 && (
//                       <img
//                         src={item.images[0]}
//                         alt={item.name}
//                         className="w-16 h-16 object-cover rounded-md border"
//                       />
//                     )}
//                     <div>
//                       <h3 className="text-gray-800 font-semibold text-sm">
//                         {item.name}
//                       </h3>
//                     </div>
//                   </div>

//                   <div className="flex w-1/2 justify-between text-sm text-gray-800">
//                     <span>${item.price.toFixed(2)}</span>
//                     <span>{item.qty || 1}</span>
//                     <span>${(item.price * (item.qty || 1)).toFixed(2)}</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             {/* Buttons */}
//             <div className="flex justify-between gap-4">
//               <button className="border border-gray-300 h-10 w-40 font-display text-[#777777] hover:text-[#CC9966] hover:bg-gray-100 transition">
//                 Continue Shopping
//               </button>
//               <div className="flex gap-4">
//                 <button
//                   onClick={handleClearCart}
//                   className="border border-gray-300 h-10 w-40 font-display text-[#777777] hover:text-[#CC9966] hover:bg-gray-100 transition"
//                 >
//                   Clear Cart
//                 </button>

//                 <button className="border border-gray-300 h-10 w-40 font-display text-[#777777] hover:text-[#CC9966] hover:bg-gray-100 transition flex items-center justify-center gap-2">
//                   <FiArrowRight className="text-[16px]" />
//                   Update Cart
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Payment + Discount */}
//           <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow">
//             {/* Apply Discount Code Dropdown */}
//             <div
//               className="flex justify-between items-center cursor-pointer mb-2"
//               onClick={() => setShowDiscount(!showDiscount)}
//             >
//               <h2 className="text-lg font-semibold mb-2">
//                 Apply Discount Code
//               </h2>
//               <span
//                 className={`transition-transform ${
//                   showDiscount ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </div>
//             <div className="border-t border-gray-300 mb-4"></div>
//             {showDiscount && (
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Enter discount code"
//                   value={discountCode}
//                   onChange={(e) => setDiscountCode(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md p-2 mb-2"
//                 />
//                 <button
//                   onClick={handleApplyDiscount}
//                   className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
//                 >
//                   Apply
//                 </button>
//               </div>
//             )}

//             {/* Estimate Shipping and Tax Dropdown */}
//             <div
//               className="flex justify-between items-center cursor-pointer mb-2 mt-4"
//               onClick={() => setShowShipping(!showShipping)}
//             >
//               <h2 className="text-lg font-semibold mb-2">
//                 Estimate Shipping and Tax
//               </h2>
//               <span
//                 className={`transition-transform ${
//                   showShipping ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </div>
//             <div className="border-t border-gray-300 mb-4"></div>
//             {showShipping && (
//               <div className="mb-4">
//                 <p className="text-sm text-gray-600 mb-2">
//                   Enter your destination to get a shipping estimate.
//                 </p>
//                 <h1 className="mt-2 mb-2">Country</h1>
//                 <select className="w-full border border-gray-300 rounded-md p-2 mb-2">
//                   <option>Country</option>
//                   <option>USA</option>
//                   <option>Canada</option>
//                 </select>
//                 <h1 className="mt-2 mb-2">State/Province</h1>
//                 <select className="w-full border border-gray-300 rounded-md p-2 mb-2">
//                   <option>State/Province</option>
//                   <option>California</option>
//                   <option>New York</option>
//                 </select>
//                 <h1 className="mt-2 mb-2">Zip/Postal Code</h1>
//                 <input
//                   type="text"
//                   placeholder="Zip / Postal Code"
//                   className="w-full border border-gray-300 rounded-md p-2 mb-2"
//                 />
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     <input type="radio" name="shipping" />
//                     <span>Free Shipping</span>
//                   </div>
//                   <span>$0.00</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <input type="radio" name="shipping" />
//                     <span>Flat Rate</span>
//                   </div>
//                   <span>$5.00</span>
//                 </div>
//               </div>
//             )}

//             {/* Payment Summary */}
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Subtotal</span>
//               <span className="font-semibold">${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Shipping</span>
//               <span className="font-semibold">${shipping.toFixed(2)}</span>
//             </div>
//             {discountApplied > 0 && (
//               <div className="flex justify-between mb-2 text-green-600">
//                 <span>Discount</span>
//                 <span>-${discountApplied.toFixed(2)}</span>
//               </div>
//             )}
//             <div className="flex justify-between mb-4 border-t pt-2 font-semibold">
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>

//             <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
//               PROCEED TO CHECKOUT
//             </button>
//             <button className="w-full bg-black mt-4 text-white py-3 rounded-md hover:bg-gray-800 transition">
//               Check Out With Multiple Adressess
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CheckoutPage;



















































import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [showShipping, setShowShipping] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(0);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping - discountApplied;

  const handleClearCart = () => setCartItems([]);

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === "SAVE5") {
      setDiscountApplied(5);
    } else {
      setDiscountApplied(0);
    }
    setShowDiscount(false); // close dropdown after apply
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50">
      {/* Header */}
      <div className="bg-gray-100 h-36 w-full flex items-center justify-center text-3xl font-bold text-gray-800 mb-6 rounded-md">
        Shopping Cart
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">
            You have no items in your shopping cart.
            <br />
            Click here to continue shopping
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Go Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left Side: Cart Items */}
          <div className="flex-1 bg-white p-4 sm:p-6 rounded-md shadow overflow-x-auto">
            {/* Table headers */}
            <div className="flex justify-between font-semibold text-[#777777] border-b pb-2 mb-4 text-xs sm:text-sm">
              <div className="w-1/2">Product</div>
              <div className="flex w-1/2 justify-between">
                <div>Price</div>
                <div>Qty</div>
                <div>Total</div>
              </div>
            </div>

            {/* Cart Items */}
            <ul className="divide-y divide-gray-200 mb-6 text-xs sm:text-sm">
              {cartItems.map((item, i) => (
                <li
                  key={i}
                  className="py-4 flex justify-between items-center hover:bg-gray-50 rounded-md transition"
                >
                  <div className="flex items-center gap-2 sm:gap-4 w-1/2">
                    {item.images && item.images.length > 0 && (
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md border"
                      />
                    )}
                    <div>
                      <h3 className="text-gray-800 font-semibold text-xs sm:text-sm">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex w-1/2 justify-between text-xs sm:text-sm text-gray-800">
                    <span>${item.price.toFixed(2)}</span>
                    <span>{item.qty || 1}</span>
                    <span>${(item.price * (item.qty || 1)).toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
              <button className="border border-gray-300 h-10 w-full sm:w-40 font-display text-[#777777] hover:text-[#CC9966] hover:bg-gray-100 transition">
                Continue Shopping
              </button>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={handleClearCart}
                  className="border border-gray-300 h-10 w-full sm:w-40 font-display text-[#777777] hover:text-[#CC9966] hover:bg-gray-100 transition"
                >
                  Clear Cart
                </button>

                <button className="border border-gray-300 h-10 w-full sm:w-40 font-display text-[#777777] hover:text-[#CC9966] hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <FiArrowRight className="text-[16px]" />
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Payment + Dropdowns */}
          <div className="w-full lg:w-1/3 bg-white p-4 sm:p-6 rounded-md shadow flex-shrink-0">
            {/* Apply Discount Code */}
            <div
              className="flex justify-between items-center cursor-pointer mb-2"
              onClick={() => setShowDiscount(!showDiscount)}
            >
              <h2 className="text-lg font-semibold mb-2">
                Apply Discount Code
              </h2>
              <span
                className={`transition-transform ${
                  showDiscount ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>
            {showDiscount && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 mb-2 text-xs sm:text-sm"
                />
                <button
                  onClick={handleApplyDiscount}
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition text-xs sm:text-sm"
                >
                  Apply
                </button>
              </div>
            )}

            {/* Estimate Shipping and Tax */}
            <div
              className="flex justify-between items-center cursor-pointer mb-2 mt-4"
              onClick={() => setShowShipping(!showShipping)}
            >
              <h2 className="text-lg font-semibold mb-2">
                Estimate Shipping and Tax
              </h2>
              <span
                className={`transition-transform ${
                  showShipping ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>
            {showShipping && (
              <div className="mb-4 text-xs sm:text-sm">
                <p className="text-gray-600 mb-2">
                  Enter your destination to get a shipping estimate.
                </p>
                <label className="block mb-1">Country</label>
                <select className="w-full border border-gray-300 rounded-md p-2 mb-2">
                  <option>Country</option>
                  <option>USA</option>
                  <option>Canada</option>
                </select>
                <label className="block mb-1">State/Province</label>
                <select className="w-full border border-gray-300 rounded-md p-2 mb-2">
                  <option>State/Province</option>
                  <option>California</option>
                  <option>New York</option>
                </select>
                <label className="block mb-1">Zip/Postal Code</label>
                <input
                  type="text"
                  placeholder="Zip / Postal Code"
                  className="w-full border border-gray-300 rounded-md p-2 mb-2"
                />
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="shipping" />
                    <span>Free Shipping</span>
                  </div>
                  <span>$0.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="shipping" />
                    <span>Flat Rate</span>
                  </div>
                  <span>$5.00</span>
                </div>
              </div>
            )}

            {/* Payment Summary */}
            <div className="flex justify-between mb-2 text-xs sm:text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-xs sm:text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">${shipping.toFixed(2)}</span>
            </div>
            {discountApplied > 0 && (
              <div className="flex justify-between mb-2 text-green-600 text-xs sm:text-sm">
                <span>Discount</span>
                <span>-${discountApplied.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between mb-4 border-t pt-2 font-semibold text-xs sm:text-sm">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition text-xs sm:text-sm">
              PROCEED TO CHECKOUT
            </button>
            <button className="w-full bg-black mt-4 text-white py-3 rounded-md hover:bg-gray-800 transition text-xs sm:text-sm">
              Check Out With Multiple Addresses
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
