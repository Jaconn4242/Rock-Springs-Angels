
import React from "react"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import GameSchedule from "./components/GameSchedule";
import Team from "./components/Team";
import ErrorPg from "./components/ErrorPg";
import CoachAdmin from "./components/CoachAdmin";
import NextGame from "./components/NextGame"
import './App.css';


function App() {
  return (
    <>
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gameschedule" element={<GameSchedule />} />
        <Route path="/team" element={<Team />} />
        <Route path="/coachadmin" element={<CoachAdmin />} />
        <Route path="/nextgame" element={<NextGame />} />
        <Route path="*" element={<ErrorPg />} />
      </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;

 