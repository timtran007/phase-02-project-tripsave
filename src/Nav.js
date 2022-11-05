import React from "react"
import {NavLink} from ReactRouter

function Nav(){
    return(
        <div>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/destination">
                    Trips
                </NavLink>
            </div>
            <div>    
                <NavLink to="add-a-trip">
                    Add a Trip
                </NavLink>
            </div>
        </div>
    )
}

export default Nav