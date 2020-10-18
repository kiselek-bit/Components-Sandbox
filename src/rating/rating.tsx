import React from "react";

type RatingPropsType = {
    value: number
    changeStarValue? : (value: number) => void
}

export function Rating(props: RatingPropsType) {

        return (
            <div>
                <Star selected={props.value > 0}
                      value={1}
                      callback={props.changeStarValue? props.changeStarValue: ()=> {}}/>
                <Star selected={props.value > 1}
                      value={2}
                      callback={props.changeStarValue? props.changeStarValue: ()=> {}}/>
                <Star selected={props.value > 2}
                      value={3}
                      callback={props.changeStarValue? props.changeStarValue: ()=> {}}/>
                <Star selected={props.value > 3}
                      value={4}
                      callback={props.changeStarValue? props.changeStarValue: ()=> {}}/>
                <Star selected={props.value > 4}
                      value={5}
                      callback={props.changeStarValue? props.changeStarValue: ()=> {}}/>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
    value: number
    callback: (value: number) => void
}

function Star(props: StarPropsType) {


    if(props.selected) {
        return <span onClick={()=>props.callback(props.value)}><b>Star</b></span>
    }
    return (
        <span onClick={()=>props.callback(props.value)}>
            <i>Star</i>
        </span>
    )
}