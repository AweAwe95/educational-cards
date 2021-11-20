import React from "react";
import {AuthorizationForm} from './AuthorizationForm/AuthorizationForm';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {Navigate} from 'react-router-dom';
import './Authorization.css'

export function Authorization() {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.authorization.isLoggedIn);

    if (isLoggedIn) {
        return <Navigate to={'/'}/>;
    }

    return (
        <div className={'authorizationContainer'}>
            <AuthorizationForm/>
        </div>
    );
}
