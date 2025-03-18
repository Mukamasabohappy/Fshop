import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Layout from './Component/Layout';
import Men from './Component/Men';
import Women from './Component/Women';
import Login from './Component/login';
import Kids from './Component/Kids';
import SignupModal from "./Component/SignupModal";

import DashLayout from "./Dahboard/DashLayout";
import DashView from "./Dahboard/DashView";
import Inventory from "./Dahboard/Inventory";
import Dashboard from "./Dahboard/Dashboard";
import Profile from './Dahboard/Profile';
import Orders from './Dahboard/Orders';
import Setting from './Dahboard/Setting';

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <BrowserRouter>
      {isSignupOpen && <SignupModal closeModal={() => setIsSignupOpen(false)} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Login" element={<Login openSignup={() => setIsSignupOpen(true)} />} />
        </Route>

        {/* Dashboard routes should be inside /dashboard */}
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<DashView />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
