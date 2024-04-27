import React from "react";
import { apiService } from "../../services";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: "user2@gmail.com",
      password: "User@123",
    };
    return apiService
      .login(payload)
      .then((res) => {
        navigate('/')
        console.log("res", res);
      })
      .catch((error) => {
        console.log("errr", error);
      });
  };
  return (
    <div className="container text-center">
      <div className="primary-wrapper">
        <h1>Login</h1>
        <p>Hi, Welcome Back 👋</p>
        <form onSubmit={handleLogin}>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit" className="primary-button button">Login</button>
          </div>
        </form>
        <Link to="/register" className="button secondary-button">Signup</Link>
      </div>
    </div>
  );
};

export default Login;
