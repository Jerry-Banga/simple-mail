import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE = "http://localhost:3001";

const initialState = {
  mailItems: [],
  status: 'idle',
  error: null,
}

export const fetchMails = createAsyncThunk('mails/fetchMails', async () => {
  const res = await axios(API_BASE + "/inbox");
    return res.data;
});

export const mailsSlice = createSlice({
  name: 'mails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMails.pending, (state, action) => {
      state.status = 'loading';
    },)
      .addCase(fetchMails.fulfilled, (state, action) => {
        state.status = 'successful';
        state.mailItems = state.mailItems.concat(action.payload)
      },)
      .addCase(fetchMails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})


export default mailsSlice.reducer