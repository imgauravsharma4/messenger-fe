import {
  faEdit,
  faHome,
  faMessage,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const menu = [
    {
      name: "Home",
      path: "/",

      icon: faHome,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: faEdit,
    },
    {
      name: "Messages",
      path: "/message",
      icon: faMessage,
    },
    {
      name: "Logout",
      icon: faSignOut,
    },
  ];
  return (
    <div
      className='side-navbar'
      style={{ width: `${isShow ? "400px" : "100px"}` }}
    >
      <p onClick={() => setIsShow(!isShow)}>Logo</p>
      <ul>
        {menu &&
          menu.length > 0 &&
          menu.map((item, index) => (
            <li key={`a${index}`}>
              <Link to={item.path}>
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                {isShow && item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
