// import { BehaviorSubject } from "rxjs";
import { axios } from "lib/axios";
import storage from "utils/storage";
import { API_URL, API_VERSION } from "utils/variables";

const baseUrl = `${API_URL}/${API_VERSION}`;
// const userSubject = new BehaviorSubject(
//   process.browser && JSON.parse(localStorage.getItem("user"))
// );

const login = (data) => {
  return axios.post(`${baseUrl}/user/login`, data);
};
const register = (data) => {
  return axios.post(`${baseUrl}/user/sign-up`, data);
};

const logout = () => {
  storage.clearToken();
  // Router.push("/");
};

export const apiService = {
  // user: userSubject.asObservable(),
  // get userValue() {
  //   return userSubject.value;
  // },
  login,
  register,
  logout,
};
