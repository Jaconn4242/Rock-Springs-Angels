import React, {useState} from 'react'

export default function SnackForm() {
    const [snackInfo, setSnackInfo] = useState({
        provider: "",
        comments: ""
    })
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setSnackInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("snackInfo",snackInfo)
    }
  return (
    <form className='SnackForm' onSubmit={handleSubmit}>
        <h3 className='SnackForm-game-number'>Game #1</h3>
        <h1 className='SnackForm-title'>Snacks</h1>
        <input type="text" 
            name="provider" 
            value={snackInfo.provider}
            onChange={handleChange}
            className="SnackForm-input"
            placeholder='provider :'
            />
        <textarea name="comments"
                value={snackInfo.comments}
                onChange={handleChange}
                className="SnackForm-textarea"
                placeholder="Provided items:">    
                </textarea>
        <button>View Details</button>
    </form>
  )
}
