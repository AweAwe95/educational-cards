import React, {CSSProperties, ReactNode, useCallback, useState} from 'react';
import {addCardPacksTC, deleteCardPacksTC, getCardPacksTC} from "../../../redux/cardPacks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {CardPackType} from "../../../api/api";
import {getCardsTC} from "../../../redux/cards-reducer";
import {NavLink} from "react-router-dom";

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

export const CardPacksTable: React.FC<ITableProps> = (
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
    const currentUserId = useSelector<AppRootStateType, string | undefined>(state => state.authorization.data._id);
    const [watchMyPacks, setWatchMyPacks] = useState<boolean>()

    const addCardPacks = useCallback((name: string) => {
        const thunk = addCardPacksTC(name)
        dispatch(thunk)
    }, [dispatch])

    const deleteCardPacks = useCallback((id: string) => {
        const thunk = deleteCardPacksTC(id)
        dispatch(thunk)
    }, [dispatch])

    const watchCardsPacks = (id: string) => {
        dispatch(getCardsTC(id))
    }


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
            <button type="button" onClick={() => addCardPacks(newNamePacks)}>
                add
            </button>
            <div>
                <input type="checkbox" checked={watchMyPacks} onChange={e => {
                    setWatchMyPacks(e.currentTarget.checked)
                    if(watchMyPacks){
                        dispatch(getCardPacksTC(currentUserId))
                    }else{
                        dispatch(getCardPacksTC())
                    }
                }}
                />
                <span>Watch my card packs</span>
            </div>
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
                        <button type="button" onClick={() => deleteCardPacks(dataItem._id)}>
                            del
                        </button>
                        <button type="button">
                            update
                        </button>
                        <button type="button" onClick={() => watchCardsPacks(dataItem._id)}>
                            <NavLink to={`/cards/${dataItem._id}`}>Сards</NavLink>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
