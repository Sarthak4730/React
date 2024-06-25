import React from "react"
import { Link } from "react-router-dom"

export default function Quiz(){
    return (
        <div className="box">
            <h1>This is Quiz Page</h1>
            <Link to="/analysis">Check answers</Link>
        </div>
    )
}