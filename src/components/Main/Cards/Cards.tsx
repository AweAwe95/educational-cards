import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardPackType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardTable} from "./CardTable";
import {TableCard} from "../CardPacks/TableCard";
import {getCardTC} from '../../../redux/cards-reducer';


export const Cards = () => {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, CardPackType[]>(state => state.cardPacks.cardPacks);
    console.log(data);

    const getCard = () => {
        dispatch(getCardTC());
    }

    return (
        <div>
            <TableCard model={CardTable()} data={data}/>
        </div>
    );
}