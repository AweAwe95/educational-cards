import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {PacksFilterReducerStateType, setCurrentPage} from '../../../redux/Packs/packs-filter-reducer';
import s from './Paginator.module.css';
import {SelectForPaginator} from './SelectForPagination';

export const Paginator = () => {

    const dispatch = useDispatch();
    // data from selector
    const objForPagination = useSelector<AppRootStateType, PacksFilterReducerStateType>(state => state.packFilter);
    const pages = [];
    for (let i = 1; i <= objForPagination.totalCountPage; i++) {
        pages.push(i);
    }

    return (
        <div className={s.container}>
            <div className={s.pages}>
                {pages.map((page, index) => <span
                    key={index}
                    className={objForPagination.currentPage == page ? s.currentPage : s.page}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
            <SelectForPaginator/>
        </div>
    );
};
