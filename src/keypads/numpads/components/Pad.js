import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { posBottom } from "../../position";
import Button, { Backspace, Submit } from "./Button";

const NUM = [1,2,3,4,5,6,7,8,9,0];
const GAP = "50px";
const Pallette = styled.div`
    padding : 50px;
    background-color : #eee;
    box-sizing : border-box;
    border-top : 1px solid #aaa;
    width : 100%;
    height : 500px;
    display : flex;
    justify-content : space-between;
    ${posBottom};
`
const Btns = styled.div`
    width : 80%;
    height : 100%;
    box-sizing : border-box;
    display : grid;
    grid-template-columns : repeat(5, 1fr);
    grid-template-rows : repeat(2, 1fr);
    gap : ${GAP};
`
const Utils = styled.div`
    width : calc(20% - ${GAP});
    height : 100%;
    box-sizing : border-box;
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(2, 1fr);
    gap : ${GAP};
`

const Pad = ({handleFocusOut = f => f, handleChange = f => f}) => {

    return (
        <Pallette>
            <Btns>
                {NUM.map(v=>{
                    return <Button value={v} handleClick={()=>{handleChange(v)}}></Button>
                })}
            </Btns>
            <Utils>
                <Backspace handleClick={()=>{handleChange(-1)}}/>
                <Submit handleClick={()=>{handleFocusOut()}}/>
            </Utils>
        </Pallette>
    )

}

export default Pad;