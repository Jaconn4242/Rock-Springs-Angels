import React, {useContext} from 'react'
import { MainContext } from '../ContextProvider'
import {Link} from "react-router-dom"
import "./NextGame.css"

function NextGame() {

    
    const {apiGameData, lineUpData, sortByAge} = useContext(MainContext)
    let title = apiGameData[0].title
    
    let sortedLineUp = sortByAge(lineUpData)
  return (
        <>
        <div className='game-details-container'>
            <hr />
            <h1 className='game-details-title'>{title}
            <p className='game-details-date'>Date and Time: {apiGameData[0].description}</p>
            <a className='game-location' href='https://www.google.com/maps/place/745+Wolf+Creek+Rd,+Pickens,+SC+29671/@34.9188306,-82.6311605,17z/data=!3m1!4b1!4m5!3m4!1s0x88584be9996cf69f:0x35d7680cb3a51dbb!8m2!3d34.9188306!4d-82.6289718'>Get Directions</a>
            </h1>
            <hr />
            <img  className="game-details-picture" src={apiGameData[0].imgUrl} alt="" />
        </div>
            <h3 className='label-for-line-up'>Batting line-up</h3>
            <div className='batting-line-up-container'>
                {/* {
                sortedLineUp.map((player, i) => (
                <li key={i} className='batting-line-up'>{player.imgUrl} - {player.title}</li>
                ))
                } */}
                <p> TBD</p>
            </div>
            <div className='link-container'>
                <Link to="/" className="back-to-home-link" >Back to home</Link>
            </div>   
        </>
  )
}

// useNavigate -1 takes the user back

export default NextGame