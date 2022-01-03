const initialState = {
    cardAnswer: '',
    cardQuestion: '',
    min: 0,
    max: 10000000,
    sortCards: {
        firstNumber: 0,
        secondDescription: ''
    },
    page: 1,
    pageCount: 7,
    cardsTotalCountPage: 0,
    isMyCard: false,
};

export const cardsFilterReducer = (state: CardsFilterReducerStateType = initialState, action: CardsActionsType): CardsFilterReducerStateType => {
    switch (action.type) {
        case 'CARD-FILTER/SET-CARD-ANSWER':
        case 'CARD-FILTER/SET-CARD-QUESTION':
        case 'CARD-FILTER/SET-MIN-GRADE':
        case 'CARD-FILTER/SET-MAX-GRADE':
        case 'CARD-FILTER/SET-PAGE':
        case 'CARD-FILTER/SET-PAGE-COUNT':
        case 'CARD-FILTER/SET-TOTAL-COUNT-PAGE':
        case 'CARD-FILTER/SET-IS-MY-CARD': {
            return {...state, ...action.payload};
        }
        case 'CARD-FILTER/SET-FIRST-NUMBER-SORT':
        case 'CARD-FILTER/SET-SECOND-DESCRIPTION-SORT':{
            return {...state, sortCards: {...state.sortCards, ...action.payload}};
        }
        default: {
            return state;
        }
    }
};

export const setCardAnswer = (answer: string) => {
    return {type: 'CARD-FILTER/SET-CARD-ANSWER', payload: {answer}} as const;
};
export const setCardQuestion = (question: string) => {
    return {type: 'CARD-FILTER/SET-CARD-QUESTION', payload: {question}} as const;
};
export const setMinCardGrade = (min: number) => {
    return {type: 'CARD-FILTER/SET-MIN-GRADE', payload: {min}} as const;
};
export const setMaxCardGrade = (max: number) => {
    return {type: 'CARD-FILTER/SET-MAX-GRADE', payload: {max}} as const;
};
export const setFirstNumberSortCards = (firstNumber: number) => {
    return {type: 'CARD-FILTER/SET-FIRST-NUMBER-SORT', payload: {firstNumber}} as const;
};
export const setSecondDescriptionSortCards = (secondDescription: string) => {
    return {type: 'CARD-FILTER/SET-SECOND-DESCRIPTION-SORT', payload: {secondDescription}} as const;
};
export const setPageCards = (page: number) => {
    return {type: 'CARD-FILTER/SET-PAGE', payload: {page}} as const;
};
export const setPageCountCards = (pageCount: number) => {
    return {type: 'CARD-FILTER/SET-PAGE-COUNT', payload: {pageCount}} as const;
};
export const setTotalCountCardsPage = (cardsTotalCountPage: number) => {
    return {type: 'CARD-FILTER/SET-TOTAL-COUNT-PAGE', payload: {cardsTotalCountPage}} as const;
};
export const setIsMyCard = (isMyCard: boolean) => {
    return {type: 'CARD-FILTER/SET-IS-MY-CARD', payload: {isMyCard}} as const;
};


export type CardsFilterReducerStateType = typeof initialState
type CardsActionsType = ReturnType<typeof setCardAnswer>
    | ReturnType<typeof setCardQuestion>
    | ReturnType<typeof setFirstNumberSortCards>
    | ReturnType<typeof setSecondDescriptionSortCards>
    | ReturnType<typeof setPageCards>
    | ReturnType<typeof setPageCountCards>
    | ReturnType<typeof setTotalCountCardsPage>
    | ReturnType<typeof setMinCardGrade>
    | ReturnType<typeof setMaxCardGrade>
    | ReturnType<typeof setIsMyCard>

