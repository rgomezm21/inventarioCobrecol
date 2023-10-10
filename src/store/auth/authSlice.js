import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email:null,
        displayName: null,
        errorMessage: null,
    },
    reducers:{
        login: (state, action) =>{

        }
        },
        logout: (state, action) =>{

        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
        
});

export const {login, logout, checkingCredentials} = authSlice.actions;