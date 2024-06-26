import React from "react"
import Choice from "./Choice"

export default function Question(props){

    function shuffle(arr) {
        let currentIndex = arr.length

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
        }

        return arr
    }
    let fourOptions = []
    React.useEffect(() => {
        fourOptions = props.opts
        console.log("props fourOptions = "+fourOptions)
        let shuffledOptions = shuffle(fourOptions)
        fourOptions = shuffledOptions
        console.log("shuffled fourOptions = "+fourOptions)
    }, [])
    
    function checkAns(e, userChoice){
        console.log("UserChoice = "+userChoice)
        console.log(e.target)
        if(userChoice === props.solution){
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
                    <Choice ch={fourOptions[0]} onClick={(e) => checkAns(e, fourOptions[0])}/>
                    <Choice ch={fourOptions[1]} onClick={(e) => checkAns(e, fourOptions[1])}/>
                    <Choice ch={fourOptions[2]} onClick={(e) => checkAns(e, fourOptions[2])}/>
                    <Choice ch={fourOptions[3]} onClick={(e) => checkAns(e, fourOptions[3])}/>
                </div>
            </div>
            <hr />
        </>
    )
}