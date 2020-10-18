import React, {useState} from "react";
import s from './UncontrolledOnOff.module.css';

type OnOffType = {
    on: boolean
    changeOn: (value: boolean) => void
}

export function UncontrolledOnOff(props: OnOffType) {

    const wrapperStyle = {
        display: 'flex'
    }
    const onStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        backgroundColor: props.on ? 'green' : 'white'

    }
    const offStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        backgroundColor: !props.on ? 'red' : 'white'

    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: "1px solid black",
        backgroundColor: props.on ? 'green' : 'red'
    }


    const clickOn = () => {
        props.changeOn(true)
    }
    const clickOff = () => {
        props.changeOn(false)
    }

    return (
        <div style={wrapperStyle}>
            <div onClick={clickOn} style={onStyle}>On</div>
            <div onClick={clickOff} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


