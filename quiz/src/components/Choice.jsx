import React from "react"

export default function Question(props){
    
    return (
        <div className="answer-option" onClick={props.onClick}>{props.ch.substring(0,30)}</div>
    )
}