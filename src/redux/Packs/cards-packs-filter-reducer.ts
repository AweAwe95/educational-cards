const initialState = {
    packName: '',
    min: 0,
    max: 10000000,
    sortPacks: {
        firstNumber: 0,
        secondDescription: ''
    },
    page: 1,
    pageCount: 20,
    totalCountPage: 0,
    isMyCardsPacks: false,
};

export const cardsPacksFilterReducer = (state: PacksFilterReducerStateType = initialState, action: ActionsType): PacksFilterReducerStateType => {
    switch (action.type) {
        case 'PACK-FILTER/SET-PACKNAME':
        case 'PACK-FILTER/SET-MINCARDS':
        case 'PACK-FILTER/SET-MAXCARDS':
        case 'PACK-FILTER/SET-PAGE':
        case 'PACK-FILTER/SET-PAGE-COUNT':
        case 'PACK-FILTER/SET-TOTAL-COUNT-PAGE':
        case 'PACK-FILTER/SET-IS-MY-CARDSPACKS': {
            return {...state, ...action.payload};
        }
        case 'PACK-FILTER/SET-FIRST-NUMBER-SORT':
        case 'PACK-FILTER/SET-SECOND-DESCRIPTION-SORT': {
            return {...state, sortPacks: {...state.sortPacks, ...action.payload}};
        }
        default: {
            return state;
        }
    }
};

export const setPackName = (packName: string) => {
    return {type: 'PACK-FILTER/SET-PACKNAME', payload: {packName}} as const;
};
export const setMinCardsInPack = (minCards: number) => {
    return {type: 'PACK-FILTER/SET-MINCARDS', payload: {minCards}} as const;
};
export const setMaxCardsInPack = (maxCards: number) => {
    return {type: 'PACK-FILTER/SET-MAXCARDS', payload: {maxCards}} as const;
};
export const setFirstNumberSort = (firstNumber: number) => {
    return {type: 'PACK-FILTER/SET-FIRST-NUMBER-SORT', payload: {firstNumber}} as const;
};
export const setSecondDescriptionSort = (secondDescription: string) => {
    return {type: 'PACK-FILTER/SET-SECOND-DESCRIPTION-SORT', payload: {secondDescription}} as const;
};
export const setPage = (page: number) => {
    return {type: 'PACK-FILTER/SET-PAGE', payload: {page}} as const;
};
export const setPageCount = (pageCount: number) => {
    return {type: 'PACK-FILTER/SET-PAGE-COUNT', payload: {pageCount}} as const;
};
export const setTotalCountPage = (totalCountPage: number) => {
    return {type: 'PACK-FILTER/SET-TOTAL-COUNT-PAGE', payload: {totalCountPage}} as const;
};
export const setIsMyCardsPacks = (isMyCardsPacks: boolean) => {
    return {type: 'PACK-FILTER/SET-IS-MY-CARDSPACKS', payload: {isMyCardsPacks}} as const;
};


export type PacksFilterReducerStateType = typeof initialState
type ActionsType = ReturnType<typeof setPackName>
    | ReturnType<typeof setMinCardsInPack>
    | ReturnType<typeof setMaxCardsInPack>
    | ReturnType<typeof setFirstNumberSort>
    | ReturnType<typeof setSecondDescriptionSort>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setPageCount>
    | ReturnType<typeof setTotalCountPage>
    | ReturnType<typeof setIsMyCardsPacks>

