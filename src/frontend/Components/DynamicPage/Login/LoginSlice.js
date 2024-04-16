import { createSlice } from "@reduxjs/toolkit";
import { unstable_HistoryRouter, useHistory } from "react-router-dom";

const initialState = {
  isSignUpMode: false,
  signUpDetails: [],
  isLoggedIn: false,
  userName: "",
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleSignUpMode: (state) => {
      state.isSignUpMode = !state.isSignUpMode;
    },
    setSignUpDetails: (state, action) => {
      state.signUpDetails = [...state.signUpDetails, action.payload];

      // localStorage.setItem("userDetails", JSON.stringify(state.signUpDetails));
    },

    loginUser: (state, action) => {
      const { username, email, password } = action.payload;

      // const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      const isValidUser = state.signUpDetails.some(
        (signup) =>
          signup.username === username &&
          signup.email === email &&
          signup.password === password
      );
      // console.log(isValidUser);
      if (isValidUser) {
        state.isLoggedIn = isValidUser;
        state.userName = username;
      }
    },
  },
});

export const { toggleSignUpMode, setSignUpDetails, loginUser } =
  LoginSlice.actions;

export default LoginSlice.reducer;
