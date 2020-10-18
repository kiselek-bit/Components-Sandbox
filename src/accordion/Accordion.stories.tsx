import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react';

import {Accordion} from './accordion'
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const AccordionCollapsedTrue = () => <Accordion titleValue={'Accordion'}
                                                       collapse={true}
                                                       items={[]}
                                                       onClickItem={() => {}}
/>

export const AccordionCollapsedFalse = () => <Accordion titleValue={'Accordion'}
                                                        items={[
                                                            {title:'Dimych', value: 1},
                                                            {title: 'Hulk', value: 2},
                                                            {title: 'Fiona', value: 3}
                                                        ]}
                                                        onClickItem={ value => alert(`i want changed title on ${value}`)}
                                                        collapse={false}/>

export const ChangeAccordion = () => {
    let [starValue, setStarValue] = useState<boolean>(true)

    const onClickHandler = () => setStarValue(!starValue)


    return <Accordion titleValue={'Accordion'}
                      clickOnCollapse={onClickHandler}
                      onClickItem={ value => alert(`i want changed title on ${value}`)}
                      items={[
                          {title:'Dimych', value: 1},
                          {title: 'Hulk', value: 2},
                          {title: 'Fiona', value: 3}
                          ]}
                      collapse={starValue}/>
}
