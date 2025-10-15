// import React from "react";
// import Button from "./Button";

// const Card = ({ image, title, buttonText, items, className }) => {
//   return (
//     <div
//       className={`w-full relative bg-cover bg-center group ${className}`}
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
//         {/* Title */}
//         <h1 className="text-[16px] font-bold cursor-pointer hover:text-[#cc9966] mb-2 transform -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//           {title}
//         </h1>

//         {/* Items */}
//         {items && (
//           <h2 className="text-[14px] cursor-pointer hover:text-[#cc9966] mb-3 transform -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//             {items} Items
//           </h2>
//         )}

//         {/* Button */}
//         <Button
//           text={buttonText}
//           className="w-40 h-10 flex items-center border-2 border-white hover:bg-[#b57f4c] justify-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
//         />
//       </div>
//     </div>
//   );
// };

// export default Card;















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "./Button";

// const Card = ({ image, title, buttonText, items, className }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/category/${encodeURIComponent(title)}`); // 🔹 title ko URL me bhej rahe hain
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={`w-full relative bg-cover bg-center group cursor-pointer ${className}`}
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
//         {/* Title */}
//         <h1
//           className="text-[16px] font-bold mb-2 transform -translate-y-8 opacity-0
//           group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
//         >
//           {title}
//         </h1>

//         {/* Items */}
//         {items && (
//           <h2
//             className="text-[14px] mb-3 transform -translate-y-8 opacity-0
//             group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
//           >
//             {items} Items
//           </h2>
//         )}

//         {/* Button */}
//         <Button
//           text={buttonText}
//           className="w-40 h-10 flex items-center border-2 border-white hover:bg-[#b57f4c] justify-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
//         />
//       </div>
//     </div>
//   );
// };

// export default Card;




















































import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Card = ({ image, title, buttonText, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${encodeURIComponent(title)}`, {
      state: { title, category: title },
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full relative bg-cover bg-center group cursor-pointer ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
        <h1
          className="text-[16px] font-bold mb-2 transform -translate-y-8 opacity-0 
          group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
        >
          {title}
        </h1>

        <Button
          text={buttonText}
          className="w-40 h-10 flex items-center border-2 border-white hover:bg-[#b57f4c] justify-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Card;
