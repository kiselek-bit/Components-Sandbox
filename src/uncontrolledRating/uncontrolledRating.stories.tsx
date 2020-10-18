import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react';

import {PropsType, UncontrolledRating} from './UncontrolledRating';

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const EmptyRating = () => <UncontrolledRating starValue={0} changeStarValue={x => x}/>
export const OneRating = () => <UncontrolledRating starValue={1} changeStarValue={x => x}/>
export const TwoRating = () => <UncontrolledRating starValue={2} changeStarValue={x => x}/>
export const ThreeRating = () => <UncontrolledRating starValue={3} changeStarValue={x => x}/>
export const FourRating = () => <UncontrolledRating starValue={4} changeStarValue={x => x}/>
export const FifeRating = () => <UncontrolledRating starValue={5} changeStarValue={x => x}/>

export const ChangeRating = () => {
    let [starValue, setStarValue] = useState<number>(0)

    const onClickHandler = (value: number) => setStarValue(value)


    return <UncontrolledRating starValue={starValue} changeStarValue={onClickHandler}/>
}
