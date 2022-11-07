import React from "react"
import {NavLink} from "react-router-dom"

function Nav(){
    return(
        <nav >
                <NavLink activeClassName="active" to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/destination">
                    Trips
                </NavLink> 
                <NavLink activeClassName="active" to="add-a-trip">
                    Add a Trip
                </NavLink>
        </nav>
    )
}

export default Nav