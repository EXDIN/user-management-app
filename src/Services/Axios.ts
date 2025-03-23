import axios from "axios";
import { usersUrl } from "../Constants";

export const appAxios = axios.create({
    baseURL: usersUrl,
    headers: { "Content-Type": "application/json" },
});
