import React from 'react';
import {useSelector} from 'react-redux';
import {CardPackType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardTable} from './CardTable';
import {TableCard} from '../CardPacks/TableCard';


export const Cards = () => {
    const data = useSelector<AppRootStateType, CardPackType[]>(state => state.cardPacks.cardPacks);
    console.log(data);

    return (
        <div>
            <TableCard model={CardTable()} data={data}/>
        </div>
    );
}