import React from "react";
import { apiService } from "../../services";
import { Link, useNavigate } from "react-router-dom";
import storage from "utils/storage";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { OPTIONS } from "utils/helpers";

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email address is required")
      .matches(OPTIONS.emailPattern, "Enter a valid email address"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit } = useForm(formOptions);
  const onSubmit = async (payload) => {
    return await apiService
      .login(payload)
      .then((res) => {
        navigate("/");
        storage.setToken(res.data.token);
      })
      .catch((error) => {
        console.log("errr", error);
      });
  };
  return (
    <div className='container text-center'>
      <div className='primary-wrapper'>
        <h1>Login</h1>
        <p>Hi, Welcome Back 👋</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type='text'
              name='email'
              placeholder='Email'
              {...register("email")}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              {...register("password")}
            />
          </div>
          <div>
            <button type='submit' className='primary-button button'>
              Login
            </button>
          </div>
        </form>
        <Link to='/register' className='button secondary-button'>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
