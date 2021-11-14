import React from 'react';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {regUserTC} from "../../../../redux/reg-reducer";
import "./RegistrationForm.css"

export const RegistrationForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(regUserTC(values.email, values.password))

        },
    });
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
                    className="registerInput"
                />

                <button type="submit" className="registerBtn">Submit</button>
            </form>
        </div>
    );
};