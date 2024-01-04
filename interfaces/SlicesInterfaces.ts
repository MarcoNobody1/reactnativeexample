import { LoginDataInterface } from "./LoginDataInterface";

export type LoginIntialState = {
    error: string | undefined;
    status: "idle" | "fulfilled" | "pending" | "rejected";
    data: LoginDataInterface
}