import {Dispatch} from 'redux';
import {api, CardPacksResType} from '../api/api';
import {AppRootStateType} from './store';
import {setTotalCountPage} from './Packs/cards-packs-filter-reducer';
import {setLoaderAC} from './app-reducer';

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

export const cardPacksReducer = (state: CardPacksResType = initialState, action: CardPacksActionTypes): CardPacksResType => {
    switch (action.type) {
        case 'GET-CARD-PACKS': {
            return {...state, ...action.data};
        }
        case 'CURRENT-CARD-PACKS': {
            return {...state, ...action.data};
        }
        case 'DELETE-CARD-PACKS': {
            return {...state, cardPacks: state.cardPacks.filter(cardPack => cardPack._id !== action.id)};
        }
        case 'UPDATE-CARD-PACKS': {
            return {...state, ...action.data};
        }
        default:
            return state;
    }
};

export const getCardPacksAC = (data: CardPacksResType) =>
    ({type: 'GET-CARD-PACKS', data} as const);
export const createCardPacksAC = (data: CardPacksResType) =>
    ({type: 'CURRENT-CARD-PACKS', data} as const);
export const deleteCardPacksAC = (id: string) =>
    ({type: 'DELETE-CARD-PACKS', id} as const);
export const updateCardPacksAC = (data: CardPacksResType) =>
    ({type: 'UPDATE-CARD-PACKS', data} as const);


export const getCardPacksTC = (user_id?: string) => {
    return (dispatch: Dispatch, getState: () => AppRootStateType) => {
        const {packName, min, max, page, pageCount} = getState().cardsPackFilter
        const {firstNumber, secondDescription} = getState().cardsPackFilter.sortPacks
        const sortPacks = firstNumber + secondDescription
        dispatch(setLoaderAC(true))
        const dataForPacksGetRequest = {packName, min, max, page, pageCount, sortPacks, user_id}
        api.getCardPacks(dataForPacksGetRequest)
            .then(res => {
                dispatch(getCardPacksAC(res.data));
                dispatch(setTotalCountPage(res.data.cardPacksTotalCount));
            })
            .catch(e => {
                console.log('Error');
            })
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    };
};
export const createCardsPackTC = (name: string) => {
    return (dispatch: any) => {
        dispatch(setLoaderAC(true))
        api.createCardPacks(name)
            .then((res) => {
                dispatch(getCardPacksTC())
            })
            .catch(e => {
                const error = e.response.data.error
                console.log('Error: ' + error);
            })
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    }
}
export const deleteCardPacksTC = (id: string) => {
    return (dispatch: any) => {
        dispatch(setLoaderAC(true))
        api.deleteCardPacks(id)
            .then((res) => {
                dispatch(getCardPacksTC())
            })
            .catch(e => {
                const error = e.response.data.error
                console.log('Error: ' + error);
            })
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    }
}
export const updateCardPacksTC = (id: string, title: string) => {
    return (dispatch: any) => {
        dispatch(setLoaderAC(true))
        api.updateCardPacks(id,title)
            .then((res) => {
                dispatch(getCardPacksTC())
            })
            .catch(e => {
                const error = e.response.data.error
                console.log('Error: ' + error);
            })
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    }
}

export type CardPacksActionTypes =
    ReturnType<typeof getCardPacksAC> |
    ReturnType<typeof createCardPacksAC> |
    ReturnType<typeof deleteCardPacksAC> |
    ReturnType<typeof updateCardPacksAC>;
