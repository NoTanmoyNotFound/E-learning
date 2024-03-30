import { createSlice } from "@reduxjs/toolkit";

const initSilice = {
    nowuser : null,
    loading : false,
    error : false
}


const localSlice = createSlice({
    name : "local",
    initialState : initSilice,
    reducers : {
        signinStart : (state) => {
            state.loading = true;
        },
        signinSuccess : (state, action) => {
            state.loading = false;
            state.nowuser = action.payload;
            state.error = false;
        },
        signinFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signout : (state) => {
            state.nowuser = null;
            state.loading = false;
            state.error = false;
        }
    }
})      

export const {signinStart, signinSuccess, signinFailure, signout} = localSlice.actions;
export default localSlice.reducer