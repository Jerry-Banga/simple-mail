import { configureStore } from '@reduxjs/toolkit'
import mailsReducer from './mailsSlice'
import userReducer from './userSlice'

export default configureStore({
  reducer: {
    mails: mailsReducer,
    user: userReducer
  }
})