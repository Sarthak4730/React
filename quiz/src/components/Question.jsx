import React from "react"
import Choice from "./Choice"
import {nanoid} from "nanoid"

export default function Question(props){

    let arr = []
    for(let i=0; i<4; i++)
        arr.push(nanoid())

    let correctId = arr[0]
    function checkAns(id){
        if(id === correctId){
            console.log("Correct Choice")
            props.correctCount(prevCount => prevCount+1)
        }
    }

    return (
        <>
            <div className="q-box">
                <h3 className="eh-three">{props.q}</h3>
                <div className="answer-options-box">
                    <Choice id={arr[0]} ch={props.opts[0]} onClick={() => checkAns(arr[0])}/>
                    <Choice id={arr[1]} ch={props.opts[1]} onClick={() => checkAns(arr[1])}/>
                    <Choice id={arr[2]} ch={props.opts[2]} onClick={() => checkAns(arr[2])}/>
                    <Choice id={arr[3]} ch={props.opts[3]} onClick={() => checkAns(arr[3])}/>
                </div>
            </div>
            <hr />
        </>
    )
}