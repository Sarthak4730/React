import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div className="home-box">
            <h1 className="eh-one">Quizzical</h1>
            <h2 className="eh-two">Answer 5 Multiple Choice Questions.</h2>
            <Link to="/quiz">Start quiz</Link>
        </div>
    )
}