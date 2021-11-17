import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {recPassReducer, recPassReducerTC} from "../../../redux/recPass-reducer";
import {AuthFormikType} from "../Authorization/AuthorizationForm";
import {AppRootStateType} from "../../../redux/store";
import {Navigate} from "react-router-dom";

export const RecoveryPasswordForm = () => {
    const dispatch = useDispatch()
    const token = useSelector<AppRootStateType, string>(state => state.auth.data.token)

    const from = useSelector<AppRootStateType, string>(state => state.recPass.from)
    const message = useSelector<AppRootStateType, string>(state => state.recPass.message)

    const formik = useFormik({
        initialValues: {
            email: '',
            token: '',
        },
        validate: (values) => {
            const errors: AuthFormikType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(recPassReducerTC(values.email, from, message))
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
                    type="email"
                    className=" "
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Type your Email"
                    autoFocus
                />
                {formik.errors.email && formik.touched.email ?
                    <span style={{color: 'red'}}>{formik.errors.email}</span> : null}
                <div>
                    <button type="submit" disabled={!formik.values.email}>Send instruction</button>
                </div>
            </div>
        </form>
    );
    // const dispatch = useDispatch()
    //
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //     },
    //     onSubmit: values => {
    //         dispatch(recPassReducerTC(values.email))
    //
    //     },
    // });
    // return (
    //     <form onSubmit={formik.handleSubmit}>
    //         <div>
    //             <div>
    //             <label>Forgot your password?</label>
    //             </div>
    //             <input
    //                 id="email"
    //                 name="email"
    //
    //             />
    //             <div>
    //                 <button type="submit">Send instruction</button>
    //             </div>
    //         </div>
    //     </form>
    // );
};