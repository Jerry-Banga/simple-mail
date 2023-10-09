import { configureStore } from '@reduxjs/toolkit'
import mailsReducer from './mails'

export default configureStore({
  reducer: {
    mails: mailsReducer
  }
})