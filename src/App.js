import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import Homepage from './pages/Homepage';
import ViewAll from './pages/ViewAll';
import MovieDetails from './pages/MovieDetails';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
        <Route path="/home" element={<Homepage />} />
        <Route path='/viewAll' element={<ViewAll />} />
        <Route path='/movieDetails' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
