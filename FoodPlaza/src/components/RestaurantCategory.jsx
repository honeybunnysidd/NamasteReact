import ItemList from "./ItemListAccordian";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="w-1/2 bg-gray-50 shadow-xl p-4 my-4 mx-auto rounded-2xl">
      {/* HEader */}
      <div className=" flex justify-between mx-auto">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* Accordian Body */}

      <ItemList items={data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
