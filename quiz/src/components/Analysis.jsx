import React from "react"
import { Link } from "react-router-dom"
import Question from "./Question"

export default function Analysis(){
    return (
        <div className="box">
            <Question q="How would one say goodbye in Spanish?" opts={["Adiós", "Hola", "Au Revoir", "Salir"]} />
            <Question q="Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?" opts={["Cabbage Patch Kids", "Transformers", "Care Bears", "Rubik's Cube"]} />
            <Question q="What is the hottest planet in our Solar System?" opts={["Mercury", "Venus", "Mars", "Saturn"]} />
            <Question q="In which country was the caesar salad invented?" opts={["Italy", "Portugal", "Mexico", "France"]} />
            <Question q="How Many Hearts Does An Octopus Have?" opts={["One", "Two", "Three", "Four"]} />
            <div className="last">
                <h3 className="eh-three">You scored 3/5 correct answers</h3>
                <Link to="/">Play again</Link>
            </div>
        </div>
    )
}