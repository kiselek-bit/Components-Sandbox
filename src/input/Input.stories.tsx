import React, {ChangeEvent, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';
import {action} from "@storybook/addon-actions";

// import { Button, ButtonProps } from './Button';

export default {
  title: 'input',
  // component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

export const InputControlled = () => {

  let [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return <input value={value} onChange={onChange}/>
}

export const CheckBoxControlled = () => {

  let [checked, setChecked] = useState<boolean>(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

  return <input type='checkbox'
                checked={checked}
                onChange={onChange}/>
}

export const SelectControlled = () => {
  const [value, setValue] = useState<string | undefined>("0")
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
      <select value={value} onChange={onChange}>
        <option>none</option>
        <option value={1}>Moscow</option>
        <option value={2}>Minsk</option>
        <option value={3}>Kiev</option>
      </select>
  )
}

