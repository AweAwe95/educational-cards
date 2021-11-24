import React from 'react';
import {IncreaseDecreaseFilter} from './IncreaseDecreaseFilter';


export const IncreaseDecreaseFilterContainer = () => {

    return (
        <div>
            <IncreaseDecreaseFilter direction={1} buttonDescription={'decrease'}/>
            <IncreaseDecreaseFilter direction={0} buttonDescription={'increase'}/>
        </div>
    );
};