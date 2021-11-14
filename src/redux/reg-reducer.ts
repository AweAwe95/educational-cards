import {Dispatch} from "redux";
import {regApi} from "../api/reg-api";

const initialState = {}

export const regReducer = (state: RegStateType = initialState, action: ActionsType): RegStateType => {
    switch (action.type) {
        case "REG-USER": {
            return {...state, addedUser: action.addedUser}
        }
        default: {
            return state
        }
    }
}

type RegStateType = typeof initialState
type ActionsType = ReturnType<typeof regUserAC>

export const regUserAC = (addedUser: any) => ({type: 'REG-USER', addedUser} as const)


export const regUserTC = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        regApi.regUser(email, password)
            .then((res) => {
                dispatch(regUserAC(res.data))
            })
    }
}