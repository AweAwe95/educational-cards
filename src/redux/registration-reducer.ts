import {Dispatch} from "redux";
import {api} from "../api/api";
import {setLoaderAC} from "./app-reducer";

const initialState = {
    isReg: false,
    regError: false
}

export const registrationReducer = (state: RegStateType = initialState, action: ActionsType): RegStateType => {
    switch (action.type) {
        case "SIGNUP/REG-USER":
        case "SIGNUP/SET-REG-ERROR": {
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}


export const regUserAC = (isReg: boolean) => ({type: "SIGNUP/REG-USER", payload: {isReg}} as const)
export const setRegErrorAC = (regError: boolean) => ({type: "SIGNUP/SET-REG-ERROR", payload: {regError}} as const)


export const regUserTC = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoaderAC(true))
        api.regUser(email, password)
            .then(() => dispatch(regUserAC(true)))
            .catch(() => dispatch(setRegErrorAC(true)))
            .finally(() => {
                dispatch(regUserAC(false))
                dispatch(setLoaderAC(false))
            })
    }
}


type RegStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof regUserAC>
    | ReturnType<typeof setRegErrorAC>