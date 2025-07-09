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
    <div className="res-card">
      <img
        className="card-img"
        alt="card-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} starts</h4>
      <p>{deliveryTime} mins</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
