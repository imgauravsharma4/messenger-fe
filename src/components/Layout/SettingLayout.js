import React from "react";
import { useUserContext } from "providers/UserProvider";
import SettingNavbar from "components/Navbar/SettingNavbar";

const SettingLayout = ({ children }) => {
  const { isAuth } = useUserContext();
  return (
    <main className='d-flex'>
      {isAuth && <SettingNavbar />}
      <div className='w-100'>{children}</div>
    </main>
  );
};

export default SettingLayout;
