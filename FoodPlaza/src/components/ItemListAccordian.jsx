import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div className="py-6 px-4">
      {items.map((item) => (
        <div
          className="border-b border-gray-300 mb-6 pb-4 flex flex-col md:flex-row md:justify-between md:items-start gap-4"
          key={item?.card?.info?.id}
        >
          {/* Left Section - Text */}
          <div className="md:w-8/12 w-full flex flex-col text-left">
            <h3 className="font-semibold text-lg mb-1">
              {item?.card?.info?.name}
            </h3>
            <p className="font-medium text-sm mb-1 text-green-800">
              ₹
              {item?.card?.info?.price
                ? Math.floor(item?.card?.info?.price / 100)
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-xs text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Right Section - Image and Button */}
          <div className="md:w-3/12 w-full flex flex-col items-center md:items-end">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="item"
              className="w-full max-w-[100px] h-auto rounded-md object-cover"
            />
            <button className="mt-3 bg-green-500 hover:bg-green-600 text-white text-sm p-3 py-1 rounded shadow">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
