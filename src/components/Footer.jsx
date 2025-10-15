import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start font-display py-6 px-4 sm:px-6 lg:px-48 bg-white gap-4 md:gap-0">
      {/* Left Side */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
        <h1 className="text-[14px] text-[#777777]">
          Copyright © 2025 Molla Store. All rights reserved.
        </h1>
        <h1 className="text-[#999999] text-[14px] hover:text-[#CC9966] cursor-pointer underline underline-offset-2">
          Terms Of Use
        </h1>
        <h1 className="text-[#999999] text-[14px] hover:text-[#CC9966] underline underline-offset-2 cursor-pointer">
          Privacy Policy
        </h1>
      </div>

      {/* Right Side - Social Media */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-center md:text-left">
        {/* Title */}
        <h1 className="text-[#333333] text-[14px] font-display pb-1">
          Social Media
        </h1>

        {/* Icons */}
        <div className="flex gap-4 text-[20px] text-[#999999] justify-center md:justify-start">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1877F2] transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C13584] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E60023] transition-colors"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;












