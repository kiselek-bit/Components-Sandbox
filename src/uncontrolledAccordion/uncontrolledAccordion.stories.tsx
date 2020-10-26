import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react';

import {UncontrolledAccordion} from './UncontrolledAccordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const AccordionCollapsedTrue = () => <UncontrolledAccordion titleValue={'Accordion'}
                                                               collapsed={true}/>

export const AccordionCollapsedFalse = () => <UncontrolledAccordion titleValue={'Accordion'}
                                                               collapsed={false}/>

export const ChangeAccordion = () => {



    return <UncontrolledAccordion titleValue={'Accordion'}/>
}
