import React, {useState, useEffect} from "react"
import TeamData from "./components/TeamData"
import GameData from "./components/GameData"
import axios from "axios"

const MainContext = React.createContext()

const ContextProvider = (props) => {
    
// Global State Variables

    const [coachLogin, setCoachLogin] = useState({
        id: 1,
        userName: "JeffConn88",
        password: "Bledsoe"
    })

const [apiGameData, setApiGameData] = useState([])
useEffect(() => {
    axios.get("https://api.vschool.io/RSA/thing")
    .then(res => setApiGameData(res.data))
    .then(err => console.log(err))
}, [])



    const [team, setTeam] = useState(TeamData)
    const [gameData, setGameData] = useState(GameData)

    return (
        <MainContext.Provider key={coachLogin.id}value= {{
            coachLogin, 
            team, 
            gameData, 
            apiGameData,
            setApiGameData,
            setCoachLogin,
            setTeam,
            setGameData
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export  {ContextProvider, MainContext}