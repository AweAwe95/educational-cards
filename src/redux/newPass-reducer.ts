const initialState = {}

export const newPassReducer = (state: NewPassStateType = initialState, action: ActionsType): NewPassStateType => {
    switch (action.type) {
        case "": {
            return state
        }
        default: {
            return state
        }
    }
}


type NewPassStateType = typeof initialState
type ActionsType = any
