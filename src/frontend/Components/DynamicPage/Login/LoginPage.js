import React, { useEffect, useState } from "react";
import "./LoginPage.scss";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { loginUser, setSignUpDetails, toggleSignUpMode } from "./LoginSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object({
  username: yup.string().required("Username is a required field"),

  email: yup
    .string()
    .required("Email is a required field")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/, "Email is not valid."),

  password: yup
    .string()
    .required("Password is a required field")
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,16}$/,
      "Password should contain atleast One upper case and One lower case and one digit and one Special Character Maximum 16 characters."
    ),

  number: yup.number().required("Number is a required field"),
});

const LoginPage = () => {
  // const handleMobileNumberChange = (e) => {
  //   const input = e.target.value;
  //   // Regex to match only digits
  //   const regex = /^[0-9\b]+$/;
  //   if (input === "" || regex.test(input)) {
  //     // Limit to 10 digits
  //     if (input.length <= 10) {
  //       setMobileNumber(input);
  //     }
  //   }
  // };

  const { isSignUpMode, isLoggedIn } = useSelector((store) => store.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUpClick = () => {
    dispatch(toggleSignUpMode());
  };

  const handleSignInClick = () => {
    dispatch(toggleSignUpMode());
  };

  const handleSignup = () => {
    const username = getValues().username;
    const email = getValues().email;
    const password = getValues().password;

    const obj = {
      username,
      email,
      password,
    };

    if (username && email && password) {
      dispatch(setSignUpDetails(obj));
      dispatch(toggleSignUpMode());
    }
  };

  const handleLogin = () => {
    const username = getValues().username;
    const email = getValues().email;
    const password = getValues().password;
    const obj = {
      username,
      email,
      password,
    };
    if (username && email && password) dispatch(loginUser(obj));
  };

  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* login Form */}
          {!isSignUpMode && (
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="sign-in-form loginForm"
            >
              <h2 className="title">Login</h2>

              <div className="input-field">
                <FaUser className="my-auto mx-auto" />
                <input
                  className="LoginInput"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="input-field">
                <FaEnvelope className="my-auto mx-auto" />
                <input
                  className="LoginInput"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="input-field">
                <FaLock className="my-auto mx-auto" />
                <input
                  className="LoginInput"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <button className="btn1" onClick={handleLogin}>
                Sign In
              </button>
            </form>
          )}

          {/* register Form */}
          {isSignUpMode && (
            <form
              onSubmit={handleSubmit(handleSignup)}
              className="sign-up-form loginForm"
            >
              <h2 className="title">Register</h2>

              <div className="input-field">
                <FaUser className="my-auto mx-auto" />
                <input
                  className="LoginInput"
                  type="text"
                  placeholder="Enter your Name"
                  {...register("username")}
                />
              </div>
              <span className="error-msg">{errors.username?.message}</span>

              <div className="input-field">
                <FaEnvelope className="my-auto mx-auto" />
                <input
                  className="LoginInput"
                  type="email"
                  placeholder="Enter your Email address"
                  {...register("email")}
                />
              </div>
              <span className="error-msg">{errors.email?.message}</span>

              {/* <div className="input-field">
              <FaMobileRetro className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="number"
                placeholder="Enter your Mobile Number"
                // value={mobileNumber} 
                {...register("number")}
              />
            </div> */}
              <span className="error-msg">{errors.email?.number}</span>

              <div className="input-field">
                <FaLock className="my-auto mx-auto" />
                <input
                  className="LoginInput"
                  type="password"
                  placeholder="Enter a Password"
                  {...register("password")}
                />
              </div>
              <span className="error-msg">{errors.password?.message}</span>

              <button className="btn1" onClick={handleSignup}>
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New to our platform?</h3>
            <p className="loginp">
              Joining is easy and opens the doors to a world of possibilities.
              Click the below button to create your account and become part of
              our community.
            </p>
            <button className="btn1 transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">Already part of our community?</h3>
            <p className="loginp">
              Signing in is quick and easy. Click the below Login button to
              proceed to the login page, and then enter your credentials below
              to access your account.
            </p>
            <button
              onClick={handleSignInClick}
              className="btn1 transparent"
              id="sign-in-btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
