import React, {useContext, useState, useEffect} from 'react'
import { MainContext } from '../ContextProvider'
import PlayerCard from "./PlayerCard"
import axios from "axios"
import "./CoachAdmin.css"
import GameCard from './GameCard';

function CoachAdmin() {

// FROM PROVIDER
  const {apiGameData, setApiGameData, lineUpData, setLineUpData, displayLineUp, setDisplayLineUp} = useContext(MainContext)

// Local State used for conditional rendering
  const [showTeam, setShowTeam] = useState(false)
  const [showAddGameInput, setShowAddGameInput] = useState(false)
  const [showGameData, setShowGameData] = useState(false)

// Local State used for saving new game input fields
  const [newGameInput, setNewGameInput] = useState({
    title: "",
    description: "",
    imgUrl: ""
  })
// Local State used for holding file/image upload
  // const [selectedFile, setSelectedFile] = useState({})
// Local Conditional Rendering
  function displayTeam(e) {
    e.preventDefault()
    setShowGameData(false)
    setShowTeam(prevState => !prevState)
  }
// Local Conditional Rendering
  function displayGameData(e) {
    e.preventDefault()
    setShowTeam(false)
    setShowGameData(prevState => !prevState)
  }
// id and newInput from GameCard component(complete)
  function updateGameCard(id, newInput) {

    let updates = {
      title: newInput.title,
      description: newInput.description,
      imgUrl: newInput.imgUrl
    }
    
    axios.put(`https://api.vschool.io/RSA/thing/${id}`, updates)
    .then(res => console.log(res.data))
    .then(err => console.log(err))

    setApiGameData(prevData => prevData.map(game => (game._id === id) ? {...game, title: newInput.title, description: newInput.description, imgUrl: newInput.imgUrl}: game))
  }
// id and newInput from PlayerCard component(complete) 
  function updatePlayerCard(id, newInput) {
  //  title here is referring to first and last name of player
  //  imgUrl here is referring to batting line-up number for that player
    let updates = {
      // title: newInput.title,
      imgUrl: newInput.imgUrl
    }
    
    axios.put(`https://api.vschool.io/RSALine-Up/thing/${id}`, updates)
    .then(res => {
      console.log(res.data)
      setLineUpData(prevData => prevData.map(player => (player._id === id) ? {...player, /*title: newInput.title,*/ imgUrl: newInput.imgUrl}: player))
    })
    .catch(err => console.log(err))
  }
  
// id from GameCard component(Complete)
  function deleteGameCard(id){

    axios.delete(`https://api.vschool.io/RSA/thing/${id}`)
    .then(res => {
      console.log(res.data)
      setApiGameData(apiGameData.filter(thing => (thing._id !== id)))
    })
    .then(err => console.log(err))
  }
// id from PlayerCard component(Complete)
  function deletePlayerCard(id){

    axios.delete(`https://api.vschool.io/RSALine-Up/thing/${id}`)
    .then(res => {
      console.log(res.data)
      setLineUpData(lineUpData.filter(player => (player._id !== id)))
    })
    .then(err => console.log(err))
  }

// Local Conditional Rendering
  function addNewGame(){
    setShowTeam(false)
    setShowAddGameInput(prevState => !prevState)
  }
// Grabs the value of the new game inputs and saves values in local State above.
  function handleChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setNewGameInput(prevInput => ({...prevInput, [name]:value}))
  }
  
  // grabs the image file and sets state
  // function fileSelectHandler(e) {
  //     setSelectedFile(e.target.files[0])
  //     console.log(selectedFile.name)
  //   }

// onClick of local submit button, new game info is added to state and api data via post request and setter function
  function submitGameInput(e){
    e.preventDefault()
    // alert(`Selected file - ${selectedFile.name}`)
    let newGame = {
      title: newGameInput.title,
      description: newGameInput.description,
      imgUrl: newGameInput.imgUrl
    }
    axios.post("https://api.vschool.io/RSA/thing/", newGame)
    .then(res => setApiGameData(prevData => ([...prevData, res.data])))
    .then(err => console.log(err))

    setShowAddGameInput(false)
  }

  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJzy_obFCMMafjbKBXU86hFFOq8_FOqhuHQ&usqp=CAU
  // Mapping through API and returning GameCard component passing props
  const gameScheduleData = apiGameData.map((game, i)=> {
    return <GameCard key={i} {...game} updateGameCard={updateGameCard} deleteGameCard={deleteGameCard}/>
  })
  // Maps through Team Data file and returns player card component
  
  const teamElements = lineUpData.map((player, i) => { 
    return (<PlayerCard {...player} key={i} updatePlayerCard={updatePlayerCard} deletePlayerCard={deletePlayerCard} />)
  })
// Two functions below toggle the display
function toggleLineUpView(e){
  e.preventDefault()
  setDisplayLineUp(true)
  let update = {
    title: true
  }
    axios.put("https://api.vschool.io/RSAtoggle/thing/6275b82518d1a05bceae522a", update)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
}

function setTBD(e){
  e.preventDefault()
  setDisplayLineUp(false)
  let update = {
    title: false
  }
    axios.put("https://api.vschool.io/RSAtoggle/thing/6275b82518d1a05bceae522a", update)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
}
console.log(displayLineUp)


    
  return (
    <div>
        <h1 className='title-description'>Logged in as: <span className='Coach-title'>Coach</span></h1>
        <hr />
        <br />
        <div className='button-wrapper'>
        <button onClick={addNewGame}>Add New Game</button>
        <button onClick={displayGameData}>View/Edit Game Schedule</button>
        <button onClick={displayTeam}>View/Edit Team</button>
        </div>
        <br />
        <hr />
        {showAddGameInput && <fieldset className='new-game-input'>
                                <legend><b>New Game</b></legend>
             Name of Ballfield: <input type="text"
                                       name="title"
                                       value={newGameInput.title}
                                       onChange={handleChange}
                                       />
                 Date and Time: <input type="text"
                                       name="description"
                                       value={newGameInput.description}
                                       onChange={handleChange}
                                       />
           Ballfield Image Url: <input type="text"
                                       className='choose-file-button'
                                       name="imgUrl"
                                       value={newGameInput.imgUrl}
                                       onChange={handleChange}
                                       />
                                 <button className='submit-button' onClick={submitGameInput} >Submit</button>                  
                             </fieldset> }
        {showTeam && <div>
          <button style={{background: displayLineUp ? "green" : "white" }} onClick={toggleLineUpView}>Display Line Up</button>
          <button  style={{background: !displayLineUp ? "green" : "white"}} onClick={setTBD}>Set TBD</button>
        </div>}
        {showTeam && <div>{teamElements}</div>}
        {showGameData && <div className='coach-game-cards'>{gameScheduleData}</div>}
    </div>
  )
}

export default CoachAdmin