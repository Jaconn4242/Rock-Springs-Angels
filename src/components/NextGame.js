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
            <p className='game-details-address'>4174 Dacusville Hwy. Easley, SC  29640</p></h1>
            <hr />
            <img  className="game-details-picture" src={apiGameData[0].imgUrl} alt="" />
        </div>
            <h5 className='label-for-line-up'>Batting line-up</h5>
            <div className='batting-line-up-container'>
                {
                sortedLineUp.map((player, i) => (
                <li key={i} className='batting-line-up'>{player.imgUrl} - {player.title}</li>
                ))
                }
            </div>
            <div className='link-container'>
                <Link to="/" className="back-to-home-link" >Back to home</Link>
            </div>   
        </>
  )
}

// useNavigate -1 takes the user back

export default NextGame