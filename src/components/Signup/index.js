import React, { useState } from "react";
import { apiService } from "services";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { OPTIONS } from "utils/helpers";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

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
      .min(4, "Character should be more than 4")
      .max(200, "Character should be less than 200")
      .matches(
        /^[a-zA-Z0-9._]+$/,
        "Username can only contain alphabets, numbers, dots, and underscores"
      ),
    fullName: Yup.string()
      .required("Fullname is required")
      .max(200, "Character should be less than 200"),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
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

  const getUserWithUserName = async (username) => {
    return await apiService.getUserWithUsername(username);
  };

  const handleUsername = async (e) => {
    if (e.target.value && e.target.value.length > 3) {
      setIsLoading(true);

      const response = await getUserWithUserName(e.target.value);
      if (response) {
        setIsAvailable(true);
      } else {
        setIsAvailable(false);
      }
      setIsLoading(false);
    }
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
              <span className='text-danger text-capatalize'>
                {errors?.email?.message}
              </span>
            )}
          </div>
          <div>
            <div className='inputContainer'>
              <input
                type='text'
                placeholder='Username'
                {...register("userName")}
                onChange={handleUsername}
              />
              <div className='iconContainer'>
                {isLoading ? (
                  <span className='spin-loader'></span>
                ) : (
                  isAvailable && (
                    <FontAwesomeIcon
                      icon={isAvailable ? faCircleCheck : faCircleXmark}
                      color={isAvailable ? "green" : "red"}
                    />
                  )
                )}
              </div>
            </div>

            {errors?.userName && (
              <span className='text-danger text-capatalize'>
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
              <span className='text-danger text-capatalize'>
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
              <span className='text-danger text-capatalize'>
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
