import React, {useState, useContext} from 'react'
import { MainContext } from '../ContextProvider'
import {Link, useNavigate} from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {

    const navigate = useNavigate()

    const {coachLogin} = useContext(MainContext)
    console.log(coachLogin)

// local state for dropdown menus(conditional rendering)
    const [menu, setMenu] = useState(false)
    function menuDropdown() {
        setMenu(prevState => !prevState)
    }
    const [coachLoginMenu, setCoachLoginMenu] = useState(false)
    function coachMenuDropdown() {
        setCoachLoginMenu(prevState => !prevState)
    }
    const [coachCredentials, setCoachCredentials] = useState({
        userName: "",
        password: ""
    })

// FROM PROVIDER
    
    
 

function handleChange(e){
    const {name, value} = e.target
    setCoachCredentials(prevState => ({...prevState, [name]:value}))
}
function handleSubmit(e){
    e.preventDefault()
    if(coachCredentials.userName === coachLogin.userName &&
       coachCredentials.password === coachLogin.password){
            navigate("/coachadmin")
            setMenu(false)
            setCoachLoginMenu(false)
       } else{
           alert("INCORRECT USERNAME OR PASSWORD, \n please check your spelling and try again(Case Sensitive)")
       }
       setCoachCredentials({
           userName: "",
           password: ""
       })
}

  return (
      <>
    <header className='header'>
        <img src="./NavLogo.png" 
            alt=''
            className='Header-logo'
            onClick={menuDropdown} />
        <h1 className='Header-title'>Rock Spring's Angels</h1>
    </header>
    {menu && <div className='dropDownMenu'>
        <Link className="menuLink" to="/">Home</Link>
        <Link className="menuLink" to="/aboutus">About us</Link>
        <Link className="menuLink" to="/team">Meet the Team!</Link>
        <Link  className="menuLink" to="/gameschedule">Game Schedule</Link>
        <a className="coach-login-link" onClick={coachMenuDropdown}>Coach Login</a>
    </div>}
    {coachLoginMenu && <form onSubmit={handleSubmit} className='coach-login-form'>
        <div className='form-container'>
            Username:<input type="text" 
                            name="userName"
                            value={coachCredentials.userName}
                            onChange={handleChange}
            />
            <br />
            Password: <input type="password" 
                             name="password"
                             value={coachCredentials.password}
                             onChange={handleChange}
            />
            <br />
            <button>login</button>
        </div>
    </form>}
    </>
  )
}

// Home, Meet the team, game schedule, batting line-up, snack schedule
