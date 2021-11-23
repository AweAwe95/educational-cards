import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardPackType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardTable} from "./CardTable";
import {TableCard} from "./TableCard";
import {getCardTC} from "../../../redux/cardPacks-reducer";



export const Cards = () => {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, CardPackType[]>(state => state.cardPacks.cardPacks);
    console.log(data);

    const getCard = () => {
        dispatch(getCardTC());
    }

    return (
        <div>
           <button type="button" onClick={getCard}>
               GET
           </button>
            <TableCard model={CardTable()} data={data} />
        </div>
    );
}