import {AuthorizationForm} from './AuthorizationForm';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {Navigate} from 'react-router-dom';

export function Authorization() {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return <Navigate to={'/'}/>;
    }

    return (
        <div>
            <AuthorizationForm/>
        </div>
    );
}
