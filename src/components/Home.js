import React from 'react'
import{useNavigate} from "react-router-dom"
import "./Home.css"

function Home() {
  let navigate = useNavigate()
  return (
    <div className='Home-container'>
            <h1 className='Home-title'>Youth Softball League</h1>
            <h6 className='Home-subtitle'>-Rock Springs Baptist Church-</h6>
            <button onClick={() => {navigate("/gameschedule")}} className='Home-button'>VIEW GAME SCHEDULE</button>
    </div>
  )
}

export default Home