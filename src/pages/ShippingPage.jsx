// import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// function ShippingPage() {
//   const [showArrow, setShowArrow] = useState(false);

//   // 🔸 Show arrow only when scrolled down
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) setShowArrow(true);
//       else setShowArrow(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔸 Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="py-10 px-6 bg-white flex flex-col items-center relative">
//       {/* 🔸 Sign In Button */}
//       <div className="w-full flex justify-end pr-20">
//         <div className="border h-10 w-44 flex items-center justify-center text-[#CC9966] hover:text-white hover:bg-[#CC9966] font-display border-[#CC9966] mt-10">
//           Sign In
//         </div>
//       </div>

//       {/* 🔸 Step Progress Line */}
//       <div className="relative w-[80%] mt-16 flex items-center justify-between">
//         {/* Step 1 */}
//         <div className="w-1/2 h-[8px] bg-gray-300 relative">
//           <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#CC9966] text-white flex items-center justify-center font-semibold shadow-md text-lg">
//             1
//           </div>
//           <p className="absolute top-10 left-1/2 -translate-x-1/2 text-gray-700 font-medium font-display">
//             Shipping
//           </p>
//         </div>

//         {/* Step 2 */}
//         <div className="w-1/2 h-[8px] bg-gray-300 relative">
//           <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-semibold shadow-md text-lg">
//             2
//           </div>
//           <p className="absolute top-10 left-1/2 -translate-x-1/2 text-gray-700 font-medium font-display">
//             Review & Payments
//           </p>
//         </div>
//       </div>

//       {/* 🔸 Shipping Form Section */}
//       <div className="mt-20 w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* 📝 Left Section - Form */}
//         <div className="lg:col-span-2">
//           <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>

//           <form className="space-y-5">
//             <div>
//               <label className="block mb-1 font-medium">Email Address</label>
//               <input
//                 type="email"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 placeholder="example@email.com"
//               />
//               <p className="text-sm text-gray-500 mt-1">
//                 You can create an account after checkout.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="block mb-1 font-medium">First Name*</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Last Name*</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Company</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Street Address</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2 mb-2"
//                 placeholder="Street Address Line 1"
//               />
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2 mb-2"
//                 placeholder="Street Address Line 2"
//               />
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 placeholder="Street Address Line 3"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="block mb-1 font-medium">Country*</label>
//                 <select className="w-full border border-gray-300 rounded-md p-2">
//                   <option>Pakistan</option>
//                   <option>India</option>
//                   <option>USA</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">State/Province</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="Punjab"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="block mb-1 font-medium">City*</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="Rawalpindi"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">
//                   Zip/Postal Code*
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="4600"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Phone Number*</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 placeholder="1234567890"
//               />
//             </div>

//             <button
//               type="button"
//               className="w-40 bg-[#CC9966] text-white py-2 rounded-md hover:bg-[#b47b4d] transition"
//             >
//               Next
//             </button>
//           </form>
//         </div>

//         {/* 🛍️ Right Section - Order Summary */}
//         <div className="border border-dashed p-5 rounded-md h-fit">
//           <h3 className="text-lg font-semibold mb-4 border-b pb-2">
//             Order Summary
//           </h3>
//           <div className="flex justify-between text-gray-600 mb-2">
//             <span>1 Item in Cart</span>
//             <span>▼</span>
//           </div>

//           <div className="flex items-center justify-between mt-3">
//             <div className="flex items-center gap-3">
//               <img
//                 src="/images/bag.png"
//                 alt="Handbag"
//                 className="w-12 h-12 object-cover rounded"
//               />
//               <p>Handbag II</p>
//             </div>
//             <p>$339.99</p>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Scroll-to-Top Arrow Button */}
//       {showArrow && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 bg-[#CC9966] hover:bg-[#b47b4d] text-white p-3 shadow- transition-all"
//           aria-label="Scroll to top"
//         >
//           <FaArrowUp size={20} />
//         </button>
//       )}
//     </div>
//   );
// }

// export default ShippingPage;

































// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FiChevronDown } from "react-icons/fi";


// function ShippingPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showItems, setShowItems] = useState(true); // toggle for showing items

//   const cartItems = location.state?.cartItems || [];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="py-10 px-4">
//       {/* 🔸 Sign In Button */}
//       <div className="flex justify-end">
//         <div className="border h-10 w-44 flex items-center justify-center text-[#CC9966] hover:text-white hover:bg-[#CC9966] font-display border-[#CC9966] mr-56 mt-10 cursor-pointer">
//           Sign In
//         </div>
//       </div>

//       {/* 🔸 Steps Line */}
//       <div className="relative w-[70%] mx-auto mt-16 flex items-center justify-between">
//         {/* Step 1 */}
//         <div className="w-1/2 h-[6px] bg-gray-300 relative">
//           <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#CC9966] text-white flex items-center justify-center font-semibold shadow-md">
//             1
//           </div>
//           <p className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-gray-700 font-medium">
//             Shipping
//           </p>
//         </div>

//         {/* Step 2 */}
//         <div className="w-1/2 h-[6px] bg-gray-300 relative">
//           <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-semibold shadow-md">
//             2
//           </div>
//           <p className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-gray-700 font-medium">
//             Review & Payments
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Form + Order Summary Section */}
//       <div className="flex flex-col lg:flex-row justify-between w-[80%] mx-auto mt-16 gap-8">
//         {/* 🔸 Left: Shipping Form */}
//         <div className="mt-10 w-full lg:w-[60%]">
//           <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>

//           <form className="space-y-5">
//             <div>
//               <label className="block mb-1 font-medium">Email Address</label>
//               <input
//                 type="email"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 placeholder="example@email.com"
//               />
//               <p className="text-sm text-gray-500 mt-1">
//                 You can create an account after checkout.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="block mb-1 font-medium">First Name*</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Last Name*</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Company</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Street Address</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2 mb-2"
//                 placeholder="Street Address Line 1"
//               />
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2 mb-2"
//                 placeholder="Street Address Line 2"
//               />
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 placeholder="Street Address Line 3"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="block mb-1 font-medium">Country*</label>
//                 <select className="w-full border border-gray-300 rounded-md p-2">
//                   <option>Pakistan</option>
//                   <option>India</option>
//                   <option>USA</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">State/Province</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="Punjab"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-5">
//               <div>
//                 <label className="block mb-1 font-medium">City*</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="Rawalpindi"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">
//                   Zip/Postal Code*
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="4600"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Phone Number*</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 placeholder="1234567890"
//               />
//             </div>

//             <button
//               type="button"
//               className="w-40 bg-[#CC9966] text-white py-2 rounded-md hover:bg-[#b47b4d] transition"
//             >
//               Next
//             </button>
//           </form>
//         </div>

//         {/* 🔸 Right: Order Summary */}
//         <div className="lg:w-[35%] bg-white p-6 border h-72 border-dashed border-gray-300 rounded-md shadow-sm mt-10">
//           <h2 className="text-base font-semibold mb-3 text-gray-800">
//             Order Summary
//           </h2>
//           <hr className="mb-3" />

//           {/* 🔹 Header with toggle arrow */}
//           <div
//             className="flex justify-between items-center cursor-pointer mb-3"
//             onClick={() => setShowItems(!showItems)}
//           >
//             <p className="text-sm text-gray-700">
//               {cartItems.length} Item{cartItems.length > 1 ? "s" : ""} in Cart
//             </p>
//             <FiChevronDown
//               className={`text-gray-700 text-lg transition-transform duration-300 ${
//                 showItems ? "rotate-180" : ""
//               }`}
//             />
//           </div>

//           {/* 🔹 Product list (toggle) */}
//           {showItems &&
//             cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center border-t pt-3 mt-2"
//               >
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-12 h-12 object-cover"
//                   />
//                   <div>
//                     <p className="text-gray-800 text-sm font-medium">
//                       {item.name}
//                     </p>
//                     <p className="text-gray-500 text-xs">Qty: {item.qty}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-800 text-sm font-medium">
//                   ${item.price.toFixed(2)}
//                 </p>
//               </div>
//             ))}
//               </div>
//                  <button
//           onClick={scrollToTop}
//            className="fixed bottom-8 right-8 bg-[#CC9966] hover:bg-[#b47b4d] text-white p-3 shadow- transition-all"
//            aria-label="Scroll to top"
//          >
//            <FaArrowUp size={20} />
// /         </button>
//       </div>
//     </div>
//   );
// }

// export default ShippingPage;
















import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";

function ShippingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showItems, setShowItems] = useState(true);
  const [showArrow, setShowArrow] = useState(false);

  const cartItems = location.state?.cartItems || [];

  // 👇 scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-10 px-4">
      {/* 🔸 Sign In Button */}
      <div className="flex justify-end">
        <div className="border h-10 w-44 flex items-center justify-center text-[#CC9966] hover:text-white hover:bg-[#CC9966] font-display border-[#CC9966] mr-56 mt-10 cursor-pointer">
          Sign In
        </div>
      </div>

      {/* 🔸 Steps Line */}
      <div className="relative w-[70%] mx-auto mt-16 flex items-center justify-between">
        {/* Step 1 */}
        <div
          className={`w-1/2 h-[6px] relative ${
            cartItems.length > 0 ? "bg-red-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`absolute -top-[18px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-semibold shadow-md ${
              cartItems.length > 0
                ? "bg-red-500 text-white"
                : "bg-[#CC9966] text-white"
            }`}
          >
            1
          </div>
          <p className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-gray-700 font-medium">
            Shipping
          </p>
        </div>

        {/* Step 2 */}
        <div className="w-1/2 h-[6px] bg-gray-300 relative">
          <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-semibold shadow-md">
            2
          </div>
          <p className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-gray-700 font-medium">
            Review & Payments
          </p>
        </div>
      </div>

      {/* 🔹 Form + Order Summary Section */}
      <div className="flex flex-col lg:flex-row justify-between w-[80%] mx-auto mt-16 gap-8">
        {/* 🔸 Left: Shipping Form */}
        <div className="mt-10 w-full lg:w-[60%]">
          <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="example@email.com"
              />
              <p className="text-sm text-gray-500 mt-1">
                You can create an account after checkout.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block mb-1 font-medium">First Name*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Company</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Street Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Street Address Line 1"
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Street Address Line 2"
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Street Address Line 3"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block mb-1 font-medium">Country*</label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">State/Province</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Punjab"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block mb-1 font-medium">City*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Rawalpindi"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Zip/Postal Code*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="4600"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone Number*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="1234567890"
              />
            </div>
            <h2 className="font-display font-semibold">Shipping Methods</h2>
            {/* 🔹 Shipping Method Option */}
            <div className="flex items-center justify-between   rounded-md p-3 mt-6 ">
              {/* Left: Radio button */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shippingMethod"
                  className="w-4 h-4 accent-[#CC9966] cursor-pointer"
                  id="flatRate"
                />
                <label
                  htmlFor="flatRate"
                  className="text-gray-800 text-sm font-medium"
                >
             
                </label>
              </div>

              {/* Right: Details */}
              <div className="flex items-center   gap-28  font-display text-[14px] text-[#777777]">
                <p>$40.00</p>
                <p>Fixed</p>
                <p>Flat Rate</p>
              </div>
            </div>
                      <div div className="flex justify-end">
            <button
              type="button"
              className="w-40 bg-[#CC9966]   text-white py-2 rounded-md hover:bg-[#b47b4d] transition"
              >
              Next
            </button>
                </div>
          </form>
        </div>

        {/* 🔸 Right: Order Summary */}
        <div className="lg:w-[35%] bg-white h-56 p-6 border border-dashed border-gray-300 rounded-md shadow-sm mt-10 overflow-y-auto">
          <h2 className="text-base font-semibold mb-3 text-gray-800">
            Order Summary
          </h2>
          <hr className="mb-3" />

          {/* 🔹 Header with toggle arrow */}
          <div
            className="flex justify-between items-center cursor-pointer mb-3"
            onClick={() => setShowItems(!showItems)}
          >
            <p className="text-sm text-gray-700">
              {cartItems.length} Item{cartItems.length > 1 ? "s" : ""} in Cart
            </p>
            <FiChevronDown
              className={`text-gray-700 text-lg transition-transform duration-300 ${
                showItems ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* 🔹 Product list */}
          {showItems &&
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-t pt-3 mt-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-xs">Qty: {item.qty}</p>
                  </div>
                </div>
                <p className="text-gray-800 text-sm font-medium">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* 🔝 Scroll to Top Arrow */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#CC9966] hover:bg-[#b47b4d] text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default ShippingPage;
