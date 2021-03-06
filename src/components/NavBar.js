import React, {useState, useContext, useRef} from 'react'
import { MainContext } from '../ContextProvider'
import {Link, useNavigate} from "react-router-dom"
import useClickOutside from "./useClickOutside"
import "./NavBar.css"

export default function NavBar() {
// useRef from useClickOutside.js to handle clickaway from navbar menu dropdown
    const ref = useRef(null)
    useClickOutside(ref, () =>  {
        setMenu(false)
        setCoachLoginMenu(false)
    });
// navigate used below to take coach to admin page upon login success
    const navigate = useNavigate()
// FROM PROVIDER
    const {coachLogin} = useContext(MainContext)

// local state for dropdown menus(conditional rendering)
    const [menu, setMenu] = useState(false)
    
    const [coachLoginMenu, setCoachLoginMenu] = useState(false)
    function coachMenuDropdown() {
        setCoachLoginMenu(prevState => !prevState)
    }
    const [coachCredentials, setCoachCredentials] = useState({
        userName: "",
        password: ""
    })   
 
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
      <div ref={ref}>
    <header  className='header'>
        <img src="./NavLogo.png" 
            alt=''
            className='Header-logo'
            onClick={() => setMenu(!menu)}
            />
        <h1 className='Header-title'>Rock Spring's Angels</h1>
        <div className='desktopLinkContainer'>
        <Link onClick={() => setMenu(false)} className="desktopNavLink" to="/">Home</Link>
        <Link onClick={() => setMenu(false)} className="desktopNavLink" to="/team">Meet the Team!</Link>
        <Link onClick={() => setMenu(false)} className="desktopNavLink" to="/gameschedule">Game Schedule</Link>
        </div>
        <button className="desktop-coach-login-link" onClick={coachMenuDropdown}>Coach Login</button>
    </header>
    {menu && <div  className='dropDownMenu'>
        <Link onClick={() => setMenu(false)} className="menuLink" to="/">Home</Link>
        <Link onClick={() => setMenu(false)} className="menuLink" to="/team">Meet the Team!</Link>
        <Link onClick={() => setMenu(false)} className="menuLink" to="/gameschedule">Game Schedule</Link>
        <button className="coach-login-link" onClick={coachMenuDropdown}>Coach Login</button>
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
            <small className='forgot-username-password'>forgot username/password</small>
            <button className='coach-login-button'>login</button>
        </div>
    </form>}
    </div>
  )
}

// Home, Meet the team, game schedule, batting line-up, snack schedule
