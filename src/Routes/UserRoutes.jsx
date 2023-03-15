import React from "react";
import {Route, Routes } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Account from "../components/pages/account/Account";
import Invoice from "../components/pages/invoice/Invoice";
import LoginSecurity from "../components/pages/loginSecurity/LoginSecurity";
import Payments from "../components/pages/payments.jsx/Payments";
import PersonalInfo from "../components/pages/personalInfo/PersonalInfo";

const UserRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/Personal-Info" element={<PersonalInfo />} />
        <Route path="/Login-Security" element={<LoginSecurity />} />
        <Route path="/Payment" element={<Payments />} />
        <Route path="/Payment/Invoice" element={<Invoice />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UserRoutes;
