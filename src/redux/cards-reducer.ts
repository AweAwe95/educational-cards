import {Dispatch} from 'redux';
import {api, CardsResType} from '../api/api';

const initialState = {
    cards: [{
        answer: "",
        question: "",
        cardsPack_id: "",
        grade: 0,
        comments: "",
        created: "",
        updated: "",
        more_id: "",
        rating: 0,
        shots: 0,
        type: "",
        user_id: "",
        __v: 0,
        _id: ""
    }],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 1,
    pageCount: 0,
    packUserId: 0,
    token: "",
    tokenDeathTime: 15
};

export const cardsReducer = (state: CardsResType = initialState, action: CardsActionTypes): CardsResType => {
    switch (action.type) {
        case 'SET-CARDS': {
            return {...state, ...action.data};
        }
        default:
            return state;
    }
};

export const setCardsAC = (data: CardsResType) =>
    ({type: 'SET-CARDS', data} as const);


export const getCardsTC = (id: string) => {
    return (dispatch: Dispatch) => {
        // @ts-ignore
        api.getCards(id)
            .then(res => {
                console.dir(res);
                dispatch(setCardsAC(res.data));
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


export type CardsActionTypes = ReturnType<typeof setCardsAC>;
