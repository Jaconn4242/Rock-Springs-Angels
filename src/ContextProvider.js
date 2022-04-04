import React, {useState} from "react"
import TeamData from "./components/TeamData"


const MainContext = React.createContext()

const ContextProvider = (props) => {

    const [coachLogin, setCoachLogin] = useState({
        id: 1,
        userName: "JeffConn88",
        password: "Bledsoe"
    })

    const [team, setTeam] = useState(TeamData)
    console.log(team)

    return (
        <MainContext.Provider key={coachLogin.id}value= {{
            coachLogin, team
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export  {ContextProvider, MainContext}