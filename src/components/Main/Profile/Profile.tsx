import {useSelector} from 'react-redux';
import {LoginDataType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {Loader} from "../../Loader/Loader";

export function Profile() {
    const authData = useSelector<AppRootStateType, LoginDataType>(state => state.authorization.data);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)

    return (
        <div>
            {isLoading && <Loader/>}
            <div>{authData.name}</div>
            <div>{authData.created}</div>
            <div>{authData.updated}</div>
        </div>
    );
}