// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlineMinus } from "react-icons/ai";
// import { MdOutlineShare } from "react-icons/md";
// import b22 from "../assets/b22.jpg";
// import { CiHeart } from "react-icons/ci";
// import { useLocation, useNavigate } from "react-router-dom";

// function ProductDetails() {
//   const { state } = useLocation();
//   const [mainImage, setMainImage] = useState(state?.images[0]);
//   const [qty, setQty] = useState(1); // ✅ Quantity state
//   const imgRef = useRef(null);
//   const lensRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!imgRef.current) return;

//     const img = imgRef.current;
//     const lens = document.createElement("DIV");
//     lens.setAttribute("class", "img-zoom-lens");
//     lensRef.current = lens;

//     img.parentElement.style.position = "relative";
//     img.parentElement.insertBefore(lens, img);

//     const cx = 2;
//     const cy = 2;

//     lens.style.backgroundImage = `url('${img.src}')`;
//     lens.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

//     function moveLens(e) {
//       e.preventDefault();
//       const pos = getCursorPos(e);
//       let x = pos.x - lens.offsetWidth / 2;
//       let y = pos.y - lens.offsetHeight / 2;

//       if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
//       if (x < 0) x = 0;
//       if (y > img.height - lens.offsetHeight)
//         y = img.height - lens.offsetHeight;
//       if (y < 0) y = 0;

//       lens.style.left = x + "px";
//       lens.style.top = y + "px";
//       lens.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
//     }

//     function getCursorPos(e) {
//       const a = img.getBoundingClientRect();
//       const x = e.pageX - a.left - window.pageXOffset;
//       const y = e.pageY - a.top - window.pageYOffset;
//       return { x, y };
//     }

//     img.addEventListener("mousemove", moveLens);
//     lens.addEventListener("mousemove", moveLens);

//     img.addEventListener("mouseenter", () => {
//       lens.style.display = "block";
//       lens.style.backgroundImage = `url('${img.src}')`;
//     });
//     img.addEventListener("mouseleave", () => (lens.style.display = "none"));

//     return () => {
//       lens.remove();
//     };
//   }, [mainImage]);

//   if (!state) {
//     return <h2 className="text-center text-red-500">No product data found</h2>;
//   }

//   return (
//     <div className="w-full min-h-screen p-4 md:p-6 font-display flex flex-col items-center">
//       {/* Top Title with Home link */}
//       <div className="w-full max-w-6xl mb-4 md:mb-6">
//         <div className="flex items-center gap-2 text-gray-600 text-sm md:text-lg">
//           <div className="relative group flex items-center">
//             <span
//               onClick={() => navigate("/")}
//               className="cursor-pointer hover:text-[#CC9966] transition text-sm md:text-base"
//             >
//               Home
//             </span>

//             {/* Tooltip */}
//             <span className="absolute left-0 top-8 bg-white text-black border border-black font-display text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//               Go to Homepage
//             </span>
//           </div>

//           {/* Right Arrow */}
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

//           {/* Product Title */}
//           <h1 className="text-sm md:text-base font-display text-gray-800">
//             {state.title}
//           </h1>
//         </div>

//         <div className="border-b w-full border-gray-300 mt-2"></div>
//       </div>

//       <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//         {/* Left Side - Main Image with Zoom + Thumbnails */}
//         <div className="flex flex-col items-center gap-4">
//           {/* Main Image */}
//           <div className="img-zoom-container relative w-full">
//             <img
//               ref={imgRef}
//               src={mainImage}
//               alt={state.title}
//               className="rounded-md shadow-md w-full h-auto max-h-[450px] object-cover"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
//             {state.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`thumb-${i}`}
//                 className={`w-36 h-48 md:w-[260px] md:h-[260px] object-cover rounded-md border cursor-pointer
//         ${mainImage === img ? "border-[#CC9966]" : "border-gray-300"}`}
//                 onClick={() => setMainImage(img)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Product Info */}
//         <div className="flex flex-col">
//           <h1 className="text-xl md:text-2xl lg:text-3xl font-display text-gray-800">
//             {state.title}
//           </h1>
//           <p className="text-[#777777] mt-3 text-[14px] md:text-base">
//             {state.description}
//           </p>
//           <p className="text-lg md:text-xl lg:text-2xl text-[#CC9966] font-semibold mt-2 md:mt-4">
//             ${state.price}
//           </p>
//           <div className="mt-4 flex items-center gap-3">
//             <h1 className="text-gray-700 font-medium text-lg">Qty:</h1>
//             <div className="flex items-center border border-[#777777] text-[16px] text-gray-700 w-36 h-14 rounded overflow-hidden">
//               <button
//                 onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
//                 className="flex-1 h-full  transition text-xl "
//               >
//                 -
//               </button>
//               <input
//                 type="text"
//                 value={qty}
//                 readOnly
//                 className="w-24 text-center h-11 text-xl font-medium  "
//               />

//               <button
//                 onClick={() => setQty((prev) => prev + 1)}
//                 className="flex-1 h-full transition text-xl "
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           {/* Buttons */}
//           <div className="flex flex-wrap md:flex-nowrap gap-2 mt-6 items-center">
//             {/* Add to Cart */}
//             <button className="bg-[#CC9966] text-white px-6 py-2 w-48 hover:bg-green-400 transition">
//               Add to Cart
//             </button>

//             {/* Add to Wishlist */}
//             <button className="flex items-center gap-2 text-[#777777] text-[14px] px-6 py-2 hover:text-[#CC9966] transition">
//               <CiHeart className="text-[18px]" />
//               <span className="flex items-center gap-1 relative group">
//                 Add to Wishlist
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CC9966] transition-all group-hover:w-full"></span>
//               </span>
//             </button>

//             {/* Compare */}
//             <button className="flex items-center gap-2 text-[#777777] text-[14px] px-6 py-2 hover:text-[#CC9966] transition">
//               <CiHeart className="text-[18px]" />
//               <span className="flex items-center gap-1 relative group">
//                 Compare
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CC9966] transition-all group-hover:w-full"></span>
//               </span>
//             </button>
//           </div>
//           {/* Divider */}
//           <div className="border-b w-full border-gray-300 mt-6"></div>
//           <div className="flex items-center mt-4 justify-between w-full">
//             {/* Left side: Category + Fashion */}
//             <div className="flex items-center gap-2">
//               <h1 className="text-[#777777] text-[14px]">Category :</h1>

//               <h1 className="relative group cursor-pointer text-[#777777] text-[14px] px-2 py-1 hover:text-[#CC9966]">
//                 Fashion
//                 {/* Underline */}
//                 <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#CC9966] transition-all group-hover:w-full"></span>
//               </h1>
//             </div>

//             {/* Right side: Share */}
//             <div className="flex items-center gap-1">
//               <h1 className="text-[#777777] text-[14px]">Share:</h1>
//               <div className="flex items-center gap-1 cursor-pointer group">
//                 <h1 className="text-[#777777] text-[14px]">Share:</h1>

//                 {/* Icon with arrow */}
//                 <div className="flex items-center gap-1 relative">
//                   <MdOutlineShare className="text-xl transition-transform border-1 rounded-3xl  hover:text-[#CC9966] group-hover:scale-110 group-hover:-translate-y-1" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
//             {/* First Box */}
//             <div className="border-2 mt-7 border-gray-300 relative bg-white rounded shadow">
//               <div className="border-t-2 border-gray-300 w-full p-4">
//                 {/* Row with Description left and icon right */}
//                 <div className="flex items-center justify-between">
//                   {/* Left side - Description */}
//                   <h1 className="font-display text-yellow-400 text-[18px] font-medium">
//                     Description
//                   </h1>

//                   {/* Right side - Icon */}
//                   <AiOutlineMinus className="text-gray-400 text-xl cursor-pointer hover:text-[#b57f4c] transition" />
//                 </div>

//                 <div>
//                   <h1 className="text-[16px] text-[#333333] font-display mt-4">
//                     Product Information
//                   </h1>
//                 </div>

//                 {/* First Row - Text Left, Image Right */}
//                 <div className="flex flex-col md:flex-row mt-6 gap-4 md:justify-between">
//                   <h1 className="text-justify text-[14px] text-[#333333] md:w-1/2">
//                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                     Donec odio. Quisque volutpat mattis eros. Nullam malesuada
//                     erat ut turpis. Suspendisse urna viverra non, semper
//                     suscipit, posuere a, pede. Donec nec justo eget felis
//                     facilisis fermentum. Aliquam porttitor mauris sit amet orci.
//                     Aenean dignissim pellentesque felis. Phasellus ultrices
//                     nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
//                     vulputate sem tristique cursus.
//                   </h1>
//                   <img
//                     src={b22}
//                     alt=""
//                     className="w-full md:w-56 h-56 object-cover rounded"
//                   />
//                 </div>

//                 {/* Second Row - Image Left, Text Right */}
//                 <div className="flex flex-col md:flex-row mt-11 gap-4 md:justify-between">
//                   <img
//                     src={b22}
//                     alt=""
//                     className="w-full md:w-56 h-56 object-cover rounded"
//                   />
//                   <h1 className="text-justify text-[14px] text-[#333333] md:w-1/2">
//                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                     Donec odio. Quisque volutpat mattis eros. Nullam malesuada
//                     erat ut turpis. Suspendisse urna viverra non, semper
//                     suscipit, posuere a, pede. Donec nec justo eget felis
//                     facilisis fermentum. Aliquam porttitor mauris sit amet orci.
//                     Aenean dignissim pellentesque felis. Phasellus ultrices
//                     nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
//                     vulputate sem tristique cursus.
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for Lens */}
//       <style>{`
//         .img-zoom-lens {
//           position: absolute;
//           border: 2px solid #aaa;
//           border-radius: 50%;
//           width: 100px;
//           height: 100px;
//           display: none;
//           cursor: crosshair;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.3);
//           background-repeat: no-repeat;
//         }
//         @media (min-width: 768px) {
//           .img-zoom-lens {
//             width: 120px;
//             height: 120px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ProductDetails;












































































import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineShare } from "react-icons/md";
import b22 from "../assets/b22.jpg";
import { CiHeart } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormPopup from "../components/FormPopup";

function ProductDetails() {
  const { state } = useLocation();
  const [mainImage, setMainImage] = useState(state?.images[0]);
  const [qty, setQty] = useState(1); // Quantity state
  const [descOpen, setDescOpen] = useState(true); // Description toggle
  const imgRef = useRef(null);
  const lensRef = useRef(null);
  const navigate = useNavigate();
  const [shippingOpen, setShippingOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

 
  const [showForm, setShowForm] = useState(false); // ✅ Add this line

  useEffect(() => {
    if (!imgRef.current) return;
    const img = imgRef.current;
    const lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    lensRef.current = lens;
    img.parentElement.style.position = "relative";
    img.parentElement.insertBefore(lens, img);
    const cx = 2;
    const cy = 2;
    lens.style.backgroundImage = `url('${img.src}')`;
    lens.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    function moveLens(e) {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x - lens.offsetWidth / 2;
      let y = pos.y - lens.offsetHeight / 2;
      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (x < 0) x = 0;
      if (y > img.height - lens.offsetHeight)
        y = img.height - lens.offsetHeight;
      if (y < 0) y = 0;
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      lens.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }

    function getCursorPos(e) {
      const a = img.getBoundingClientRect();
      const x = e.pageX - a.left - window.pageXOffset;
      const y = e.pageY - a.top - window.pageYOffset;
      return { x, y };
    }

    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mouseenter", () => {
      lens.style.display = "block";
      lens.style.backgroundImage = `url('${img.src}')`;
    });
    img.addEventListener("mouseleave", () => (lens.style.display = "none"));
    return () => {
      lens.remove();
    };
  }, [mainImage]);

  if (!state) {
    return <h2 className="text-center text-red-500">No product data found</h2>;
  }
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);

  return (
    <div className="w-full min-h-screen p-4 md:p-6 font-display flex flex-col items-center">
      {/* Product info & images (same as before) */}
      <div className="w-full max-w-6xl mb-4 md:mb-6">
        <div className="flex items-center gap-2 text-gray-600 text-sm md:text-lg">
          <div className="relative group flex items-center">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-[#CC9966] transition text-sm md:text-base"
            >
              Home
            </span>

            {/* Tooltip */}
            <span className="absolute left-0 top-8 bg-white text-black border border-black font-display text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              Go to Homepage
            </span>
          </div>

          {/* Right Arrow */}
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

          {/* Product Title */}
          <h1 className="text-sm md:text-base font-display text-gray-800">
            {state.title}
          </h1>
        </div>

        <div className="border-b w-full border-gray-300 mt-2"></div>
      </div>

      <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left - images */}
        <div className="flex flex-col items-center gap-4">
          <div className="img-zoom-container relative w-full">
            <img
              ref={imgRef}
              src={mainImage}
              alt={state.title}
              className="rounded-md shadow-md w-full h-auto max-h-[450px] object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
            {state.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`w-36 h-48 md:w-[260px] md:h-[260px] object-cover rounded-md border cursor-pointer
                  ${
                    mainImage === img ? "border-[#CC9966]" : "border-gray-300"
                  }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right - Product info */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-display text-gray-800">
            {state.title}
          </h1>
          <p className="text-[#777777] mt-3 text-[14px] md:text-base">
            {state.description}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-[#CC9966] font-semibold mt-2 md:mt-4">
            ${state.price}
          </p>

          {/* Quantity selector */}
          <div className="mt-4 flex items-center gap-3">
            <h1 className="text-gray-700 font-medium text-lg">Qty:</h1>
            <div className="flex items-center border border-[#777777] text-[16px] text-gray-700 w-36 h-14 rounded overflow-hidden">
              <button
                onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
                className="flex-1 h-full  transition text-xl "
              >
                -
              </button>
              <input
                type="text"
                value={qty}
                readOnly
                className="w-24 text-center h-11 text-xl font-medium  "
              />
              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="flex-1 h-full transition text-xl "
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 mt-6 items-center">
            {/* <button className="bg-[#CC9966] text-white px-6 py-2 w-48 hover:bg-green-400 transition">
              Add to Cart
            </button>
             */}
            <button
              onClick={handleFormOpen}
              className="bg-[#CC9966] text-white px-6 py-2 w-48 hover:bg-green-400 transition mt-5"
            >
              Add to Cart
            </button>{" "}
            {showForm && (
              <FormPopup
                onClose={handleFormClose}
                title={state?.title}
                price={state?.price}
              />
            )}
            <button className="flex items-center gap-2 text-[#777777] text-[14px] px-6 py-2 hover:text-[#CC9966] transition">
              <CiHeart className="text-[18px]" />
              <span className="flex items-center gap-1 relative group">
                Add to Wishlist
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CC9966] transition-all group-hover:w-full"></span>
              </span>
            </button>
            <button className="flex items-center gap-2 text-[#777777] text-[14px] px-6 py-2 hover:text-[#CC9966] transition">
              <CiHeart className="text-[18px]" />
              <span className="flex items-center gap-1 relative group">
                Compare
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CC9966] transition-all group-hover:w-full"></span>
              </span>
            </button>
          </div>
          <div className="w-full">
            {/* Top Section */}
            <div className="flex flex-wrap justify-between items-center">
              {/* Category & Fashion */}
              <div className="flex mt-6 items-center gap-2">
                <h1 className="text-[#777777] text-sm">Category :</h1>

                <h1
                  onClick={() => navigate("/category/fashion")}
                  className="relative group cursor-pointer text-[#777777] text-sm px-2 py-1 hover:text-[#CC9966]"
                >
                  Fashion
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#CC9966] transition-all group-hover:w-full"></span>
                </h1>
              </div>

              {/* Share Section */}
              <div className="flex mt-6 items-center gap-1 cursor-pointer group">
                <h1 className="text-[#777777] text-sm">Share:</h1>
                <MdOutlineShare className="text-xl transition-transform rounded-full hover:text-[#CC9966] group-hover:scale-110 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Bottom Line */}
            <hr className="w-full border-t border-gray-300 mt-2" />
          </div>

          {/* Description box with toggle */}
          <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto ">
            <div className="border-1  border-gray-300 relative bg-white ">
              <div className="border-t-2 border-gray-300 w-full p-4">
                {/* Row with Description left and toggle right */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setDescOpen(!descOpen)}
                >
                  <h1 className="font-display text-yellow-400 text-[18px] font-medium">
                    Description
                  </h1>
                  {descOpen ? (
                    <AiOutlineMinus className="text-gray-400 text-xl cursor-pointer hover:text-[#b57f4c] transition" />
                  ) : (
                    <AiOutlinePlus className="text-gray-400 text-xl cursor-pointer hover:text-[#b57f4c] transition" />
                  )}
                </div>

                {/* Collapsible content */}
                {descOpen && (
                  <div className="mt-4">
                    <h1 className="text-[16px] text-[#333333] font-display">
                      Product Information
                    </h1>

                    <div className="flex flex-col md:flex-row mt-6 gap-4 md:justify-between">
                      <h1 className="text-justify text-[14px] text-[#333333] md:w-1/2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere a, pede. Donec nec justo eget
                        felis facilisis fermentum. Aliquam porttitor mauris sit
                        amet orci. Aenean dignissim pellentesque felis.
                        Phasellus ultrices nulla quis nibh. Quisque a lectus.
                        Donec consectetuer ligula vulputate sem tristique
                        cursus.
                      </h1>
                      <img
                        src={b22}
                        alt=""
                        className="w-full md:w-56 h-56 object-cover rounded"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row mt-11 gap-4 md:justify-between">
                      <img
                        src={b22}
                        alt=""
                        className="w-full md:w-56 h-56 object-cover rounded"
                      />
                      <h1 className="text-justify text-[14px] text-[#333333] md:w-1/2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere a, pede. Donec nec justo eget
                        felis facilisis fermentum. Aliquam porttitor mauris sit
                        amet orci. Aenean dignissim pellentesque felis.
                        Phasellus ultrices nulla quis nibh. Quisque a lectus.
                        Donec consectetuer ligula vulputate sem tristique
                        cursus.
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Shipping & Returns Section */}
          <div className="border-1 border-gray-300 relative bg-white ">
            <div className="border-t-2 border-gray-300 w-full p-4">
              {/* Row with Shipping & Returns left and toggle right */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShippingOpen(!shippingOpen)}
              >
                <h1 className="font-display text-yellow-400 text-[18px] font-medium">
                  Shipping & Returns
                </h1>
                {shippingOpen ? (
                  <AiOutlineMinus className="text-gray-400 text-xl cursor-pointer hover:text-[#b57f4c] transition" />
                ) : (
                  <AiOutlinePlus className="text-gray-400 text-xl cursor-pointer hover:text-[#b57f4c] transition" />
                )}
              </div>

              {/* Collapsible content */}
              {shippingOpen && (
                <div className="mt-4">
                  <h1 className="text-[16px] text-[#333333] font-display">
                    Delivery & returns
                  </h1>

                  <p className="mt-3 text-[14px] text-[#333333] leading-6 text-justify">
                    We deliver to over 100 countries around the world. For full
                    details of the delivery options we offer, please view our
                    Delivery information.
                  </p>

                  <p className="mt-3 text-[14px] text-[#333333] leading-6 text-justify">
                    We hope you’ll love every purchase, but if you ever need to
                    return an item you can do so within a month of receipt. For
                    full details of how to make a return, please view our
                    Returns information.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Reviews Section */}
          <div className="border-1 border-gray-300 relative bg-white ">
            <div className="border-t-2 border-gray-300 w-full p-4">
              {/* Row with Reviews left and toggle right */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setReviewsOpen(!reviewsOpen)}
              >
                <h1 className="font-display text-yellow-400 text-[18px] font-medium">
                  Reviews
                </h1>
                {reviewsOpen ? (
                  <AiOutlineMinus className="text-gray-400 text-xl cursor-pointer hover:text-[#b57f4c] transition" />
                ) : (
                  <AiOutlinePlus className="text-gray-400 text-xl cursor-pointer hover:text-[#b57f4c] transition" />
                )}
              </div>

              {/* Collapsible content */}
              {reviewsOpen && (
                <div className="mt-4 space-y-6">
                  {/* Title */}
                  <h1 className="text-[16px] text-[#333333] font-display">
                    You're reviewing:{" "}
                  </h1>
                  <span className="font-semibold">Linen-blend dress</span>

                  {/* Rating Section */}
                  <div className="relative space-y-4 border-2 mt-4 w-72 border-gray-400 p-4 rounded-md">
                    {/* Label on border */}
                    <span className="absolute -top-3 left-3 bg-white px-2 text-[14px] font-medium text-[#333333]">
                      Your Rating
                    </span>

                    {["Quality", "Value", "Price"].map((label) => (
                      <div key={label} className="flex items-center gap-4">
                        <span className="w-20 text-sm text-[#333333]">
                          {label}
                        </span>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              className="text-gray-400 hover:text-yellow-500 transition text-xl"
                            >
                              ★
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#333333] mb-1">
                        Nickname
                      </label>
                      <input
                        type="text"
                        className=" border w-72 border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#333333] mb-1">
                        Summary
                      </label>
                      <input
                        type="text"
                        className="w-72 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#333333] mb-1">
                        Review
                      </label>
                      <textarea
                        rows="4"
                        className="w-72 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md transition">
                    Submit Review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Lens */}
      <style>{`
        .img-zoom-lens {
          position: absolute;
          border: 2px solid #aaa;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: none;
          cursor: crosshair;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .img-zoom-lens {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductDetails;

