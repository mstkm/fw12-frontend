import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null
}

const forgotPasswordReducer = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    forgotPassword: (state, { payload }) => {
      state.email = payload.email
    },
    resetForgotPassword: (state, { payload }) => {
      state.email = null
    }
  }
})

export const { forgotPassword, resetForgotPassword } = forgotPasswordReducer.actions

export default forgotPasswordReducer.reducer
