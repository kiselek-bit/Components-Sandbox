import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapse: boolean
    clickOnCollapse?: () => void
    items: Array<ItemType>
    onClickItem: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            callback={props.clickOnCollapse ? props.clickOnCollapse : () => {
                            }}/>
            {!props.collapse && <AccordionBody items={props.items}
                                               onClick={props.onClickItem}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const title = props.title;

    const changeCollapse = () => props.callback()

    return <h3 onClick={changeCollapse}>{title}</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map(i => {
                    return (
                        <li onClick={() => props.onClick(i.value)}>{i.title}</li>
                    )
                })
            }
        </ul>
    )
}