import React, {useContext} from 'react'
import { MainContext } from '../ContextProvider'
import {Link} from "react-router-dom"
import "./NextGame.css"

function NextGame() {


    const {apiGameData, lineUpData, sortByAge, displayLineUp} = useContext(MainContext)
    let title = apiGameData[0].title
    
    let sortedLineUp = sortByAge(lineUpData)
  return (
        <>
        <div className='game-details-container'>
            <hr />
            <h1 className='game-details-title'>{title}
            <p className='game-details-date'>Date and Time: {apiGameData[0].description}</p>
            <a className='game-location' href='https://www.google.com/maps/dir/34.8839065,-82.7208192/Rock+Springs+Baptist+Church,+201+Rock+Springs+Rd+%231430,+Easley,+SC+29642/@34.8575919,-82.7059177,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x885837ef0778fc87:0xab33bc30390ea85e!2m2!1d-82.5502017!2d34.8240447'>Get Directions</a>
            </h1>
            <hr />
            <img  className="game-details-picture" src={apiGameData[0].imgUrl} alt="" />
        </div>
            <h3 className='label-for-line-up'>Batting line-up</h3>
            {displayLineUp ? <div className='batting-line-up-container'>
                 {
                sortedLineUp.map((player, i) => (
                <li key={i} className='batting-line-up'>{player.imgUrl} - {player.title}</li>
                ))
                } 
            </div> :
            <p className='to-be-determined-box'>TBD</p>}
            <div className='link-container'>
                <Link to="/" className="back-to-home-link" >Back to home</Link>
            </div>   
        </>
  )
}

// useNavigate -1 takes the user back

export default NextGame