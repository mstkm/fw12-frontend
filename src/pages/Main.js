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

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
        <Route path='/viewAll' element={<ViewAll />} />
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
        <Route path='/order' element={<Order />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/orderHistory' element={<OrderHistory />} />
        <Route path='/ticketResult' element={<TicketResult />} />
        <Route path='/manageMovie' element={<ManageMovie />} />
        <Route path='/manageSchedule' element={<ManageSchedule />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
