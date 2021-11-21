import {useDispatch, useSelector} from 'react-redux';
import {LoginDataType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {Loader} from "../../Loader/Loader";
import {isAuthorizedTC} from "../../../redux/authorization-reducer";
import {Navigate} from "react-router-dom";

export function Profile() {
    const authData = useSelector<AppRootStateType, LoginDataType>(state => state.authorization.data);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const dispatch = useDispatch()

    const isAuthDataEmpty = (authData: LoginDataType) => {
        for (let key in authData) {
            // если тело цикла начнет выполняться - значит в объекте есть свойства
            return false;
        }
        return true;
    }

    if (isAuthDataEmpty(authData)) {
        dispatch(isAuthorizedTC())
        if (isAuthDataEmpty(authData)) {
            return <Navigate to={'/auth'}/>
        }
    }
    return (
        <div>
            {isLoading && <Loader/>}
            <div>{authData.name}</div>
            <div>{authData.created}</div>
            <div>{authData.updated}</div>
        </div>
    );
}