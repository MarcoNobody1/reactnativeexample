import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDataInterface } from "../../interfaces/LoginDataInterface";
import { FETCH_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (log: LoginDataInterface) => {
    try {
      const response = await fetch(`${FETCH_URL}/login`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: log.username,
          password: log.password,
        }),
      });
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({
          username: data.payload.username,
          email: data.payload.email,
          avatar: data.payload.avatar,
        })
      );
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
);
