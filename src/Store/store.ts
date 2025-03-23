import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/UsersSlice";

const store = configureStore({
    reducer: {
        [usersSlice.name]: usersSlice.reducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
