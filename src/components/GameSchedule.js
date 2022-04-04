import React from 'react'
import {useNavigate} from "react-router-dom"
import "./GameSchedule.css"

function GameSchedule() {
    let navigate = useNavigate()
  return (
    <div className="Schedule">
        <h1 className="field-title">Easley Sports Complex</h1>
        <h3 className="field-subtitle">Date and time: TBD</h3>
        <img src="https://lh3.googleusercontent.com/p/AF1QipP1bLK11YwZv4Dp2fseDpSaMvWPb5kXvzsAMlIP=s1600-w400" alt="" className="field-pic"></img>
        <h3 className="line-up-roster-label">Batting Line-up:</h3>
        <ol className="line-up-roster">
            <li>Addy</li>
            <li>Abbi</li>
            <li>Emma</li>
            <li>Jalyn</li>
            <li>Colton</li>
            <li>Cole</li>
            <li>Carys</li>
            <li>Mikaya</li>
            <li>Cadence</li>
            <li>Everitt</li>
            <li>Caleb</li>
            <li>David</li>
            <li>Savannah</li>
            <li>Westin J.</li>
            <li>Westin B.</li>
        </ol>
        <button onClick={() => {navigate("/")}}></button>


    </div>
  )
}

export default GameSchedule