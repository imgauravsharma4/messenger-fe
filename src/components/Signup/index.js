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
      .matches(OPTIONS.emailPattern, "Enter a valid email address"),
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
    <div className='container text-center'>
      <div className='primary-wrapper'>
        <h1>Signup</h1>
        <p>Hi, Welcome 👋</p>
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
              type='text'
              placeholder='Username'
              {...register("userName")}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Fullname'
              {...register("firstName")}
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
            <button type='submit' className="button primary-button">Signup</button>
          </div>
        </form>
        <Link to='/login' className="button secondary-button">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
