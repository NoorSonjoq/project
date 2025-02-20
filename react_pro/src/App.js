import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Homepage/Homepage/Homepage';
import { Aboutus } from './Homepage/aboutus/aboutus';
import { Booking } from './Homepage/Booking/Booking';
import { Contactus } from './Homepage/contactus/contactus';
import { Destinations } from './Homepage/destinations/destinations';
import { Gallery } from './Homepage/gallary/gallary';
import { Services } from './Homepage/services/services';
import { Reviews } from './Homepage/reviews/reviews';
import { ForgetPassword } from './ForgetPassword/ForgetPassword';
import { Login } from './login/login';
import { SignUp } from './SignUp/SignUp';
import { Notfound } from './Notfound/Notfound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="*" element={<Notfound />} /> 
      </Routes>
    </Router>
  );
}

export default App;