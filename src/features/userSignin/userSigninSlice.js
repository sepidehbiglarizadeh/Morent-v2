import http from "@/services/httpService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

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

const initialState = {
  loading: false,
  user: {},
  error: null,
};

const userSigninSlice = createSlice({
  name: "userSignin",
  initialState,
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

export default userSigninSlice.reducer;
