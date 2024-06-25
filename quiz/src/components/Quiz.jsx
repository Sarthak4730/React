import React from "react"
import { Link } from "react-router-dom"
import Question from "./Question"

export default function Quiz(){

    const[data,setData] = React.useState()
    
    React.useEffect(() => {
        (async () => {
            const response = await fetch('https://the-trivia-api.com/v2/questions');
            // Check status codes and whatnot here and handle accordingly
            console.log("Status: "+response.status)
            console.log("Ok: "+response.ok)
            const data = await response.json();
            console.log(data);
            setData(data);
        })();
    }, [])

    let questions = []
    for(let i=0; i<5; i++)
        questions.push(data[i].question.text)
    console.log(questions)

    return (
        <div className="box">
            <Question q={questions[0]} opts={["Adiós", "Hola", "Au Revoir", "Salir"]} />
            <Question q={questions[1]} opts={["Cabbage Patch Kids", "Transformers", "Care Bears", "Rubik's Cube"]} />
            <Question q={questions[2]} opts={["Mercury", "Venus", "Mars", "Saturn"]} />
            <Question q={questions[3]} opts={["Italy", "Portugal", "Mexico", "France"]} />
            <Question q={questions[4]} opts={["One", "Two", "Three", "Four"]} />
            <Link to="/analysis">Check answers</Link>
        </div>
    )
}