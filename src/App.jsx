// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // 🔹 Navbar import

// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Pages from "./pages/Pages";
// import Elements from "./pages/Elements";

// function App() {
//   return (
//     <>
//       {/* Navbar har page pe show hoga */}
//       <Navbar />

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/element" element={<Elements />} />
//       </Routes>
//     </>
//   );
// }

// export default App;




















// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // 🔹 Navbar import

// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Pages from "./pages/Pages";
// import Elements from "./pages/Elements";
// import SearchBar from "./components/SearchBar"; // 🔹 SearchBar import

// function App() {
//   return (
//     <>
//       {/* Navbar har page pe show hoga */}
//       <Navbar />

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/element" element={<Elements />} />
//         <Route path="/search" element={<SearchBar />} />{" "}
//         {/* 🔹 SearchBar Route */}
//       </Routes>
//     </>
//   );
// }

// export default App;


















// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Pages from "./pages/Pages";
// import Elements from "./pages/Elements";
// import SearchBar from "./components/SearchBar";

// function App() {
//   const location = useLocation();

//   return (
//     <>
//       {/* Navbar sirf tab show hoga jab route /search nahi ho */}
//       {location.pathname !== "/search" && <Navbar />}

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/element" element={<Elements />} />
//         <Route path="/search" element={<SearchBar />} />
//       </Routes>
//     </>
//   );
// }

// export default App;




































































// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Pages from "./pages/Pages";
// import Elements from "./pages/Elements";
// import SearchBar from "./components/SearchBar";
// import ProductDetails from "./pages/ProductDetails";
// import CategoryDetails from "./pages/CategoryDetails"; // ✅ import add kiya

// function App() {
//   const location = useLocation();

//   return (
//     <>
//       {/* Navbar sirf tab show hoga jab route /search nahi ho */}
//       {location.pathname !== "/search" && <Navbar />}

//       {/* Routes */}
     
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/pages" element={<Pages />} />
//           <Route path="/element" element={<Elements />} />
//           <Route path="/search" element={<SearchBar />} />
//           <Route path="/product-details" element={<ProductDetails />} />
//           <Route path="/category/:title" element={<CategoryDetails />} />{" "}
//           {/* ✅ new route */}
//         </Routes>
     
//     </>
//   );
// }

// export default App;











// import React from "react";
// import { Routes, Route, useLocation, Form } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Pages from "./pages/Pages";
// import Elements from "./pages/Elements";
// import SearchBar from "./components/SearchBar";
// import ProductDetails from "./pages/ProductDetails";
// import CategoryDetails from "./pages/CategoryDetails"; // ✅ import add kiya
// import CategoryPage from "./pages/CategoryPage";

// function App() {
//   const location = useLocation();

//   return (
//     <>
//       {/* ✅ Navbar sirf tab show hoga jab route /search nahi ho */}
//       {location.pathname !== "/search" && (
//         <div className="sticky top-0 z-50 bg-white shadow">
//           <Navbar />
//         </div>
//       )}

//       {/* ✅ Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/element" element={<Elements />} />
//         <Route path="/search" element={<SearchBar />} />
//         <Route path="/product-details" element={<ProductDetails />} />
//         <Route path="/category/:title" element={<CategoryDetails />} />{" "}
//         <Route path="/category/:name" element={<CategoryPage />} />
      
//         {/* ✅ new route */}
//       </Routes>
//     </>
//   );
// }

// export default App;
























































// import React, { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Pages from "./pages/Pages";
// import Elements from "./pages/Elements";
// import SearchBar from "./components/SearchBar";
// import ProductDetails from "./pages/ProductDetails";
// import CategoryDetails from "./pages/CategoryDetails";
// import CategoryPage from "./pages/CategoryPage";
// import FormPopup from "./components/FormPopup";

// function App() {
//   const location = useLocation();

//   // 🔹 Cart & Popup State
//   const [cartItems, setCartItems] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);

//   // 🔹 Add item from FormPopup to Navbar cart
//   const handleAddToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
//     setShowPopup(false);
//   };

//   return (
//     <>
//       {/* 🔹 Navbar (hidden on search route) */}
//       {location.pathname !== "/search" && (
//         <div className="sticky top-0 z-50 bg-white shadow">
//           <Navbar cartItems={cartItems} />
//         </div>
//       )}

//       {/* 🔹 Routes */}
//       <Routes>
//         <Route
//           path="/"
//           element={<Home openPopup={() => setShowPopup(true)} />}
//         />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/element" element={<Elements />} />
//         <Route path="/search" element={<SearchBar />} />
//         <Route path="/product-details" element={<ProductDetails />} />
//         <Route path="/category/:title" element={<CategoryDetails />} />
//         <Route path="/category/:name" element={<CategoryPage />} />
//       </Routes>

//       {/* 🔹 Product Form Popup */}
//       {showPopup && (
//         <FormPopup
//           title="Golden Watch"
//           price={249.99}
//           onClose={() => setShowPopup(false)}
//           onAddToCart={handleAddToCart}
//         />
//       )}
//     </>
//   );
// }

// export default App;




















































































// import React, { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Pages from "./pages/Pages";
// import Elements from "./pages/Elements";
// import SearchBar from "./components/SearchBar";
// import ProductDetails from "./pages/ProductDetails";
// import CategoryDetails from "./pages/CategoryDetails";
// import CategoryPage from "./pages/CategoryPage";
// import FormPopup from "./components/FormPopup";
// import CheckoutPage from "./pages/CheckoutPage";
// import ShippingPage from "./pages/ShippingPage";

// function App() {
//   const location = useLocation();

//   // 🔹 Cart & Popup State
//   const [cartItems, setCartItems] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);

//   // 🔹 Add item from FormPopup to Navbar cart (with QTY update)
//   const handleAddToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (cartItem) => cartItem.title === item.title
//       );

//       if (existingItem) {
//         // 🔹 If item already in cart, update its quantity and total
//         return prevItems.map((cartItem) =>
//           cartItem.title === item.title
//             ? {
//                 ...cartItem,
//                 qty: cartItem.qty + item.qty,
//                 total: (cartItem.qty + item.qty) * cartItem.price,
//               }
//             : cartItem
//         );
//       } else {
//         // 🔹 Otherwise add new item
//         return [
//           ...prevItems,
//           {
//             ...item,
//             qty: item.qty || 1,
//             total: (item.qty || 1) * item.price,
//           },
//         ];
//       }
//     });
//     setShowPopup(false);
//   };

//   return (
//     <>
//       {/* 🔹 Navbar (hidden on search route) */}
//       {location.pathname !== "/search" && (
//         <div className="sticky top-0 z-50 bg-white shadow">
//           <Navbar cartItems={cartItems} />
//         </div>
//       )}

//       {/* 🔹 Routes */}
//       <Routes>
//         <Route
//           path="/"
//           element={<Home openPopup={() => setShowPopup(true)} />}
//         />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/element" element={<Elements />} />
//         <Route path="/search" element={<SearchBar />} />
//         <Route path="/product-details" element={<ProductDetails />} />
//         <Route path="/category/:title" element={<CategoryDetails />} />
//         <Route path="/category/:name" element={<CategoryPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/shipping" element={<ShippingPage />} />
//       </Routes>

//       {/* 🔹 Product Form Popup */}
//       {showPopup && (
//         <FormPopup
//           title="Golden Watch"
//           price={249.99}
//           image="/images/watch.png" // 👈 yahan apka image path daalna
//           onClose={() => setShowPopup(false)}
//           onAddToCart={handleAddToCart}
//         />
//       )}
//     </>
//   );
// }

// export default App;




















































import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Pages from "./pages/Pages";
import Elements from "./pages/Elements";
import SearchBar from "./components/SearchBar";
import ProductDetails from "./pages/ProductDetails";
import CategoryDetails from "./pages/CategoryDetails";
import CategoryPage from "./pages/CategoryPage";
import FormPopup from "./components/FormPopup";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingPage from "./pages/ShippingPage";

function App() {
  const location = useLocation();

  // 🔹 Cart & Popup State
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // 🔹 Add item from FormPopup to Navbar cart (with QTY update)
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.title === item.title
            ? {
                ...cartItem,
                qty: cartItem.qty + item.qty,
                total: (cartItem.qty + item.qty) * cartItem.price,
              }
            : cartItem
        );
      } else {
        return [
          ...prevItems,
          {
            ...item,
            qty: item.qty || 1,
            total: (item.qty || 1) * item.price,
          },
        ];
      }
    });
    setShowPopup(false);
  };

  return (
    <>
      {/* 🔹 Navbar hidden on /search and /shipping routes */}
      {location.pathname !== "/search" && location.pathname !== "/shipping" && (
        <div className="sticky top-0 z-50 bg-white shadow">
          <Navbar cartItems={cartItems} />
        </div>
      )}

      {/* 🔹 Routes */}
      <Routes>
        <Route
          path="/"
          element={<Home openPopup={() => setShowPopup(true)} />}
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/element" element={<Elements />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/category/:title" element={<CategoryDetails />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
      </Routes>

      {/* 🔹 Product Form Popup */}
      {showPopup && (
        <FormPopup
          title="Golden Watch"
          price={249.99}
          image="/images/watch.png"
          onClose={() => setShowPopup(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

export default App;
