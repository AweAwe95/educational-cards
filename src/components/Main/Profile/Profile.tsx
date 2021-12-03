import {useSelector} from 'react-redux';
import {LoginDataType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {Loader} from "../../Loader/Loader";
import {AddPackModal} from "../../common/notifications/modals/addPackModal/addPackModal";
import {useState} from "react";
import SuperButton from "../../common/button/SuperButton";
import {ModalCheckEmail} from "../RecoveryPassword/ModalCheckEmail";
// import {Modal} from "../../common/notifications/modals/modal/Modal";
import "./Profile.css"
import {DeleteModal} from "../../common/notifications/modals/deleteModal/deleteModal";
import {UpdatePackModal} from "../../common/notifications/modals/updatePackModal/updatePackModal";

export function Profile() {
    const authData = useSelector<AppRootStateType, LoginDataType>(state => state.authorization.data);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const [open, setOpen] = useState(false)


    return (
        <div className={"profileContainer"}>

            {/*<AddPackModal*/}
            {/*    message="Create new pack of cards"*/}
            {/*    isOpen={open}*/}
            {/*    setOpen={setOpen}*/}
            {/*    onClose={() => setOpen(false)}*/}
            {/*/> */}
            <DeleteModal
                message="Create new pack of cards"
                isOpen={open}
                onClose={() => setOpen(false)}
            />
            <UpdatePackModal
                message="Create new pack of cards"
                isOpen={open}
                onClose={() => setOpen(false)}
                onEdit={() => setOpen(false)}
            />
            <SuperButton onClick={() => setOpen(true)
            }>add new pack</SuperButton>


            {/*{isLoading && <Loader/>}*/}
            {/*<div>{authData.name}</div>*/}
            {/*<div>{authData.created}</div>*/}
            {/*<div>{authData.updated}</div>*/}
        </div>
    );
}