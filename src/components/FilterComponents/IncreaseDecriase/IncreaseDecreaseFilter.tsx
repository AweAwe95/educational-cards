import React from 'react';
import {useDispatch} from 'react-redux';
import {setFirstNumberSort} from '../../../redux/Packs/packs-filter-reducer';

export type IncreaseDecreaseFilterType = {
    direction: number
    buttonDescription: string
}

export const IncreaseDecreaseFilter = (props: IncreaseDecreaseFilterType) => {

    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(setFirstNumberSort(props.direction))}>{props.buttonDescription}
            </button>
        </div>
    );
};