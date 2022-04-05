import React, {useState} from "react"
import TeamData from "./components/TeamData"
import GameData from "./components/GameData"


const MainContext = React.createContext()

const ContextProvider = (props) => {
console.log(GameData)
// Global State Variables
    const [coachLogin, setCoachLogin] = useState({
        id: 1,
        userName: "JeffConn88",
        password: "Bledsoe"
    })


    const [team, setTeam] = useState(TeamData)
    console.log(team)

    const [gameData, setGameData] = useState(GameData)

    return (
        <MainContext.Provider key={coachLogin.id}value= {{
            coachLogin, 
            team, 
            gameData, 
            setCoachLogin,
            setTeam,
            setGameData
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export  {ContextProvider, MainContext}