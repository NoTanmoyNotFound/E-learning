import { createSlice } from "@reduxjs/toolkit";



const initSilice = {
    currentUser: null,
    loading : false,
    error : false
};

const userSlice = createSlice({
    name : "user",
    initialState : initSilice,
    reducers : {
        signinStart : (state) => {
            state.loading = true;
        },
        signinSuccess : (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        signinFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart : (state) => {
            state.loading = true;
        },
        updateUserSuccess : (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        updateUserFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart : (state) => {
            state.loading = true;
        },
        deleteUserSuccess : (state) => {
            state.loading = false;
            state.currentUser = null;
            state.error = false;
        },
        deleteUserFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOut : (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        }

    }
})

export const {signinStart, signinSuccess, signinFailure, updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, signOut} = userSlice.actions;
export default userSlice.reducer