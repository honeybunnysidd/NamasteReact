import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const resData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(resData);
    setFilteredRestaurant(resData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="text-center text-lg font-semibold text-red-600 mt-10">
        You are offline. Please check your internet connection.
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 md:px-16 py-4 md:py-8 bg-gray-50 min-h-screen">
      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-10 justify-center">
        <input
          type="text"
          placeholder="Search your food"
          className="border border-gray-300 rounded-2xl px-4 py-2 w-full sm:w-64 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-200"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-5 py-2 text-sm shadow-md cursor-pointer"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
            setSearchText("");
          }}
        >
          Search
        </button>
        <button
          className="bg-green-400 hover:bg-green-500 text-white rounded-xl px-5 py-2 text-sm shadow-md cursor-pointer"
          onClick={() => {
            const topList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(topList);
            setFilteredRestaurant(topList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterdRestaurant.map((res) => (
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
            <div className="h-full">
              <RestaurantCard resData={res} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
