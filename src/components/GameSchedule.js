import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import { MainContext } from '../ContextProvider'
import "./GameSchedule.css"

function GameSchedule() {
   
    const {gameData} = useContext(MainContext)

    const gameCards = gameData.map((game, i) => {
      return <div className='game-card'>
                <hr />
                <h3 className='game-card-title'>{game.location}
                <p className='game-card-date'>Date: {game.time}</p></h3><hr />
                <img className='game-card-image' src={game.locationPicture} alt="" />
                <div className='game-card-links'>
                  <a href={game.googleMaps}>Get Directions</a>
                  {game.nextGame && <Link to="/nextgame" >View details</Link>}
                </div>
            </div>
    })
  return (
    <>
    {gameCards}
    </>
  )
}

export default GameSchedule