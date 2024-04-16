import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import LoginSlice from "../Components/DynamicPage/Login/LoginSlice";

export const store = configureStore({
  reducer: {
    jwelleryShop: Slice,
    login: LoginSlice,
  },
});
