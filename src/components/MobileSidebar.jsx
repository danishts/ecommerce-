import React from "react";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import logo from "../assets/loog.png";



function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0  bg-opacity-50 z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={onClose} className="text-2xl">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-3">
          <NavLink
            to="/"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={onClose}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={onClose}
          >
            Shop
          </NavLink>
          <NavLink
            to="/product"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={onClose}
          >
            Product
          </NavLink>
          <NavLink
            to="/pages"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={onClose}
          >
            Pages
          </NavLink>
          <NavLink
            to="/element"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={onClose}
          >
            Element
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default MobileSidebar;
