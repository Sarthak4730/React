import React from "react"
import { Link } from "react-router-dom"
import Question from "./Question"

export default function Quiz(){

    const[data,setData] = React.useState([])

    const [numOfCorrect, setNumOfCorrect] = React.useState(0)

    const [numOfDone, setNumOfDone] = React.useState(0)
    
    const [playAgain, setPlayAgain] = React.useState(false)
    
    React.useEffect(() => {
        (async () => {
            const response = await fetch('https://the-trivia-api.com/v2/questions')
            // Check status codes and whatnot here and handle accordingly
            const data = await response.json()
            console.log(data)
            setData(data)
        })()
    }, [])

    let questions = []
    let correctIncorrectsCollection = []
    if(data.length > 0){
        for(let i=0; i<5; i++){
            questions.push(data[i].question.text)

            let oneCorrectThreeIncorrects = []
            oneCorrectThreeIncorrects.push(data[i].correctAnswer)
            for(let j=0; j<3; j++)
                oneCorrectThreeIncorrects.push(data[i].incorrectAnswers[j])
            
            correctIncorrectsCollection.push(oneCorrectThreeIncorrects)
        }
    }
    
    React.useEffect(() => {
        if( numOfDone === 5 ){
            setPlayAgain(true)
        }
    }, [numOfDone])

    return (
        <div className="box">
            {questions.length > 0 && (
                <div className="q-box-collection">
                    <Question q={questions[0]} opts={correctIncorrectsCollection[0]} solution={correctIncorrectsCollection[0][0]} correctCount={setNumOfCorrect} setNumOfDone={setNumOfDone} />
                    <Question q={questions[1]} opts={correctIncorrectsCollection[1]} solution={correctIncorrectsCollection[1][0]} correctCount={setNumOfCorrect} setNumOfDone={setNumOfDone} />
                    <Question q={questions[2]} opts={correctIncorrectsCollection[2]} solution={correctIncorrectsCollection[2][0]} correctCount={setNumOfCorrect} setNumOfDone={setNumOfDone} />
                    <Question q={questions[3]} opts={correctIncorrectsCollection[3]} solution={correctIncorrectsCollection[3][0]} correctCount={setNumOfCorrect} setNumOfDone={setNumOfDone} />
                    <Question q={questions[4]} opts={correctIncorrectsCollection[4]} solution={correctIncorrectsCollection[4][0]} correctCount={setNumOfCorrect} setNumOfDone={setNumOfDone} />
                </div>
            ) }
            <div className="last">
                <h3 className="eh-three">{`Score = ${numOfCorrect}`}</h3>
                { playAgain && <Link to="/" className="play-again-btn">Play again</Link> }
            </div>
        </div>
    )
}