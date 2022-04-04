import React from 'react'
import "./CoachAdmin.css"

function CoachAdmin() {
    
  return (
    <div>
        <h1 className='title-description'>Logged in as: <span className='Coach-title'>Coach</span></h1>
        <hr />
        <br />
        <div className='button-wrapper'>
        <button>View/Edit Game Schedule</button>
        <button>View/Edit Team</button>
        <button>View/Edit Snack Schedule</button>
        </div>
    </div>
  )
}

export default CoachAdmin