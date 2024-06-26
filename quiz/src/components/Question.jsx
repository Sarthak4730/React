import React from "react"
import Choice from "./Choice"

export default function Question(props){

    const [newFourOptions, setNewFourOptions] = React.useState(false)
    React.useEffect(() => {
        console.log("Before shuffle = "+props.opts)
        const shuffle = (array) => {
            return array.sort(() => Math.random() - 0.5);
        }

        setNewFourOptions(shuffle(props.opts))
    }, [])
    console.log("After shuffle = "+newFourOptions)
    
    function checkAns(e){
        console.log(`UserChoice = ${e.target.textContent}\nSolution = ${props.solution}`)
        if(e.target.textContent === props.solution){
            e.target.classList.add("correct")
            props.correctCount(prevCount => prevCount+1)
        }else
            e.target.classList.add("incorrect")
    }

    return (
        <>
            <div className="q-box">
                <h3 className="eh-three">{props.q}</h3>
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