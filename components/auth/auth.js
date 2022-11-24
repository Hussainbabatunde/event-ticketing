import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

 export const Loginauth = createAsyncThunk(
    "loginauth/login_auth",
    async(logindetails, {rejectWithValue}) => {
        console.warn("it works", logindetails)
        const instance = axios.create({
            baseURL: "http://hotelanywhere.ng/evently/api",
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

export const Registerauth = createAsyncThunk(
    "registerauth/reg_auth",
    async(logindetails, {rejectWithValue}) => {
        console.warn("it works", logindetails)
        const instance = axios.create({
            baseURL: "http://hotelanywhere.ng/evently/api/",
            timeout: 20000,
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            }
        })
        return await instance.post("signup", logindetails)
        .then( (response)=>{
            console.warn("response ", response.data )
            // SecureStore.setItemAsync("token", response.data.token)
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

// export const Registerauth = createAsyncThunk(
//     "registerauth/reg_auth", async(signupdetails, {rejectWithValue})=>{
//         // console.warn("it works details", signupdetails)
//         const instance= axios.create({
//             baseURL: "https://exportsandsell.bcodestech.com",
//             timeout: 20000,
//             headers:{
//                 "Content-Type":"application/json",
//                 "Accept":"application/json"
//             }
//         })
//         console.warn("before end point ",signupdetails)
//         return await instance.post( "/api/buyer/register", signupdetails)
//         .then((response)=>{
//             console.warn("response ", response.data)
//             return response.data
//         })
//         .catch((error)=>{
//             if (error.response == "Network error"){
//                 return rejectWithValue(error?.response.data)
//             }else{
//                 return rejectWithValue(error?.response.data)
//             }
//         })
//     }
// )

const initialState= {
    loading: false,
    authtoken: null,
    success: false,
    error: null,
    register: true
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
        .addCase(Registerauth.pending, (state)=>{
            state.loading = true;
        })
        .addCase(Registerauth.fulfilled, (state, action)=>{
            state.loading= true,
            state.success = true,
            state.register= action.payload
        })
        .addCase(Registerauth.rejected, (state, action)=>{
            state.error= true,
            state.loading= false,
            state.message= action.payload?.message
        })
    }
})


export default authSlice.reducer;