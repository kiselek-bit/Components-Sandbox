import React, {useState} from "react";
import s from './OnOff.module.css';

type OnOffType = {
    // value: boolean
}

export function OnOff(props: OnOffType) {
    let [on, setOn] = useState(false)

    const wrapperStyle = {
        display: 'flex'
    }
    const onStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        backgroundColor: on? 'green' : 'white'

    }
    const offStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        backgroundColor: !on? 'red' : 'white'

    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: "1px solid black",
        backgroundColor: on? 'green' : 'red'
    }

    function changeOn (value: string) {
        (value === 'On')? on = true: on = false
        setOn(on)
    }

    const clickOn = () => {changeOn('On')}
    const clickOff = () => {changeOn('Off')}

    return (
        <div style={wrapperStyle}>
            <div onClick={clickOn} style={onStyle}>On</div>
            <div onClick={clickOff} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


