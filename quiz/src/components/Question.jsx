import React from "react"

export default function Question(props){
    return (
        <>
            <div className="q-box">
                <h3 className="eh-three">{props.q}</h3>
                <div className="answer-options-box">
                    <div className="answer-option">{props.opts[0]}</div>
                    <div className="answer-option">{props.opts[1]}</div>
                    <div className="answer-option">{props.opts[2]}</div>
                    <div className="answer-option">{props.opts[3]}</div>
                </div>
            </div>
            <hr />
        </>
    )
}