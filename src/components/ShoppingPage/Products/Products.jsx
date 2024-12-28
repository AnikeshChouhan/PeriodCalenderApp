// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

{
  /* icons */
}
const CartIcn = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.26042 12.5492C5.56167 12.5492 5.80587 12.312 5.80587 12.0194C5.80587 11.7267 5.56167 11.4895 5.26042 11.4895C4.95917 11.4895 4.71497 11.7267 4.71497 12.0194C4.71497 12.312 4.95917 12.5492 5.26042 12.5492Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2604 12.5492C11.5617 12.5492 11.8059 12.312 11.8059 12.0194C11.8059 11.7267 11.5617 11.4895 11.2604 11.4895C10.9592 11.4895 10.715 11.7267 10.715 12.0194C10.715 12.312 10.9592 12.5492 11.2604 12.5492Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.896484 1.42175H3.0783L4.54012 8.51672C4.59 8.76066 4.72662 8.9798 4.92605 9.13576C5.12549 9.29172 5.37505 9.37457 5.63103 9.36981H10.9328C11.1888 9.37457 11.4384 9.29172 11.6378 9.13576C11.8373 8.9798 11.9739 8.76066 12.0238 8.51672L12.8965 4.0711H3.62376"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductCard = ({ product }) => {
  return (
    <div
      className="w-[173px] h-[218px]
    flex flex-col justify-center items-center bg-[#FFFFFF] rounded-2xl border border-[#8B19A4] "
    >
      {/* Image */}
      <div
        className="w-1/2 h-[70%] object-cover"
        style={{
          background: `url(${product.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Details */}
      <div className="w-full h-[30%] p-4 flex flex-col gap-2">
        <p className="font-poppin font-medium text-sm leading-4">
          {product.name}
        </p>
        <div className="flex justify-between">
          <p className="font-poppin font-medium text-sm leading-4">
            ₹ {product.price}
          </p>
          <div className="flex gap-1 items-center">
            <img src="../../../media/star.svg" alt="rating" />
            <span className="font-poppin text-[#808080] font-normal text-sm leading-4">
              {product.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="bg-[#8B19A4] w-full h-[20%] flex justify-center items-center rounded-b-2xl">
        <Link to="/ProductDetails">
          {" "}
          <button className="flex justify-center items-center gap-2">
            <CartIcn />
            <span className="text-white font-poppin text-xs leading-4 font-normal">
              Add To Bag
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Always ultra thin",
      price: 550,
      rating: 4.9,
      image: "../../../media/whisper.svg",
    },
    {
      id: 2,
      name: "Always ultra thin",
      price: 550,
      rating: 4.9,
      image: "../../../media/whisper.svg",
    },
    {
      id: 3,
      name: "Always ultra thin",
      price: 550,
      rating: 4.9,
      image: "../../../media/whisper.svg",
    },
    {
      id: 4,
      name: "Always ultra thin",
      price: 550,
      rating: 4.9,
      image: "../../../media/whisper.svg",
    },
    {
      id: 5,
      name: "Always ultra thin",
      price: 550,
      rating: 4.9,
      image: "../../../media/whisper.svg",
    },
    {
      id: 6,
      name: "Always ultra thin",
      price: 550,
      rating: 4.9,
      image: "../../../media/whisper.svg",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
