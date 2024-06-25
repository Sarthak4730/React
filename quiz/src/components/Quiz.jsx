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

    // let questions = []
    // for(let i=0; i<5; i++)
    //     questions.push(data[i].question.text)
    // console.log(questions)

    return (
        <div className="box">
            <Question q="How would one say goodbye in Spanish?" opts={["Adiós", "Hola", "Au Revoir", "Salir"]} />
            <Question q="Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?" opts={["Cabbage Patch Kids", "Transformers", "Care Bears", "Rubik's Cube"]} />
            <Question q="What is the hottest planet in our Solar System?" opts={["Mercury", "Venus", "Mars", "Saturn"]} />
            <Question q="In which country was the caesar salad invented?" opts={["Italy", "Portugal", "Mexico", "France"]} />
            <Question q="How Many Hearts Does An Octopus Have?" opts={["One", "Two", "Three", "Four"]} />
            <Link to="/analysis">Check answers</Link>
        </div>
    )
}