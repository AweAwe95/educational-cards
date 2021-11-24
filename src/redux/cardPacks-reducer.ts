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
        case 'GET_CARD_PACKS': {
            return {...state, ...action.data};
        }
        case 'CURRENT_CARD_PACKS': {
            return {...state, ...action.data};
        }
        case 'DELETE_CARD_PACKS': {
            // @ts-ignore
            return {...state, cardPacks: state.cardPacks.filter(cardPack => cardPack._id !== action.id)};
        }
        case 'UPDATE_CARD_PACKS': {
            return {...state, ...action.data};
        }
        default:
            return state;
    }
};

export const getCardPacksAC = (data: CardPacksResType) =>
    ({type: 'GET_CARD_PACKS', data} as const);
export const createCardPacksAC = (data: CardPacksResType) =>
    ({type: 'CURRENT_CARD_PACKS', data} as const);
export const deleteCardPacksAC = (id: CardPacksResType) =>
    ({type: 'DELETE_CARD_PACKS', id} as const);
export const updateCardPacksAC = (data: CardPacksResType) =>
    ({type: 'UPDATE_CARD_PACKS', data} as const);


export const getCardPacksTC = () => {
    return (dispatch: Dispatch) => {
        // let {pageCount} = getState().cardPacks
        api.getCardPacks()
            .then(res => {
                dispatch(getCardPacksAC(res.data));
            })
            .catch(e => {
                const error = e.response.data.error
                console.log('Error: ' + error);
            })
    };
};
export const addCardPacksTC = (name: string) => {
    return (dispatch: Dispatch) => {
        api.createCardPacks(name)
            .then((res) => {
                dispatch(createCardPacksAC(res.data))
            })
            .catch(e => {
                const error = e.response.data.error
                console.log('Error: ' + error);
            });
    }
}
export const deleteCardPacksTC = (id: string) => {
    return (dispatch: Dispatch) => {
        api.deleteCardPacks(id)
            .then((res) => {
                dispatch(deleteCardPacksAC(res.data))
            })
            .catch(e => {
                const error = e.response.data.error
                console.log('Error: ' + error);
            });
    }
}


export type CardPacksActionTypes =
    ReturnType<typeof getCardPacksAC> |
    ReturnType<typeof createCardPacksAC> |
    ReturnType<typeof deleteCardPacksAC> |
    ReturnType<typeof updateCardPacksAC>;
type CardStateType = CardPacksActionTypes
