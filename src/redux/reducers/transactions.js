import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingDate: null,
  bookingTime: null,
  movieId: null,
  userId: null,
  cinemaId: null,
  price: null,
  cinemaName: null,
  movieScheduleId: null,
  fullName: null,
  email: null,
  phoneNumber: null,
  paymentMethodId: null,
  statusId: null,
  seatNum: null
}

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    chooseMovie: (state, {payload}) => {
      state.movieId = payload.movieId
      state.cinemaId = payload.cinemaId
      state.bookingDate = payload.bookingDate
      state.bookingTime = payload.bookingTime
      state.price = payload.price
      state.cinemaName = payload.cinemaName
      state.movieScheduleId = payload.movieScheduleId
      state.userId = payload.userId
    },
    chooseSeat: (state, {payload}) => {
      state.seatNum = payload.seatNum
    },
    changeMovie: (state, {payload}) => {
      state.movieId = null
      state.cinemaId = null
      state.bookingDate = null
      state.bookingTime = null
      state.price = null
      state.seatNum = null
      state.cinemaName = null
      state.movieScheduleId = null
      state.userId = null
    },
    choosePayment: (state, {payload}) => {
      state.paymentMethodId = payload.paymentMethodId
      state.fullName = payload.fullName
      state.email = payload.email
      state.phoneNumber = payload.phoneNumber
      state.statusId = payload.statusId
    },
    logoutTransaction: (state, {payload}) => {
      state.bookingDate = null
      state.bookingTime = null
      state.movieId = null
      state.userId = null
      state.cinemaId = null
      state.price = null
      state.movieScheduleId = null
      state.fullName = null
      state.email = null
      state.phoneNumber = null
      state.paymentMethodId = null
      state.statusId = null
      state.seatNum = null
      state.cinemaName = null
    }
  }
})

export const {chooseMovie, chooseSeat, changeMovie, choosePayment, logoutTransaction} = transactions.actions

export default transactions.reducer
