import {NavLink, Route} from "react-router-dom";
import {PageNotFound} from "../Main/PageNotFound/PageNotFound";
import {Authorization} from "../Main/Authorization/Authorization";
import {Registration} from "../Main/Registration/Registration";
import {Profile} from "../Main/Profile/Profile";
import {RecoveryPassword} from "../Main/RecoveryPassword/RecoveryPassword";
import {NewPassword} from "../Main/NewPassword/NewPassword";
import React from "react";

export function Header() {
    return (
        <div>
            <NavLink to="/">Profile</NavLink>{"  "}
            <NavLink to="/auth">Authorization</NavLink>{"  "}
            <NavLink to="/signup">Registration</NavLink>{"  "}
            <NavLink to="/password-recovery">Password Recovery</NavLink>{"  "}
            <NavLink to="/new-password">New Password</NavLink>{"  "}
        </div>
    )
}