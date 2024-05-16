import React from "react";
import Navbar from "components/Navbar/Navbar";
import { useUserContext } from "providers/UserProvider";

const Layout = ({ children }) => {
  const { isAuth, user } = useUserContext();
  console.log("object", user);
  return (
    <div>
      <main className='d-flex'>
        {isAuth && <Navbar />}
        <div className='w-100'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
