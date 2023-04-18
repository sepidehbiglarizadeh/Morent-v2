import http from "@/services/httpService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Router } from "next/router";
import { toast } from "react-hot-toast";

export const userAsyncSignup = createAsyncThunk(
  "userSignup/userAsyncSignup",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.post("/user/signup", payload);
      toast.success("Registered Successfully !");
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      toast.error(error.message);
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  loading: false,
  user: {},
  error: null,
};

const userSignupSlice = createSlice({
  name: "userSignup",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(userAsyncSignup.fulfilled, (state, action) => {
        return { ...state, loading: false, user: action.payload, error: null };
      })
      .addCase(userAsyncSignup.pending, (state, action) => {
        return { ...state, loading: true, user: {}, error: null };
      })
      .addCase(userAsyncSignup.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          user: {},
          error: action.payload.message,
        };
      });
  },
});

export default userSignupSlice.reducer;
