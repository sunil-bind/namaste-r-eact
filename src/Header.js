import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

  const [login,setLogin] = useState("login")
  return (
    <div className="flex justify-between bg-blue-300 shadow-lg">
      <div className="logo">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"><Link to="./">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">cart</li>
          <button className="login"
          onClick={()=>{
            login === "login" ?setLogin("logout"):setLogin("login")
          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
