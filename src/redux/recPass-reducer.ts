import {Dispatch} from "redux";
import {api} from "../api/api";


const initialState = {
    email: "",
    isPasRec: false,
    from: "ai73a@yandex.by",
    message: `<div style="background-color: lime; padding: 15px"> password recovery link: <a href='http://localhost:3000/new-password/$token$'> link</a></div>`
}

export const recPassReducer = (state: RecPassStateType = initialState, action: ActionsType): RecPassStateType => {
    switch (action.type) {
        case "REC-PASS-REDUCER": {
            return {...state, email: action.email}
        }
        case "IS-PASS-REC-REDUCER": {
            return {...state, isPasRec: action.isPasRec}
        }
        default: {
            return state
        }
    }
}


type RecPassStateType = typeof initialState
type ActionsType = ReturnType<typeof recPassReducerAC> | ReturnType<typeof isPassRecReducerAC>

export const recPassReducerAC = (email: string) => ({type: "REC-PASS-REDUCER", email} as const)
export const isPassRecReducerAC = (isPasRec: boolean) => ({type: "IS-PASS-REC-REDUCER", isPasRec} as const)


export const recPassReducerTC = (email: string, from: string, message: string) => {
    return (dispatch: Dispatch) => {
        api.emailUser(email, from, message)
            .then()
    }
}

export const newPassReducerTC = (password: string, resetPasswordToken: string | undefined) => {
    return (dispatch: Dispatch) => {
        api.resetUser(password, resetPasswordToken)
            .then((res) => {
                dispatch(isPassRecReducerAC(true))
            }).finally(() => dispatch(isPassRecReducerAC(false)))
    }
}

