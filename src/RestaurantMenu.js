import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constant";
import Shimmer from "./Simmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const restData = await fetch(RESTAURANT_URL + resId);

    const json = await restData.json();

    setRestInfo(json?.data);

    // console.log(json?.data?.cards[0]?.card?.card?.info)
  };

  if (restInfo === null) {
    return <Shimmer />;
  }
  const { name, avgRating, cuisines, areaName } =
    restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="resMenu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(",")}
        {avgRating}
      </p>
      <h5>{areaName}</h5>
      <h3>menu1</h3>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name}-{item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
