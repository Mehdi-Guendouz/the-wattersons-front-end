import React, {useState} from 'react'
import  Sidepanel  from "./component/Sidepanel"
import  Settings  from "./component/Settings"
import Dashboard from "./Dashboard"
import {BrowserRouter as Router, Route, createBrowserRouter, NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Settingg() {
    const location = useLocation();
  return (
  <div className="grid grid-cols-5 h-screen text-theBeige">
        <Sidepanel />
        <Settings />
  </div>
  )
}


export default Settingg