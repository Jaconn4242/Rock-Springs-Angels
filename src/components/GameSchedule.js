import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { MainContext } from '../ContextProvider'
import "./GameSchedule.css"

function GameSchedule() {
    let navigate = useNavigate()
    const {team, gameData} = useContext(MainContext)

    const battingLineUp = team.map((player, i) => {
      return <div className='line-up-roster'>
                <p>{i} --- {player.firstName}</p>
            </div>
    })
  return (
    <div className="Schedule">
        <h1 className="field-title">{gameData[0].location}</h1>
        <h3 className="field-subtitle">Date and Time: {gameData[0].time}</h3>
        <img src={gameData[0].locationPicture} alt="" className="field-pic"></img>
        <h3 className="line-up-roster-label">Batting Line-up:</h3>
        {battingLineUp}
        <button onClick={() => {navigate("/")}}>Back to home</button>


    </div>
  )
}

export default GameSchedule