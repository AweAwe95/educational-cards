import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardPackType} from '../../../api/api';
import {AppRootStateType} from '../../../redux/store';
import {CardPacksTable} from './CardPacksTable';
import {TableCard} from './TableCard';
import {Paginator} from '../../FilterComponents/Pagination/Pagination';
import {AddItemForm} from '../../FilterComponents/SearchInput/SearchInput';
import {RangeFilter} from '../../FilterComponents/RangeFilter/RangeFilter';
import {PacksFilterReducerStateType} from '../../../redux/Packs/packs-filter-reducer';
import {getCardPacksTC} from '../../../redux/cardPacks-reducer';
import {Loader} from '../../Loader/Loader';


export const CardPacks = () => {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, CardPackType[]>(state => state.cardPacks.cardPacks);
    const objForPagination = useSelector<AppRootStateType, PacksFilterReducerStateType>(state => state.packFilter);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

    const {
        packName,
        min,
        max,
        page,
        pageCount
    } = useSelector<AppRootStateType, PacksFilterReducerStateType>(state => state.packFilter);
    const {
        firstNumber,
        secondDescription
    } = useSelector<AppRootStateType, { firstNumber: number, secondDescription: string }>(state => state.packFilter.sortPacks);


    useEffect(() => {
        dispatch(getCardPacksTC());
    }, [packName, min, max, page, pageCount, firstNumber, secondDescription, dispatch]);
    //
    // useEffect(() => {
    //     const thunk = getCardPacksTC();
    //     dispatch(thunk);
    // }, [dispatch]);

    return (
        <div>
            <AddItemForm/>
            <RangeFilter/>
            <TableCard
                model={CardPacksTable()}
                data={data}/>
            {isLoading && <Loader/>}
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
