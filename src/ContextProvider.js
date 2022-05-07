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
const [lineUpData, setLineUpData] = useState([])

useEffect(() => {
    axios.get("https://api.vschool.io/RSA/thing")
    .then(res => setApiGameData(res.data))
    .then(err => console.log("this is good:",err))
}, [])

useEffect(() => {
    console.count("rendered toggle")
    axios.get("https://api.vschool.io/RSAtoggle/thing")
    .then(res => {
        if(res.data[0].title === "true"){
            setDisplayLineUp(true)
        } else {
            setDisplayLineUp(false)
        }
    })
    .catch(err => console.log(err))
}, [])
 useEffect(() => {
    axios.get("https://api.vschool.io/RSALine-Up/thing")
    .then(res => {
        setLineUpData(res.data)
    })
    .then(err => console.log("this is good",err))
}, [])

function sortByAge(lineUpData){
    let sortedPlayers = lineUpData.sort((a, b) => {
      
        if(parseInt(a.imgUrl) < parseInt(b.imgUrl)){
            return -1
        }
        if(parseInt(a.imgUrl) > parseInt(b.imgUrl)){
            return 1
        }
        return 0
    })
    return sortedPlayers
}
    const [displayLineUp, setDisplayLineUp] = useState("")
    const [team, setTeam] = useState(TeamData)
    const [gameData, setGameData] = useState(GameData)

    return (
        <MainContext.Provider key={coachLogin.id}value= {{
            coachLogin, 
            team, 
            gameData, 
            apiGameData,
            lineUpData,
            displayLineUp,
            setDisplayLineUp,
            sortByAge,
            setLineUpData,
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