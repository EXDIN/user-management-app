import { createAsyncThunk } from "@reduxjs/toolkit";
import { appAxios } from "../../Services";
import { UserType } from "../../Types";
import { AxiosError } from "axios";
import { initialUsersStateType } from "../slices/UsersSlice";

interface ErrorResponse {
    message: string;
}

export const fetchUsersThunk = createAsyncThunk(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        try {
            const response = await appAxios.get<UserType[]>("");
            return response.data;
        } catch (error: unknown) {
            const axiosError = error as AxiosError<ErrorResponse>;
            return thunkAPI.rejectWithValue(
                axiosError.response?.data?.message || "Failed to load users"
            );
        }
    },
    {
        condition: (_, { getState }) => {
            const { users } = getState() as { users: initialUsersStateType };
            if (users.loaded) {
                return false;
            }
        },
    }
);
