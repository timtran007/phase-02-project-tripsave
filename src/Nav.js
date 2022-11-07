import React from "react"
import {NavLink} from "react-router-dom"
import Navbar from "../src/styles/Navbar.css"

function Nav(){
    return(
        <nav >
                <NavLink exact className="nav" activeClassName="active" to="/">
                    Home
                </NavLink>
                <NavLink className="nav" to="/destination">
                    Trips
                </NavLink> 
                <NavLink className="nav" to="add-a-trip">
                    Add a Trip
                </NavLink>
        </nav>
    )
}

export default Nav