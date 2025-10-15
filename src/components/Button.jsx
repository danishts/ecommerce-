// import React from "react";

// function Button({ text, onClick, className = "" }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-6 py-2 border-2 border-[#cc9966] text-white rounded-md shadow hover:bg-[#b57f4c] transition-all ${className}`}
//     >
//       {text}
//     </button>
//   );
// }

// export default Button;





// import React from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";

// function Button({ text, onClick, className = "" }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`flex items-center gap-2 px-6 py-2 border-2 border-[#CC9966] text-white  transition-all ${className}`}
//     >
//       {text}
//       <FaLongArrowAltRight />
//     </button>
//   );
// }

// export default Button;














import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2 border-2 border-[#CC9966] text-white 
                 transition-all duration-300
                 hover:bg-[#b57f4c] hover:border-transparent ${className}`}
    >
      {text}
      <FaLongArrowAltRight />
    </button>
  );
}

export default Button;
