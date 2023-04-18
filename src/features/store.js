import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSigninReducer from "./userSignin/userSigninSlice";
import userSignupReducer from "./userSignup/userSignupSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      userSignin: userSigninReducer,
      userSignup: userSignupReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore);
