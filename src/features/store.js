import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSigninReducer from "./userSignin/userSigninSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      userSignin: userSigninReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
