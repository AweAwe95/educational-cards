import {Dispatch} from 'redux';
import {api, CardPacksResType} from '../api/api';
import {AppRootStateType} from './store';
import {setTotalCountPage} from './Packs/packs-filter-reducer';

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
export const deleteCardPacksAC = (id: string) =>
    ({type: 'DELETE_CARD_PACKS', id} as const);
export const updateCardPacksAC = (data: CardPacksResType) =>
    ({type: 'UPDATE_CARD_PACKS', data} as const);


export const getCardPacksTC = () => {
    return (dispatch: Dispatch, getState: () => AppRootStateType) => {
        const {packName, min, max, page, pageCount} = getState().packFilter
        const {firstNumber, secondDescription} = getState().packFilter.sortPacks
        const sortPacks = firstNumber + secondDescription
        console.log(sortPacks);
        api.getCardPacks(packName, min, max, page, pageCount, sortPacks)
            .then(res => {
                console.dir(res);
                dispatch(getCardPacksAC(res.data));
                dispatch(setTotalCountPage(res.data.cardPacksTotalCount));
            })
            .catch(e => {
                console.log('Error');
            });
    };
};
export const addCardPacksTC = (name: string) => {
    return (dispatch: any) => {
        api.createCardPacks(name)
            .then((res) => {
                // dispatch(createCardPacksAC(res.data))
                dispatch(getCardPacksTC())
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
                dispatch(deleteCardPacksAC(id))
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
