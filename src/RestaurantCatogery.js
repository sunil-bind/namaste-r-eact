import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatogery = ({ items }) => {
  const [show, setShow] = useState(false);
  const handleclick = ()=>{
    setShow(!show)
  }
  console.log(items);
  return (
    <div className=" p-3 w-6/12 mx-auto my-4 bg-gray-200 shadow-lg cursor-pointer ">
      <div className="flex justify-between" onClick={handleclick}>
        <span className="font-bold">
          {items.title} ({items.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {show && <ItemList data={items.itemCards} />}
    </div>
  );
};

export default RestaurantCatogery;
