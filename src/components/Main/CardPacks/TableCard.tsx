import React, {CSSProperties, ReactNode, useCallback, useState} from 'react';
import {addCardPacksTC, deleteCardPacksTC} from "../../../redux/cardPacks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {CardPackType} from "../../../api/api";

export interface ITableModel {
    title: (index: number) => ReactNode;
    render: (dataItem: any, modelIndex: number, dataIndex: number) => ReactNode;
}

interface ITableProps {
// loading: boolean;
// error: string;
//
// logoutCallback: () => void;

    model: ITableModel[];
    data: any;

    headerStyle?: CSSProperties,
    tableStyle?: CSSProperties,
    rowsStyle?: CSSProperties,
    rowStyle?: CSSProperties,
}

export const TableCard: React.FC<ITableProps> = (
    {
// loading,
// error,
//
// logoutCallback,

        model,
        // data,

        headerStyle,
        tableStyle,
        rowsStyle,
        rowStyle,
    }
) => {
    const dispatch = useDispatch();
    const [newNamePacks, setNewNamePacks] = useState<string>('')
    const data = useSelector<AppRootStateType, CardPackType[]>(state => state.cardPacks.cardPacks);

    const addCardPacks = useCallback((name: string) => {
        const thunk = addCardPacksTC(name)
        dispatch(thunk)
    }, [dispatch])

    const deleteCardPacks = useCallback(function (id: string) {
        const thunk = deleteCardPacksTC(id)
        dispatch(thunk)
    }, [dispatch])

    return (
        <div
            style={{
                margin: '0 10px',
// minHeight: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                ...tableStyle,
            }}
        >
            table
            <input type="text" value={newNamePacks} onChange={e => setNewNamePacks(e.currentTarget.value)}/>
            <button type="button" onClick={()=>addCardPacks(newNamePacks)}>
                add
            </button>
            {/*{loading*/}
            {/*? <div style={{color: 'orange'}}>loading...</div>*/}
            {/*: error*/}
            {/*? <div style={{color: 'red'}}>{error}</div>*/}
            {/*: <div><br/></div>*/}
            {/*}*/}

            <div
                style={{
                    border: '1px solid red',
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...headerStyle,
                }}
            >
                {model.map((m: ITableModel, index: number) => m.title(index))}

            </div>

            <div
                style={{
                    border: '1px solid lime',
                    width: '100%',
                    ...rowsStyle,
                }}
            >
                {data.map((dataItem: any, dataIndex: number) => (
                    <div
                        key={dataItem._id || dataIndex}
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...rowStyle,
                        }}
                    >
                        {model.map((m, modelIndex) => m.render(dataItem, modelIndex, dataIndex))}
                        <button type="button" onClick={()=>deleteCardPacks(dataItem._id)}>
                            del
                        </button>
                        <button type="button" >
                            update
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
