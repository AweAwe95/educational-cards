import {ITableModel} from './TableCard';
import {IncreaseDecreaseFilterContainer} from '../../FilterComponents/IncreaseDecriase/IncreaseDecreaseFilterContainer';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setSecondDescriptionSort} from '../../../redux/Packs/packs-filter-reducer';

export const CardPacksTable = (): ITableModel[] => {
    const dispatch = useDispatch();
    return ([
            {
                title: (i: number) => (
                    <div key={i} style={{width: '100%', display: 'flex'}}>
                        <div>CardsName</div>
                    </div>
                ),
                render: (d, i: number) => (
                    <div key={i} style={{width: '100%'}}>{d.name}</div>
                ),
            },
            {
                title: (i: number) => (
                    <div key={i} style={{width: '100%', display: 'flex'}}>
                        <div>cardsCount</div>
                    </div>
                ),
                render: (d, i: number) => (
                    <div key={i} style={{width: '100%'}}>{d.cardsCount}</div>
                ),
            },
            {
                title: (i: number) => (
                    <div key={i} style={{width: '100%', display: 'flex'}}>
                        <div
                            onClick={(e) => dispatch(setSecondDescriptionSort(((e.target as HTMLElement).innerText)))}>updated
                        </div>

                        <IncreaseDecreaseFilterContainer/>
                    </div>
                ),
                render: (d, i: number) => (
                    <div key={i} style={{width: '100%'}}>{d.updated}</div>
                ),
            },
            {
                title: (i: number) => (
                    <div key={i} style={{width: '100%', display: 'flex'}}>
                        <div
                            onClick={(e) => dispatch(setSecondDescriptionSort(((e.target as HTMLElement).innerText)))}>name
                        </div>
                        <IncreaseDecreaseFilterContainer/>
                    </div>
                ),
                render: (d, i: number) => (
                    <div key={i} style={{width: '100%'}}>{d.user_name}</div>
                ),
            },
        ]
    );
};

