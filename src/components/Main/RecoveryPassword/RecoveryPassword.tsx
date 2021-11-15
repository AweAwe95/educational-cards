import React from 'react';
import {useFormik} from 'formik';
import {useDispatch} from "react-redux";
import {recPassReducer} from "../../../redux/recPass-reducer";

export const RecoveryPassword = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            // dispatch(recPassReducer(values.email))

        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <div>
                <label>Forgot your password?</label>
                </div>
                <input
                    id="email"
                    name="email"

                />
                <div>
                    <button type="submit">Send instruction</button>
                </div>
            </div>
        </form>
    );
};