import React, {useContext, useState} from 'react'
import { MainContext } from '../ContextProvider'
import PlayerCard from "./PlayerCard"
import axios from "axios"
import "./CoachAdmin.css"
import GameCard from './GameCard';

function CoachAdmin() {

// FROM PROVIDER
  const {apiGameData, setApiGameData,lineUpData} = useContext(MainContext)


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
  const [selectedFile, setSelectedFile] = useState({})
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
// id and newInput from GameCard component
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
// id from GameCard component
  function deleteGameCard(id){

    axios.delete(`https://api.vschool.io/RSA/thing/${id}`)
    .then(res => {
      console.log(res.data)
      setApiGameData(apiGameData.filter(thing => (thing._id !== id)))
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
  function fileSelectHandler(e) {
      setSelectedFile(e.target.files[0])
    }

// onClick of submit button, new game info is added to state and api data via post request and setter function
  function submitGameInput(e){
    e.preventDefault()
    alert(`Selected file - ${selectedFile.name}`)
    let newGame = {
      title: newGameInput.title,
      description: newGameInput.description,
      imgUrl: selectedFile.name
    }
    axios.post("https://api.vschool.io/RSA/thing/", newGame)
    .then(res => setApiGameData(prevData => ([...prevData, res.data])))
    .then(err => console.log(err))

    setShowAddGameInput(false)
  }
  
  function sortByAge(lineUpData){
        let ageSort = lineUpData.sort((a, b) => {
          
            if(Number(a.age) < Number(b.age)){
                return 1
            }
            if(Number(a.age) > Number(b.age)){
                return -1
            }
            return 0
        })
      return ageSort
    }

  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJzy_obFCMMafjbKBXU86hFFOq8_FOqhuHQ&usqp=CAU
  // Mapping through API and returning GameCard component passing props
  const gameScheduleData = apiGameData.map((game, i)=> {
    return <GameCard key={i} {...game} updateGameCard={updateGameCard} deleteGameCard={deleteGameCard}/>
  })
  // Maps through Team Data file and returns player card component
  const teamElements = lineUpData.map((player, i) => {
    return (<PlayerCard {...player} key={i} sortByAge={sortByAge}/>)
  })
  // Sorts through lineUpData and keeps batting line-up in order from 1 -14


  

    
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
           Ballfield Image Url: <input type="file"
                                       className='choose-file-button'
                                       name="imgUrl"
                                       value={newGameInput.imgUrl}
                                       onChange={fileSelectHandler}
                                       />
                                 <button className='submit-button' onClick={submitGameInput} >Submit</button>                  
                             </fieldset> }
        {showTeam && <div>{teamElements}</div>}
        {showGameData && <div>{gameScheduleData}</div>}
    </div>
  )
}

export default CoachAdmin