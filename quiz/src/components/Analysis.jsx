import React from "react"
import { Link } from "react-router-dom"

export default function Analysis(){
    return (
        <div className="box">
            <h1>This is Analysis Page</h1>
            <Link to="/">Play again</Link>
        </div>
    )
}