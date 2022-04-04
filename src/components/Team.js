import React from 'react'
import TeamData from "./TeamData"
import "./Team.css"



function Team() {

    const teamElements = TeamData.map(player => {
        return <li>{player.firstName}</li>
    })

  return (
    <>
    <div className='team-image-wrapper'>
        <img className='group-picture' src="https://i.pinimg.com/originals/73/c6/47/73c64700f8c685ed297b74aaffac8efd.jpg" alt="" />
    </div>
    <label><b>Players are ordered left to right</b></label>
    {teamElements}
    </>
  )
}

export default Team