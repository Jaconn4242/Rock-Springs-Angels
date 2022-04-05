import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { MainContext } from '../ContextProvider'
import "./GameSchedule.css"

function GameSchedule() {
    let navigate = useNavigate()
    const {gameData} = useContext(MainContext)

    const gameCards = gameData.map((game, i) => {
      return <div className='game-card'>
                <hr />
                <h3 className='game-card-title'>{game.location}
                <p className='game-card-date'>Date: {game.time}</p></h3><hr />
                <img className='game-card-image' src={game.locationPicture} alt="" />
                <a href={game.googleMaps}>Get Directions</a>
                <button onClick={() => navigate("/nextgame")}></button>
            </div>
    })
  return (
    <>
    {gameCards}
    </>
  )
}

export default GameSchedule