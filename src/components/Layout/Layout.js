import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar/Navbar";
import { useUserContext } from "providers/UserProvider";

const Layout = ({ children }) => {
  const { isAuth, user } = useUserContext();
  const [authenticated, setIsAuthenticated] = useState(isAuth);
  console.log("user", isAuth, user);
  useEffect(() => {
    setIsAuthenticated(isAuth);
  }, [isAuth]);
  return (
    <div>
      <main className='d-flex'>
        {authenticated && <Navbar />}
        <div className='w-100'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
