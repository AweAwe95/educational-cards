import React from 'react';
import {IncreaseDecreaseFilter} from './IncreaseDecreaseFilter';


export const IncreaseDecreaseFilterContainer = () => {

    return (
        <div>
            <IncreaseDecreaseFilter direction={1} buttonDescription={'increase'}/>
            <IncreaseDecreaseFilter direction={0} buttonDescription={'decrease'}/>
        </div>
    );
};