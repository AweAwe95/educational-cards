import {Dispatch} from 'redux';
import {api, GetCardsResponse} from '../api/api';
import {setLoaderAC} from "./app-reducer";

const initialState = {
    cards: [{
        _id: "",
        cardsPack_id: "",
        user_id: "",
        answer: "",
        question: "",
        grade: 0,
        shots: 0,
        comments: "",
        type: "",
        rating: 0,
        more_id: "",
        created: "",
        updated: "",
        __v: 0,
        answerImg: "",
        answerVideo: "",
        questionImg: "",
        questionVideo: "",
    },],
    packUserId: "",
    page: 0,
    pageCount: 0,
    cardsTotalCount: 0,
    minGrade: 0,
    maxGrade: 0,
    token: "",
    tokenDeathTime: 0,
};

export const cardsReducer = (state: GetCardsResponse = initialState, action: CardsActionTypes): GetCardsResponse => {
    switch (action.type) {
        case 'SET-CARDS': {
            return {...state, ...action.data};
        }
        default:
            return state;
    }
};

export const setCardsAC = (data: GetCardsResponse) =>
    ({type: 'SET-CARDS', data} as const);


export const getCardsTC = (cardsPack_id: string | undefined) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoaderAC(true))
        api.getCards(cardsPack_id)
            .then(res => {
                dispatch(setCardsAC(res.data));
            })
            .catch(e => {
                console.log('Error: ' + e.response.data.error || e.message);
            })
            .finally(() => {
            dispatch(setLoaderAC(false))
        })
    };
};
export const createCardTC = (cardsPack_id: string | undefined, newCardName: string) => {
    return (dispatch: any) => {
        dispatch(setLoaderAC(true))
        api.createCard(cardsPack_id, newCardName)
            .then(() => {
                dispatch(getCardsTC(cardsPack_id));
            })
            .catch(e => {
                console.log('Error: ' + e.response.data.error || e.message);
            })
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    };
};
export const deleteCardTC = (cardsPack_id: string | undefined, cardId: string) => {
    return (dispatch: any) => {
        dispatch(setLoaderAC(true))
        api.deleteCard(cardId)
            .then(() => {
                dispatch(getCardsTC(cardsPack_id));
            })
            .catch(e => {
                const error = e.response.data.error
                    ? e.response.data.error
                    : (e.message + 'more details in console');
                console.log('Error: ' + error);
            })
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    };
};
export const updateCardTC = (packsId: string, _id: string, question?: string, comments?: string) => {
    return (dispatch: any) => {
        dispatch(setLoaderAC(true))
        api.updateCard(_id,question,comments)
            .then(() => {
                dispatch(getCardsTC(packsId));
            })
            .catch(e => {
                const error = e.response.data.error
                    ? e.response.data.error
                    : (e.message + 'more details in console');
                console.log('Error: ' + error);
            })
            .finally(() => {
                dispatch(setLoaderAC(false))
            })
    };
};

export type CardsActionTypes = ReturnType<typeof setCardsAC>;
