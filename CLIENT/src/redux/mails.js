import { createSlice } from '@reduxjs/toolkit'

export const mailsSlice = createSlice({
  name: 'mails',
  initialState: {
    value: {}
  },
  reducers: {
    setMails: (state, action)=>{
      state.value = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMails } = mailsSlice.actions

export default mailsSlice.reducer