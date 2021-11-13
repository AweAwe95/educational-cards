const initialState = {}

export const recPassReducer = (state: RecPassStateType = initialState, action: ActionsType): RecPassStateType => {
    switch (action.type) {
        case "": {
            return state
        }
        default: {
            return state
        }
    }
}


type RecPassStateType = typeof initialState
type ActionsType = any
