// import React, {useContext} from 'react'
// import { MainContext } from '../ContextProvider'
import React from 'react'
import{useNavigate} from "react-router-dom"
import "./Home.css"

function Home() {
  let navigate = useNavigate()
  // const {gameData} = useContext(MainContext)
  return (
    <>
    <div className='Home-container'>
            <h1 className='Home-title'>Youth Softball League</h1>
            <h6 className='Home-subtitle'>-Rock Springs Baptist Church-</h6>
            <h3 className='Home-next-game'>Next game: To be determined </h3>
            <button onClick={() => {navigate("/nextgame")}} className='Home-button'>GAME DETAILS</button>
    </div>
    <div className='intro-container'>
        <h4 className='intro-title'>About our church</h4>
        <p className='intro-description'>At Rock Springs we are a Bible-centered church that teaches and preaches the Book, the Blood, and Blessed Hope of the return of our Lord and Savior Jesus Christ. God continues to bless our great fellowship exceedingly above all that we can ask or think. I extend an invitation to you and your family to join us this week for Bible Fellowship and worship.</p>
        <img className="intro-picture" src='https://s3-media0.fl.yelpcdn.com/bphoto/0cwvZdJvRkHWnS0bGymD0Q/l.jpg' alt=''></img>
        <div className='intro-section'>
          <a href="https://www.google.com/maps/place/Rock+Springs+Baptist+Church/@34.8240444,-82.558935,15z/data=!3m1!4b1!4m5!3m4!1s0x885837ef0778fc87:0xab33bc30390ea85e!8m2!3d34.8240447!4d-82.5502017">Google Map</a><br/>
          <span>201 Rock Springs Road</span><br/>
          <span>Easley, SC 29642 United States</span><br/>
          <span>(864) 859-9854</span><br/>
          <a href="http://www.rockspringsbaptist.com/" className='intro-church-link'>http://www.rockspringsbaptist.com/</a>
        </div>
    </div>
    </>
  )
}

export default Home