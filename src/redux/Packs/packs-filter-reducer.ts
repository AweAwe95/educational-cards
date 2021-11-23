import {Dispatch} from 'redux';

const initialState = {
    packName: '',
    min: 1,
    max: 10,
    sortPacks: {
        firstNumber: 0,
        secondDescription: {} as SecondDescriptionType
    },
    page: 1,
    pageCount: 4,
    currentPage: 1,
    totalCountPage: 108,
};

export const packsFilterReducer = (state: PacksFilterReducerStateType = initialState, action: ActionsType): PacksFilterReducerStateType => {
    switch (action.type) {
        case 'PACK-FILTER/SET-PACKNAME': {
            return {...state, packName: action.packName};
        }
        case 'PACK-FILTER/SET-MINCARDS': {
            return {...state, min: action.minCards};
        }
        case 'PACK-FILTER/SET-MAXCARDS': {
            return {...state, max: action.maxCards};
        }
        case 'PACK-FILTER/SET-FIRST-NUMBER-SORT': {
            return {...state, sortPacks: {...state.sortPacks, firstNumber: action.firstNumber}};
        }
        case 'PACK-FILTER/SET-SECOND-DESCRIPTION-SORT': {
            return {...state, sortPacks: {...state.sortPacks, secondDescription: action.secondDescription}};
        }
        case 'PACK-FILTER/SET-PAGE': {
            return {...state, page: action.page};
        }
        case 'PACK-FILTER/SET-PAGE-COUNT': {
            return {...state, pageCount: action.pageCount};
        }
        case 'PACK-FILTER/SET-CURRENT-PAGE': {
            return {...state,  currentPage: action.currentPageCount};
        }
        case 'PACK-FILTER/SET-TOTAL-COUNT-PAGE': {
            return {...state,  totalCountPage: action.totalCountPage};
        }
        default: {
            return state;
        }
    }
};

export const setPackName = (packName: string) => {
    return {
        type: 'PACK-FILTER/SET-PACKNAME',
        packName
    } as const;
};
export const setMinCardsInPack = (minCards: number) => {
    return {
        type: 'PACK-FILTER/SET-MINCARDS',
        minCards
    } as const;
};
export const setMaxCardsInPack = (maxCards: number) => {
    return {
        type: 'PACK-FILTER/SET-MAXCARDS',
        maxCards
    } as const;
};
export const setFirstNumberSort = (firstNumber: number) => {
    return {
        type: 'PACK-FILTER/SET-FIRST-NUMBER-SORT',
        firstNumber
    } as const;
};
export const setSecondDescriptionSort = (secondDescription: SecondDescriptionType) => {
    return {
        type: 'PACK-FILTER/SET-SECOND-DESCRIPTION-SORT',
        secondDescription
    } as const;
};
export const setPage = (page: number) => {
    return {
        type: 'PACK-FILTER/SET-PAGE',
        page
    } as const;
};
export const setPageCount = (pageCount: number) => {
    return {
        type: 'PACK-FILTER/SET-PAGE-COUNT',
        pageCount
    } as const;
};
export const setCurrentPage = (currentPageCount: number) => {
    return {
        type: 'PACK-FILTER/SET-CURRENT-PAGE',
        currentPageCount
    } as const;
};
export const setTotalCountPage = (totalCountPage: number) => {
    return {
        type: 'PACK-FILTER/SET-TOTAL-COUNT-PAGE',
        totalCountPage
    } as const;
};


export const loginTC = () => {
    return (dispatch: Dispatch) => {
    };
};

export type PacksFilterReducerStateType = typeof initialState
type ActionsType = ReturnType<typeof setPackName>
    | ReturnType<typeof setMinCardsInPack>
    | ReturnType<typeof setMaxCardsInPack>
    | ReturnType<typeof setFirstNumberSort>
    | ReturnType<typeof setSecondDescriptionSort>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setPageCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCountPage>


export type SecondDescriptionType = 'cardPacks'
    | 'cardPacksTotalCount'
    | 'maxCardsCount'
    | 'minCardsCount'
    | 'page'
    | 'pageCount'