import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

  const [login,setLogin] = useState("login")
  return (
    <div className="header">
      <div className="logo">
        <img className="app-logo" src={LOGO_URL} />
      </div>
      <div className="nav-menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
