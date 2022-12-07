import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
