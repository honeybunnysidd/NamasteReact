import { CDN_URL } from "../utils/constant";

// Restaurant Cards
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cuisines,
    name,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className=" bg-gray-200 p-4 rounded-2xl w-[240px] transition-transform duration-300 hover:scale-105">
      <img
        className="rounded-xl"
        alt="card-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="ms-2 font-bold py-2 text-lg">{name}</h3>
      <h4 className="ms-2">{cuisines.join(", ")}</h4>
      <h4 className="ms-2">{avgRating} starts</h4>
      <p className="ms-2">{deliveryTime} mins</p>
      <p className="ms-2">{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
