import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LoginDataType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardTable} from "./CardTable";
import {TableCard} from "./TableCard";
import {getCardTC} from "../../../redux/cardPacks-reducer";



export const Cards = () => {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, LoginDataType>(state => state.cardPacks.data);
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