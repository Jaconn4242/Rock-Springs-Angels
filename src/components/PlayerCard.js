import React, {useState} from 'react'
import "./PlayerCard.css"

function PlayerCard(props) {
// PROPS FROM COACHADMIN.JS
// title=players name
// description=gender
// imgUrl = batting order placement
  const {title, description, imgUrl} = props

// Local state for condition rendering
  const [editing, setEditing] = useState(false)

// Local state for grabbing newInput
  const [newInput, setNewInput] = useState({
    title: ""
  })
  

  function onChange(e){
    const {name,value} = e.target
    setNewInput(prevInput => ({...prevInput, [name]: value}))
  }
  
  function toggle(e){
    e.preventDefault()
    setEditing(true)
  }
 
  function handleSave(e) {
    e.preventDefault()
    setEditing(false)
  }

    return (
    <div className='player-card'>
        {!editing && <h3>{title}</h3>}
        {editing && <input placeholder={title} 
                           name="firstName" 
                           value={newInput.title}
                           onChange={onChange}
                           />}
        {!editing && <button onClick={toggle}>edit</button>}
        {editing && <button onClick={handleSave}>save</button>}
        <button>delete</button>
        {description === "male" ? <img src="./Male-player-icon.png" alt="" className='gender-icon-male'/>: 
                             <img src="./Female-player-icon.png" alt="" className='gender-icon-female'/>}
        <p className='batting-order-placement'>{imgUrl}</p>
    </div>
  )
}

export default PlayerCard