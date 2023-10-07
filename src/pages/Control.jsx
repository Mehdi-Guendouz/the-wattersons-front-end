import React, {useState} from 'react'
import  Sidepanel  from "../component/Sidepanel"
import  Settings  from "../component/Settings"
import  Dashboard  from "../Dashboard"
import  Settingg  from "../Settingg"
import  Home  from "../Home"
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Route, createBrowserRouter } from 'react-router-dom'

function Control() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Settingg/>
    },
    {
      path: '/Home',
      element: <Home/>
    },
    {
      path: '/Dashboard',
      element: <Dashboard/>
    }
  ])
  return (
  // <div className="grid grid-cols-5 h-screen text-theBeige">
  //       <Sidepanel />
  //       <Settings />
  // </div>
    <RouterProvider router={router}/>
  
  )
}


export default Control