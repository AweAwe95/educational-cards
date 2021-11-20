import {authorizationReducer} from "./authorization-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {recoveryPasswordReducer} from "./recoveryPassword-reducer";
import {registrationReducer} from "./registration-reducer";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    authorization: authorizationReducer,
    profile: profileReducer,
    recoveryPassword: recoveryPasswordReducer,
    registration: registrationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch