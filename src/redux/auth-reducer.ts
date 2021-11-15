import {AuthFormikType} from '../components/Main/Authorization/AuthorizationForm';
import {Dispatch} from 'redux';
import {LoginDataType, api} from '../api/api';

const initialState = {
    // data: {
    //     created: '',
    //     email: '',
    //     isAdmin: false,
    //     name: '',
    //     publicCardPacksCount: 0,
    //     rememberMe: false,
    //     token: '',
    //     tokenDeathTime: 0,
    //     updated: '',
    //     verified: false,
    //     __v: 0,
    //     _id: '',
    // },
    data: {} as LoginDataType,
    isLoggedIn: false,
};

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
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
        default: {
            return state;
        }
    }
};

export const loginAC = (data: LoginDataType) => {
    return {
        type: 'AUTH/LOGIN',
        data
    } as const
};

export const isLoggedInAC = (isLoggedIn: boolean) => {
    return {
        type: 'AUTH/IS-LOGGED-IN',
        isLoggedIn
    } as const
};

export const loginTC = (data: AuthFormikType) => {
    return (dispatch: Dispatch) => {
        api.login(data)
            .then(userData => {
                dispatch(loginAC(userData));
                dispatch(isLoggedInAC(true))
            })
            .catch(e => {
                // console.log('Error: ' + e.response.data.error || e.message);
                const error = e.response.data.error
                    ? e.response.data.error
                    : (e.message + 'more details in console');
                console.log('Error: ' + error);
            });
    };
};

type AuthStateType = typeof initialState
type ActionsType = ReturnType<typeof loginAC> |
    ReturnType<typeof isLoggedInAC>
