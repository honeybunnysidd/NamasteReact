import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(MENU_API + resId);
    //   `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9351929%26lng%3D77.62448069999999%26restaurantId%3D" +
    //     ${resId} +
    //     "%26submitAction%3DENTER`
    const response = await data.json();
    setResInfo(response);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>{costForTwoMessage}</p>
      <p>{avgRating} Rating</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
