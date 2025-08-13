import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Image from "../assets/Card/1.jpg";
import Image1 from "../assets/Card/2.jpg";
import Image2 from "../assets/Card/3.jpg";
import Image3 from "../assets/Card/4.jpg";
import Image4 from "../assets/Printed/1-4.png";
import Image5 from "../assets/Printed/1-4.png";
import Image6 from "../assets/Printed/1-4.png";
import Image7 from "../assets/Printed/1-4.png";
import Image8 from "../assets/Printed/1-4.png";
import Image9 from "../assets/Printed/1-4.png";
import Image10 from "../assets/Printed/1-4.png";

const allProducts = [
  // FEATURED
  {
    image: Image,
    title: "SGC-6521 Ice Melt",
    brand: "SimGlas",
    price: 114.0,
    sizes: ['58" / 147cm'],
    sku: "SGC-6521",
    category: "FEATURED",
  },
  {
    image: Image1,
    title: "SX-1235-UG Reeded Glass",
    brand: "UltraGreen",
    price: 92.4,
    sizes: ['59" / 150cm'],
    sku: "SX-1235",
    category: "FEATURED",
  },

  // NEW
  {
    image: Image2,
    title: "SX-3068 Orchid Transparent",
    brand: "Solyx",
    price: 47.52,
    sizes: ['27" / 68.5cm', '54" / 137cm'],
    sku: "SX-3068",
    category: "NEW",
  },

  // TOP SELLERS
  {
    image: Image3,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
  {
    image: Image4,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
  {
    image: Image5,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
  {
    image: Image6,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
  {
    image: Image7,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
  {
    image: Image8,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
  {
    image: Image9,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
  {
    image: Image10,
    title: "SX-6010 Antique Copper Mirror",
    brand: "Solyx",
    price: 62.7,
    sizes: ['29" / 73cm', '53" / 134cm'],
    sku: "SX-6010",
    category: "TOP SELLERS",
  },
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("FEATURED");

  // Filter products based on active tab
  const filteredProducts = allProducts.filter(
    (product) => product.category === activeTab
  );

  return (
    <section className="px-4 md:px-10 py-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="flex gap-6 text-sm items-center">
          <button
            onClick={() => setActiveTab("FEATURED")}
            className={`${activeTab === "FEATURED"
                ? "font-medium border-b-2 border-black"
                : "text-gray-500 hover:text-black"
              }`}
          >
            FEATURED
          </button>
          <button
            onClick={() => setActiveTab("NEW")}
            className={`${activeTab === "NEW"
                ? "font-medium border-b-2 border-black"
                : "text-gray-500 hover:text-black"
              }`}
          >
            NEW
          </button>
          <button
            onClick={() => setActiveTab("TOP SELLERS")}
            className={`${activeTab === "TOP SELLERS"
                ? "font-medium border-b-2 border-black"
                : "text-gray-500 hover:text-black"
              }`}
          >
            TOP SELLERS
          </button>
        </div>
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
