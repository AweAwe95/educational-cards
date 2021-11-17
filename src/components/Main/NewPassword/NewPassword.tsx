import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {newPassReducerTC, recPassReducer, recPassReducerTC} from "../../../redux/recPass-reducer";
import {AuthFormikType} from "../Authorization/AuthorizationForm";
import {AppRootStateType} from "../../../redux/store";
import {Navigate, useParams} from "react-router-dom";
import {log} from "util";

export const NewPassword = () => {
    const dispatch = useDispatch()
    // const token = useSelector<AppRootStateType, string>(state => state.auth.data.token)
    const isPassRec = useSelector<AppRootStateType, boolean>(state => state.recPass.isPasRec)
    const from = useSelector<AppRootStateType, string>(state => state.recPass.from)
    const message = useSelector<AppRootStateType, string>(state => state.recPass.message)
    const params = useParams()
    const serverToken = params.serverToken

    console.log(serverToken)

    const formik = useFormik({
        initialValues: {
            password: '',
            token: '',
        },
        onSubmit: values => {
            dispatch(newPassReducerTC(values.password, serverToken))
        },
    });
    if (isPassRec) {
        return <Navigate to={'/'}/>
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <div>
                    <label>Create new password</label>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className=" "
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Type your Password"
                    autoFocus
                />

                <div>
                    <button type="submit" disabled={!formik.values.password}>Create new password</button>
                </div>
            </div>
        </form>
    );
}