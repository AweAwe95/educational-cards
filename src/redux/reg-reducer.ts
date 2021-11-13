const initialState = {}

export const regReducer = (state: RegStateType = initialState, action: ActionsType): RegStateType => {
    switch (action.type) {
        case "": {
            return state
        }
        default: {
            return state
        }
    }
}


type RegStateType = typeof initialState
type ActionsType = any
