import http from "@/services/httpService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Router } from "next/router";

export const userAsyncSignin = createAsyncThunk(
  "userSignin/userAsyncSignin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.post("/user/signin", payload);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const loadUserData = (store) => {
  http
    .get("/user/load")
    .then(({ data }) => {
      store.dispatch(signinUserSuccess(data));
    })
    .catch((err) => {});
};

const initialState = {
  loading: false,
  user: {},
  error: null,
};

const userSigninSlice = createSlice({
  name: "userSignin",
  initialState,
  reducers: {
    signinUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(userAsyncSignin.fulfilled, (state, action) => {
        return { ...state, loading: false, user: action.payload, error: null };
      })
      .addCase(userAsyncSignin.pending, (state, action) => {
        return { ...state, loading: true, user: {}, error: null };
      })
      .addCase(userAsyncSignin.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          user: {},
          error: action.payload.message,
        };
      });
  },
});

export const { signinUserSuccess } = userSigninSlice.actions;
export default userSigninSlice.reducer;
