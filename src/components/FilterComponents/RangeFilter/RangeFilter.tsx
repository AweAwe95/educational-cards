import React, {useState} from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './RangeFilter.module.css';
import {useDispatch} from 'react-redux';
import {setMaxCardsInPack, setMinCardsInPack} from '../../../redux/Packs/packs-filter-reducer';


export const RangeFilter = () => {
    // let maxValueFixed
    // useEffect(() => {
    //     maxValueFixed = maxCards
    // })

    // const minCards = useSelector<AppRootStateType, number>(state => state.packFilter.min)
    // const maxCards = useSelector<AppRootStateType, number>(state => state.packFilter.max)
    const dispatch = useDispatch()

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(200);

    const onChangeRangeValue = (values: number[]) => {
        setValue1(values[0]);
        setValue2(values[1]);
    };

    const addRangeFilter = () => {
        dispatch(setMinCardsInPack(value1))
        dispatch(setMaxCardsInPack(value2))
    }

    return (
        <div className={s.rangeContainer}>
            <span>{value1}</span>
            <Range
                min={0}
                max={200}
                onChange={onChangeRangeValue}
                value={[value1, value2]}
                allowCross={false}/>
            <span>{value2}</span>
            <button onClick={addRangeFilter}>Search</button>
        </div>
    );
};

