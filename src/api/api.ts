import axios from "axios";
import { AuthFormikType } from "../components/Main/Authorization/AuthorizationForm";

export type LoginDataType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
}

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})

export const api = {
    regUser(email: string, password: string) {
        return instance.post('/auth/register', {email,password})
    },
    emailUser(email: string) {
        return instance.post('/auth/forgot', {email})
    },
    login(data: AuthFormikType) {
        return instance.post<LoginDataType>('/auth/login', {...data})
            .then(res => {
                return res.data
            })
    }
}