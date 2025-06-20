import React from "react";
import Navbar from "./component/navbar.jsx";
import AboutUs from "./component/aboutus.jsx";
import ContactUs from "./component/contactus.jsx";
import Services from "./component/services.jsx";
import Home from "./component/home.jsx";
import Gallery from "./component/gallery.jsx";
import AdminLogin from "./component/admin.jsx";
import Location from './component/location.jsx';
import Footer from './component/footer.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./component/userContext.jsx";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function User() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
        <Location />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default User;
