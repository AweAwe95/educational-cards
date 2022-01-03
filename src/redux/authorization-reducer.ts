import {AuthFormikData} from '../components/Main/Authorization/AuthorizationForm/AuthorizationForm';
import {Dispatch} from 'redux';
import {api, LoginResponse} from '../api/api';
import {setLoaderAC} from "./app-reducer";

const initialState = {
    data: {} as any,
    isLoggedIn: false,
    authError: false
};

export const authorizationReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case 'AUTH/LOGIN':
        case 'AUTH/IS-LOGGED-IN':
        case "AUTH/SET-AUTH-ERROR": {
            return {...state, ...action.payload}
        }
        default: {
            return state;
        }
    }
};


export const loginAC = (data: LoginResponse | {}) => ({type: 'AUTH/LOGIN', payload: {data}} as const)
export const isLoggedInAC = (isLoggedIn: boolean) => ({type: 'AUTH/IS-LOGGED-IN', payload: {isLoggedIn}} as const)
export const setAuthErrorAC = (authError: boolean) => ({type: 'AUTH/SET-AUTH-ERROR', payload: {authError}} as const)

export const loginTC = (data: AuthFormikData) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoaderAC(true))
        api.login(data)
            .then(userData => {
                dispatch(loginAC(userData));
                dispatch(isLoggedInAC(true))
            })
            .catch(() => dispatch(setAuthErrorAC(true)))
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    };
};
export const isAuthorizedTC = () => {
    return (dispatch: Dispatch) => {
        api.isAuthorized()
            .then(response => {
                dispatch(loginAC(response.data))
                dispatch(isLoggedInAC(true))
            })
            .catch(() => dispatch(isLoggedInAC(false)))
    }
}
export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(setLoaderAC(true))
        api.logout()
            .then(() => {
                dispatch(isLoggedInAC(false))
                dispatch(loginAC({}))
            })
            .catch()
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    };
};


type AuthStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof loginAC>
    | ReturnType<typeof isLoggedInAC>
    | ReturnType<typeof setAuthErrorAC>
