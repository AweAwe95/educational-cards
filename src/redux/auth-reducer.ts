const initialState = {}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case "": {
            return state
        }
        default: {
            return state
        }
    }
}


type AuthStateType = typeof initialState
type ActionsType = any
