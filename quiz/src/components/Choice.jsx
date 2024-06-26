import React from "react"

export default function Question(props){
    let text = props.ch.length>60 ? props.ch.substring(0,70) + "..." : props.ch.substring(0,60)
    return (
        <div className="answer-option" onClick={props.onClick}>{props.ch && text }</div>
    )
}