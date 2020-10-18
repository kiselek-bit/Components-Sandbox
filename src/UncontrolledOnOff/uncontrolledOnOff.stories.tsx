import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react';

import { UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;



export const SwitchOn = () => <UncontrolledOnOff on={true} changeOn={action('click')}/>
export const SwitchOff = () => <UncontrolledOnOff on={false} changeOn={action('click')}/>

export const SwitchChange = () => {

    let [onOff, setOnOff] = useState<boolean>(false)

    return <UncontrolledOnOff on={onOff} changeOn={setOnOff}/>
}

