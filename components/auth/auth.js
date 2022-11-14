import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

 export const Loginauth = createAsyncThunk(
    "loginauth/login_auth",
    async(logindetails, {rejectWithValue}) => {
        console.warn("it works")
        const instance = axios.create({
            baseURL: "https://shiptonaija-api.herokuapp.com/api/users",
            timeout: 20000,
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            }
        })
        return await instance.post("/login", logindetails)
        .then( (response)=>{
            console.warn("response ", response.data )
            SecureStore.setItemAsync("token", response.data.token)
            return response.data
        })
        .catch((error)=>{
            if (error.response == "Network error"){
                return rejectWithValue(error?.response.data)
            }else{
                return rejectWithValue(error?.response.data)
            }
        })
    }
)

const initialState= {
    loading: false,
    authtoken: null,
    success: false,
    error: null
}

const authSlice = createSlice({
    name:"authtokenreducer",
    initialState,
    reducers:{
        reset:(state)=> initialState
    },
    extraReducers: (builder) =>{
        builder
        .addCase(Loginauth.pending, (state)=>{
            state.loading = true;
        })
        .addCase(Loginauth.fulfilled, (state, action)=>{
            console.warn("login response ", action.payload.token)
            console.warn(state)
            state.loading= true,
            state.authtoken= action.payload.token,
            state.success = true
            console.warn("authtoken" ,state)

        })
        .addCase(Loginauth.rejected, (state, action)=>{
            state.error= true,
            state.loading= false,
            state.message= action.payload?.message
        })
    }
})


export default authSlice.reducer;