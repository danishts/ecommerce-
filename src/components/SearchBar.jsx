import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="fixed  inset-0  flex flex-col items-center justify-start p-4">
      {/* Close button top-right */}
      <button
        onClick={() => navigate("/")}
        className="self-end text-gray-700 hover:text-red-500 text-2xl mb-4"
      >
        <FaTimes />
      </button>

      {/* Search input */}
      <div className="w-full max-w-7xl">
        <h1 className="mb-5 text-center font-bold text-2xl">Search</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full p-3 border border-gray-300 rounded shadow text-gray-700 outline-none text-lg 
                     focus:border-[#cc9966] focus:ring-2 focus:ring-[#cc9966] transition-colors"
        />
      </div>
    </div>
  );
};

export default SearchBar;
