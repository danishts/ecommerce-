

// import React from "react";
// import sli from "../assets/sli.jpg";
// import Button from "../components/Button";

// function Home() {
//   return (
//     <div
//       className="h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${sli})` }}
//     >
//       {/* Overlay */}
//       <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-black/40 font-display">
//         {/* Small Title */}
//         <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-2">
//           SEASONAL PICKS
//         </h1>

//         {/* Main Headings */}
//         <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//           GET THE ALL
//         </h1>
//         <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//           GOOD STUFF
//         </h1>

//         {/* Button with arrow already inside */}
//         <div className="mt-6">
//           <Button text="DISCOVER MORE" className="hover:bg-[#b57f4c]" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
































// import React from "react";
// import sli from "../assets/sli.jpg";
// import Button from "../components/Button";
// import Card from "../components/Card"; // 🔹 Reusable Card component
// import b22 from "../assets/b22.jpg"; // 🔹 Card image

// function Home() {
//   return (
//     <>
//       {/* Landing Section */}
//       <div
//         className="h-screen w-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${sli})` }}
//       >
//         <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-black/40 font-display">
//           <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-2">
//             SEASONAL PICKS
//           </h1>
//           <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             GET THE ALL
//           </h1>
//           <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             GOOD STUFF
//           </h1>
//           <div className="mt-6">
//             <Button text="DISCOVER MORE" className="hover:bg-[#b57f4c]" />
//           </div>
//         </div>
//       </div>

//       {/* Card Section */}
//       <section className="py-12   bg-gray-100">
//         <h2 className="text-center text-2xl font-bold mb-8">
//           Featured Products
//         </h2>
//         <div className="flex flex-wrap justify-center gap-6 px-4">
//           <Card
//             image={b22}
//             title="IMPORTANT"
//             description="High quality product"
//             price="49.99"
//           />
//           <Card
//             image={b22}
//             title="IMPORTANT"
//             description="High quality product"
//             price="49.99"
//           />
//           <Card
//             image={b22}
//             title="IMPORTANT"
//             description="High quality product"
//             price="49.99"
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;
















// import React from "react";
// import Card from "../components/Card";
// import Button from "../components/Button";

// import sli from "../assets/sli.jpg";
// import b22 from "../assets/b22.jpg";
// import ban from "../assets/ban.jpg";
// import bann from "../assets/bann.jpg";

// function Home() {
//   // Card data
//   const cards = [
//     {
//       image: b22,
//       title: "This week's Most wanted",
//       buttonText: "Shop Now",
//       className: "h-[600px]",
//     },
//     {
//       image: ban,
//       title: "Bags by Mood",
//       buttonText: "Shop Now",
//       className: "h-[295px]",
//     },
//     {
//       image: bann,
//       title: "The Trend Store",
//       buttonText: "Shop Now",
//       className: "h-[295px]",
//     },
//   ];

//   return (
//     <div>
//       {/* Hero / Landing Section */}
//       <div
//         className="h-screen w-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${sli})` }}
//       >
//         <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-black/40 font-display">
//           <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-2">
//             SEASONAL PICKS
//           </h1>
//           <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             GET THE ALL
//           </h1>
//           <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             GOOD STUFF
//           </h1>
//           <div className="mt-6">
//             <Button text="DISCOVER MORE" className="hover:bg-[#b57f4c]" />
//           </div>
//         </div>
//       </div>

//       {/* Card Section */}
//       <div className="w-full py-10 px-4 sm:px-10 bg-white font-display flex justify-center overflow-hidden">
//         <div className="flex flex-col md:flex-row w-full max-w-full md:max-w-6xl gap-6">
//           {/* Left Card */}
//           <div className="w-full md:w-1/2 flex flex-col gap-3">
//             <Card {...cards[0]} />
//           </div>

//           {/* Right Cards */}
//           <div className="w-full md:w-1/2 flex flex-col gap-3">
//             <Card {...cards[1]} />
//             <Card {...cards[2]} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;





























// import React from "react";
// import Card from "../components/Card";
// import ProductCard from "../components/ProductCard"; // 🔹 Import ProductCard
// import Button from "../components/Button";

// import sli from "../assets/sli.jpg";
// import b22 from "../assets/b22.jpg";
// import ban from "../assets/ban.jpg";
// import bann from "../assets/bann.jpg";

// import img1 from "../assets/b22.jpg";
// import img2 from "../assets/ban.jpg";
// import img3 from "../assets/bann.jpg";
// import Home1 from "./home1";
// import Footer from "../components/Footer";

// function Home() {
//   // Card data
//   const cards = [
//     {
//       image: b22,
//       title: "This week's Most wanted",
//       buttonText: "Shop Now",
//       className: "h-[600px]",
//     },
//     {
//       image: ban,
//       title: "Bags by Mood",
//       buttonText: "Shop Now",
//       className: "h-[295px]",
//     },
//     {
//       image: bann,
//       title: "The Trend Store",
//       buttonText: "Shop Now",
//       className: "h-[295px]",
//     },
//   ];

//   // ProductCard data (for lower section)
//   const products = [
//     {
//       title: "Stylish Shoes",
//       description: "Comfortable and trendy shoes",
//       images: [img1, img2],
//       price: 99,
//     },
//     {
//       title: "Leather Bag",
//       description: "High-quality leather bag",
//       images: [img2, img3],
//       price: 149,
//     },
//     {
//       title: "Smart Watch",
//       description: "Latest tech smart watch",
//       images: [img3, img1],
//       price: 199,
//     },
//   ];

//   return (
//     <div>
//       {/* Hero / Landing Section */}
//       <div
//         className="h-screen w-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${sli})` }}
//       >
//         <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-black/40 font-display">
//           <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-2">
//             SEASONAL PICKS
//           </h1>
//           <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             GET THE ALL
//           </h1>
//           <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             GOOD STUFF
//           </h1>
//           <div className="mt-6">
//             <Button text="DISCOVER MORE" className="hover:bg-[#b57f4c]" />
//           </div>
//         </div>
//       </div>

//       {/* Card Section */}
//       <div className="w-full  py-10 px-4 sm:px-10 bg-white font-display flex justify-center overflow-hidden">
//         <div className="flex flex-col md:flex-row w-full max-w-full md:max-w-6xl gap-6">
//           {/* Left Card */}
//           <div className="w-full md:w-1/2 flex flex-col gap-3">
//             <Card {...cards[0]} />
//           </div>

//           {/* Right Cards */}
//           <div className="w-full md:w-1/2 flex flex-col gap-3">
//             <Card {...cards[1]} />
//             <Card {...cards[2]} />
//           </div>
//         </div>
//       </div>

//       {/* Product Cards Section (Below Main Cards) */}
//       <div className="w-full h-screen py-10 px-4 sm:px-10 bg-gray-100 font-display flex flex-col items-center">
//         {/* Section Title */}
//         <div className="mb-8 text-center">
//           <h1 className="text-[20px] font-bold font-display text-[#333333]">
//             Recent Arrivals
//           </h1>
//           <h1 className="text-[14px] text-[#777777] font-display mt-2">
//             Aliquam tincidunt mauris eurisus
//           </h1>
//         </div>

//         {/* Product Cards */}
//         <div className="w-full flex flex-wrap justify-center gap-6">
//           {products.map((product, idx) => (
//             <ProductCard
//               key={idx}
//               title={product.title}
//               description={product.description}
//               images={product.images}
//               price={product.price}
//             />
//           ))}
//         </div>
//           </div>
          

// <Home1/>
//           <Footer/>
//     </div>
//   );
// }

// export default Home;



















































































































import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

import sli from "../assets/sli.jpg";
import b22 from "../assets/b22.jpg";
import ban from "../assets/ban.jpg";
import bann from "../assets/bann.jpg";

import img1 from "../assets/b22.jpg";
import img2 from "../assets/ban.jpg";
import img3 from "../assets/bann.jpg";

import Footer from "../components/Footer";

import { FaArrowUp } from "react-icons/fa"; // 🔹 arrow icon
import Home1 from "./Home1";

function Home() {
  const [showScroll, setShowScroll] = useState(false);

  // Show button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Card data
  const cards = [
    {
      image: b22,
      title: "This week's Most wanted",
      buttonText: "Shop Now",
      className: "h-[600px]",
    },
    {
      image: ban,
      title: "Bags by Mood",
      buttonText: "Shop Now",
      className: "h-[295px]",
    },
    {
      image: bann,
      title: "The Trend Store",
      buttonText: "Shop Now",
      className: "h-[295px]",
    },
  ];

  // ProductCard data
  const products = [
    {
      title: "Stylish Shoes",
      description:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus",
      images: [img1, img2],
      price: 99,
    },
    {
      title: "Leather Bag",
      description:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus",
      images: [img2, img3],
      price: 149,
    },
    {
      title: "Smart Watch",
      description:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus",
      images: [img3, img1],
      price: 199,
    },
  ];

  return (
    <div className="relative">
      {/* Hero / Landing Section */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${sli})` }}
      >
        <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-black/40 font-display">
          <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-2">
            SEASONAL PICKS
          </h1>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            GET THE ALL
          </h1>
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            GOOD STUFF
          </h1>
          <div className="mt-6">
            <Button text="DISCOVER MORE" className="hover:bg-[#b57f4c]" />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full  py-10 px-4 sm:px-10 bg-white font-display flex justify-center overflow-hidden">
        <div className="flex flex-col md:flex-row w-full max-w-full md:max-w-6xl gap-6">
          {/* Left Card */}
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <Card {...cards[0]} />
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <Card {...cards[1]} />
            <Card {...cards[2]} />
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="w-full h-screen py-10 px-4 sm:px-10 bg-gray-100 font-display flex flex-col items-center">
        <div className="mb-8 text-center">
          <h1 className="text-[20px] font-bold font-display text-[#333333]">
            Recent Arrivals
          </h1>
          <h1 className="text-[14px] text-[#777777] font-display mt-2">
            Aliquam tincidunt mauris eurisus
          </h1>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              images={product.images}
              price={product.price}
            />
          ))}
        </div>
      </div>

      <Home1 />
      <Footer />

      {/* 🔹 Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-100 text-gray-400  p-3 rounded transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Home;
