import {NavLink} from "react-router-dom";
import React from "react";
import './Header.css'

export function Header() {
    return (
        <div className="header">
            <NavLink to={'#'} className="logo">Site Logo</NavLink>
            <div className="header-right">
                <NavLink to="/">Profile</NavLink>
                <NavLink to="/auth">Authorization</NavLink>
                <NavLink to="/signup">Registration</NavLink>
                <NavLink to="/password-recovery">Password Recovery</NavLink>
                <NavLink to="/new-password">New Password</NavLink>
                <NavLink to="/error-404">Error 404</NavLink>
            </div>
        </div>
    )
}