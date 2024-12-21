import React, { useState } from "react";

import { Star, ChevronDown } from "lucide-react";

const AddItems = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  return (
    <div className="mb-6 p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Always ultra thin</h2>
        <div className="flex items-center gap-2">
          <button
            className="w-8 h-8 rounded-full border border-purple-600 flex items-center justify-center text-purple-600"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            className="w-8 h-8 rounded-full border border-purple-600 flex items-center justify-center text-purple-600"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <span className="text-lg font-semibold">₹ {550 * quantity}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="border-t border-b py-4 mb-4">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => setIsDetailExpanded(!isDetailExpanded)}
        >
          <span className="font-semibold">Product Detail</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isDetailExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
        {isDetailExpanded && (
          <p className="mt-2 text-gray-600 text-sm">
            Applies Are Nutritious. Apples May Be Good For Weight Loss. Apples
            May Be Good For Your Heart. As Part Of A Healtful And Varied Diet.
          </p>
        )}
      </div>

      {/* Weight */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">Weight</span>
        <span className="text-gray-600">100gr</span>
      </div>

      {/* Review */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-semibold">Review</span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-gray-600 ml-1">4.9</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button className="w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
          Add to Cart
        </button>
        <button className="w-full py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors">
          Buy It Now
        </button>
      </div>
    </div>
  );
};

export default AddItems;
