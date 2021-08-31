import React from "react";
import ProductTile from "./ProductTile";

const Shopping = () => {
  const plants = [
    {
      id: 1,
      name: "Monsterra",
      image: "https://m.media-amazon.com/images/I/712J0qb2juL._AC_SX466_.jpg",
      price: "$199",
      size: "ExtraLarge",
      rating: "4.5",
    },
  ];
  return (
    <div>
      {plants.map((plant) => {
        return (
          <div>
            <ProductTile product={plant} />
          </div>
        );
      })}
    </div>
  );
};

export default Shopping;
