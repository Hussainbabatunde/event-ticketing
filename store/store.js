import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loading.reducers";
import authSliceReducer from "../components/auth/auth"

export const reducers ={
    loading: loadingReducer,
    auth: authSliceReducer
};

export const store = configureStore({
    reducer: reducers
})