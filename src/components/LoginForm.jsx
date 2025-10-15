// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const LoginForm = () => {
//   return (
//     <div className="w-80 bg-white font-display text-gray-700 p-6">
//       {/* Heading */}
//       <h2 className="text-lg font-bold mb-5">Login Your Account</h2>

//       {/* Email Input */}
//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full mb-3 p-2 border rounded outline-none text-sm"
//       />

//       {/* Password Input */}
//       <input
//         type="password"
//         placeholder="Password"
//         className="w-full mb-3 p-2 border rounded outline-none text-sm"
//       />

//       {/* Checkbox */}
//       <label className="flex items-start text-xs mb-4 leading-snug">
//         <input type="checkbox" className="mr-2 mt-1" />
//         By using this form you agree with the storage and handling of your data
//         by this website.
//       </label>

//       {/* Sign In + Create Account */}
//       <div className="flex items-center gap-3">
//         <button className="bg-[#1ad333] text-white hover:bg-green-300 px-5 py-2 rounded  transition">
//           Sign In
//         </button>
//         <span className="text-sm text-gray-600 flex items-center gap-1 cursor-pointer hover:text-[#cc9966] transition">
//           Create account <FaArrowRight />
//         </span>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;















import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="w-80 bg-white font-display text-gray-700  p-6">
      {/* Heading */}
      <h2 className="text-lg font-bold mb-5">Login Your Account</h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded outline-none text-sm"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded outline-none text-sm"
      />

      {/* Checkbox */}
      <label className="flex items-start text-xs mb-4 leading-snug">
        <input type="checkbox" className="mr-2 mt-1" />
        By using this form you agree with the storage and handling of your data
        by this website.
      </label>

      {/* Sign In + Create Account */}
      <div className="flex items-center gap-3">
        <button className="bg-[#CC9966] text-white text-[14px]  hover:bg-green-300 px-5 py-2 rounded  transition">
          Sign In
        </button>
        <span className="text-sm text-gray-600 flex items-center gap-1 cursor-pointer hover:text-[#cc9966] transition">
          Create account <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
