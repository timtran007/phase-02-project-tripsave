import React from "react"
import {NavLink} from ReactRouter

function Nav(){
    return(
        <div>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/destination">
                    Trips
                </NavLink>
            </div>
        </div>
    )
}