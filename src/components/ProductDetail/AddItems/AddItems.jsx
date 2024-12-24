// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { Star } from "lucide-react";

const AddItems = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  return (
    <div className="mb-6 p-5">
      <div className="flex  flex-col justify-center items-start gap-5 mb-4">
        <div>
          <h2 className="font-poppin font-medium text-2xl leading-4">
            Always ultra thin
          </h2>
        </div>

        <div className=" w-[95%] flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <button
              className="w-8 h-8 flex items-center justify-center text-purple-600"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <img src="../../../../media/subtractionIcon.svg" alt="" />
            </button>
            <span className="w-7 font-poppin font-medium text-sm leading-4 text-[#181725] bg-white text-center p-1 px-3 rounded-md">
              {quantity}
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center text-purple-600"
              onClick={() => setQuantity(quantity + 1)}
            >
              <img src="../../../../media/PlusIcon.svg" alt="" />
            </button>
          </div>
          <div className="font-poppin  font-semibold text-xl leading-4 text-right">
            ₹ {550 * quantity}
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="border-t border-b py-4 mb-4">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => setIsDetailExpanded(!isDetailExpanded)}
        >
          <span className="font-poppin font-medium text-base leading-4">
            Product Detail
          </span>
          <img
            className={`w-5 h-5 transition-transform ${
              isDetailExpanded ? "rotate-180" : ""
            }`}
            src="../../../../media/DownVector.svg"
            alt=""
          />
        </button>
        {isDetailExpanded && (
          <p className="mt-2 font-poppin font-normal text-[13px] leading-5">
            The Whisper Always Ultra Thin is a premium line of sanitary pads
            designed for superior comfort and reliable protection during
            menstruation. It is specifically crafted to combine ultra-thin
            convenience with high absorbency, ensuring a comfortable and
            leak-free experience.
          </p>
        )}
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="font-poppin font-medium text-base leading-4">
          Weight
        </span>
        <span className="font-poppin font-normal text-xs leading-3 text-[#7C7C7C]">
          100gr
        </span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="font-poppin font-medium text-base leading-4">
          Review
        </span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="font-poppin font-normal text-xs text-[#7C7C7C] ml-1">
            4.9
          </span>
        </div>
      </div>

      <div className=" flex flex-col gap-3">
        <button className="w-full py-3 bg-[#B436CF] font-poppin font-semibold text-sm text-white rounded-2xl hover:bg-[#8B19A4] transition-colors">
          Add to Cart
        </button>
        <button className="w-full py-3 bg-[#B436CF] font-poppin font-semibold text-sm text-white rounded-2xl hover:bg-[#8B19A4] transition-colors">
          Buy It Now
        </button>
      </div>
    </div>
  );
};

export default AddItems;
