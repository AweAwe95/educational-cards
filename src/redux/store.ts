import {authReducer} from "./auth-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {recPassReducer} from "./recPass-reducer";
import {regReducer} from "./reg-reducer";
import {cardPacksReducer} from "./cardPacks-reducer";
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    recPass: recPassReducer,
    reg: regReducer,
    cardPacks: cardPacksReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch