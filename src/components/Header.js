import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex mx-4 px-4">
          <li className="px-2 mx-2">Online:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2 mx-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2 mx-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2 mx-2">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-2 mx-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2 mx-2 font-bold">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-2 mx-2">
            <button
              className="login"
              onClick={() => {
                btnLogin === "Login"
                  ? setBtnLogin("Logout")
                  : setBtnLogin("Login");
              }}
            >
              {btnLogin}
            </button>
          </li>
          <li className="font-bold px-2 mx-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
