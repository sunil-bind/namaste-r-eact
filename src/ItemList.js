import { CDN_URL } from "../utils/constant";

const ItemList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" border-gray-300 border-t-4 p-2 m-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="my-4">
              <span>{item?.card?.info?.name}</span>
              <span>
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs pad-4">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <img scr={CDN_URL + item?.card?.info?.imageId} className="w-14" />
            <button className="absolute shadow-lg rounded-lg bg-slate-50 text-black">
                Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
