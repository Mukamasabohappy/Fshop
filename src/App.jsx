import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Layout from './Component/Layout';
import Men from'./Component/Men';
import Women from './Component/Women';
import Login from './Component/login';
import Kids from './Component/Kids';

import DashLayout from "./Dahboard/DashLayout";
import DashView from "./Dahboard/DashView";
import Inventory from "./Dahboard/Inventory";
import Dashboard from"./Dahboard/Dashboard";
import Profile from './Dahboard/Profile';
import Orders from './Dahboard/Orders';
import Setting from'./Dahboard/Setting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="" index element={<Home />} />
          <Route path="/home" index element={<Home />} />
          <Route path="/Men" element={<Men/>}/>
          <Route path="/Women" element={<Women/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Kids" element={<Kids/>}/>
          </Route>
      
      <Route path="/" element={<DashLayout/>}>
      <Route path="/dashboard" index element={<DashView/>}/>
      <Route path="/Inventory" element={<Inventory/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Orders" element={<Orders/>}/>
      <Route path="/Setting" element={<Setting/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    );  
}
export default App;