import {CDN_URL} from "../utils/constant"
const RestaurantCard = (props) => {
    const { restData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      restData?.info;
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          src={CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} star</h4>
        <h4> {costForTwo}</h4>
      </div>
    );
  };

  export const withPromated = (RestaurantCard) =>{
    return(props) =>{
      return(
        <div>
          <label className="absolute m-2 p-2 bg-black text-white">
            promated
          </label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  }

  export default RestaurantCard;