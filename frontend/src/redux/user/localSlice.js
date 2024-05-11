import { createSlice } from "@reduxjs/toolkit";

const initSilice = {
    currentUserInfo : null,
    loading : false,
    error : false
}


const localSlice = createSlice({
    name : "local",
    initialState : initSilice,
    reducers : {
        userInfoStart : (state) => {
            state.loading = true;
        },
        userInfoSuccess : (state, action) => {
            state.loading = false;
            state.currentUserInfo = action.payload;
            state.error = false;
        },
        userInfoFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        InfosignOut : (state) => {
            state.currentUserInfo = null;
            state.loading = false;
            state.error = false;
        },
        DeleteUserInfo : (state) => {
            state.currentUserInfo = null;
            state.loading = false;
            state.error = false;
        }
    }
})      

export const {userInfoStart, userInfoSuccess, userInfoFailure, InfosignOut, DeleteUserInfo} = localSlice.actions;
export default localSlice.reducer