import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardPackType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardPacksTable} from "./CardPacksTable";
import {TableCard} from "./TableCard";
import {addCardPacksTC, deleteCardPacksTC, getCardPacksTC} from "../../../redux/cardPacks-reducer";
import {Loader} from "../../Loader/Loader";




export const CardPacks = () => {
    const dispatch = useDispatch();
    const [newNamePacks, setNewNamePacks] = useState<string>('')
    const data = useSelector<AppRootStateType, CardPackType[]>(state => state.cardPacks.cardPacks);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    console.log(data);

    useEffect(() => {
        const thunk = getCardPacksTC()
        dispatch(thunk)
    }, [])

    const addCardPacks = useCallback((name: string) => {
        const thunk = addCardPacksTC(name)
        dispatch(thunk)
    }, [dispatch])

    const deleteCardPacks = useCallback(function (id: string) {
        const thunk = deleteCardPacksTC(id)
        dispatch(thunk)
    }, [])

    return (
        <div>
            <TableCard model={CardPacksTable()} data={data} />
            {isLoading && <Loader/>}
        </div>
    );
}