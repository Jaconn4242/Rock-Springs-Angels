import React, {useContext} from 'react'
import { MainContext } from '../ContextProvider'
import "./GameSchedule.css"

function GameSchedule() {
  // gmaeData holds googlemaps link and next game boolean
  // apiGameData hold title(location), description(time), and imgUrl(location-picture) 
    const {apiGameData} = useContext(MainContext)
    console.log(apiGameData)
    const gameCards = apiGameData.map((game, i) => {
      return  <div className='game-card' key={game._id}>
                <hr />
                <h3 className='game-card-title'>{game.title}
                <p className='game-card-date'>Date: {game.description}</p></h3><hr />
                <img className='game-card-image' src={game.imgUrl} alt="" />
              </div>
    })
  return (
    <>
    {gameCards}
    </>
  )
}

export default GameSchedule