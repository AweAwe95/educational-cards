import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardsTable} from './CardsTable';
import {CardsTableBody} from './CardsTableBody';
import {getCardsTC} from "../../../redux/cards-reducer";
import {Loader} from "../../Loader/Loader";


export const Cards = () => {
    const dispatch = useDispatch()
    const data = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards);
    const userId = useSelector<AppRootStateType, string | undefined>(state => state.authorization.data._id)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)

    useEffect(() => {
        dispatch(getCardsTC(userId));
    }, [dispatch, userId]);

    return (
        <div>
            {isLoading ? <Loader/> : <CardsTable model={CardsTableBody()} data={data}/>}
        </div>
    );
}