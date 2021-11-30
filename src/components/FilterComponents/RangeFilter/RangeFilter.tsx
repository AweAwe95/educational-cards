import React, {useEffect, useState} from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './RangeFilter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setMaxCardsInPack, setMinCardsInPack} from '../../../redux/Packs/cards-packs-filter-reducer';
import {AppRootStateType} from '../../../redux/store';


export const RangeFilter = () => {
    let minCardsCount = useSelector<AppRootStateType, number>(state => state.cardsPackFilter.min);
    let maxCardsCount = useSelector<AppRootStateType, number>(state => state.cardsPackFilter.max);

    let min = useSelector<AppRootStateType, number>(state => state.cardPacks.minCardsCount);
    let max = useSelector<AppRootStateType, number>(state => state.cardPacks.maxCardsCount);
    const dispatch = useDispatch();

    useEffect(() => {
        if (maxCardsCount > max) setValue2(max);
        // if (minCardsCount < min) setValue1(min);
    }, [min, max]);

    const [value1, setValue1] = useState(minCardsCount);
    const [value2, setValue2] = useState(maxCardsCount);

    const onChangeRangeValue = (values: number[]) => {
        setValue1(values[0]);
        setValue2(values[1]);
    };

    const addRangeFilter = () => {
        dispatch(setMinCardsInPack(value1));
        dispatch(setMaxCardsInPack(value2));
    };

    return (
        <div className={s.rangeContainer}>
            <span>{value1}</span>
            <Range
                min={min}
                max={max}
                onChange={onChangeRangeValue}
                value={[value1, value2]}
                allowCross={false}/>
            <span>{value2}</span>
            <button onClick={addRangeFilter}>Search</button>
        </div>
    );
};

// нативный кусок рэнжа
// const [values, setValues] = useState<number[]>([props.min, props.max]);
//
// const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
//     if (+e.currentTarget.value < values[1]) {
//         setValues([+e.currentTarget.value, values[1]]);
//     }
// }
// const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
//     if (+e.currentTarget.value > values[0]) {
//         setValues([values[0], +e.currentTarget.value]);
//     }
// }
//
// const onMouseUpHandler = () => {
//     dispatch(props.setMinMaxAction({minCardsCount: values[0], maxCardsCount: values[1]}))
//     // dispatch(setMinMaxCardsCount({minCardsCount: 20, maxCardsCount: 60}))
// }


