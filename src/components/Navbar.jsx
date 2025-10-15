
// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Common classes for NavLink
//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl">
//           <FaSearch className="cursor-pointer hover:text-yellow-400" />
//           <FaUser className="cursor-pointer hover:text-yellow-400" />
//           <CiHeart className="cursor-pointer hover:text-yellow-400" />
//           <FaShoppingCart className="cursor-pointer hover:text-yellow-400" />
//           <FaCog className="cursor-pointer hover:text-yellow-400" />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       {/* Mobile Sidebar */}
//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// }

// export default Navbar;























// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";

// function Navbar() {
//    const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();


//   // Common classes for NavLink
//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3 shadow-md">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             Home <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             Shop <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             Product <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             Pages <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             Element
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl">
//           <FaSearch className="cursor-pointer hover:text-yellow-400" />
//           <FaUser className="cursor-pointer hover:text-yellow-400" />
//           <CiHeart className="cursor-pointer hover:text-yellow-400" />
//           <FaShoppingCart className="cursor-pointer hover:text-yellow-400" />
//           <FaCog className="cursor-pointer hover:text-yellow-400" />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       {/* Mobile Sidebar */}
//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// }

// export default Navbar;













































// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink, useNavigate } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   return (
//     <>
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl">
//           {/* Navigate to SearchBar page */}
//           <FaSearch
//             onClick={() => navigate("/search")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//           <FaUser className="cursor-pointer hover:text-yellow-400" />
//           <div className="relative group">
//             <CiHeart className="cursor-pointer hover:text-yellow-400" />
//             <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-white w-64 h-11 text-center flex justify-center items-center text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//               You have no items in your wish list.
//             </span>
//           </div>
//           <FaShoppingCart className="cursor-pointer hover:text-yellow-400" />
//           <FaCog className="cursor-pointer hover:text-yellow-400" />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// }

// export default Navbar;












































// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink, useNavigate } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Drawer } from "antd";

// // Components
// import CartDrawerContent from "./CartDrawerContent";
// import SettingsDrawerContent from "./SettingsDrawerContent";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerType, setDrawerType] = useState("");

//   const navigate = useNavigate();

//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   const openDrawer = (type) => {
//     setDrawerType(type);
//     setDrawerOpen(true);
//   };

//   // Example dummy data
//   const cartItems = [
//     { name: "Product 1", price: 29 },
//     { name: "Product 2", price: 45 },
//   ];

//   const user = { name: "Danish Malik" };

//   return (
//     <>
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl">
//           <FaSearch
//             onClick={() => navigate("/search")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//           <FaUser className="cursor-pointer hover:text-yellow-400" />
//           <CiHeart className="cursor-pointer hover:text-yellow-400" />

//           <FaShoppingCart
//             onClick={() => openDrawer("cart")}
//             className="cursor-pointer hover:text-yellow-400"
//           />

//           <FaCog
//             onClick={() => openDrawer("settings")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       {/* Drawer */}
//       <Drawer
//         title={drawerType === "cart" ? "Your Cart" : "Settings"}
//         placement="right"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//       >
//         {drawerType === "cart" ? (
//           <CartDrawerContent items={cartItems} />
//         ) : (
//           <SettingsDrawerContent user={user} />
//         )}
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;





























// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink, useNavigate } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Drawer } from "antd";
// import { IoClose } from "react-icons/io5"; // 🔹 custom close icon

// // Components
// import CartDrawerContent from "./CartDrawerContent";
// import SettingsDrawerContent from "./SettingsDrawerContent";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerType, setDrawerType] = useState("");

//   const navigate = useNavigate();

//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   const openDrawer = (type) => {
//     setDrawerType(type);
//     setDrawerOpen(true);
//   };

//   // Example dummy data
//   const cartItems = [
//     { name: "Product 1", price: 29 },
//     { name: "Product 2", price: 45 },
//   ];

//   const user = { name: "Danish Malik" };

//   return (
//     <>
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl">
//           <FaSearch
//             onClick={() => navigate("/search")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//           <FaUser className="cursor-pointer hover:text-yellow-400" />
//           <CiHeart className="cursor-pointer hover:text-yellow-400" />

//           <FaShoppingCart
//             onClick={() => openDrawer("cart")}
//             className="cursor-pointer hover:text-yellow-400"
//           />

//           <FaCog
//             onClick={() => openDrawer("settings")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       {/* Drawer */}
//       <Drawer
//         title={drawerType === "cart" ? "Your Cart" : "Settings"}
//         placement="right"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//         closeIcon={
//           <IoClose className="text-2xl cursor-pointer transition-transform duration-300 hover:rotate-180 hover:text-red-500" />
//         }
//       >
//         {drawerType === "cart" ? (
//           <CartDrawerContent items={cartItems} />
//         ) : (
//           <SettingsDrawerContent user={user} />
//         )}
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;











































































// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink, useNavigate } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Drawer, message } from "antd";
// import { IoClose } from "react-icons/io5";

// // Components
// import CartDrawerContent from "./CartDrawerContent";
// import SettingsDrawerContent from "./SettingsDrawerContent";
// import LoginForm from "./LoginForm"; // 🔹 apka existing login form

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerType, setDrawerType] = useState("");
//   const [showHeartTooltip, setShowHeartTooltip] = useState(false);
//   const [loginDropdown, setLoginDropdown] = useState(false); // 🔹 FaUser ke liye dropdown

//   const navigate = useNavigate();

//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   const openDrawer = (type) => {
//     setDrawerType(type);
//     setDrawerOpen(true);
//   };

//   const cartItems = [
//     { name: "Product 1", price: 29 },
//     { name: "Product 2", price: 45 },
//   ];

//   const user = { name: "Danish Malik" };

//   const handleHeartClick = () => {
//     message.info("You have no items in your wish list.");
//     setShowHeartTooltip(false);
//   };

//   return (
//     <>
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3 relative">
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl relative">
//           <FaSearch
//             onClick={() => navigate("/search")}
//             className="cursor-pointer hover:text-yellow-400"
//           />

//           {/* FaUser Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setLoginDropdown(true)}
//             onMouseLeave={() => setLoginDropdown(false)}
//           >
//             <div className="flex items-center cursor-pointer hover:text-yellow-400 gap-1">
//               <FaUser />
            
//             </div>

//             {loginDropdown && (
//               <div className="absolute top-10 right-1 w-80 bg-white text-gray-700   p-4">
//                 {/* 🔹 Apka LoginForm component yahan render hoga */}
//                 <LoginForm />
//               </div>
//             )}
//           </div>

//           {/* Heart Icon */}
//           <div
//             className="relative"
//             onMouseEnter={() => setShowHeartTooltip(true)}
//             onMouseLeave={() => setShowHeartTooltip(false)}
//           >
//             <CiHeart
//               onClick={handleHeartClick}
//               className="cursor-pointer hover:text-yellow-400"
//             />
//             {showHeartTooltip && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
//                 <div className="bg-white text-black w-72 mt-16 h-11  flex justify-center items-center text-xs rounded px-2 py-1 shadow-lg">
//                   You have no items in your wish list.
//                 </div>
//                 <div className="w-2 h-2 bg-gray-800 rotate-45 mt-[-2px]"></div>
//               </div>
//             )}
//           </div>

//           <FaShoppingCart
//             onClick={() => openDrawer("cart")}
//             className="cursor-pointer hover:text-yellow-400"
//           />

//           <FaCog
//             onClick={() => openDrawer("settings")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//         </div>

//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       <Drawer
//         title={drawerType === "cart" ? "Your Cart" : "Settings"}
//         placement="right"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//         closeIcon={
//           <IoClose className="text-2xl cursor-pointer transition-transform duration-300 hover:rotate-180 hover:text-red-500" />
//         }
//       >
//         {drawerType === "cart" ? (
//           <CartDrawerContent items={cartItems} />
//         ) : (
//           <SettingsDrawerContent user={user} />
//         )}
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;


































// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Drawer, message } from "antd";
// import { IoClose } from "react-icons/io5";
// import { RiArrowDownSLine } from "react-icons/ri";

// import logo from "../assets/loog.png";
// import MobileSidebar from "./MobileSidebar";
// import CartDrawerContent from "./CartDrawerContent";
// import SettingsDrawerContent from "./SettingsDrawerContent";
// import LoginForm from "./LoginForm";
// import { useCart } from "../context/CartContext";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerType, setDrawerType] = useState("");
//   const [showHeartTooltip, setShowHeartTooltip] = useState(false);
//   const [loginDropdown, setLoginDropdown] = useState(false);

//   const navigate = useNavigate();
//   const { cartItems } = useCart(); // ✅ Context se cartItems mil rahe hain

//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   const openDrawer = (type) => {
//     setDrawerType(type);
//     setDrawerOpen(true);
//   };

//   const user = { name: "Danish Malik" };

//   const handleHeartClick = () => {
//     message.info("You have no items in your wish list.");
//     setShowHeartTooltip(false);
//   };

//   return (
//     <>
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3 relative">
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4 text-xl relative">
//           <FaSearch
//             onClick={() => navigate("/search")}
//             className="cursor-pointer hover:text-yellow-400"
//           />

//           {/* Login dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setLoginDropdown(true)}
//             onMouseLeave={() => setLoginDropdown(false)}
//           >
//             <div className="flex items-center cursor-pointer hover:text-yellow-400 gap-1">
//               <FaUser />
//             </div>

//             {loginDropdown && (
//               <div className="absolute top-10 right-1 w-80 bg-white text-gray-700 p-4">
//                 <LoginForm />
//               </div>
//             )}
//           </div>

//           {/* Wishlist */}
//           <div
//             className="relative"
//             onMouseEnter={() => setShowHeartTooltip(true)}
//             onMouseLeave={() => setShowHeartTooltip(false)}
//           >
//             <CiHeart
//               onClick={handleHeartClick}
//               className="cursor-pointer hover:text-yellow-400"
//             />
//             {showHeartTooltip && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
//                 <div className="bg-white text-black w-72 mt-16 h-11 flex justify-center items-center text-xs rounded px-2 py-1 shadow-lg">
//                   You have no items in your wish list.
//                 </div>
//                 <div className="w-2 h-2 bg-gray-800 rotate-45 mt-[-2px]"></div>
//               </div>
//             )}
//           </div>

//           {/* 🛒 Cart Icon with Count */}
//           <div className="relative">
//             <FaShoppingCart
//               onClick={() => openDrawer("cart")}
//               className="cursor-pointer hover:text-yellow-400"
//             />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartItems.length}
//               </span>
//             )}
//           </div>

//           <FaCog
//             onClick={() => openDrawer("settings")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//         </div>

//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       {/* Drawer */}
//       <Drawer
//         title={drawerType === "cart" ? "Your Cart" : "Settings"}
//         placement="right"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//         closeIcon={
//           <IoClose className="text-2xl cursor-pointer transition-transform duration-300 hover:rotate-180 hover:text-red-500" />
//         }
//       >
//         {drawerType === "cart" ? (
//           <CartDrawerContent items={cartItems} />
//         ) : (
//           <SettingsDrawerContent user={user} />
//         )}
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;





























// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink, useNavigate } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Drawer, message } from "antd";
// import { IoClose } from "react-icons/io5";

// // Context
// import { useCart } from "../context/CartContext";

// // Components
// import CartDrawerContent from "./CartDrawerContent";
// import SettingsDrawerContent from "./SettingsDrawerContent";
// import LoginForm from "./LoginForm";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerType, setDrawerType] = useState("");
//   const [showHeartTooltip, setShowHeartTooltip] = useState(false);
//   const [loginDropdown, setLoginDropdown] = useState(false);

//   const navigate = useNavigate();
//   const { cartItems } = useCart(); // ✅ context se cart items

//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   const openDrawer = (type) => {
//     setDrawerType(type);
//     setDrawerOpen(true);
//   };

//   const user = { name: "Danish Malik" };

//   const handleHeartClick = () => {
//     message.info("You have no items in your wish list.");
//     setShowHeartTooltip(false);
//   };

//   return (
//     <>
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3 relative">
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl relative">
//           <FaSearch
//             onClick={() => navigate("/search")}
//             className="cursor-pointer hover:text-yellow-400"
//           />

//           {/* FaUser Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setLoginDropdown(true)}
//             onMouseLeave={() => setLoginDropdown(false)}
//           >
//             <div className="flex items-center cursor-pointer hover:text-yellow-400 gap-1">
//               <FaUser />
//             </div>

//             {loginDropdown && (
//               <div className="absolute top-10 right-1 w-80 bg-white text-gray-700 p-4 shadow-lg">
//                 <LoginForm />
//               </div>
//             )}
//           </div>

//           {/* Heart Icon */}
//           <div
//             className="relative"
//             onMouseEnter={() => setShowHeartTooltip(true)}
//             onMouseLeave={() => setShowHeartTooltip(false)}
//           >
//             <CiHeart
//               onClick={handleHeartClick}
//               className="cursor-pointer hover:text-yellow-400"
//             />
//             {showHeartTooltip && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
//                 <div className="bg-white text-black w-72 mt-16 h-11 flex justify-center items-center text-xs rounded px-2 py-1 shadow-lg">
//                   You have no items in your wish list.
//                 </div>
//                 <div className="w-2 h-2 bg-gray-800 rotate-45 mt-[-2px]"></div>
//               </div>
//             )}
//           </div>

//           {/* Cart Icon with Notification */}
//           <div className="relative">
//             <FaShoppingCart
//               onClick={() => openDrawer("cart")}
//               className="cursor-pointer hover:text-yellow-400"
//             />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 text-[10px] rounded-full flex items-center justify-center font-bold text-white">
//                 {cartItems.length}
//               </span>
//             )}
//           </div>

//           {/* Settings */}
//           <FaCog
//             onClick={() => openDrawer("settings")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       <Drawer
//         title={drawerType === "cart" ? "Your Cart" : "Settings"}
//         placement="right"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//         closeIcon={
//           <IoClose className="text-2xl cursor-pointer transition-transform duration-300 hover:rotate-180 hover:text-red-500" />
//         }
//       >
//         {drawerType === "cart" ? (
//           <CartDrawerContent items={cartItems} />
//         ) : (
//           <SettingsDrawerContent user={user} />
//         )}
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;



























// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { NavLink, useNavigate } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// import logo from "../assets/loog.png";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Drawer } from "antd";
// import { IoClose } from "react-icons/io5";

// // Context
// import { useCart } from "../context/CartContext";

// // Components
// import CartDrawerContent from "./CartDrawerContent";
// import SettingsDrawerContent from "./SettingsDrawerContent";
// import LoginForm from "./LoginForm";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerType, setDrawerType] = useState("");
//   const [showHeartTooltip, setShowHeartTooltip] = useState(false);
//   const [showCartMessage, setShowCartMessage] = useState(false);
//   const [loginDropdown, setLoginDropdown] = useState(false);

//   const navigate = useNavigate();
//   const { cartItems } = useCart();

//   const linkClasses = ({ isActive }) =>
//     `relative pb-1 transition flex items-center gap-1
//      ${isActive ? "text-white" : "hover:text-white"}
//      after:absolute after:left-0 after:bottom-0
//      after:h-[2px] after:w-full after:scale-x-0
//      after:bg-white after:transition-transform
//      after:duration-300 hover:after:scale-x-100
//      ${isActive ? "after:scale-x-100" : ""}`;

//   const openDrawer = (type) => {
//     setDrawerType(type);
//     setDrawerOpen(true);
//   };

//   const user = { name: "Danish Malik" };

//   const handleHeartClick = () => {
//     setShowHeartTooltip(true);
//     setTimeout(() => setShowHeartTooltip(false), 2000);
//   };

//   const handleCartClick = () => {
//     if (cartItems.length > 0) {
//       openDrawer("cart");
//     } else {
//       setShowCartMessage(true);
//       setTimeout(() => setShowCartMessage(false), 2000);
//     }
//   };

//   return (
//     <>
//       <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3 relative">
//         <img src={logo} alt="Logo" className="w-24 h-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className={linkClasses}>
//             <span>Home</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/shop" className={linkClasses}>
//             <span>Shop</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/product" className={linkClasses}>
//             <span>Product</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/pages" className={linkClasses}>
//             <span>Pages</span>
//             <RiArrowDownSLine />
//           </NavLink>
//           <NavLink to="/element" className={linkClasses}>
//             <span>Element</span>
//           </NavLink>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4 text-xl relative">
//           <FaSearch
//             onClick={() => navigate("/search")}
//             className="cursor-pointer hover:text-yellow-400"
//           />

//           {/* FaUser Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setLoginDropdown(true)}
//             onMouseLeave={() => setLoginDropdown(false)}
//           >
//             <div className="flex items-center cursor-pointer hover:text-yellow-400 gap-1">
//               <FaUser />
//             </div>

//             {loginDropdown && (
//               <div className="absolute top-10 right-1 w-80 bg-white text-gray-700 p-4 shadow-lg">
//                 <LoginForm />
//               </div>
//             )}
//           </div>

//           {/* Heart Icon */}
//           <div
//             className="relative"
//             onMouseEnter={() => setShowHeartTooltip(true)}
//             onMouseLeave={() => setShowHeartTooltip(false)}
//           >
//             <CiHeart
//               onClick={handleHeartClick}
//               className="cursor-pointer hover:text-yellow-400"
//             />
//             {showHeartTooltip && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
//                 <div className="bg-white text-black w-72 mt-16 h-11 flex justify-center items-center text-xs rounded px-2 py-1 shadow-lg">
//                   You have no items in your wish list.
//                 </div>
//                 <div className="w-2 h-2 bg-gray-800 rotate-45 mt-[-2px]"></div>
//               </div>
//             )}
//           </div>

//           {/* Cart Icon with Notification */}
//           <div className="relative">
//             <FaShoppingCart
//               onClick={handleCartClick}
//               className="cursor-pointer hover:text-yellow-400"
//             />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 text-[10px] rounded-full flex items-center justify-center font-bold text-white animate-pulse">
//                 {cartItems.length}
//               </span>
//             )}

//             {showCartMessage && (
//               <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
//                 <div className="bg-white text-black w-32 h-9 flex justify-center items-center text-xs rounded shadow-lg">
//                   Your cart is empty
//                 </div>
//                 <div className="w-2 h-2 bg-gray-800 rotate-45 mt-[-2px]"></div>
//               </div>
//             )}
//           </div>

//           {/* Settings */}
//           <FaCog
//             onClick={() => openDrawer("settings")}
//             className="cursor-pointer hover:text-yellow-400"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-2xl focus:outline-none ml-3"
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       <Drawer
//         title={drawerType === "cart" ? "Your Cart" : "Settings"}
//         placement="right"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//         closeIcon={
//           <IoClose className="text-2xl cursor-pointer transition-transform duration-300 hover:rotate-180 hover:text-red-500" />
//         }
//       >
//         {drawerType === "cart" ? (
//           <CartDrawerContent items={cartItems} />
//         ) : (
//           <SettingsDrawerContent user={user} />
//         )}
//       </Drawer>
//     </>
//   );
// }

// export default Navbar;












































































































// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSearch, FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import logo from "../assets/loog.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Drawer } from "antd";
import { IoClose } from "react-icons/io5";

// Context
import { useCart } from "../context/CartContext";

// Components
import CartDrawerContent from "./CartDrawerContent";
import SettingsDrawerContent from "./SettingsDrawerContent";
import LoginForm from "./LoginForm";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const [showHeartTooltip, setShowHeartTooltip] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  const navigate = useNavigate();
  const { cartItems, setCartItems } = useCart(); // ✅ cartItems aur setCartItems dono le lo

  const linkClasses = ({ isActive }) =>
    `relative pb-1 transition flex items-center gap-1
     ${isActive ? "text-white" : "hover:text-white"}
     after:absolute after:left-0 after:bottom-0
     after:h-[2px] after:w-full after:scale-x-0
     after:bg-white after:transition-transform
     after:duration-300 hover:after:scale-x-100
     ${isActive ? "after:scale-x-100" : ""}`;

  const openDrawer = (type) => {
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const user = { name: "Danish Malik" };

  const handleHeartClick = () => {
    setShowHeartTooltip(true);
    setTimeout(() => setShowHeartTooltip(false), 2000);
  };

  const handleCartClick = () => {
    if (cartItems.length > 0) {
      openDrawer("cart");
    } else {
      setShowCartMessage(true);
      setTimeout(() => setShowCartMessage(false), 2000);
    }
  };

  // ✅ Ye function item delete karega
  const handleDeleteItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // agar localStorage use kar rahe ho
  };

  return (
    <>
      <nav className="flex items-center justify-around font-display h-20 bg-gray-800 text-white px-4 py-3 relative">
        <img src={logo} alt="Logo" className="w-24 h-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClasses}>
            <span>Home</span>
            <RiArrowDownSLine />
          </NavLink>
          <NavLink to="/shop" className={linkClasses}>
            <span>Shop</span>
            <RiArrowDownSLine />
          </NavLink>
          <NavLink to="/product" className={linkClasses}>
            <span>Product</span>
            <RiArrowDownSLine />
          </NavLink>
          <NavLink to="/pages" className={linkClasses}>
            <span>Pages</span>
            <RiArrowDownSLine />
          </NavLink>
          <NavLink to="/element" className={linkClasses}>
            <span>Element</span>
          </NavLink>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-xl relative">
          <FaSearch
            onClick={() => navigate("/search")}
            className="cursor-pointer hover:text-yellow-400"
          />

          {/* FaUser Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoginDropdown(true)}
            onMouseLeave={() => setLoginDropdown(false)}
          >
            <div className="flex items-center cursor-pointer hover:text-yellow-400 gap-1">
              <FaUser />
            </div>

            {loginDropdown && (
              <div className="absolute top-10 right-1 w-80 bg-white text-gray-700 p-4 shadow-lg">
                <LoginForm />
              </div>
            )}
          </div>

          {/* Heart Icon */}
          <div
            className="relative"
            onMouseEnter={() => setShowHeartTooltip(true)}
            onMouseLeave={() => setShowHeartTooltip(false)}
          >
            <CiHeart
              onClick={handleHeartClick}
              className="cursor-pointer hover:text-yellow-400"
            />
            {showHeartTooltip && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
                <div className="bg-white text-black w-72 mt-16 h-11 flex justify-center items-center text-xs rounded px-2 py-1 shadow-lg">
                  You have no items in your wish list.
                </div>
                <div className="w-2 h-2 bg-gray-800 rotate-45 mt-[-2px]"></div>
              </div>
            )}
          </div>

          {/* Cart Icon with Notification */}
          <div className="relative">
            <FaShoppingCart
              onClick={handleCartClick}
              className="cursor-pointer hover:text-yellow-400"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 text-[10px] rounded-full flex items-center justify-center font-bold text-white animate-pulse">
                {cartItems.length}
              </span>
            )}

            {showCartMessage && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
                <div className="bg-white text-black w-32 h-9 flex justify-center items-center text-xs rounded shadow-lg">
                  Your cart is empty
                </div>
                <div className="w-2 h-2 bg-gray-800 rotate-45 mt-[-2px]"></div>
              </div>
            )}
          </div>

          {/* Settings */}
          <FaCog
            onClick={() => openDrawer("settings")}
            className="cursor-pointer hover:text-yellow-400"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl focus:outline-none ml-3"
        >
          <FiMenu />
        </button>
      </nav>

      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <Drawer
        title={drawerType === "cart" ? "Your Cart" : "Settings"}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={
          <IoClose className="text-2xl cursor-pointer transition-transform duration-300 hover:rotate-180 hover:text-red-500" />
        }
      >
        {drawerType === "cart" ? (
          <CartDrawerContent 
            items={cartItems} 
            onDelete={handleDeleteItem} // ✅ yahan pass kar diya
          />
        ) : (
          <SettingsDrawerContent user={user} />
        )}
      </Drawer>
    </>
  );
}

export default Navbar;
