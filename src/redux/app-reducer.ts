
const initialState = {
    isLoading: false
};

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'APP/SET-LOADING': {
            return {...state, isLoading: action.isLoading};
        }
        default: {
            return state;
        }
    }
};


export const setLoaderAC = (isLoading: boolean) => ({type: 'APP/SET-LOADING', isLoading} as const)

type AppStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof setLoaderAC>

