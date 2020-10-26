import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {


    let [collapsed, dispatch] = useReducer(reducer, {collapsed: false})

    const onClickHandler = () => dispatch({type: TOGGLE_COLLAPSED})

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                clickOnCollapsed={onClickHandler}
            />
            {!collapsed.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    clickOnCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const title = props.title;

    return <h3 onClick={() => {
        props.clickOnCollapsed()
    }}>{title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}