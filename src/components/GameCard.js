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
      <>
{!editing && <div className="game-card-container">
                <h4 className='game-card-title-label'>Location:</h4>
                <h4 className='game-card-title'>{title}</h4>
                <h4 className='game-card-description-label'>Time and Date:</h4>
                <h4 className='game-card-description'>{description}</h4>
                <img className="game-image" src={imgUrl} alt="" />
                <button className='game-card-edit-button' onClick={editGameCard}>Edit</button>
                <button className='game-card-delete-button' onClick={handleDelete}>Delete</button> 
             </div>}

{editing && <div className='game-card-editing-container'>
                <label>Location:</label>
                <input type="text"
                                className='edit-input-title'
                                name="title"
                                placeholder={title}
                                onChange={handleChange} 
                                value={newInput.title}
                                />
                <label>Time and Date:</label>
                <input type="text"
                                className='edit-input-description'
                                name="description"
                                placeholder={description}
                                onChange={handleChange} 
                                value={newInput.description}
                                />
                <label>Image Url:</label>
                <input  type="text"
                                className='edit-input-imgUrl'
                                name="imgUrl"
                                placeholder={imgUrl}
                                onChange={handleChange}  
                                value={newInput.imgUrl}
                                />
            <button onClick={saveNewEdit}className="save-button">Save</button>
            <button className='game-card-delete-button-editing' onClick={handleDelete}>Delete</button>
        </div>}
    </>
  )
}

export default GameCard