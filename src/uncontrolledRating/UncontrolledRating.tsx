import React, {useState} from "react";

export type PropsType = {
    starValue: number
    changeStarValue: (id: number) => void
}


export function UncontrolledRating(props: PropsType) {


    return (
        <div>
            <Star selected={props.starValue > 0}
                  change={props.changeStarValue}
                  value={1}/>
            <Star selected={props.starValue > 1}
                  change={props.changeStarValue}
                  value={2}/>
            <Star selected={props.starValue > 2}
                  change={props.changeStarValue}
                  value={3}/>
            <Star selected={props.starValue > 3}
                  change={props.changeStarValue}
                  value={4}/>
            <Star selected={props.starValue > 4}
                  change={props.changeStarValue}
                  value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    change: (value: number) => void
    value: number
}

function Star(props: StarPropsType) {

    const callbackChange = () => {
        props.change(props.value)
    }

    return <span onClick={callbackChange}>
        {props.selected ? <b>Star</b> : <i>Star</i>}
    </span>
}