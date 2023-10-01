import RestaurantCard, { withPromated } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Simmer";
import { SWIGGY_API } from "../utils/constant";

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

  const promatedRestro = withPromated(RestaurantCard);

  const fetchResList = async () => {
    const data = await fetch(SWIGGY_API);

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
      <div className="m-4 p-4">
        <input
          className="border border-solid border-black rounded-lg"
          type="text"
          value={searchText}
          onChange={(s) => {
            setSearchText(s.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-green-300 m-4 rounded-lg"
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
      <div className="flex flex-wrap rounded-md">
        {filterRes.map((restObj) => (
          <Link key={restObj?.info?.id} to={"/restaurant/" + restObj?.info?.id}>
            {restObj?.info?.promoted ? (
              <promatedRestro restData={restObj} />
            ) : (
              <RestaurantCard restData={restObj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
