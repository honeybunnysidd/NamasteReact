import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Body
const Body = () => {
  // Normal Js variable
  let listOfRestaurants2 = [];

  //State Variable of react
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    let resData = await jsonData?.data?.cards[1]?.card?.card?.gridElements
      .infoWithStyle.restaurants;
    setListOfRestaurants(resData);
    setFilteredRestaurant(resData);
  };

  // //Condtional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyContainer">
      {/* Search */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              //Filter the component cardd and update the UI
              let filterSearch = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterSearch);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
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
        {filterdRestaurant.map((res) => (
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
