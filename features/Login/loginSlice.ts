import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { LoginIntialState } from "../../interfaces/SlicesInterfaces";
import { userLogin } from "./loginThunks";

const initialState: LoginIntialState = {
  error: "null",
  status: "idle",
  data: { username: "", password: "" },
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(userLogin.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
          })
          .addCase(userLogin.pending, (state) => {
            state.status = "pending";
          })
          .addCase(userLogin.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
          })
    },
})