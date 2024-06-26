import React from "react"
import { Link } from "react-router-dom"
import Question from "./Question"

export default function Quiz(){

    const[data,setData] = React.useState([])
    
    React.useEffect(() => {
        (async () => {
            const response = await fetch('https://the-trivia-api.com/v2/questions');
            // Check status codes and whatnot here and handle accordingly
            const data = await response.json();
            console.log(data);
            setData(data);
        })();
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

    const [numOfCorrect, setNumOfCorrect] = React.useState(0)
    React.useEffect(() => {
        console.log(numOfCorrect)
    }, [])
    
    const [check, setCheck] = React.useState(false)
    function clickedOnCheck(){
        setCheck(true)
    }

    return (
        <div className="box">
            {questions.length > 0 && (
                <>
                    <Question q={questions[0]} opts={correctIncorrectsCollection[0]} solution={correctIncorrectsCollection[0][0]} correctCount={setNumOfCorrect}/>
                    <Question q={questions[1]} opts={correctIncorrectsCollection[1]} solution={correctIncorrectsCollection[1][0]} correctCount={setNumOfCorrect}/>
                    <Question q={questions[2]} opts={correctIncorrectsCollection[2]} solution={correctIncorrectsCollection[2][0]} correctCount={setNumOfCorrect}/>
                    <Question q={questions[3]} opts={correctIncorrectsCollection[3]} solution={correctIncorrectsCollection[3][0]} correctCount={setNumOfCorrect}/>
                    <Question q={questions[4]} opts={correctIncorrectsCollection[4]} solution={correctIncorrectsCollection[4][0]} correctCount={setNumOfCorrect}/>
                </>
            ) }
            {check 
                ?   <div className="last">
                        <h3 className="eh-three">{`You scored ${numOfCorrect}/5 correct answers`}</h3>
                        <Link to="/">Play again</Link>
                    </div>
                : <button className="check-answers-btn" onClick={clickedOnCheck}>Check answers</button>}
        </div>
    )
}