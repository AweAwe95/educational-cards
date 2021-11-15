import {useSelector} from 'react-redux';
import {LoginDataType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';

export function Profile() {

    const data = useSelector<AppRootStateType, LoginDataType>(state => state.auth.data);
    console.log(data);

    return (
        <div>
            <div>{data.name}</div>
            <div>{data.created}</div>
            <div>{data.updated}</div>
        </div>
    );
}