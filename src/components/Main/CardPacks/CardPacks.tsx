import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardPackType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardPacksTableBody} from './CardPacksTableBody';
import {Paginator} from '../../FilterComponents/Pagination/Pagination';
import {AddItemForm} from '../../FilterComponents/SearchInput/SearchInput';
import {RangeFilter} from '../../FilterComponents/RangeFilter/RangeFilter';
import {PacksFilterReducerStateType} from '../../../redux/Packs/packs-filter-reducer';
import {getCardPacksTC} from '../../../redux/cardPacks-reducer';
import {Loader} from '../../Loader/Loader';
import {CardPacksTable} from './CardPacksTable';


export const CardPacks = () => {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, CardPackType[]>(state => state.cardPacks.cardPacks);
    const objForPagination = useSelector<AppRootStateType, PacksFilterReducerStateType>(state => state.packFilter);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const user_id = useSelector<AppRootStateType, string | undefined>(state => state.authorization.data._id);


    const {
        packName,
        min,
        max,
        page,
        pageCount,
        isMyCardsPacks
    } = useSelector<AppRootStateType, PacksFilterReducerStateType>(state => state.packFilter);

    const {
        firstNumber,
        secondDescription
    } = useSelector<AppRootStateType, { firstNumber: number, secondDescription: string }>(state => state.packFilter.sortPacks);

    useEffect(() => {
        // 2 варианта реализации
        isMyCardsPacks ? dispatch(getCardPacksTC(user_id)) : dispatch(getCardPacksTC())
        // dispatch(getCardPacksTC(isMyCardsPacks ? user_id : undefined))
    }, [packName, min, max, page, pageCount, firstNumber, secondDescription, isMyCardsPacks, dispatch]);

    return (
        isLoading
            ? <Loader/>
            : <div>
                <AddItemForm/>
                <RangeFilter/>
                <CardPacksTable
                    model={CardPacksTableBody({firstNumber})}
                    data={data}/>
                <Paginator/>
                <div>{'packName: ' + objForPagination.packName}</div>
                <div>{'min: ' + objForPagination.min}</div>
                <div>{'max: ' + objForPagination.max}</div>
                <div>{'sortPacks.secondDescription: ' + objForPagination.sortPacks.secondDescription}</div>
                <div>{'sortPacks.firstNumber: ' + objForPagination.sortPacks.firstNumber}</div>
                <div>{'pageCount: ' + objForPagination.pageCount}</div>
                <div>{'page: ' + objForPagination.page}</div>
            </div>
    );
};
