import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import UpdatePassword from './UpdatePassword'
import ViewAll from './ViewAll'
import MovieDetails from './MovieDetails'
import Order from './Order'
import Payment from './Payment'
import Profile from './Profile'
import OrderHistory from './OrderHistory'
import TicketResult from './TicketResult'
import ManageMovie from './ManageMovie'
import ManageSchedule from './ManageSchedule'
import Dashboard from './Dashboard'
import WithoutAuth from '../assets/components/WithoutAuth'
import WithAuthUser from '../assets/components/WithAuthUser'
import WithAuthAdmin from '../assets/components/WithAuthAdmin'
import WithAuthUserPayment from '../assets/components/WithAuthUserPayment'
import WithAuthProfile from '../assets/components/WithAuthProfile'

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route
          path="/signup"
          element={
            <WithoutAuth>
              <SignUp />
            </WithoutAuth>
          } />
        <Route
          path="/signin"
          element={
            <WithoutAuth>
              <SignIn />
            </WithoutAuth>
          } />
        <Route
          path="/forgotPassword"
          element={
            <WithoutAuth>
              <ForgotPassword />
            </WithoutAuth>
          } />
        <Route
          path="/updatePassword"
          element={
            <WithoutAuth>
              <UpdatePassword />
            </WithoutAuth>
          } />
        <Route
          path='/viewAll'
          element={
            <WithAuthUser>
              <ViewAll />
            </WithAuthUser>
          } />
        <Route
          path='/movieDetails/:id'
          element={
            <WithAuthUser>
              <MovieDetails />
            </WithAuthUser>
          } />
        <Route
          path='/order'
          element={
            <WithAuthUserPayment>
              <Order />
            </WithAuthUserPayment>
          } />
        <Route
          path='/payment'
          element={
            <WithAuthUserPayment>
              <Payment />
            </WithAuthUserPayment>
          } />
        <Route
          path='/profile'
          element={
            <WithAuthProfile>
              <Profile />
            </WithAuthProfile>
          } />
        <Route
          path='/orderHistory'
          element={
            <WithAuthUser>
              <OrderHistory />
            </WithAuthUser>
          } />
        <Route
          path='/ticketResult/:id'
          element={
            <WithAuthUser>
              <TicketResult />
            </WithAuthUser>
          } />
        <Route
          path='/dashboard'
          element={
            <WithAuthAdmin>
              <Dashboard />
            </WithAuthAdmin>
          } />
        <Route
          path='/manageMovie'
          element={
            <WithAuthAdmin>
              <ManageMovie />
            </WithAuthAdmin>
          } />
        <Route
          path='/manageSchedule'
          element={
            <WithAuthAdmin>
              <ManageSchedule />
            </WithAuthAdmin>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
