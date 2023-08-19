import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Simmer";
// import { restArray } from "../utils/mockData";

const Body = () => {
  const [restList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilter] = useState([]);

  const list = restList;

  useEffect(() => {
    fetchResList();
  }, []);

  const fetchResList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.582320700000004&lng=77.38984900000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilter(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (restList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search-container">
        <input
          className="input"
          type="text"
          value={searchText}
          onChange={(s) => {
            setSearchText(s.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilter(
              restList.filter((list) =>
                list.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-container">
        {filterRes.map((restObj) => (
          <RestaurantCard key={restObj.info.id} restData={restObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
