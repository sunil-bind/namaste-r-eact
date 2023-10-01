import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constant";
import Shimmer from "./Simmer";
import RestaurantCatogery from "./RestaurantCatogery";

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
  const { name, avgRating, cuisines, costForTwoMessage
  } =
    restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card; 

  const catogery = 
  restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
  ?.cards.filter((c)=>c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  console.log(catogery)
  return (
    <div className="text-center">
      <h2 className="font-bold my-2 p-2 text-lg">{name}</h2>
      <p className="font-bold my-2 p-2 text-lg">
        {cuisines.join(",")}
        {costForTwoMessage}
      </p>
      {/** catogery */}
      {catogery.map((catogery)=><RestaurantCatogery key={catogery?.card?.card?.tittle} items={catogery?.card?.card} />)}
    </div>
  );
};

export default RestaurantMenu;
