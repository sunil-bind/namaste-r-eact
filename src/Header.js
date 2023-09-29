import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

  const [login,setLogin] = useState("login")
  return (
    <div className="header">
      <div className="logo">
        <img className="app-logo" src={LOGO_URL} />
      </div>
      <div className="nav-menu">
        <ul>
          <li><Link to="./">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>cart</li>
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
