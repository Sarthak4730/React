import React from "react"
import Choice from "./Choice"

export default function Question(props){

    const [newFourOptions, setNewFourOptions] = React.useState(false)
    const [lock, setLock] = React.useState(false)

    React.useEffect(() => {
        // console.log("Before shuffle = "+props.opts)
        const shuffle = (array) => {
            return array.sort(() => Math.random() - 0.5);
        }

        setNewFourOptions(shuffle(props.opts))
    }, [])

    // console.log("After shuffle = "+newFourOptions)
    
    function checkAns(e){
        if( lock === false ){
            if(e.target.textContent === props.solution){
                e.target.classList.add("correct")
                props.correctCount(prevCount => prevCount+1)
                setLock(true)
            }else{
                e.target.classList.add("incorrect")
                setLock(true)
                let siblings = e.target.parentNode.childNodes
                for(let i=0; i<siblings.length; i++){
                    if(siblings[i].textContent === props.solution)
                        siblings[i].classList.add("correct")
                }
            }
        }
        props.setNumOfDone(prevCount => prevCount + 1)
    }

    return (
        <>
            <div className="q-box">
                <h3 className="eh-three props-q">{props.q}</h3>
                <div className="answer-options-box">
                    <Choice ch={newFourOptions[0]} onClick={(e) => checkAns(e)}/>
                    <Choice ch={newFourOptions[1]} onClick={(e) => checkAns(e)}/>
                    <Choice ch={newFourOptions[2]} onClick={(e) => checkAns(e)}/>
                    <Choice ch={newFourOptions[3]} onClick={(e) => checkAns(e)}/>
                </div>
            </div>
            <hr />
        </>
    )
}