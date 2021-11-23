import {Dispatch} from 'redux';

const initialState = {
    packName: '',
    min: 1,
    max: 10,
    sortPacks: '',
    page: 1,

};

// export const packsFilterReducer = (state: packsFilterReducerStateType = initialState, /*action: ActionsType*/): packsFilterReducerStateType => {
//     switch (action.type) {
//         case 'AUTH/LOGIN': {
//             return {
//                 ...state,
//                 data: action.data
//             };
//         }
//         case 'AUTH/IS-LOGGED-IN': {
//             return {
//                 ...state,
//                 isLoggedIn: action.isLoggedIn
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// };

// export const loginAC = (data: LoginDataType) => {
//     return {
//         type: 'AUTH/LOGIN',
//         data
//     } as const;
// };

export const isLoggedInAC = (isLoggedIn: boolean) => {
    return {
        type: 'AUTH/IS-LOGGED-IN',
        isLoggedIn
    } as const;
};

export const loginTC = () => {
    return (dispatch: Dispatch) => {
    };
};

type packsFilterReducerStateType = typeof initialState
// type ActionsType =
