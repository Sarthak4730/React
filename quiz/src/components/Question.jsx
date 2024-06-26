import React from "react"
import Choice from "./Choice"

export default function Question(props){

    let fourOptions = props.opts
    React.useEffect(() => {
        console.log("Before shuffle = "+fourOptions)
        function shuffle(array){
            for (let i = array.length; i > 0; i--) {
              let j = Math.floor(Math.random() * i)
              let temp = array[i]
              array[i] = array[j]
              array[j] = temp
            }
        }

        shuffle(fourOptions)
        console.log("After shuffle = "+fourOptions)
    }, [])
    
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
                    <Choice ch={fourOptions[0]} onClick={(e) => checkAns(e)}/>
                    <Choice ch={fourOptions[1]} onClick={(e) => checkAns(e)}/>
                    <Choice ch={fourOptions[2]} onClick={(e) => checkAns(e)}/>
                    <Choice ch={fourOptions[3]} onClick={(e) => checkAns(e)}/>
                </div>
            </div>
            <hr />
        </>
    )
}