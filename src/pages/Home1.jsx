import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { FaTruck, FaUndo, FaGift, FaHeadset } from "react-icons/fa";

import b22 from "../assets/b22.jpg";
import ban from "../assets/ban.jpg";
import bann from "../assets/bann.jpg";

function Home1() {
  const cards = [
    { image: b22, title: "Accessories", items: 16, className: "h-[600px]" },
    { image: ban, title: "Clothing", items: 16, className: "h-[295px]" },
    {
      image: bann,
      title: "The Trend Store",
      items: 22,
      className: "h-[295px]",
    },
    {
      image: bann,
      title: "The Trend Store",
      items: 22,
      className: "h-[295px]",
    },
    {
      image: bann,
      title: "The Trend Store",
      items: 22,
      className: "h-[295px]",
    },
    { image: b22, title: "Jewellery", items: 22, className: "h-[600px]" },
  ];

  const handleClick = () => {
    navigate(`/category/${encodeURIComponent(title)}`, {
      state: { title, items }, // 👈 title aur items bhej rahe hain
    });
  };

  return (
    <div className="w-full font-display flex flex-col py-10 px-4 sm:px-6 lg:px-10">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-[20px] font-bold text-[#333333] mb-2">
          Recent Arrivals
        </h1>
        <h1 className="text-[14px] text-[#777777] font-bold">
          Aliquam tincidunt mauris eurisus
        </h1>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto w-full">
        {/* Left Large Card */}
        <Card
          image={cards[0].image}
          title={cards[0].title}
          items={cards[0].items}
          buttonText="Shop Now"
          className="w-full lg:w-1/3 relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center group"
        />

        {/* Middle Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 h-[600px]">
          <Card
            image={cards[1].image}
            title={cards[1].title}
            items={cards[1].items}
            buttonText="Shop Now"
            className="w-full h-1/2 relative bg-cover bg-center flex flex-col items-center justify-center group"
          />
          <Card
            image={cards[2].image}
            title={cards[2].title}
            items={cards[2].items}
            buttonText="Shop Now"
            className="w-full h-1/2 relative bg-cover bg-center flex flex-col items-center justify-center group"
          />
        </div>

        {/* Right Large Card */}
        <Card
          image={cards[3].image}
          title={cards[3].title}
          items={cards[3].items}
          buttonText="Shop Now"
          className="w-full lg:w-1/3 relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center group"
        />
      </div>

      {/* Features Row */}
      <div className="w-full max-w-7xl mx-auto font-display flex flex-col sm:flex-row justify-around py-6 gap-6 sm:gap-0">
        <div className="flex items-center gap-3">
          <FaTruck className="text-2xl text-[#cc9966]" />
          <div className="flex flex-col">
            <h1 className="text-[#333333] text-[14px]">Free Shipping</h1>
            <h1 className="text-[#777777] text-[14px]">orders $50 or more</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaUndo className="text-2xl text-[#cc9966]" />
          <div className="flex flex-col">
            <h1 className="text-[#333333] text-[14px]">Free Returns</h1>
            <h1 className="text-[#777777] text-[14px]">within 30 days</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaGift className="text-2xl text-[#cc9966]" />
          <div className="flex flex-col">
            <h1 className="text-[#333333] text-[14px]">Get 20% Off 1 Item</h1>
            <h1 className="text-[#777777] text-[14px]">When you sign up</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaHeadset className="text-2xl text-[#cc9966]" />
          <div className="flex flex-col">
            <h1 className="text-[#333333] text-[14px]">We Support</h1>
            <h1 className="text-[#777777] text-[14px]">
              24/7 amazing services
            </h1>
          </div>
        </div>
      </div>

      <hr className="border border-gray-100 w-full sm:w-[1200px] mx-auto mt-6" />
    </div>
  );
}

export default Home1;
