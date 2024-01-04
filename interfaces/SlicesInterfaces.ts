import { LoginDataInterface } from "./LoginDataInterface";

export type LoginIntialState = {
  error: string | undefined;
  status: "idle" | "fulfilled" | "pending" | "rejected";
  loginInfo: {
    username: string;
    email: string;
    photo: string;
  };
};
