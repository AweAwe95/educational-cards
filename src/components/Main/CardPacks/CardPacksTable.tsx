import {ITableModel} from './TableCard';

export const CardPacksTable = (): ITableModel[] => [
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> CardPacksName </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.name}</div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> cardsCount </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.cardsCount}</div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> updated </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.updated}</div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> Name </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.user_name}</div>
        ),
    },
];
