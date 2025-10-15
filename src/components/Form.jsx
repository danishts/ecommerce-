import React from "react";

const Form = ({ title, price, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-6 w-[90%] sm:w-[400px] shadow-lg relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#CC9966] mb-4 text-center">
          Add to Cart Form
        </h2>

        {/* Product values */}
        <div className="mb-4 flex flex-col gap-2 text-gray-700">
          <p>
            <strong>Product:</strong> {title}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
        </div>

        {/* Input fields */}
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded px-3 py-2 w-full mb-3 focus:outline-[#CC9966]"
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border border-gray-300 rounded px-3 py-2 w-full mb-4 focus:outline-[#CC9966]"
        />

        <button className="bg-[#CC9966] text-white px-4 py-2 rounded w-full hover:bg-[#b38655]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
