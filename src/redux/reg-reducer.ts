import {Dispatch} from "redux";
import {regApi} from "../api/reg-api";

const initialState = {
    isRegistered: false,
    regError: false
}

export const regReducer = (state: RegStateType = initialState, action: ActionsType): RegStateType => {
    switch (action.type) {
        case "REG-USER": {
            return {...state, isRegistered: action.isRegistered}
        }
        case "SET-REG-ERROR": {
            return {...state, regError: action.regError}
        }
        default: {
            return state
        }
    }
}

type RegStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof regUserAC>
    | ReturnType<typeof setRegErrorAC>

export const regUserAC = (isRegistered: boolean) => ({type: 'REG-USER', isRegistered} as const)
export const setRegErrorAC = (regError: boolean) => ({type: 'SET-REG-ERROR', regError} as const)

export const regUserTC = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        regApi.regUser(email, password)
            .then(() => dispatch(regUserAC(true)))
            .catch(() => dispatch(setRegErrorAC(true)))
            .finally(() => dispatch(regUserAC(false))
            )
    }
}