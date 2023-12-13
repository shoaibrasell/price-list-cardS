import { list } from "postcss";
import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-200 mt-3 rounded-lg p-5 border-4 border-sky-500 flex flex-col">
      <h2 className="text-center">
        <span className="text-4xl font-extrabold text-purple-700">
          {price.price}
        </span>
        <span className="text-2xl text-white font-bold">/month</span>
      </h2>
      <h5 className="text-3xl my-6 font-bold text-center">{price.name}</h5>
      <p className="underline font-bold text-pink-400 text-2xl">Features:</p>

      {
      price.features.map((feature , idx) => (
        <Feature key={idx} feature={feature} ></Feature>
      ))
      }
      <button className="w-full mt-auto bg-yellow-400 hover:bg-green-700 py-2 rounded-md text-white font-bold">Buy Now</button>
    </div>
  );
};

export default PriceCard;
