import React, {useState} from 'react';
import './App.css';
import {Rating} from "./rating/rating";
import {Accordion} from "./accordion/accordion";
import {OnOff} from "./OnOff/OnOff";
import {UncontrolledAccordion} from "./uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from './uncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";


function App() {

    let [starValue, setStarValue] = useState<number>(0)

    function changeStarValue(id: number) {
        setStarValue(id)

    }

    let [collapsed, setCollapsed] = useState(true)
    function clickOnCollapse() {
        setCollapsed(!collapsed)
    }

    let [on, setOn] = useState(false)

    return (
        <div className="App">
            <UncontrolledAccordion
                titleValue={'Menu'}
                clickOnCollapse={clickOnCollapse}
                collapsed={collapsed}/>
            <UncontrolledRating
                starValue={starValue}
                changeStarValue={changeStarValue}/>
            <UncontrolledOnOff on={on} changeOn={setOn}/>
        </div>
    );
}

export default App;
