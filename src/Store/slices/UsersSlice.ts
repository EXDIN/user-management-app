import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../Types";
import { fetchUsersThunk } from "../thunks/userThunk";

export type initialUsersStateType = {
    users: UserType[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: null | string;
    loaded: boolean;
};

export type addUserType = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

const initialUsersState: initialUsersStateType = {
    users: [],
    status: "idle",
    error: null,
    loaded: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersState,
    selectors: {
        getAllUsers: (state) => state,
        selectUserById: (state, payload: number) =>
            state.users.find((user) => user.id === payload),
    },
    reducers: {
        addUser: (state, action: PayloadAction<addUserType>) => {
            const newUser = action.payload;
            newUser.id = state.users.length + 1;
            state.users.push(newUser);
        },
        editUser: (state, action: PayloadAction<addUserType>) => {
            const newState = state.users.map((user) => {
                if (user.id == action.payload.id) {
                    user.name = action.payload.name;
                    user.email = action.payload.email;
                    user.phone = action.payload.phone;
                }
                return user;
            });
            state.users = newState;
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            const newUsers = state.users.filter(
                (user) => user.id !== action.payload
            );
            state.users = newUsers;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersThunk.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(
                fetchUsersThunk.fulfilled,
                (state, action: PayloadAction<UserType[]>) => {
                    state.users = action.payload;
                    state.status = "succeeded";
                    state.loaded = true;
                }
            )
            .addCase(fetchUsersThunk.rejected, (state, action) => {
                state.status = "failed";
                state.error =
                    (action.payload as string) ||
                    action.error.message ||
                    "Failed to load users";
            });
    },
});

export const { getAllUsers, selectUserById } = usersSlice.selectors;
export const { deleteUser, addUser, editUser } = usersSlice.actions;

export default usersSlice;
