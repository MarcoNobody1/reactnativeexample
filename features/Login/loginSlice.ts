import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { LoginIntialState } from "../../interfaces/SlicesInterfaces";
import { userLogin } from "./loginThunks";

const initialState: LoginIntialState = {
  error: "null",
  status: "idle",
  loginInfo: {
    username: "",
    email: "",
    photo: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.loginInfo.username = action.payload.username;
        state.loginInfo.email = action.payload.payload.email;
        state.loginInfo.photo = action.payload.payload.avatar;
        
      })
      .addCase(userLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const loginUsername = (state: RootState) =>
  state.login.loginInfo.username;
export const loginEmail = (state: RootState) => state.login.loginInfo.email;
export const loginAvatar = (state: RootState) => state.login.loginInfo.photo;
export const loginStatus = (state: RootState) => state.login.status;
export const { resetState } = loginSlice.actions;
