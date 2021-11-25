import {Dispatch} from 'redux';
import {api, CardPacksResType} from '../api/api';

const initialState = {
    cardPacks: [{
        _id: '',
        user_id: '',
        name: '',
        cardsCount: 0,
        created: '',
        updated: '',
        user_name: '',
    }],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 15,
};

export const cardPacksReducer = (state: CardPacksResType = initialState, action: CardStateType): CardPacksResType => {
    switch (action.type) {
        case 'SET_CARD_PACKS': {
            return {...state, ...action.data};
        }
        default:
            return state;
    }
};

export const setCardPacksAC = (data: CardPacksResType) =>
    ({type: 'SET_CARD_PACKS', data} as const);


export const getCardTC = () => {
    return (dispatch: Dispatch) => {
        // @ts-ignore
        api.getCard()
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


export type CardPacksActionTypes = ReturnType<typeof setCardPacksAC>;
type CardStateType = CardPacksActionTypes
