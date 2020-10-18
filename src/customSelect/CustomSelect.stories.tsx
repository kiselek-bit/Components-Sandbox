import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react';

import {CustomSelect} from './CustomSelect'
import {action} from "@storybook/addon-actions";

export default {
    title: 'CustomSelect',
    component: CustomSelect,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const CustomSelectCollapsed = () => <CustomSelect titleValue={'Accordion'}
                                                       collapse={true}
                                                       items={[
                                                           {title:'Belarus', value: 1},
                                                           {title: 'Russia', value: 2},
                                                           {title: 'Ukraine', value: 3}
                                                       ]}
                                                       onClickItem={() => {}}
/>

export const CustomSelectUncollapsed = () => <CustomSelect titleValue={'Accordion'}
                                                        items={[
                                                            {title:'Belarus', value: 1},
                                                            {title: 'Russia', value: 2},
                                                            {title: 'Ukraine', value: 3}
                                                        ]}
                                                        onClickItem={ value => alert(`i want changed title on ${value}`)}
                                                        collapse={false}/>

export const ChangeCustomSelect = () => {
    let [starValue, setStarValue] = useState<boolean>(true)

    const onClickHandler = () => setStarValue(!starValue)


    return <CustomSelect titleValue={'Accordion'}
                      clickOnCollapse={onClickHandler}
                      onClickItem={ value => alert(`i want changed title on ${value}`)}
                      items={[
                          {title:'Belarus', value: 1},
                          {title: 'Russia', value: 2},
                          {title: 'Ukraine', value: 3}
                          ]}
                      collapse={starValue}/>
}
