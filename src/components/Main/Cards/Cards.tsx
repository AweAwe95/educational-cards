import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import { CardsTable } from './CardsTable';
import {CardsTableBody} from './CardsTableBody';
import {getCardsTC} from "../../../redux/cards-reducer";


export const Cards = () => {
    const dispatch = useDispatch()
    const data = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards);

    useEffect(() => {
        dispatch(getCardsTC(""));
    }, []);

    return (
        <div>
            <CardsTable model={CardsTableBody()} data={data}/>
        </div>
    );
}