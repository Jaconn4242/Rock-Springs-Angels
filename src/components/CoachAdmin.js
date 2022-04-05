import React, {useContext, useState} from 'react'
import { MainContext } from '../ContextProvider'
import PlayerCard from "./PlayerCard"
import { v4 as uuidv4 } from "uuid";
import "./CoachAdmin.css"

function CoachAdmin() {
  // FROM PROVIDER
  const {team, gameData} = useContext(MainContext)
 

  const [showTeam, setShowTeam] = useState(false)
  const [showGameData, setShowGameData] = useState(false)
  function displayTeam(e) {
    e.preventDefault()
    setShowGameData(false)
    setShowTeam(prevState => !prevState)
  }
  function displayGameData(e) {
    e.preventDefault()
    setShowTeam(false)
    setShowGameData(prevState => !prevState)
  }
  const gameScheduleData = gameData.map((game, i)=> {
    return (
      <div key={i} className="game-data-container">
        <h3>Location: {game.location}</h3>
        <h4>Time:{game.time}</h4>
      </div>
    )
  })

  const teamElements = team.map((player, i) => {
    return (<PlayerCard {...player} key={i} id={uuidv4()} />)
  })
    
  return (
    <div>
        <h1 className='title-description'>Logged in as: <span className='Coach-title'>Coach</span></h1>
        <hr />
        <br />
        <div className='button-wrapper'>
        <button onClick={displayGameData}>View/Edit Game Schedule</button>
        <button onClick={displayTeam}>View/Edit Team</button>
        </div>
        <br />
        <hr />
        {showTeam && <div>{teamElements}</div>}
        {showGameData && <div>{gameScheduleData}</div>}
    </div>
  )
}

export default CoachAdmin