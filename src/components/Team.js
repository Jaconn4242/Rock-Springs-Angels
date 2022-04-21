import React from 'react'
import TeamData from "./TeamData"
import "./Team.css"



function Team() {

    const teamElements = TeamData.map((player, i) => {
        return <li key={i}>{player.firstName}</li>
    })

  return (
    <>
    <div className='team-image-wrapper'>
        <img className='group-picture' src="./coming-soon.jpg" alt="" />
    </div>
    <p className='list-label'>Players are ordered left to right</p>
    <div className='list-of-players'>{teamElements}</div>
    </>
  )
}

export default Team