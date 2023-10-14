import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "http://localhost:3001";
//Predefined user
const NAME = "Jerry";
const LASTNAME = "Banga";

const initialState = {
    userInfo: null,
    status: 'idle',
    error: null,
}

export const authenticateUser = createAsyncThunk('user/fetchUser', async () => {
    const res = await axios(API_BASE + `/user?name=${NAME}&lastName=${LASTNAME}`);
    return res.data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.status = 'authenticated';
                state.userInfo = action.payload;
            },)
            .addCase(authenticateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;