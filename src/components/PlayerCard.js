import React, {useState, useContext} from 'react'
import "./PlayerCard.css"
import { MainContext } from '../ContextProvider'


function PlayerCard(props) {
// PROPS FROM COACHADMIN.JS
// title=players name
// description=gender
// imgUrl = batting order placement
  const {title, description, imgUrl, updatePlayerCard, deletePlayerCard } = props

// Sort function from CONTEXTPROVIDER
  const {sortByAge, lineUpData} = useContext(MainContext)
// Local state for condition rendering
  const [editing, setEditing] = useState(false)

// Local state for grabbing newInput
  const [newInput, setNewInput] = useState({
    // title: "",
    imgUrl: ""
  })
  
  function onChange(e){
    const {name,value} = e.target
    setNewInput(prevInput => ({...prevInput, [name]: value}))
  }
  
  function toggle(e){
    e.preventDefault()
    setEditing(true)
  }
 
  function handleDelete(e) {
    e.preventDefault()
    deletePlayerCard(props._id)
}

function handleSave(e) {
  e.preventDefault()
  updatePlayerCard(props._id, newInput)
  sortByAge(lineUpData)
  setEditing(false)
}
  // function sortByAge(lineUpData){
  //       let sortedPlayers = lineUpData.sort((a, b) => {
          
  //           if(Number(a.imgUrl) < Number(b.imgUrl)){
  //               return -1
  //           }
  //           if(Number(a.imgUrl) > Number(b.imgUrl)){
  //               return 1
  //           }
  //           return 0
  //       })
  //       return sortedPlayers
  //   }


    return (
    <>
        {!editing && <div className='player-card'>
          <h3>{title}</h3>
          <button onClick={toggle}>edit</button>
          <button onClick={handleDelete}>delete</button>
          {description === "male" ? <img src="./Male-player-icon.png" alt="" className='gender-icon-male'/>: 
                             <img src="./Female-player-icon.png" alt="" className='gender-icon-female'/>}
          <p className='batting-order-placement'>{imgUrl}</p>
        </div>}

        {editing && <div className='editing-container'>
          {/* <input placeholder={title} 
                 name="title" 
                 value={newInput.title}
                 onChange={onChange}
                 /> */}
          <input placeholder={title} 
                 name="imgUrl" 
                 value={newInput.imgUrl}
                 onChange={onChange}
                 />
        <button onClick={handleSave}>save</button>
        </div>}
    </>
  )
}
// PlayerCard.propTypes = {
//    width: propTypes.string.isRequired
// }

export default PlayerCard