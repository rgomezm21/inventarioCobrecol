import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email:null,
        errorMessage: null,
    },
    reducers:{
        login: (state, {payload}) =>{
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.errorMessage = null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

export const {login, logout, checkingCredentials} = authSlice.actions;