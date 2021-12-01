import React, {memo} from "react";
import s from "./Modal.module.css"
import {useParams} from "react-router-dom";
import SuperButton from "../button/SuperButton";
import SuperInputText from "../input/SuperInputText";

type ModalPropsType = {
    nameButtonOne?: string
    nameButtonTwo?: string
    onClickButtonOne?: () => void
    onClickButtonTwo?: () => void
    boxClass?: string
}

export const Modal: React.FC<ModalPropsType> = ({
                                                    nameButtonOne,
                                                    nameButtonTwo,
                                                    onClickButtonOne,
                                                    onClickButtonTwo,
                                                }) => {

    const {email} = useParams<string>()
    return (
        <div className={s.overlay}>
        <div className={s.form}>
            <div>
                <h1 >Check Email</h1>
                <span>We’ve sent an Email with instructions to {email}</span>
                <SuperInputText name={'Sasha'}/>
                <div className={s.buttons}>
                    <SuperButton onClick={onClickButtonOne} name={nameButtonOne}/>
                    <SuperButton onClick={onClickButtonTwo} name={nameButtonTwo}/>
                </div>
            </div>
        </div>
        </div>
    )
}