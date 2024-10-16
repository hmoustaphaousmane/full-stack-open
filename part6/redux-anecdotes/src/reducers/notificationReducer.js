import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Initial notification'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayNotification(state, action) {
      return action.payload
    },
    clearNotification(state) {
      return ''
    }
  }
})

export const { displayNotification, clearNotification } = notificationSlice.actions

export const setNotification = (message, timeout = 5) => {
  return async dispatch => {
    dispatch(displayNotification(message))
    setTimeout(() => 
    dispatch(clearNotification()), timeout * 1000)
  }
}

export default notificationSlice.reducer
