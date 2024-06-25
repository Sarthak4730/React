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
        console.log(correctIncorrectsCollection)
    }

    return (
        <div className="box">
            {questions.length > 0 && (
                <>
                    <Question q={questions[0]} opts={correctIncorrectsCollection[0]} />
                    <Question q={questions[1]} opts={correctIncorrectsCollection[1]} />
                    <Question q={questions[2]} opts={correctIncorrectsCollection[2]} />
                    <Question q={questions[3]} opts={correctIncorrectsCollection[3]} />
                    <Question q={questions[4]} opts={correctIncorrectsCollection[4]} />
                </>
            ) }
            <Link to="/analysis">Check answers</Link>
        </div>
    )
}