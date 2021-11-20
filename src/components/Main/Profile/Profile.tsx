import {useSelector} from 'react-redux';
import {LoginDataType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';

export function Profile() {
    const authData = useSelector<AppRootStateType, LoginDataType>(state => state.authorization.data);

    return (
        <div>
            <div>{authData.name}</div>
            <div>{authData.created}</div>
            <div>{authData.updated}</div>
        </div>
    );
}