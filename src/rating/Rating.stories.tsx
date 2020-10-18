import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react';

import {Rating} from './rating';

export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const EmptyRating = () => <Rating value={0}/>
export const OneRating = () => <Rating value={1}/>
export const TwoRating = () => <Rating value={2}/>
export const ThreeRating = () => <Rating value={3}/>
export const FourRating = () => <Rating value={4}/>
export const FifeRating = () => <Rating value={5}/>

export const ChangeRating = () => {
    let [starValue, setStarValue] = useState<number>(0)

    const onClickHandler = (value: number) => setStarValue(value)


    return <Rating value={starValue} changeStarValue={onClickHandler}/>
}
