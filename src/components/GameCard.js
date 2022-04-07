import React, {useState} from 'react'
import "./GameCard.css"
// import { MainContext } from '../ContextProvider'

function GameCard(props) {

const {title, description, imgUrl, updateGameCard, deleteGameCard} = props

const [editing, setEditing] = useState(false)
const [newInput, setNewInput] = useState({
    title: "",
    description: "",
    imgUrl: ""
})

function handleChange(e){
    const {name, value} = e.target
    setNewInput(prevInput => ({...prevInput, [name]: value}))
}
function editGameCard(e) {
    e.preventDefault()
    setEditing(true)
}
function saveNewEdit(e){
    e.preventDefault()
    updateGameCard(props._id, newInput)
    setEditing(false)
}
function handleDelete(e) {
    e.preventDefault()
    deleteGameCard(props._id)
}

  return (
        <div className="game-data-container">
            {!editing && <h3>Location: {title}</h3>}
             {editing && <input type="text"
                                className='edit-input-title'
                                name="title"
                                placeholder={title}
                                onChange={handleChange} 
                                value={newInput.title}
                                />}
            {!editing && <h4>Time: {description}</h4>}
             {editing && <input type="text"
                                className='edit-input-description'
                                name="description"
                                placeholder={description}
                                onChange={handleChange} 
                                value={newInput.description}
                        />}
            {!editing && <img className="game-image" src={imgUrl} alt="" />}
             {editing && <div className='edit-img-container'>
                            <input  type="text"
                                    className='edit-input-description'
                                    name="imgUrl"
                                    placeholder={imgUrl}
                                    onChange={handleChange}  
                                    value={newInput.imgUrl}/>
                        </div>}
            {!editing && <button onClick={editGameCard}>Edit</button> }
             {editing && <button onClick={saveNewEdit}className="save-button">Save</button>}
            <button onClick={handleDelete}>Delete</button>
        </div>
  )
}

export default GameCard