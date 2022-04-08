import React, {useContext} from 'react'
import { MainContext } from '../ContextProvider'
import "./NextGame.css"

function NextGame() {

    const {apiGameData, team} = useContext(MainContext)
    
      
  return (
        <>
        <div className='game-details-container'>
            <hr />
            <h1 className='game-details-title'>{apiGameData[0].title}
            <p className='game-details-date'>Date and Time: {apiGameData[0].description}</p></h1>
            <hr />
            <img  className="game-details-picture" src={apiGameData[0].imgUrl} alt="" />
        </div>
            <ol className='batting-line-up-container'>
                {team.map((player, i) => <li key={i} className='batting-line-up'>{player.firstName} {player.lastName}</li>)}
            </ol>
        </>
  )
}

export default NextGame