import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Simmer";
import{SWIGGY_API} from "../utils/constant"

/**if api fails we can we use this mock data */
// import { restArray } from "../utils/mockData";

const Body = () => {
  const [restList, setResList] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilter] = useState([]);

  const list = restList;

  useEffect(() => {
    fetchResList();
  }, []);

  const fetchResList = async () => {
    const data = await fetch(SWIGGY_API );

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
  if (restList === null) {
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
          <Link key={restObj?.info?.id} to={"/restaurant/"+restObj?.info?.id}><RestaurantCard restData={restObj} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
