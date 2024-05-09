import React from "react";
import { apiService } from "services";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { OPTIONS } from "utils/helpers";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email address is required")
      .max(200, "Character should be less than 200")
      .matches(OPTIONS.emailPattern, "Enter a valid email address"),
    password: Yup.string()
      .required("Password is required")
      .max(200, "Character should be less than 200"),
    userName: Yup.string()
      .required("Username is required")
      .max(200, "Character should be less than 200"),
    fullName: Yup.string()
      .required("Fullname is required")
      .max(200, "Character should be less than 200"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    data.role = "USER";
    return apiService
      .register(data)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("errr", error);
      });
  };
  return (
    <div className='container'>
      <div className='primary-wrapper'>
        <h1 className='text-center'>Signup</h1>
        <p className='text-center'>Hi, Welcome 👋</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type='text'
              name='email'
              placeholder='Email'
              {...register("email")}
            />
            {errors?.email && (
              <span class='text-danger text-capatalize'>
                {errors?.email?.message}
              </span>
            )}
          </div>
          <div>
            <input
              type='text'
              placeholder='Username'
              {...register("userName")}
            />
            {errors?.userName && (
              <span class='text-danger text-capatalize'>
                {errors?.userName?.message}
              </span>
            )}
          </div>
          <div>
            <input
              type='text'
              placeholder='Fullname'
              {...register("fullName")}
            />
            {errors?.fullName && (
              <span class='text-danger text-capatalize'>
                {errors?.fullName?.message}
              </span>
            )}
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              {...register("password")}
            />
            {errors?.password && (
              <span class='text-danger text-capatalize'>
                {errors?.password?.message}
              </span>
            )}
          </div>
          <div>
            <button type='submit' className='button primary-button'>
              Signup
            </button>
          </div>
        </form>
        <Link to='/login' className='button secondary-button'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
