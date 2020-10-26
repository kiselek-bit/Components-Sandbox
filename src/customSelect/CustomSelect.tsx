import React, {useState, KeyboardEvent} from "react";
import s from './CustomSelect.module.css'

type ItemType = {
    title: string
    value: any
}

type CustomSelectPropsType = {
    titleValue: string
    collapse: boolean
    clickOnCollapse?: () => void
    items: Array<ItemType>
    onClickItem: (value: any) => void
}

export function CustomSelect(props: CustomSelectPropsType) {

    let [option, setOption] = useState<string>(props.items[0].title)
    let [hovered, setHovered] = useState(props.items[0].value)

    function changedTitle(value: any, click?: boolean) {
        let newOption = props.items.find(i => i.value === value)

        if (newOption) {
            setOption(newOption.title)
            setHovered(newOption.value)
        }
        click && props.clickOnCollapse && props.clickOnCollapse()
    }

    const changedHoveredEl = (value: any) => {
        let newHovered = props.items.find(i => i.value === value)
        if (newHovered) {
            setHovered(newHovered.value)
        }
    }
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (hovered === props.items[i].value) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        setHovered(pretendentElement.value)
                        changedTitle(pretendentElement.value)
                        break
                    }
                }
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            props.clickOnCollapse && props.clickOnCollapse()
        }
    }
    const onBlurHandler = () => props.clickOnCollapse && props.clickOnCollapse()

    return (
        <div onKeyDown={onKeyDown}
             tabIndex={0}
             className={s.main}
             onBlur={onBlurHandler}>

            <h3 onClick={props.clickOnCollapse ? props.clickOnCollapse : () => {
            }}
                tabIndex={0}
                className={s.title}>
                {option}
            </h3>

            {!props.collapse && <div className={s.lists} tabIndex={0}>
                {
                    props.items.map(i => {

                        return (
                            <div className={s.option + " " + (hovered === i.value ? s.active : "")}
                                 key={i.value}
                                 tabIndex={i.value}
                                 onMouseEnter={() => changedHoveredEl(i.value)}
                                 onClick={() => changedTitle(i.value, true)}>
                                {i.title}
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}
