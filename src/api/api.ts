import axios from 'axios';
import {AuthFormikData} from '../components/Main/Authorization/AuthorizationForm/AuthorizationForm';


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});

export const api = {
    regUser(email: string, password: string) {
        return instance.post<RegUserResponse>('auth/register', {email, password});
    },
    emailUser(email: string, from: string, message: string) {
        return instance.post<EmailUserResponse>('auth/forgot', {email, from, message});
    },
    resetUser(password: string, resetPasswordToken: string | undefined) {
        return instance.post<ResetUserResponse>('auth/set-new-password', {password, resetPasswordToken});
    },
    login(data: AuthFormikData) {
        return instance.post<LoginResponse>('auth/login', {...data})
            .then(res => {
                return res.data;
            });
    },
    isAuthorized() {
        return instance.post<IsAuthorizedResponse>('auth/me', {});
    },
    logout() {
        return instance.delete<LogoutResponse>('auth/me', {});
    },
    getCardPacks(getCardPacksRequestData: GetCardPacksRequestData) {
        return instance.get<GetCardPacksResponse>('cards/pack', {
            params: getCardPacksRequestData
        });
    },
    createCardPack(name: string) {
        return instance.post<ChangeCardPackResponse>('cards/pack', {cardsPack: {name}});
    },
    deleteCardPack(id: string) {
        return instance.delete<ChangeCardPackResponse>(`cards/pack/?id=${id}`);
    },
    updateCardPack(_id: string, name: string) {
        return instance.put<ChangeCardPackResponse>(`cards/pack`, {cardsPack: {_id, name}});
    },
    getCards(cardsPack_id: string | undefined) {
        return instance.get<GetCardsResponse>(`cards/card/?cardsPack_id=${cardsPack_id}`);
    },
    createCard(cardsPack_id: string | undefined, question: string) {
        return instance.post<CreateCardResponse>(`cards/card`, {card: {cardsPack_id, question}});
    },
    deleteCard(cardId: string) {
        return instance.delete<DeleteCardResponse>(`cards/card/?id=${cardId}`);
    },
    updateCard(_id: string, question?: string, comments?: string) {
        return instance.put<UpdateCardResponse>(`cards/card`, {card: {_id, question, comments}});
    }
};


type RegUserResponse = {
    addedUser: {
        _id: string
        email: string
        rememberMe: boolean
        isAdmin: boolean
        name: string
        verified: boolean
        publicCardPacksCount: number
        created: string
        updated: string
        __v: number
    }
}
type EmailUserResponse = {
    info: string
    success: boolean
    answer: boolean
    html: false
}
type ResetUserResponse = {
    info: string
}
export type LoginResponse = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
}
type IsAuthorizedResponse = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
}
type LogoutResponse = {
    info: string
}
export type GetCardPacksResponse = {
    cardPacks: CardsPack[]
    page: number
    pageCount: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number
    token: string
    tokenDeathTime: number
}
type ChangeCardPackResponse = {
    newCardsPack: CardsPack
    token: string
    tokenDeathTime: number
}
export type GetCardsResponse = {
    cards: Card[]
    packUserId: string
    page: number
    pageCount: number
    cardsTotalCount: number
    minGrade: number
    maxGrade: number
    token: string
    tokenDeathTime: number
}
type CreateCardResponse = {
    newCard: Card,
    token: string
    tokenDeathTime: number
}
type DeleteCardResponse = {
    deletedCard: Card
    token: string
    tokenDeathTime: number
}
type UpdateCardResponse = {
    updatedCard: Card
    token: string
    tokenDeathTime: number
}
export type CardsPack = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
    more_id: string
    __v: number
}
export type Card = {
    _id: string
    cardsPack_id: string
    user_id: string
    answer: string
    question: string
    grade: number
    shots: number
    comments: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    __v: number
    answerImg: string
    answerVideo: string
    questionImg: string
    questionVideo: string
}
export type GetCardPacksRequestData = {
    packName: string
    min: number
    max: number
    page: number
    pageCount: number
    sortPacks: string
    user_id?: string
}