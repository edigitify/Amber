import React from "react";

const ProductCard = ({ image, title, brand, price, sizes, sku, discount }) => {
  return (
    <div className="bg-white shadow-sm border rounded-lg overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{brand}</p>

        <p className="text-red-500 text-sm font-semibold">From £ {price}</p>

        {/* Sizes */}
        {sizes?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {sizes.map((size, i) => (
              <span
                key={i}
                className="text-xs border rounded px-1.5 py-0.5 bg-gray-100"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <button className="hover:bg-orange-600 text-white text-sm py-2 rounded w-full mt-auto"
        style={{ backgroundColor: "#1A3446" }}
        >
          SELECT OPTIONS
        </button>

        {/* SKU */}
        <p className="text-xs text-gray-400">SKU: {sku}</p>
      </div>
    </div>
  );
};

export default ProductCard;
