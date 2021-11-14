import React from 'react';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {regUserTC} from "../../../../redux/reg-reducer";

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
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <button type="submit">Submit</button>
            </div>
        </form>
    );
};