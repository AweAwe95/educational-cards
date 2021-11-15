import {Dispatch} from "redux";
import {api} from "../api/api";


const initialState = {"email":""}

export const recPassReducer = (state: RecPassStateType = initialState, action: ActionsType): RecPassStateType => {
    switch (action.type) {
        case "REC-PASS-REDUCER": {
            return {...state, email: action.email}
        }
        default: {
            return state
        }
    }
}



type RecPassStateType = typeof initialState
type ActionsType = ReturnType<typeof recPassReducerAC>

export const recPassReducerAC = (email: any) => ({type: "REC-PASS-REDUCER", email} as const)


export const recPassReducerTC = (email: string) => {
    return (dispatch: Dispatch) => {
        api.emailUser(email)
            .then((res) => {
                dispatch(recPassReducerAC(res.data))
            })
    }
}
