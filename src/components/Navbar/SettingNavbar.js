import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const SettingNavbar = () => {
  const menu = [
    {
      name: "Edit Profile",
      path: "/edit-profile",
      icon: faCircleUser,
    },
    {
      name: "Notifications",
      //   path: "/message",
      icon: faBell,
    },
  ];
  return (
    <div className='side-navbar' style={{ width: `400px` }}>
      <ul>
        {menu &&
          menu.length > 0 &&
          menu.map((item) => (
            <li>
              <Link to={item.path}>
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SettingNavbar;
