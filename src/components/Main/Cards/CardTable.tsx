import {ITableModel} from '../CardPacks/TableCard';

export const CardTable = (): ITableModel[] => [
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> question </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.name}</div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> answer </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.cardsCount}</div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> Grade </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.updated}</div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> updated </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.user_name}</div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{width: '100%'}}> url </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{width: '100%'}}>{d.user_name}</div>
        ),
    },
];
