import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constant";
import { useState } from "react";

// Body
const Body = () => {
  // Normal Js variable
  let listOfRestaurants2 = [];

  //State Variable of react
  let [listOfRestaurants] = useState([
    {
      info: {
        id: "10576",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/8847a47d-3b5e-458e-82ac-c16a8d243c8a_596949.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.9,
        deliveryTime: 19,
      },
    },
    {
      info: {
        id: "10578",
        name: "MCD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/23396165-65be-4f2c-a2f8-d55de0497073_10576.JPG",
        costForTwo: "₹300 for two",
        cuisines: ["Burger"],
        avgRating: 4.9,
        deliveryTime: 19,
      },
    },
    {
      info: {
        id: "10577",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
        costForTwo: "₹350 for two",
        cuisines: ["Pizza, burger"],
        avgRating: 4.1,
        deliveryTime: 19,
      },
    },
  ]);

  return (
    <div className="bodyContainer">
      {/* Search */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Container */}
      <div className="restaurant-container">
        {/* Card */}
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
