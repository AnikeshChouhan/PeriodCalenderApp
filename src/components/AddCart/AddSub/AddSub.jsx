import React, { useState } from "react";

import { Link } from "react-router-dom";

const AddSub = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Always ultra thin",
      price: 550,
      quantity: 1,
      image: "../../../../media/whisper.svg",
    },
  ]);

  const handleQuantityChange = (id, increment) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + (increment ? 1 : -1)),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className=" p-2 flex items-center gap-28 shadow-sm bg-[#EFEFFE]">
        <Link to="/products">
          {" "}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <img src="../../../../media/ArrowIcon.svg" alt="" />
          </button>
        </Link>
        <h1 className="text-base font-medium font-poppin ">My Cart</h1>
      </div>

      <div className="p-4 bg-[#EFEFFE]">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#EFEFFE] rounded-lg shadow-sm relative"
          >
            <div className="p-4 flex justify-end items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-[74px] h-[69px] object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-poppin font-500 text-base ">{item.name}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    className="h-8 w-8 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => handleQuantityChange(item.id, false)}
                  >
                    <img src="../../../../media/subtractionIcon.svg" alt="" />
                  </button>
                  <span className="font-poppin text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    className="h-8 w-8 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => handleQuantityChange(item.id, true)}
                  >
                    <img src="../../../../media/PlusIcon.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center  items-center mt-8">
                <button
                  className="absolute top-2 right-2 p-1 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <img src="../../../../media/Cross.svg" alt="" />
                </button>
                <span className="font-poppin font-semibold text-xl leading-[18px] ">
                  ₹ {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="space-y-2 mt-4 bg-white w-full p-3">
          <div className="flex justify-between ">
            <span className="font-poppin font-normal text-sm text-[#616A7D]">
              Subtotal
            </span>
            <span className="font-poppin font-normal text-sm text-[#616A7D]">
              ₹ {subtotal}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-poppin font-normal text-sm text-[#616A7D]">
              Delivery
            </span>
            <span className="font-poppin font-normal text-sm text-[#616A7D]">
              ₹ {deliveryFee}
            </span>
          </div>
          <div className="flex justify-between font-medium pt-2 ">
            <span className="font-poppin font-medium text-base text-black">
              Total
            </span>
            <span className="font-poppin font-medium text-base text-black">
              ₹ {total}
            </span>
          </div>
        </div>

        <button className="w-full mt-6 py-3 bg-[#8B19A4] text-white rounded-lg font-medium transition-colors">
          Proceed To checkout
        </button>
      </div>
    </div>
  );
};

export default AddSub;
