import React, {useContext, useState} from 'react'
import { MainContext } from '../ContextProvider'
import "./PlayerCard.css"

function PlayerCard(props) {
  // props from coachAdmin.js
  const {firstName, lastName, id, gender} = props
  
  
  // FROM PROVIDER
  const {team} = useContext(MainContext)
  const [editing, setEditing] = useState(false)
  const [newInput, setNewInput] = useState({
    firstName: ""
  })
  console.log("newinput",newInput)

  function onChange(e){
    const {name,value} = e.target
    setNewInput(prevInput => ({...prevInput, [name]: value}))
  }
  
  function toggle(e){
    e.preventDefault()
    setEditing(true)
  }
  console.log(team)
  function handleSave(e) {
    e.preventDefault()
    setNewInput(prevInput => ({...prevInput, id: id }))
    setEditing(false)
  }

    return (
    <div className='player-card'>
        {!editing && <h3>{firstName} {lastName}</h3>}
        {editing && <input placeholder={firstName} 
                           name="firstName" 
                           value={newInput.firstName}
                           onChange={onChange}
                           />}
        {!editing && <button onClick={toggle}>edit</button>}
        {editing && <button onClick={handleSave}>save</button>}
        <button>delete</button>
        {gender === "male" ? <img src="./Male-player-icon.png" alt="" className='gender-icon-male'/>: 
                             <img src="./Female-player-icon.png" alt="" className='gender-icon-female'/>}
    </div>
  )
}

export default PlayerCard