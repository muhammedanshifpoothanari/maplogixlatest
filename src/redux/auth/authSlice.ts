import { AuthState } from "../../lib/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
    userName: '',
    isUser: true,
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthReducer(state, action) {
           state.userName = action.payload.userName;
        },
    }
})


export const { setAuthReducer } = authSlice.actions
export const authReducer = authSlice.reducer;