import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../features/Login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
