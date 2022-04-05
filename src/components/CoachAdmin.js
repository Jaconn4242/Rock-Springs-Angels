import React, {useContext, useState} from 'react'
import { MainContext } from '../ContextProvider'
import "./CoachAdmin.css"

function CoachAdmin() {
  // FROM PROVIDER
  const {team} = useContext(MainContext)

  const [showTeam, setShowTeam] = useState(false)

  function displayTeam(e) {
    e.preventDefault()
    setShowTeam(true)
  }

  const teamElements = team.map((player, i) => {
    if(!player.lastName){
      player.lastName = ""
    } 
      return (
        <div key={i}>
          <input  type="text" defaultValue={`${player.firstName} ${player.lastName}`} />
        </div>
      )
  })
    
  return (
    <div>
        <h1 className='title-description'>Logged in as: <span className='Coach-title'>Coach</span></h1>
        <hr />
        <br />
        <div className='button-wrapper'>
        <button>View/Edit Game Schedule</button>
        <button onClick={displayTeam}>View/Edit Team</button>
        <button>View/Edit Snack Schedule</button>
        </div>
        <br />
        <hr />
        {showTeam && <div className='team-display'>{teamElements}</div>}
    </div>
  )
}

export default CoachAdmin