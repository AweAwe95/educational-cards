import {NavLink} from "react-router-dom";
import React from "react";
import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {logoutTC} from "../../redux/authorization-reducer";

export function Header() {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.authorization.isLoggedIn);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const dispatch = useDispatch()

    return (
        <div className="header">
            <div className="header-left">
                <NavLink to="/">Profile</NavLink>
                <NavLink to="/auth">Authorization</NavLink>
                <NavLink to="/signup">Registration</NavLink>
                <NavLink to="/password-recovery">Password Recovery</NavLink>
                <NavLink to="/new-password">New Password</NavLink>
                <NavLink to="/error-404">Error 404</NavLink>
            </div>
            <div className="header-right">
                {isLoggedIn && <button className="logout-button" onClick={()=>dispatch(logoutTC())} disabled={isLoading}>Logout</button>}
            </div>
        </div>
    )
}