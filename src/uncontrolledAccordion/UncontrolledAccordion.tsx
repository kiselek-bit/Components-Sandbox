import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    clickOnCollapse: () => void
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
    clickOnCollapsed: () => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {




        return (
            <div>
                <AccordionTitle
                    title={props.titleValue}
                    clickOnCollapsed={props.clickOnCollapse}
                />
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
    }



function AccordionTitle(props: AccordionTitlePropsType) {
    const title = props.title;

    return <h3 onClick={ () => {props.clickOnCollapsed()} }>{title}</h3>
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