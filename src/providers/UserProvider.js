import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "services";
import storage from "utils/storage";

const Context = createContext();
const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  let token = storage.getToken();
  const fetchUser = useCallback(async () => {
    try {
      if (!token || !token.accessToken) {
        navigate("/login");
        setIsAuth(false);
      }
      const res = await apiService.getUser();
      if (res.data) {
        setIsAuth(true);
        setUser(res);
      }
    } catch (err) {
      if (err && err.statusCode === 401) {
        setIsAuth(false);
      }
      storage.clearToken();
      navigate("/login");
    }
  }, [navigate]);
  useEffect(() => {
    fetchUser().then();
  }, [fetchUser]);

  const providerValues = { user, setUser, isAuth };

  return <Context.Provider value={providerValues}>{children}</Context.Provider>;
};
export const useUserContext = () => useContext(Context);
export const UserContext = Context;
export default UserProvider;
