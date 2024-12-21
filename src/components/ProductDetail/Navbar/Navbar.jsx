// const Navbar = () => {
//   return (
//     <div className="bg-white h-1/2">
//       <div className="flex items-center justify-between p-4">
//         {" "}
//         <div className="">
//           <img src="../../../../media/ArrowIcon.svg" alt="" />
//         </div>
//         <div className="font-poppin font-medium text-base leading-5">
//           Product Details
//         </div>
//         <div className="h-1/2">
//           <img src="../../../../media/Download.svg" alt="" />
//         </div>
//       </div>
//       <div className="flex  flex-col gap-6 items-center justify-center ">
//         <img className="w-48 h-44" src="../../../../media/whisper.svg" alt="" />
//         <img src="../../../../media/UpperLine.svg" alt="" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { ChevronLeft, Share2, Star, ChevronDown } from "lucide-react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold">Product Details</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Share2 className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Product Image */}
      <div className="mb-6">
        <img
          src="../../../../media/whisper.svg"
          alt="Always ultra thin"
          className="w-full h-64 object-contain bg-gray-50 rounded-lg"
        />
        <div className="flex justify-center gap-1 mt-2">
          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mb-6">
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
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
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
    </div>
  );
};

export default ProductDetails;
