import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constant";
import { useState } from "react";
import { restaurantList } from "../utils/constant";

// Body
const Body = () => {
  // Normal Js variable
  let listOfRestaurants2 = [];

  //State Variable of react
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="bodyContainer">
      {/* Search */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const topList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(topList);
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
