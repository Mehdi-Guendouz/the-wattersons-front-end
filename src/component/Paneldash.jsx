import React,{useState}  from "react";
import {BrowserRouter as Router, Route, createBrowserRouter, NavLink} from 'react-router-dom'



export default function Sidepanel(){

    return(
        <div className="bg-theBlack py-3 col-span-1 h-full flex flex-col justify-end w-full text-center">
            <div className="flex flex-col justify-between h-2/3 align-baseline">
                <ul className="flex flex-col justify-center w-11/12">
                    <li className="text-20 capitalize py-2" ><NavLink to="/Home">home</NavLink></li>
                    <li className="text-20 capitalize py-2 text-theBlack bg-theBeige rounded-r-full">dashboard</li>
                    <li className="text-20 capitalize py-2" ><NavLink to="/">settings</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink className="text-logo font-bold text-23 text-theGreen" to="/Home">TrackUp</NavLink></li>
                    <li><button className="capitalize text-16 text-theBlack bg-theBeige px-8 py-2 rounded-full border-none m-2 hover:bg-opacity-90 transition-all ease-in duration-150">log out</button></li>
                </ul>
            </div>
        </div>
    ) ;
}