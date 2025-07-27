import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  //Check online status

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="offline">
        Your are offline, Please connect your internet!
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-5">
      {/* Search */}
      <div className="flex items-center flex-wrap p-8 gap-8">
        <div>
          <input
            type="text"
            placeholder="Search Your food"
            className="border rounded-2xl me-5 placeholder:text-center"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-red-300 rounded-xl px-4 py-1"
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
          className="bg-red-300 rounded-xl px-4 py-1 cursor-pointer"
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
      <div className="flex flex-wrap gap-8">
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
