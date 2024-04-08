import React from "react";
import { apiService } from "../../services";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: "user2@gmail.com",
      password: "User@123",
    };
    return apiService
      .login(payload)
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("errr", error);
      });
  };
  return (
    <div>
      Login Component
      <button onClick={handleLogin}>Click Me</button>
    </div>
  );
};

export default Login;
