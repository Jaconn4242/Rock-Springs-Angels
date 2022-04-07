import React, {useContext} from 'react'
import { MainContext } from '../ContextProvider'
import "./NextGame.css"

function NextGame() {

    const {gameData, team} = useContext(MainContext)
    
      
  return (
        <>
        <div className='game-details-container'>
            <hr />
            <h1 className='game-details-title'>{gameData[0].location}
            <p className='game-details-date'>Date and Time: {gameData[0].time}</p></h1>
            <hr />
            <img  className="game-details-picture" src={gameData[0].locationPicture} alt="" />
        </div>
            <ol className='batting-line-up-container'>
                {team.map((player, i) => <li key={i} className='batting-line-up'>{player.firstName} {player.lastName}</li>)}
            </ol>
        </>
  )
}

export default NextGame