import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDataInterface } from "../../interfaces/LoginDataInterface";
import { LoginIntialState } from "../../interfaces/SlicesInterfaces";

export const userLogin = createAsyncThunk<LoginIntialState>(
  "login/userLogin",
  async (log: LoginDataInterface) => {
    try {
        const response 
    } catch (error) {
        throw error;
    }
  }
);
