import { ITableModel } from './TableCard';

export const CardTable = (): ITableModel[] => [
    {
        title: (i: number) => (
            <div key={i} style={{ width: '50%' }}>
                CardPacks
            </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{ width: '50%' }}>
                {d.name}
            </div>
        ),
    },
    {
        title: (i: number) => (
            <div key={i} style={{ width: '50%' }}>
                User Name
            </div>
        ),
        render: (d, i: number) => (
            <div key={i} style={{ width: '50%' }}>
                {d.user_name}
            </div>
        ),
    },
];
