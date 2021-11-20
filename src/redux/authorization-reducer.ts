import {AuthFormikType} from '../components/Main/Authorization/AuthorizationForm/AuthorizationForm';
import {Dispatch} from 'redux';
import {LoginDataType, api} from '../api/api';

const initialState = {
    data: {
        created: '',
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        tokenDeathTime: 0,
        updated: '',
        verified: false,
        __v: 0,
        _id: '',
    },
    isLoggedIn: false,
    authError: false
};

export const authorizationReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case 'AUTH/LOGIN': {
            return {
                ...state,
                data: action.data
            };
        }
        case 'AUTH/IS-LOGGED-IN': {
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            };
        }
        case "AUTH/SET-AUTH-ERROR": {
            return {...state, authError: action.authError}
        }
        default: {
            return state;
        }
    }
};


export const loginAC = (data: LoginDataType) => ({type: 'AUTH/LOGIN', data} as const)
export const isLoggedInAC = (isLoggedIn: boolean) => ({type: 'AUTH/IS-LOGGED-IN', isLoggedIn} as const)
export const setAuthErrorAC = (authError: boolean) => ({type: 'AUTH/SET-AUTH-ERROR', authError} as const)

export const loginTC = (data: AuthFormikType) => {
    return (dispatch: Dispatch) => {
        api.login(data)
            .then(userData => {
                dispatch(loginAC(userData));
                dispatch(isLoggedInAC(true))
            })
            .catch(() => dispatch(setAuthErrorAC(true)));
    };
};


type AuthStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof loginAC>
    | ReturnType<typeof isLoggedInAC>
    | ReturnType<typeof setAuthErrorAC>
