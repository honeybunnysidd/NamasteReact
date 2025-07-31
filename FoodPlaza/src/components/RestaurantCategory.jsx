import { useState } from "react";
import ItemList from "./ItemListAccordian";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="w-1/2 bg-gray-50 shadow-xl p-4 my-4 mx-auto rounded-2xl">
      {/* HEader */}
      <div
        className=" flex justify-between mx-auto cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {/* Accordian Body */}
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
