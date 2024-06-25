import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div className="box">
            <h1>This is Home Page</h1>
            <Link to="/quiz">Start quiz</Link>
        </div>
    )
}