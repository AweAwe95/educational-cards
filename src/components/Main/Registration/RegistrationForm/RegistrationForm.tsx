import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {regUserTC, setRegErrorAC} from "../../../../redux/reg-reducer";
import "./RegistrationForm.css"
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../../../redux/store";

export const RegistrationForm = () => {
    const dispatch = useDispatch()
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.reg.isRegistered)
    const regError = useSelector<AppRootStateType, boolean>(state => state.reg.regError)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(regUserTC(values.email, values.password))
        },
    });
    if (isRegistered) {
        return <Navigate to={'/auth'}/>
    }
    return (
        <div className="registerContainer">
            <form onSubmit={formik.handleSubmit}>
                <p className="registerText">Please fill in this form to create an account.</p>
                <label htmlFor="email"><b>Email Address</b></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onFocus={()=>dispatch(setRegErrorAC(false))}
                    className="registerInput"

                />
                <label htmlFor="password"><b>Password</b></label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onFocus={()=>dispatch(setRegErrorAC(false))}
                    className="registerInput"
                />

                <button type="submit" className="registerBtn">Submit</button>
            </form>
            {regError && <h3 className={'regError'}>SOMETHING GOING WRONG</h3>}
        </div>
    );
}
;