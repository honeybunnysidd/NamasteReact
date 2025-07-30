import { CDN_URL } from "../utils/constant";

// Restaurant Cards

const RestaurantCard = ({ resData }) => {
  const {
    cuisines,
    name,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="bg-gray-100 rounded-2xl p-4 shadow hover:shadow-md transition h-full flex flex-col justify-between">
      <div>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="rounded-xl w-full h-40 object-cover mb-3"
        />
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-700">{cuisines?.join(", ")}</p>
        <p className="ms-2">{deliveryTime} mins</p>
        <p className="text-sm mt-1">
          ⭐ {avgRating} | {costForTwo}
        </p>
      </div>
    </div>
  );
};

// const RestaurantCard = (props) => {
//   const { resData } = props;
//   const {
//     cuisines,
//     name,
//     avgRating,
//     deliveryTime,
//     costForTwo,
//     cloudinaryImageId,
//   } = resData?.info;
//   return (
//     <div className=" bg-gray-200 p-4 rounded-2xl w-[240px] transition-transform duration-300 hover:scale-105">
//       <img
//         className="rounded-xl"
//         alt="card-img"
//         src={CDN_URL + cloudinaryImageId}
//       />
//       <h3 className="ms-2 font-bold py-2 text-lg">{name}</h3>
//       <h4 className="ms-2">{cuisines.join(", ")}</h4>
//       <h4 className="ms-2">{avgRating} starts</h4>
//       <p className="ms-2">{deliveryTime} mins</p>
//       <p className="ms-2">{costForTwo}</p>
//     </div>
//   );
// };

//Hingher Order component
// input - restaurantCard ==> restaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute z-10 bg-black text-white  p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
