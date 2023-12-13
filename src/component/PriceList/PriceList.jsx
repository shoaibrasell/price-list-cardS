import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    //here mx-32 means the wide is smaller then the full wide...if change the value of mx then size will be increasing of decreasing
    <div className="mx-14 mb-10">
      <h2
        className="text-5xl text-center text-purple-950
       bg-purple-300 font-bold p-4"
      >
        Awesome Affordable Price
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCard 
          key={price.id} 
          price={price}
          ></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;