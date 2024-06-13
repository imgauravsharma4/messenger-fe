import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiService } from "services";
import storage from "utils/storage";

const Context = createContext();
const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  let token = storage.getToken();
  // console.log("toeknnnn", tokennn);
  // const tokenRef = useRef(storage.getToken());

  const fetchUser = useCallback(async () => {
    // const token = tokenRef.current;

    try {
      if (!token || !token.accessToken) {
        if (location.pathname !== "/register") {
          console.log("token", token);
          navigate("/login");
        }
        setIsAuth(false);
        return;
      }
      const res = await apiService.getUser();
      if (res) {
        setIsAuth(true);
        setUser(res);
      }
    } catch (err) {
      console.log("err", err);
      if (err && err.statusCode === 401) {
        setIsAuth(false);
      }
      storage.clearToken();
      navigate("/login");
    }
  }, [location.pathname, navigate]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const providerValues = { user, setUser, isAuth };

  return <Context.Provider value={providerValues}>{children}</Context.Provider>;
};
export const useUserContext = () => useContext(Context);
export const UserContext = Context;
export default UserProvider;
