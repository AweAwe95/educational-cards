import {Dispatch} from 'redux';
import {LoginDataType, api, CardPacksType} from '../api/api';

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
};

export const cardPacksReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case 'SET_CARD_PACKS': {
            return { ...state, ...action.data };
        }
        default:
            return state;
    }
};

export const setCardPacksAC = (data: CardPacksType) =>
    ({ type: 'SET_CARD_PACKS', data } as const);


export const getCardTC = () => {
    return (dispatch: Dispatch) => {
        api.card()
            .then(res => {
                console.dir(res);
                dispatch(setCardPacksAC(res.data));
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


export type ActionsType = ReturnType<typeof setCardPacksAC>;
type AuthStateType = typeof initialState
