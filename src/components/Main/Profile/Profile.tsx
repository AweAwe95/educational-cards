import {useSelector} from 'react-redux';
import {LoginDataType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {Loader} from "../../Loader/Loader";
import {ModalCheckEmail} from "../RecoveryPassword/ModalCheckEmail";
import {Modal} from "../../common/modal/Modal";

export function Profile() {
    const authData = useSelector<AppRootStateType, LoginDataType>(state => state.authorization.data);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)

    return (
        <div>
            <ModalCheckEmail/>
            <Modal nameButtonOne={"Cancel"} nameButtonTwo={"Save"}/>
            {/*{isLoading && <Loader/>}*/}
            {/*<div>{authData.name}</div>*/}
            {/*<div>{authData.created}</div>*/}
            {/*<div>{authData.updated}</div>*/}
        </div>
    );
}