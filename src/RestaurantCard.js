import {CDN_URL} from "../utils/constant"
const RestaurantCard = (props) => {
    const { restData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      restData?.info;
    return (
      <div className="rest-card">
        <img
          className="res-logo"
          src={CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} star</h4>
        <h4> {costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;